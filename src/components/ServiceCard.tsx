import { ArrowRight, Building2, Compass, Home, UtensilsCrossed } from 'lucide-react';
import type { ServiceItem } from '../data/studioData';
import { EditorialImage } from './EditorialImage';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

function ServiceIcon({ iconKey }: { iconKey: ServiceItem['iconKey'] }) {
  switch (iconKey) {
    case 'home':
      return <Home className="w-4 h-4 text-[#A58A62]" strokeWidth={1.4} />;
    case 'building':
      return <Building2 className="w-4 h-4 text-[#A58A62]" strokeWidth={1.4} />;
    case 'utensils':
      return <UtensilsCrossed className="w-4 h-4 text-[#A58A62]" strokeWidth={1.4} />;
    case 'compass':
      return <Compass className="w-4 h-4 text-[#A58A62]" strokeWidth={1.4} />;
  }
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(service)}
      className="group text-left w-full bg-[#FAF8F4] border border-[#D6C8B7]/80 rounded-[2px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A58A62]/70 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#EAE4DA]">
        <EditorialImage
          src={service.image}
          alt={service.imageAlt}
          fallbackLabel={service.title}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.035]"
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-full bg-[#EAE4DA] flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <ServiceIcon iconKey={service.iconKey} />
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#856C47] font-medium">
              {service.category}
            </span>
          </div>

          <ArrowRight
            className="w-4 h-4 text-[#645D55] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1C1B19] shrink-0"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <h3 className="font-serif text-[25px] sm:text-[28px] font-normal text-[#1C1B19] leading-[1.2] mb-2.5">
          {service.title}
        </h3>
        <p className="text-[15px] leading-[1.65] text-[#645D55]">
          {service.description}
        </p>
      </div>
    </button>
  );
}
