import React from 'react';
import { Mail, Phone, ChevronDown, Instagram, Linkedin, Github } from 'lucide-react';

const Contact = ({ id, currentSection, scrollToSection }) => (
  <section
    id={id}
    className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 6 ? 1 : 0,
      pointerEvents: currentSection === 6 ? "auto" : "none",
    }}
  >
    <div className="flex items-center justify-center gap-3 mb-10">
      <div className="p-2 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-xl border border-blue-400/30">
        <Mail className="w-7 h-7 text-blue-300" />
      </div>

      <h2 className="text-5xl text-white font-bold drop-shadow-lg">İletişim</h2>
    </div>
    <div className="flex flex-col gap-6 text-gray-300 text-xl text-center">
      <div className="flex items-center gap-3 justify-center">
        <Mail className="w-6 h-6 text-blue-400" /> yasardogan99@gmail.com
      </div>
      <div className="flex items-center gap-3 justify-center">
        <Phone className="w-6 h-6 text-blue-400" /> +90 535 037 6163
      </div>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://instagram.com/dognysr.exe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Instagram className="w-6 h-6 text-blue-400" />
        </a>

        <a
          href="https://www.linkedin.com/in/yasardogann/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin className="w-6 h-6 text-blue-400" />
        </a>

        <a
          href="https://github.com/YasarDogann"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Github className="w-6 h-6 text-blue-400" />
        </a>
      </div>
    </div>
    <p className="text-gray-400 mt-6 text-sm">
      © 2025 Yaşar Doğan. Tüm hakları saklıdır.
    </p>

    {currentSection === 6 && (
      <button
        onClick={() => scrollToSection(0)}
        className="absolute bottom-12 group cursor-pointer animate-fade-in"
      >
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">
            Anasayfa
          </span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Contact;
