import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Home, User, Code, BookOpen, Briefcase, Github, MessageSquare, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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

  const scrollToSection = useCallback((index) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);

    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => setIsScrolling(false), 1000);
  }, [isScrolling]);

  // Mouse wheel event
  useEffect(() => {
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
  }, [currentSection, isScrolling, scrollToSection]);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Arka Plan */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

  {/* Sol Menü - sakla: mobilde gizle, masaüstünde göster */}
  <div className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-6">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <button key={i} onClick={() => scrollToSection(i)} className="group relative">
              <div className={`p-3 rounded-lg transition-all duration-300 ${
                currentSection === i ? 'bg-white/30 backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}>
                <Icon className={`w-6 h-6 ${currentSection === i ? 'text-white' : 'text-gray-300'}`} />
              </div>
              <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
                {section.name}
              </span>
            </button>
          )
        })}
      </div>

  {/* Sağ Nokta Göstergeleri - mobilde gizle */}
  <div className="hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((_, i) => (
          <button key={i} onClick={() => scrollToSection(i)} className="group relative">
            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSection === i ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}></div>
          </button>
        ))}
      </div>

      {/* Section'lar */}
      <div className="relative z-10 h-screen overflow-hidden">
        <HomeSection id="section-0" currentSection={currentSection} scrollToSection={scrollToSection} />
        <About id="section-1" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Skills id="section-2" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Education id="section-3" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Experience id="section-4" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Projects id="section-5" currentSection={currentSection} scrollToSection={scrollToSection} />
        <Contact id="section-6" currentSection={currentSection} scrollToSection={scrollToSection} />
      </div>

      {/* Mobil alt navigasyon: küçük ekranlarda göster, masaüstünde gizle */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex md:hidden gap-3 bg-white/5 backdrop-blur rounded-full px-3 py-2 shadow-lg">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <button key={i} onClick={() => scrollToSection(i)} className={`p-2 rounded-full transition-colors ${currentSection === i ? 'bg-white/30' : 'hover:bg-white/10'}`}>
              <Icon className={`w-5 h-5 ${currentSection === i ? 'text-white' : 'text-gray-300'}`} />
            </button>
          )
        })}
      </div>

      <style jsx>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;
