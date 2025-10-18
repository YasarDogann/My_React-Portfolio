import React from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';

const Contact = ({ id, currentSection, scrollToSection }) => (
  <section id={id} className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 6 ? 1 : 0,
      pointerEvents: currentSection === 6 ? 'auto' : 'none'
    }}
  >
    <h2 className="text-5xl text-white font-bold mb-10">İletişim</h2>
    <div className="flex flex-col gap-6 text-gray-300 text-xl text-center">
      <div className="flex items-center gap-3 justify-center">
        <Mail className="w-6 h-6 text-blue-400" /> yasardogan@example.com
      </div>
      <div className="flex items-center gap-3 justify-center">
        <Phone className="w-6 h-6 text-blue-400" /> +90 555 555 5555
      </div>
    </div>
    <p className="text-gray-400 mt-6 text-sm">© 2025 Yaşar Doğan. Tüm hakları saklıdır.</p>

    {currentSection === 6 && (
      <button onClick={() => scrollToSection(0)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Anasayfa</span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Contact;
