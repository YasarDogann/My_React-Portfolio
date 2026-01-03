import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const EducationCard = ({ education, index = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Her kart için farklı renk
  const colors = [
    { gradient: 'from-blue-500 to-cyan-500', icon: 'text-blue-400', border: 'border-blue-400/40' },
    { gradient: 'from-purple-500 to-pink-500', icon: 'text-purple-400', border: 'border-purple-400/40' }, 
    { gradient: 'from-emerald-500 to-teal-500', icon: 'text-emerald-400', border: 'border-emerald-400/40' },
    { gradient: 'from-orange-500 to-red-500', icon: 'text-orange-400', border: 'border-orange-400/40' },
    { gradient: 'from-pink-500 to-rose-500', icon: 'text-pink-400', border: 'border-pink-400/40' },
  ];
  
  const theme = colors[index % colors.length];

  return (
    <div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm mx-auto h-96 sm:h-[420px] md:h-[440px] lg:h-[400px] cursor-pointer"
      style={{ perspective: '1500px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)} // Mobil için tıklama
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        
        {/* ÖN YÜZ */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border-2 ${theme.border} p-4 sm:p-5 lg:p-6 shadow-2xl overflow-hidden`}
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Decorative gradient orbs - Responsive sizing */}
          <div className={`absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${theme.gradient} opacity-20 rounded-full blur-2xl`}></div>
          <div className={`absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr ${theme.gradient} opacity-20 rounded-full blur-2xl`}></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            
            {/* Top badge - Responsive */}
            <div className="flex justify-end mb-2">
              <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <span className="text-xs text-white font-mono">{education.year}</span>
              </div>
            </div>

            {/* Icon - Responsive sizing */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className={`p-3 sm:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl border ${theme.border} shadow-lg hover:scale-110 transition-transform duration-300`}>
                <GraduationCap className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${theme.icon} drop-shadow-lg`} />
              </div>
            </div>

            {/* Title - Responsive text */}
            <div className="text-center mb-3 sm:mb-4 flex-1 flex items-center justify-center">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight px-2">
                {education.title}
              </h3>
            </div>

            {/* Institution - Responsive */}
            <div className="space-y-2 mb-3 sm:mb-4">
              <div className="flex items-center gap-2 justify-center text-gray-200 bg-white/5 rounded-lg p-2 border border-white/10">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center line-clamp-2">{education.institution}</span>
              </div>
            </div>

            {/* Hover hint - Responsive */}
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 text-xs text-gray-300 backdrop-blur-sm">
                <BookOpen className="w-3 h-3 flex-shrink-0" />
                <span className="hidden sm:inline">Detaylar için çevir</span>
                <span className="sm:hidden">Detaylar</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARKA YÜZ */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl overflow-hidden`}
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>

          <div className="relative z-10 flex flex-col h-full">
            
            {/* Header - Responsive */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b-2 border-white/30">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white font-bold">Detaylar</span>
              </div>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 flex-shrink-0" />
            </div>

            {/* Description - Scrollable, responsive text */}
            <div className="flex-1 overflow-y-auto mb-3 sm:mb-4 scrollbar-hide pr-1">
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                {education.details}
              </p>
            </div>

            {/* Footer - Responsive */}
            <div className="mt-auto pt-3 sm:pt-4 border-t-2 border-white/30">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white/80 flex-shrink-0" />
                  <span className="text-white/90 text-xs sm:text-sm font-semibold truncate">{education.institution}</span>
                </div>
                <div className="bg-white/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full flex-shrink-0">
                  <span className="text-white text-xs font-bold whitespace-nowrap">{education.year}</span>
                </div>
              </div>
            </div>

            {/* Corner decoration - Responsive */}
            <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-tl-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCard;