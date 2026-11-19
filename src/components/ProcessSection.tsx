import { PROCESS_STEPS } from '../data/studioData';
import { Reveal } from './Reveal';

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[#E5DDD1] py-20 sm:py-24 lg:py-32 border-t border-[#D6C8B7]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-2xl mb-14 lg:mb-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
              OUR APPROACH
            </p>
            <h2
              id="process-heading"
              className="font-serif font-normal text-[#1C1B19] text-[clamp(2.25rem,3.6vw,3.85rem)] leading-[1.08]"
            >
              From First Ideas
              <br />
              to Finished Spaces.
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Desktop thin bronze connecting line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-[#A58A62]/55"
          />

          {/* Mobile subtle vertical connecting line */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-6 bottom-6 left-[19px] w-px bg-[#A58A62]/55"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delayMs={index * 70}>
                <div className="relative pl-12 lg:pl-0">
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="lg:hidden absolute left-0 top-1.5 w-[38px] h-[38px] rounded-full bg-[#E5DDD1] border border-[#A58A62] flex items-center justify-center font-serif text-[17px] text-[#1C1B19] tabular-nums"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <span className="hidden lg:inline-flex items-center justify-center bg-[#E5DDD1] pr-4 font-serif text-[44px] leading-none text-[#1C1B19] tabular-nums">
                      {step.number}
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-semibold mb-3">
                    {step.title}
                  </p>
                  <p className="text-[15px] leading-[1.7] text-[#302922]/85 max-w-[32ch]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
