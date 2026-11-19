import { ArrowRight } from 'lucide-react';
import { STUDIO_MEDIA } from '../data/studioData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  onOpenStudioStory: () => void;
}

export function AboutSection({ onOpenStudioStory }: AboutSectionProps) {
  return (
    <section
      id="studio"
      className="bg-[#F5F2EC] py-20 sm:py-24 lg:py-32"
      aria-labelledby="studio-heading"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 lg:gap-14">
          {/* Left Material Table Image */}
          <div className="lg:col-span-6">
            <Reveal className="h-full">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[540px] w-full overflow-hidden bg-[#EAE4DA]">
                <EditorialImage
                  src={STUDIO_MEDIA.src}
                  alt={STUDIO_MEDIA.alt}
                  fallbackLabel="Aurelle Studio Material Library"
                  className="lg:h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:py-6">
            <Reveal delayMs={80}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
                THE STUDIO
              </p>

              <h2
                id="studio-heading"
                className="font-serif font-normal text-[#1C1B19] text-[clamp(2.25rem,3.6vw,3.85rem)] leading-[1.08] mb-7"
              >
                Good Design Is Felt,
                <br />
                Not Just Seen.
              </h2>

              <div className="space-y-5 text-[15.5px] sm:text-[17px] leading-[1.75] text-[#645D55] max-w-[52ch] mb-9">
                <p>
                  We believe the most meaningful spaces are those that quietly
                  improve the way you live. Our approach combines architectural
                  thinking, thoughtful materials, and a deep appreciation for
                  detail — creating interiors that feel beautiful, practical, and
                  personal.
                </p>
                <p className="text-[#302922]">
                  We design with intention, balance, and a lasting sense of
                  warmth.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6 mb-9 border-y border-[#D6C8B7]">
                <div>
                  <p className="font-serif text-[28px] sm:text-[32px] leading-none text-[#1C1B19] tabular-nums mb-1.5">
                    12+
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#645D55]">
                    Years Practice
                  </p>
                </div>
                <div>
                  <p className="font-serif text-[28px] sm:text-[32px] leading-none text-[#1C1B19] tabular-nums mb-1.5">
                    48
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#645D55]">
                    Completed Spaces
                  </p>
                </div>
                <div>
                  <p className="font-serif text-[28px] sm:text-[32px] leading-none text-[#1C1B19] tabular-nums mb-1.5">
                    U.S.
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#645D55]">
                    Nationwide Reach
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenStudioStory}
                  className="group inline-flex items-center gap-3 px-7 py-4 border border-[#1C1B19] text-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#F5F2EC] transition-colors duration-300 text-[11.5px] uppercase tracking-[0.18em] font-medium whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62]"
                >
                  <span>MORE ABOUT OUR STUDIO</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
