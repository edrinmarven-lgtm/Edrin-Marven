import { TESTIMONIALS } from '../data/studioData';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#F5F2EC] py-20 sm:py-24 lg:py-32 border-t border-[#D6C8B7]/70"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
              CLIENT EXPERIENCES
            </p>
            <h2
              id="testimonials-heading"
              className="font-serif font-normal text-[#1C1B19] text-[clamp(2.25rem,3.6vw,3.85rem)] leading-[1.08]"
            >
              Designed Around Real Life.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal key={item.name} delayMs={idx * 70}>
              <article className="h-full bg-[#FAF8F4] border border-[#D6C8B7] p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  {/* Subtle bronze quotation mark */}
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    aria-hidden="true"
                    className="mb-6"
                  >
                    <path
                      d="M1.5 16.5V9.5C1.5 5.2 4.1 2.2 8.5 1L9.6 3.1C6.9 4.2 5.6 6 5.4 8.5H9.5V16.5H1.5ZM14 16.5V9.5C14 5.2 16.6 2.2 21 1L22.1 3.1C19.4 4.2 18.1 6 17.9 8.5H22V16.5H14Z"
                      stroke="#A58A62"
                      strokeWidth="1.15"
                    />
                  </svg>

                  <blockquote className="font-serif text-[22px] sm:text-[23px] leading-[1.48] text-[#1C1B19] mb-8">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="pt-5 border-t border-[#D6C8B7]/70 flex items-center justify-between gap-3">
                  <p className="text-[13px] font-medium tracking-[0.04em] text-[#1C1B19]">
                    {item.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#856C47]">
                    {item.project}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
