import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/studioData';
import { PortfolioCard } from './PortfolioCard';
import { Reveal } from './Reveal';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type FilterOption = 'All' | 'Residential' | 'Commercial' | 'Full Home';

const FILTER_OPTIONS: FilterOption[] = [
  'All',
  'Residential',
  'Commercial',
  'Full Home',
];

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<FilterOption>('All');
  const [expandedArchive, setExpandedArchive] = useState(false);

  const visibleProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filterGroup === filter);

  const leadProject = visibleProjects[0];
  const supportingProjects = visibleProjects.slice(1);

  return (
    <section
      id="projects"
      className="bg-[#EAE4DA] py-20 sm:py-24 lg:py-32 border-t border-[#D6C8B7]/70"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 lg:mb-14">
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-4">
                SELECTED WORK
              </p>
              <h2
                id="projects-heading"
                className="font-serif font-normal text-[#1C1B19] text-[clamp(2.25rem,3.6vw,3.85rem)] leading-[1.08]"
              >
                Spaces With a Story.
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col lg:items-end gap-5">
              <p className="text-[15.5px] sm:text-[17px] leading-[1.7] text-[#645D55] max-w-[50ch] lg:text-right">
                A collection of thoughtfully crafted interiors, each shaped by
                its architecture, its people, and the way life unfolds within.
              </p>

              {/* Interactive discipline filter bar */}
              <div
                className="inline-flex flex-wrap items-center gap-1.5 border border-[#D6C8B7] bg-[#F5F2EC]/70 p-1"
                role="tablist"
                aria-label="Filter projects by discipline"
              >
                {FILTER_OPTIONS.map((option) => {
                  const active = filter === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setFilter(option)}
                      className={`px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62] ${
                        active
                          ? 'bg-[#1C1B19] text-[#F5F2EC]'
                          : 'text-[#645D55] hover:text-[#1C1B19]'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Asymmetric editorial grid */}
        {leadProject && (
          <div className="space-y-12 lg:space-y-14">
            <Reveal>
              <PortfolioCard
                project={leadProject}
                featuredWide={filter === 'All'}
                showMetadataRow={expandedArchive}
                onSelect={onSelectProject}
              />
            </Reveal>

            {supportingProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                {supportingProjects.map((project, idx) => (
                  <Reveal key={project.id} delayMs={(idx + 1) * 80}>
                    <PortfolioCard
                      project={project}
                      showMetadataRow={expandedArchive}
                      onSelect={onSelectProject}
                    />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Expandable Project Index Dossier */}
        {expandedArchive && (
          <div className="mt-14 pt-10 border-t border-[#D6C8B7]">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-serif text-[26px] text-[#1C1B19]">
                Studio Project Dossier
              </h3>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#645D55]">
                2026 COMMISSION INDEX
              </span>
            </div>
            <div className="divide-y divide-[#D6C8B7] border-y border-[#D6C8B7]">
              {PROJECTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className="w-full py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center text-left hover:bg-[#F5F2EC]/50 px-2 transition-colors cursor-pointer"
                >
                  <span className="sm:col-span-4 font-serif text-[21px] text-[#1C1B19]">
                    {item.name}
                  </span>
                  <span className="sm:col-span-3 text-[11px] uppercase tracking-[0.18em] text-[#856C47]">
                    {item.category}
                  </span>
                  <span className="sm:col-span-3 text-[13.5px] text-[#645D55]">
                    {item.location}
                  </span>
                  <span className="sm:col-span-2 text-[13.5px] text-[#302922] sm:text-right tabular-nums">
                    {item.area}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <Reveal>
          <div className="mt-14 pt-10 border-t border-[#D6C8B7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[13.5px] text-[#645D55]">
              Select any project photograph to examine architectural details and material specifications.
            </p>
            <button
              type="button"
              onClick={() => setExpandedArchive((prev) => !prev)}
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-[#1C1B19] text-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#F5F2EC] transition-colors duration-300 text-[11.5px] uppercase tracking-[0.18em] font-medium whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62]"
            >
              <span>{expandedArchive ? 'HIDE PROJECT INDEX' : 'VIEW ALL PROJECTS'}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
