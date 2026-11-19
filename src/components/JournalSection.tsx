import { ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES, type JournalArticle } from '../data/studioData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export function JournalSection({ onSelectArticle }: JournalSectionProps) {
  return (
    <section
      id="journal"
      className="bg-[#EAE4DA] py-20 sm:py-24 lg:py-32 border-t border-[#D6C8B7]"
      aria-labelledby="journal-heading"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
                FROM THE JOURNAL
              </p>
              <h2
                id="journal-heading"
                className="font-serif font-normal text-[#1C1B19] text-[clamp(2.25rem,3.6vw,3.85rem)] leading-[1.08]"
              >
                Notes on Thoughtful Living.
              </h2>
            </div>

            <p className="text-[14.5px] text-[#645D55] max-w-[36ch]">
              Essays on natural materials, calm spatial proportions, and the
              craftsmanship behind enduring rooms.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <Reveal key={article.id} delayMs={idx * 70}>
              <button
                type="button"
                onClick={() => onSelectArticle(article)}
                className="group text-left w-full block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58A62]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#D6C8B7]/40 mb-5">
                  <EditorialImage
                    src={article.image}
                    alt={article.imageAlt}
                    fallbackLabel={article.title}
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#856C47] font-medium mb-2.5">
                  <span>{article.category}</span>
                  <span aria-hidden="true" className="text-[#A58A62]">·</span>
                  <span className="text-[#645D55]">{article.date}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-[24px] sm:text-[26px] font-normal text-[#1C1B19] leading-[1.2] group-hover:text-[#302922]">
                    {article.title}
                  </h3>
                  <ArrowRight
                    className="w-4 h-4 mt-2 text-[#645D55] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1C1B19] shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-[#645D55]">
                  {article.excerpt}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
