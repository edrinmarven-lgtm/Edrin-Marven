import { ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../data/studioData';
import { EditorialImage } from './EditorialImage';

interface PortfolioCardProps {
  project: ProjectItem;
  featuredWide?: boolean;
  showMetadataRow?: boolean;
  onSelect: (project: ProjectItem) => void;
}

export function PortfolioCard({
  project,
  featuredWide = false,
  showMetadataRow = false,
  onSelect,
}: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group text-left w-full block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A58A62]"
    >
      <div
        className={`w-full overflow-hidden bg-[#D6C8B7]/40 ${
          featuredWide
            ? 'aspect-[16/10] lg:aspect-[16/8.2]'
            : 'aspect-[4/3]'
        }`}
      >
        <EditorialImage
          src={project.image}
          alt={project.imageAlt}
          fallbackLabel={project.name}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="pt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#856C47] font-medium mb-1.5">
            {project.category}
          </p>
          <h3 className="font-serif text-[25px] sm:text-[29px] font-normal text-[#1C1B19] leading-[1.15]">
            {project.name}
          </h3>
          {showMetadataRow && (
            <p className="mt-2 text-[13.5px] text-[#645D55]">
              <span>{project.location}</span>
              <span className="mx-2 text-[#A58A62]" aria-hidden="true">·</span>
              <span className="tabular-nums">{project.area}</span>
            </p>
          )}
        </div>

        <span
          className="mt-2 inline-flex items-center justify-center w-9 h-9 border border-[#D6C8B7] group-hover:border-[#A58A62] group-hover:bg-[#1C1B19] group-hover:text-[#F5F2EC] text-[#302922] transition-colors duration-300 shrink-0"
          aria-hidden="true"
        >
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.4}
          />
        </span>
      </div>
    </button>
  );
}
