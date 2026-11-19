import { useCallback, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { DesignPrinciples } from './components/DesignPrinciples';
import { DetailModals, type ActiveModal } from './components/DetailModals';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { JournalSection } from './components/JournalSection';
import { MaterialsSection } from './components/MaterialsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [preselectedProjectType, setPreselectedProjectType] = useState<string | undefined>(undefined);

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleInquireFromModal = useCallback(
    (projectType?: string) => {
      if (projectType) {
        setPreselectedProjectType(projectType);
      }
      setTimeout(() => {
        scrollToSection('contact');
      }, 60);
    },
    [scrollToSection]
  );

  return (
    <div className="min-h-screen bg-[#F5F2EC] text-[#1C1B19] flex flex-col">
      <Header onNavigate={scrollToSection} />

      <main className="flex-1">
        <HeroSection
          onExploreWork={() => scrollToSection('projects')}
          onDiscoverStudio={() => scrollToSection('studio')}
        />

        <DesignPrinciples />

        <ServicesSection
          onSelectService={(service) =>
            setActiveModal({ type: 'service', data: service })
          }
        />

        <PortfolioSection
          onSelectProject={(project) =>
            setActiveModal({ type: 'project', data: project })
          }
        />

        <ProcessSection />

        <AboutSection
          onOpenStudioStory={() => setActiveModal({ type: 'studio' })}
        />

        <MaterialsSection />

        <TestimonialsSection />

        <CTASection onStartProject={() => scrollToSection('contact')} />

        <ContactSection preselectedProjectType={preselectedProjectType} />

        <JournalSection
          onSelectArticle={(article) =>
            setActiveModal({ type: 'article', data: article })
          }
        />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onOpenLegal={(kind) => setActiveModal({ type: 'legal', kind })}
      />

      <DetailModals
        modal={activeModal}
        onClose={() => setActiveModal(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}
