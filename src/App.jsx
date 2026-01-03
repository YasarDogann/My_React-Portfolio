import React, { useState, useEffect, useCallback } from 'react';
import { Home, User, Code, BookOpen, Briefcase, Github, MessageSquare } from 'lucide-react';

import HomeSection from './components/Section/Home';
import About from './components/Section/About';
import Skills from './components/Section/Skills';
import Education from './components/Section/Education';
import Experience from './components/Section/Experience';
import Projects from './components/Section/Projects';
import Contact from './components/Section/Contact';

const sections = [
  { name: 'Ana Sayfa', icon: Home },
  { name: 'Hakkımda', icon: User },
  { name: 'Yetenekler', icon: Code },
  { name: 'Eğitimlerim', icon: BookOpen },
  { name: 'Deneyim', icon: Briefcase },
  { name: 'Projelerim', icon: Github },
  { name: 'İletişim', icon: MessageSquare }
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = useCallback((index) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);

    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => setIsScrolling(false), 1000);
  }, [isScrolling]);

  // Mouse wheel event - Only on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling, scrollToSection, isMobile]);

  // Touch swipe detection for mobile
  useEffect(() => {
    if (!isMobile) return;

    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeDistance = touchStartY - touchEndY;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) < minSwipeDistance) return;

      if (swipeDistance > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (swipeDistance < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, scrollToSection, isMobile]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background - Responsive */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Sol Menü - Desktop Only (lg+) */}
      <div className="hidden lg:flex fixed left-4 xl:left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-4 xl:gap-6">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <button 
              key={i} 
              onClick={() => scrollToSection(i)} 
              className="group relative"
              aria-label={section.name}
            >
              <div className={`p-2 xl:p-3 rounded-lg transition-all duration-300 ${
                currentSection === i 
                  ? 'bg-white/30 backdrop-blur-md shadow-lg scale-110' 
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}>
                <Icon className={`w-5 h-5 xl:w-6 xl:h-6 ${
                  currentSection === i ? 'text-white' : 'text-gray-300'
                }`} />
              </div>
              <span className="absolute left-14 xl:left-16 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs xl:text-sm font-medium pointer-events-none">
                {section.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sağ Nokta Göstergeleri - Desktop/Tablet (md+) */}
      <div className="hidden md:flex fixed right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-3 md:gap-4">
        {sections.map((_, i) => (
          <button 
            key={i} 
            onClick={() => scrollToSection(i)} 
            className="group relative"
            aria-label={`Section ${i + 1}`}
          >
            <div className={`w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-500 ${
              currentSection === i 
                ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
            }`}></div>
          </button>
        ))}
      </div>

      {/* Sections Container */}
      <div className="relative z-10">
        <HomeSection id="section-0" currentSection={currentSection} scrollToSection={scrollToSection} />
        <About id="section-1" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Skills id="section-2" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Education id="section-3" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Experience id="section-4" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Projects id="section-5" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Contact id="section-6" currentSection={currentSection} scrollToSection={scrollToSection} />
      </div>

      {/* Mobil Alt Navigasyon - Mobile/Small Tablet Only - BÜYÜTÜLDÜ */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex md:hidden gap-2 sm:gap-3 bg-white/5 backdrop-blur-md rounded-full px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg border border-white/10">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <button 
              key={i} 
              onClick={() => scrollToSection(i)} 
              className={`p-2 sm:p-2.5 rounded-full transition-all duration-300 ${
                currentSection === i 
                  ? 'bg-white/30 scale-110 shadow-lg' 
                  : 'hover:bg-white/10 active:scale-95'
              }`}
              aria-label={section.name}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                currentSection === i ? 'text-white' : 'text-gray-300'
              }`} />
            </button>
          );
        })}
      </div>

      <style jsx>{`
        html { 
          scroll-behavior: smooth; 
          overflow-x: hidden;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;