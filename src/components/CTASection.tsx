import { ArrowRight } from 'lucide-react';
import { CTA_MEDIA } from '../data/studioData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface CTASectionProps {
  onStartProject: () => void;
}

export function CTASection({ onStartProject }: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1C1B19]"
    >
      <div className="absolute inset-0">
        <EditorialImage
          src={CTA_MEDIA.src}
          alt={CTA_MEDIA.alt}
          fallbackLabel="Aurelle Studio Commissions"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#1C1B19]/62"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[920px] px-6 sm:px-8 py-20 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#D6C8B7] font-medium mb-5">
            PRIVATE COMMISSIONS
          </p>
          <h2
            id="cta-heading"
            className="font-serif font-normal text-[#F5F2EC] text-[clamp(2.4rem,4.3vw,4.35rem)] leading-[1.08] mb-6"
          >
            Let’s Create a Space
            <br />
            You’ll Love Coming Home To.
          </h2>
          <p className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#EAE4DA] max-w-[50ch] mx-auto mb-10">
            Whether you’re reimagining one room or planning a complete
            transformation, we’d love to hear what you’re dreaming of.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            <button
              type="button"
              onClick={onStartProject}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F5F2EC] text-[#1C1B19] hover:bg-[#EAE4DA] transition-colors duration-300 text-[11.5px] uppercase tracking-[0.18em] font-medium whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onStartProject();
              }}
              className="text-[11.5px] uppercase tracking-[0.2em] text-[#F5F2EC] hover:text-[#D6C8B7] border-b border-[#A58A62] pb-1 transition-colors whitespace-nowrap"
            >
              OR GET IN TOUCH
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
