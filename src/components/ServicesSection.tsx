import { SERVICES, type ServiceItem } from '../data/studioData';
import { Reveal } from './Reveal';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="bg-[#F5F2EC] py-20 sm:py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-16">
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
                WHAT WE DO
              </p>
              <h2
                id="services-heading"
                className="font-serif font-normal text-[#1C1B19] text-[clamp(2.25rem,3.6vw,3.85rem)] leading-[1.08]"
              >
                Spaces That Feel
                <br />
                Distinctly Yours.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:pb-1">
              <p className="text-[15.5px] sm:text-[17px] leading-[1.7] text-[#645D55] max-w-[52ch]">
                From a single room to an entire property, we bring thoughtful
                design, refined materials, and practical planning together to
                create spaces that feel naturally yours.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 70}>
              <ServiceCard service={service} onSelect={onSelectService} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
