import React from 'react';
import { Mail, Phone, ChevronDown, Instagram, Linkedin, Github, Send } from 'lucide-react';

const Contact = ({ id, currentSection, scrollToSection }) => (
  <section
    id={id}
    className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 transition-opacity duration-1000"
    style={{
      opacity: currentSection === 6 ? 1 : 0,
      pointerEvents: currentSection === 6 ? "auto" : "none",
    }}
  >
    <div className="w-full max-w-3xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl border border-blue-400/30">
            <Send className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold drop-shadow-lg">
            İletişim
          </h2>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          Aşağıdaki kanallardan benimle iletişime geçebilirsiniz
        </p>
      </div>

      {/* Contact Cards - Vertical Stack */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        
        {/* Email Card */}
        <a 
          href="mailto:yasardogan99@gmail.com"
          className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-blue-500/5 via-white/5 to-purple-500/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10 hover:border-blue-400/40 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-white/10 hover:to-purple-500/10 transition-all duration-300 group"
        >
          <div className="p-3 sm:p-3.5 lg:p-4 bg-blue-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-400 text-xs sm:text-sm mb-1">Email Adresi</p>
            <p className="text-white text-base sm:text-lg lg:text-xl font-medium break-all group-hover:text-blue-300 transition-colors">
              yasardogan99@gmail.com
            </p>
          </div>
          <div className="hidden sm:block text-blue-400 group-hover:translate-x-1 transition-transform">
            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
          </div>
        </a>

        {/* Phone Card */}
        <a 
          href="tel:+905350376163"
          className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500/5 via-white/5 to-emerald-500/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/10 hover:border-green-400/40 hover:bg-gradient-to-r hover:from-green-500/10 hover:via-white/10 hover:to-emerald-500/10 transition-all duration-300 group"
        >
          <div className="p-3 sm:p-3.5 lg:p-4 bg-green-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-400 text-xs sm:text-sm mb-1">Telefon Numarası</p>
            <p className="text-white text-base sm:text-lg lg:text-xl font-medium group-hover:text-green-300 transition-colors">
              +90 535 037 6163
            </p>
          </div>
          <div className="hidden sm:block text-green-400 group-hover:translate-x-1 transition-transform">
            <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
          </div>
        </a>
      </div>

      {/* Divider */}
      <div className="relative my-6 sm:my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-transparent px-4 text-sm text-gray-400">Sosyal Medya</span>
        </div>
      </div>

      {/* Social Media Links - Horizontal */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5">
        
        {/* Instagram */}
        <a
          href="https://instagram.com/dognysr.exe"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 p-4 sm:p-5 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-pink-400/20 hover:border-pink-400/50 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 w-24 sm:w-28 lg:w-32"
          aria-label="Instagram"
        >
          <Instagram className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-pink-400 group-hover:text-pink-300 transition-colors" />
          <span className="text-xs sm:text-sm text-gray-300 group-hover:text-pink-300 transition-colors font-medium">
            Instagram
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yasardogann/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 p-4 sm:p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-blue-400/20 hover:border-blue-400/50 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 w-24 sm:w-28 lg:w-32"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span className="text-xs sm:text-sm text-gray-300 group-hover:text-blue-300 transition-colors font-medium">
            LinkedIn
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YasarDogann"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 p-4 sm:p-5 bg-gradient-to-br from-gray-500/10 to-slate-500/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-gray-400/20 hover:border-gray-400/50 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 w-24 sm:w-28 lg:w-32"
          aria-label="GitHub"
        >
          <Github className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-gray-400 group-hover:text-gray-300 transition-colors" />
          <span className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-300 transition-colors font-medium">
            GitHub
          </span>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 mt-8 sm:mt-10 text-xs sm:text-sm text-center">
        © 2025 Yaşar Doğan. Tüm hakları saklıdır.
      </p>
    </div>

    {/* Back to Home Button */}
    {currentSection === 6 && (
      <button
        onClick={() => scrollToSection(0)}
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 group cursor-pointer animate-fade-in"
      >
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs sm:text-sm lg:text-base">
            Anasayfa
          </span>
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Contact;