import React from 'react';
import SkillCard from '../SkillCard';
import { skills } from '../../data/skills';
import { ChevronDown,  Sparkles  } from 'lucide-react';


const Skills = ({ id, currentSection, scrollToSection }) => (
  <section
    id={id}
    className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-6 md:p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 2 ? 1 : 0,
      pointerEvents: currentSection === 2 ? "auto" : "none",
    }}
  >
    <div className="flex items-center justify-center gap-4 mb-10">
      <div className="p-3 bg-green-500/20 backdrop-blur-sm rounded-2xl border border-green-400/30 shadow-lg">
        <Sparkles className="w-8 h-8 text-green-400" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-lg">
        Yeteneklerim
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
      {skills.map((skillGroup, i) => (
        <SkillCard key={i} skillGroup={skillGroup} />
      ))}
    </div>
    {currentSection === 2 && (
      <button
        onClick={() => scrollToSection(3)}
        className="absolute bottom-20 md:bottom-12 group cursor-pointer animate-fade-in"
      >
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">
            Eğitimlerim
          </span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Skills;
