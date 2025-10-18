import React from 'react';
import SkillCard from '../SkillCard';
import { skills } from '../../data/skills';
import { ChevronDown } from 'lucide-react';


const Skills = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 2 ? 1 : 0,
      pointerEvents: currentSection === 2 ? 'auto' : 'none'
    }}
  >
    <h2 className="text-5xl text-white font-bold mb-10">Yeteneklerim</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
      {skills.map((skillGroup, i) => <SkillCard key={i} skillGroup={skillGroup} />)}
    </div>
    {currentSection === 2 && (
      <button onClick={() => scrollToSection(3)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Eğitimlerim</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Skills;
