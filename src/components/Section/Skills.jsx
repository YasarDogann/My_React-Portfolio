import React from 'react';
import SkillCard from '../SkillCard';
import { skills } from '../../data/skills';
import { ChevronDown, Sparkles } from 'lucide-react';

const Skills = ({ id, currentSection, scrollToSection }) => (
  <section
    id={id}
    className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 transition-opacity duration-1000 overflow-y-auto"
    style={{
      opacity: currentSection === 2 ? 1 : 0,
      pointerEvents: currentSection === 2 ? "auto" : "none",
    }}
  >
    {/* Content wrapper with scroll support */}
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Header with Icon - Responsive */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
        {/* Icon container - Responsive sizing */}
        <div className="p-2 sm:p-3 bg-green-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-green-400/30 shadow-lg">
          <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />
        </div>
        {/* Title - Responsive text sizing */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
          Yeteneklerim
        </h2>
      </div>

      {/* Skills Grid - Responsive columns */}
      {/* Mobil: 1 kolon, Tablet: 2 kolon, Desktop: 4 kolon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full mb-20 sm:mb-24">
        {skills.map((skillGroup, i) => (
          <SkillCard key={i} skillGroup={skillGroup} />
        ))}
      </div>
    </div>

    {/* Scroll Down Button - Responsive positioning */}
    {currentSection === 2 && (
      <button
        onClick={() => scrollToSection(3)}
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 group cursor-pointer animate-fade-in"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm sm:text-base lg:text-lg text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            Eğitimlerim
          </span>
          <ChevronDown className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Skills;