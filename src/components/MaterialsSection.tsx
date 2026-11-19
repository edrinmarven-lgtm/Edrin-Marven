import { useState } from 'react';
import { MATERIAL_PILLARS, MATERIALS_MEDIA } from '../data/studioData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

export function MaterialsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeMaterial = MATERIAL_PILLARS[selectedIdx];

  return (
    <section
      aria-labelledby="materials-heading"
      className="bg-[#EAE4DA] border-t border-[#D6C8B7]/80"
    >
      {/* Full-bleed Tactile Banner */}
      <div className="relative h-[400px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden bg-[#302922]">
        <EditorialImage
          src={MATERIALS_MEDIA.src}
          alt={MATERIALS_MEDIA.alt}
          fallbackLabel="Natural Stone, Oak, Linen & Bronze"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#1C1B19]/80 via-[#1C1B19]/45 to-[#1C1B19]/20"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12">
            <Reveal>
              <div className="max-w-xl">
                <div className="w-10 h-[1.5px] bg-[#A58A62] mb-5" aria-hidden="true" />
                <h2
                  id="materials-heading"
                  className="font-serif font-normal text-[#F5F2EC] text-[clamp(2.35rem,4vw,4.1rem)] leading-[1.06] mb-4"
                >
                  Materiality. Texture. Light.
                </h2>
                <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#EAE4DA]">
                  The smallest details often make the biggest difference.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Controlled Tactile Material Index */}
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MATERIAL_PILLARS.map((material, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={material.name}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-4 border transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58A62] ${
                    isSelected
                      ? 'bg-[#F5F2EC] border-[#A58A62]'
                      : 'bg-[#EAE4DA] border-[#D6C8B7] hover:bg-[#F5F2EC]/60'
                  }`}
                >
                  <span className="block text-[10.5px] uppercase tracking-[0.2em] text-[#856C47] mb-2 tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="block font-serif text-[19px] text-[#1C1B19] leading-snug">
                    {material.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-[#D6C8B7]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#856C47] font-medium mb-2">
              {activeMaterial.origin}
            </p>
            <h3 className="font-serif text-[26px] text-[#1C1B19] leading-tight mb-2">
              {activeMaterial.name}
            </h3>
            <p className="text-[15px] leading-[1.7] text-[#645D55]">
              {activeMaterial.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
