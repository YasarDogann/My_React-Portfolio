import React from 'react';
import { ChevronDown } from 'lucide-react';

const About = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 1 ? 1 : 0,
      pointerEvents: currentSection === 1 ? 'auto' : 'none'
    }}
  >
    <h2 className="text-5xl text-white font-bold mb-6">Hakkımda</h2>
    <p className="text-xl text-gray-300 max-w-3xl text-center leading-relaxed">
      Ben Yaşar Doğan, Full Stack Developer olarak modern web uygulamaları geliştiriyorum. React, Node.js ve MongoDB ile kullanıcı dostu ve performanslı projeler ortaya koymayı hedefliyorum.
      Takım çalışmasına önem veriyor, öğrenmeye ve yeni teknolojileri denemeye her zaman açığım.
    </p>
    {currentSection === 1 && (
      <button onClick={() => scrollToSection(2)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Yetenekler</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default About;
