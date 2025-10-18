import React from 'react';
import EducationCard from '../EducationCard';
import { educations } from '../../data/educations';
import { ChevronDown } from 'lucide-react';

const Education = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 3 ? 1 : 0,
      pointerEvents: currentSection === 3 ? 'auto' : 'none'
    }}
  >
    <h2 className="text-5xl text-white font-bold mb-10">Eğitimlerim</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {educations.map((edu, i) => <EducationCard key={i} education={edu} />)}
    </div>
    {currentSection === 3 && (
      <button onClick={() => scrollToSection(4)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Deneyim</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Education;
