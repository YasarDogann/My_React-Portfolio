import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
    style={{
      opacity: currentSection === 0 ? 1 : 0,
      pointerEvents: currentSection === 0 ? 'auto' : 'none'
    }}>
    <div className="text-center">
      <h1 className="text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">YAŞAR DOĞAN</h1>
      <p className="text-3xl text-gray-200 tracking-wide">Full Stack Developer</p>
    </div>

    {currentSection === 0 && (
      <button onClick={() => scrollToSection(1)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Hakkımda</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Home;
