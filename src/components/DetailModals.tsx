import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import {
  STUDIO_MEDIA,
  type JournalArticle,
  type ProjectItem,
  type ServiceItem,
} from '../data/studioData';
import { EditorialImage } from './EditorialImage';

export type ActiveModal =
  | { type: 'service'; data: ServiceItem }
  | { type: 'project'; data: ProjectItem }
  | { type: 'article'; data: JournalArticle }
  | { type: 'studio' }
  | { type: 'legal'; kind: 'privacy' | 'terms' }
  | null;

interface DetailModalsProps {
  modal: ActiveModal;
  onClose: () => void;
  onInquire: (projectType?: string) => void;
}

export function DetailModals({ modal, onClose, onInquire }: DetailModalsProps) {
  useEffect(() => {
    if (!modal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [modal, onClose]);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#1C1B19]/70 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto bg-[#F5F2EC] border border-[#D6C8B7] text-[#1C1B19]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 bg-[#F5F2EC]/95 border border-[#D6C8B7] flex items-center justify-center text-[#1C1B19] hover:border-[#1C1B19] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#A58A62]"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {modal.type === 'service' && (
          <div>
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#EAE4DA]">
              <EditorialImage
                src={modal.data.image}
                alt={modal.data.imageAlt}
                fallbackLabel={modal.data.title}
              />
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-3">
                {modal.data.category} · TYPICAL TIMELINE: {modal.data.typicalTimeline}
              </p>
              <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] text-[#1C1B19] mb-5">
                {modal.data.title}
              </h2>
              <p className="text-[16px] leading-[1.75] text-[#645D55] mb-8">
                {modal.data.overview}
              </p>

              <div className="border-t border-[#D6C8B7] pt-6 mb-8">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#302922] font-semibold mb-4">
                  Scope & Deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14.5px] text-[#302922]">
                  {modal.data.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#A58A62] mt-2 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(modal.data.projectTypeOption);
                }}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#1C1B19] text-[#F5F2EC] hover:bg-[#302922] transition-colors text-[11.5px] uppercase tracking-[0.18em] font-medium cursor-pointer"
              >
                <span>INQUIRE ABOUT {modal.data.title.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}

        {modal.type === 'project' && (
          <div>
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#EAE4DA]">
              <EditorialImage
                src={modal.data.image}
                alt={modal.data.imageAlt}
                fallbackLabel={modal.data.name}
              />
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-3">
                {modal.data.category}
              </p>
              <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] text-[#1C1B19] mb-5">
                {modal.data.name}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 mb-6 border-y border-[#D6C8B7] text-[13.5px]">
                <div>
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] text-[#645D55] mb-1">
                    Location
                  </span>
                  <span className="text-[#1C1B19]">{modal.data.location}</span>
                </div>
                <div>
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] text-[#645D55] mb-1">
                    Scale
                  </span>
                  <span className="text-[#1C1B19] tabular-nums">{modal.data.area}</span>
                </div>
                <div>
                  <span className="block text-[10.5px] uppercase tracking-[0.18em] text-[#645D55] mb-1">
                    Completion
                  </span>
                  <span className="text-[#1C1B19] tabular-nums">{modal.data.year}</span>
                </div>
              </div>

              <p className="text-[16px] leading-[1.75] text-[#645D55] mb-7">
                {modal.data.summary}
              </p>

              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#302922] font-semibold mb-2.5">
                  Material Palette
                </p>
                <p className="text-[14.5px] text-[#645D55]">
                  {modal.data.materials.join('  ·  ')}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(
                    modal.data.filterGroup === 'Commercial'
                      ? 'Commercial Design'
                      : modal.data.filterGroup === 'Full Home'
                      ? 'Full Home Design'
                      : 'Residential Interior'
                  );
                }}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#1C1B19] text-[#F5F2EC] hover:bg-[#302922] transition-colors text-[11.5px] uppercase tracking-[0.18em] font-medium cursor-pointer"
              >
                <span>DISCUSS A SIMILAR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}

        {modal.type === 'article' && (
          <div>
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#EAE4DA]">
              <EditorialImage
                src={modal.data.image}
                alt={modal.data.imageAlt}
                fallbackLabel={modal.data.title}
              />
            </div>
            <article className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#856C47] font-medium mb-4">
                <span>{modal.data.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#645D55]">{modal.data.date}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#645D55]">{modal.data.readTime}</span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.1] text-[#1C1B19] mb-6">
                {modal.data.title}
              </h2>
              <div className="space-y-5 text-[16px] leading-[1.8] text-[#302922]/90">
                {modal.data.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        )}

        {modal.type === 'studio' && (
          <div>
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#EAE4DA]">
              <EditorialImage
                src={STUDIO_MEDIA.src}
                alt={STUDIO_MEDIA.alt}
                fallbackLabel="Aurelle Studio Practice"
              />
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-3">
                STUDIO MONOGRAPH
              </p>
              <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] text-[#1C1B19] mb-5">
                Architecture, Quietly Lived In.
              </h2>
              <div className="space-y-4 text-[16px] leading-[1.75] text-[#645D55] mb-8">
                <p>
                  Founded as an intimate interior architecture practice, Aurelle
                  Studio approaches every residence and commercial environment
                  from the inside out — beginning with natural light, spatial
                  rhythm, and the honest qualities of stone, wood, and linen.
                </p>
                <p>
                  Our studio collaborates closely with homeowners, architects,
                  and master craftspeople across the United States, overseeing
                  concepts from early space planning and bespoke millwork drawings
                  through final furniture curation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#1C1B19] text-[#F5F2EC] hover:bg-[#302922] transition-colors text-[11.5px] uppercase tracking-[0.18em] font-medium cursor-pointer"
              >
                <span>SCHEDULE A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        )}

        {modal.type === 'legal' && (
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#856C47] font-medium mb-3">
              AURELLE STUDIO · LEGAL
            </p>
            <h2 className="font-serif text-[34px] leading-[1.1] text-[#1C1B19] mb-6">
              {modal.kind === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
            {modal.kind === 'privacy' ? (
              <div className="space-y-4 text-[15px] leading-[1.75] text-[#645D55]">
                <p>
                  Aurelle Studio respects your privacy. Any project inquiry
                  information shared through our consultation form is used solely
                  to evaluate project fit and communicate with you regarding your
                  interior architecture request.
                </p>
                <p>
                  This showcase website does not run third-party advertising
                  trackers or sell visitor information. For questions, contact{' '}
                  <span className="text-[#1C1B19]">hello@aurellestudio.com</span>.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-[15px] leading-[1.75] text-[#645D55]">
                <p>
                  All architectural concepts, interior imagery, and written
                  journal essays presented on this website are the creative
                  property of Aurelle Studio.
                </p>
                <p>
                  Project timelines, budgets, and deliverables outlined on this
                  site are indicative and formalized per commission within a
                  signed design agreement.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
