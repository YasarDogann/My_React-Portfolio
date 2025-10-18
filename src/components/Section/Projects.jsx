import React from 'react';
import { projects } from '../../data/projects';
import { Github, ChevronDown } from 'lucide-react';

const Projects = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center p-10 gap-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 5 ? 1 : 0,
      pointerEvents: currentSection === 5 ? 'auto' : 'none'
    }}
  >
    <h2 className="text-5xl text-white font-bold mb-10">Projelerim</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((proj, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Github className="w-6 h-6 text-blue-400" /> {proj.title}
          </h3>
          <p className="text-gray-300 mt-2">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {proj.technologies.map((tech, j) => (
              <span key={j} className="px-3 py-1 text-sm bg-white/10 rounded-lg border border-white/20 text-white">{tech}</span>
            ))}
          </div>
          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:text-blue-500 transition-colors">
            GitHub Link
          </a>
        </div>
      ))}
    </div>

    {currentSection === 5 && (
      <button onClick={() => scrollToSection(6)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Deneyim</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Projects;
