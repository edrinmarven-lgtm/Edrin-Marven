import { ArrowRight } from 'lucide-react';
import { HERO_MEDIA } from '../data/studioData';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onExploreWork: () => void;
  onDiscoverStudio: () => void;
}

export function HeroSection({ onExploreWork, onDiscoverStudio }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative bg-[#F5F2EC] overflow-hidden"
      aria-label="Hero"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8 lg:gap-10 py-10 sm:py-12 lg:py-10 lg:min-h-[680px]">
          {/* Left Editorial Column (~41.6%) */}
          <div className="lg:col-span-5 flex flex-col justify-center py-4 lg:py-12 lg:pr-6">
            <div>
              <div className="w-12 h-[1.5px] bg-[#A58A62] mb-5" aria-hidden="true" />
              <p className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#645D55] font-medium mb-6">
                INTERIOR DESIGN · SPACES · LIFESTYLE
              </p>

              <h1 className="font-serif font-normal text-[#1C1B19] text-[clamp(2.75rem,4.6vw,5.1rem)] leading-[1.03] tracking-[-0.015em] mb-7">
                Where Beauty
                <br />
                Meets Everyday
                <br />
                Living.
              </h1>

              <p className="text-[15.5px] sm:text-[17px] leading-[1.7] text-[#645D55] max-w-[44ch] mb-10">
                We create thoughtfully designed interiors that bring comfort,
                character, and quiet sophistication to the spaces you call home.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
                <button
                  type="button"
                  onClick={onExploreWork}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#1C1B19] text-[#F5F2EC] hover:bg-[#302922] transition-colors duration-300 text-[11.5px] uppercase tracking-[0.18em] font-medium whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62]"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={onDiscoverStudio}
                  className="inline-flex items-center justify-center sm:justify-start py-2 text-[11.5px] uppercase tracking-[0.18em] font-medium text-[#302922] hover:text-[#856C47] border-b border-[#D6C8B7] hover:border-[#A58A62] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58A62]"
                >
                  DISCOVER THE STUDIO
                </button>
              </div>
            </div>
          </div>

          {/* Right Cinematic Interior Column (~58.3%) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] lg:min-h-[600px] lg:h-full lg:-mr-6 xl:-mr-10 overflow-hidden bg-[#EAE4DA]">
            <EditorialImage
              src={HERO_MEDIA.src}
              alt={HERO_MEDIA.alt}
              priority
              fallbackLabel="Aurelle Studio Residence"
              className="lg:h-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C1B19]/65 via-[#1C1B19]/25 to-transparent"
            />
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#F5F2EC] font-medium">
                {HERO_MEDIA.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
