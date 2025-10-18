import React from 'react';
import { experiences } from '../../data/experiences';
import { Briefcase, ChevronDown } from 'lucide-react';

const Experience = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 4 ? 1 : 0,
      pointerEvents: currentSection === 4 ? 'auto' : 'none'
    }}
  >
    <h2 className="text-5xl text-white font-bold mb-10">Deneyim</h2>
    <div className="flex flex-col gap-8">
      {experiences.map((exp, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500">
          <h3 className="text-2xl text-white font-bold flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-400" /> {exp.title}
          </h3>
          <p className="text-blue-200 text-lg">{exp.company} • {exp.period}</p>
          <p className="text-gray-300 mt-2">{exp.description}</p>
        </div>
      ))}
    </div>

    {currentSection === 4 && (
      <button onClick={() => scrollToSection(5)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Projelerim</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Experience;
