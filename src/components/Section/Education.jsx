import React from 'react';
import EducationCard from '../EducationCard';
import { educations } from '../../data/educations';
import { ChevronDown, GraduationCap, Sparkles } from 'lucide-react';

const Education = ({ id, currentSection, scrollToSection }) => (
  <section
    id={id}
    className="relative min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 transition-all duration-1000 overflow-hidden"
    style={{
      opacity: currentSection === 3 ? 1 : 0,
      pointerEvents: currentSection === 3 ? 'auto' : 'none'
    }}
  >
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
      
      {/* Header - Responsive */}
      <div className="text-center mb-4 sm:mb-5 lg:mb-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl border border-blue-400/30">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold drop-shadow-lg">
            Eğitimlerim
          </h2>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm">
          {educations.length} eğitim • <span className="hidden sm:inline">Kartları çevirmek için üzerine gelin</span><span className="sm:hidden">Kartlara tıklayın</span>
        </p>
      </div>

      {/* Timeline - Responsive */}
      <div className="flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl">
          <div className="w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg"></div>
          
          {/* Animated particles */}
          <div className="absolute top-0 left-0 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-0 right-0 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Cards - Responsive Grid with Scrollable Container */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[520px] overflow-y-auto scrollbar-hide px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 justify-items-center py-2">
            {educations.map((edu, i) => (
              <EducationCard key={i} education={edu} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Hint - Responsive */}
      <div className="text-center mt-3 sm:mt-4">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/5 rounded-full border border-white/10">
          <Sparkles className="w-3 h-3 text-yellow-400 flex-shrink-0" />
          <span className="text-gray-400 text-xs">
            <span className="hidden sm:inline">Kartları çevirerek detayları keşfedin</span>
            <span className="sm:hidden">Kartlara tıklayın</span>
          </span>
        </div>
      </div>
    </div>

    {/* Next Button - Responsive */}
    {currentSection === 3 && (
      <button
        onClick={() => scrollToSection(4)}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-6 group cursor-pointer animate-fade-in"
      >
        <div className="flex flex-col items-center">
          <span className="text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs sm:text-sm">
            Deneyim
          </span>
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Education;