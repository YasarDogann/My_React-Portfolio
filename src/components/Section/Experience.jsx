import React, { useState, useEffect } from 'react';
import { experiences } from '../../data/experiences';
import { Briefcase, ChevronDown, Calendar, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

const Experience = ({ id, currentSection, goToNextSection }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Deneyimleri ters çevir (en güncel ilk sırada)
  const sortedExperiences = [...experiences].reverse();

  const nextExperience = () => {
    if (activeIndex < sortedExperiences.length - 1) {
      setActiveIndex(prev => prev + 1);
    } else {
      setActiveIndex(0); // Loop back to start
    }
  };

  const prevExperience = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    } else {
      setActiveIndex(sortedExperiences.length - 1); // Loop to end
    }
  };

  // Klavye navigasyonu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentSection !== 4) return;
      if (e.key === 'ArrowRight') nextExperience();
      if (e.key === 'ArrowLeft') prevExperience();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, currentSection]);

  // Renk şeması
  const getColorClass = (index) => {
    const colors = [
      { 
        border: 'border-green-400/40',
        borderHover: 'hover:border-green-400',
        shadow: 'hover:shadow-green-400/30',
        badge: 'bg-green-500/30 border-green-400/50 text-green-200',
        icon: 'text-green-400',
        dot: 'bg-green-400 shadow-green-400',
        progress: 'from-green-400 to-emerald-500'
      },
      { 
        border: 'border-blue-400/40',
        borderHover: 'hover:border-blue-400',
        shadow: 'hover:shadow-blue-400/30',
        badge: 'bg-blue-500/30 border-blue-400/50 text-blue-200',
        icon: 'text-blue-400',
        dot: 'bg-blue-400 shadow-blue-400',
        progress: 'from-blue-400 to-cyan-500'
      },
      { 
        border: 'border-purple-400/40',
        borderHover: 'hover:border-purple-400',
        shadow: 'hover:shadow-purple-400/30',
        badge: 'bg-purple-500/30 border-purple-400/50 text-purple-200',
        icon: 'text-purple-400',
        dot: 'bg-purple-400 shadow-purple-400',
        progress: 'from-purple-400 to-pink-500'
      },
      { 
        border: 'border-cyan-400/40',
        borderHover: 'hover:border-cyan-400',
        shadow: 'hover:shadow-cyan-400/30',
        badge: 'bg-cyan-500/30 border-cyan-400/50 text-cyan-200',
        icon: 'text-cyan-400',
        dot: 'bg-cyan-400 shadow-cyan-400',
        progress: 'from-cyan-400 to-blue-500'
      }
    ];
    return colors[index % colors.length];
  };

  const currentColors = getColorClass(activeIndex);

  return (
    <section
      id={id}
      className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 transition-all duration-1000 overflow-y-auto"
      style={{
        opacity: currentSection === 4 ? 1 : 0,
        pointerEvents: currentSection === 4 ? "auto" : "none",
      }}
    >
      <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header - Responsive */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg sm:rounded-xl border border-amber-400/30">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold drop-shadow-lg">
              Mesleki Deneyim
            </h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            {sortedExperiences.length} deneyim • {activeIndex + 1}. seçili
          </p>
        </div>

        {/* Timeline - Responsive */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-3xl px-2 sm:px-0">
            {/* Data stream çizgisi */}
            <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-green-400 via-blue-400 via-purple-400 to-cyan-400 rounded-full shadow-lg"></div>

            {/* Aktif pozisyon göstergesi */}
            <div 
              className="absolute top-0 h-0.5 sm:h-1 bg-white rounded-full shadow-xl shadow-white/50 transition-all duration-700 ease-out"
              style={{
                left: '0%',
                width: `${((activeIndex + 1) / sortedExperiences.length) * 100}%`
              }}
            ></div>

            {/* Timeline noktaları */}
            <div className="absolute top-0 left-0 w-full h-1 flex justify-between">
              {sortedExperiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-3 h-3 sm:w-4 sm:h-4 -mt-1 sm:-mt-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex 
                      ? `${getColorClass(index).dot} scale-150 ring-2 sm:ring-4 ring-white/30` 
                      : 'bg-white/40 hover:bg-white/70 hover:scale-110'
                  }`}
                >
                  {index === activeIndex && (
                    <span className={`absolute inset-0 rounded-full ${getColorClass(index).dot} animate-ping`}></span>
                  )}
                </button>
              ))}
            </div>

            {/* Binary kod - Hidden on mobile */}
            <div className="hidden sm:flex absolute -top-7 left-0 w-full justify-between text-xs font-mono text-green-400/50">
              <span className="animate-pulse">1011</span>
              <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>0101</span>
              <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>1100</span>
              <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>0011</span>
              <span className="animate-pulse" style={{ animationDelay: "0.8s" }}>1001</span>
            </div>

            {/* Yıl göstergeleri */}
            <div className="absolute -bottom-5 sm:-bottom-7 left-0 w-full flex justify-between text-xs font-mono text-gray-400">
              {sortedExperiences.map((exp, index) => (
                <span 
                  key={index}
                  className={`transition-all duration-300 ${
                    index === activeIndex ? 'text-white font-bold scale-110' : ''
                  }`}
                >
                  {exp.period.split(' - ')[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Kartlar - Responsive Slider */}
        <div className="flex-1 flex items-center justify-center my-4 sm:my-6 max-h-[500px] sm:max-h-[450px] lg:max-h-[400px]">
          <div className="relative w-full max-w-full sm:max-w-3xl lg:max-w-4xl px-12 sm:px-16 lg:px-20">
            
            {/* Navigation Buttons - Sol */}
            <button
              onClick={prevExperience}
              className="absolute left-0 sm:left-2 lg:-left-16 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:scale-110 backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Kart - Responsive */}
            <div 
              key={activeIndex}
              className={`bg-white/10 backdrop-blur-xl border-2 ${currentColors.border} ${currentColors.borderHover} ${currentColors.shadow} rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transition-all duration-700 hover:scale-[1.02] animate-fade-in overflow-y-auto max-h-[450px] sm:max-h-[500px]`}
            >
              {/* Header - Responsive */}
              <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Briefcase className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${currentColors.icon} drop-shadow-lg flex-shrink-0`} />
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white line-clamp-2">
                      {sortedExperiences[activeIndex].title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:gap-2 text-gray-300 ml-7 sm:ml-9 lg:ml-10">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base lg:text-lg line-clamp-1">
                        {sortedExperiences[activeIndex].company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm lg:text-base">{sortedExperiences[activeIndex].period}</span>
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border ${currentColors.badge} self-start sm:self-auto flex-shrink-0`}>
                  <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
                    {activeIndex + 1}/{sortedExperiences.length}
                  </span>
                </div>
              </div>

              {/* Description - Responsive */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ml-7 sm:ml-9 lg:ml-10">
                {sortedExperiences[activeIndex].description}
              </p>

              {/* Technologies - Responsive */}
              {sortedExperiences[activeIndex].technologies && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-7 sm:ml-9 lg:ml-10">
                  {sortedExperiences[activeIndex].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-110 ${currentColors.badge} whitespace-nowrap`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${currentColors.progress.replace('from-', 'from-').replace('to-', 'to-')}/5 pointer-events-none`}></div>
            </div>

            {/* Navigation Buttons - Sağ */}
            <button
              onClick={nextExperience}
              className="absolute right-0 sm:right-2 lg:-right-16 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:scale-110 backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Alt Kontroller - Responsive */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-3 sm:mt-4">
          {/* Dot Navigation */}
          <div className="flex gap-2 sm:gap-2.5">
            {sortedExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? `${getColorClass(index).dot} scale-150 shadow-lg`
                    : "bg-white/30 hover:bg-white/60 hover:scale-125"
                }`}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-gray-300 text-xs sm:text-sm font-mono">
              {activeIndex + 1} / {sortedExperiences.length}
            </span>
            <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${currentColors.progress} rounded-full transition-all duration-700 shadow-lg`}
                style={{
                  width: `${((activeIndex + 1) / sortedExperiences.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Klavye ipucu - Hidden on mobile */}
        <div className="hidden sm:block text-center mt-3 sm:mt-4 text-gray-500 text-xs font-mono">
          ← → Klavye ile gezilebilir
        </div>
      </div>

      {/* Next Section Button - Responsive */}
      {currentSection === 4 && (
        <button
          onClick={goToNextSection}
          className="absolute bottom-6 sm:bottom-8 md:bottom-6 group cursor-pointer animate-fade-in"
        >
          <div className="flex flex-col items-center">
            <span className="text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs sm:text-sm">
              Projelerim
            </span>
            <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-bounce" />
          </div>
        </button>
      )}
    </section>
  );
};

export default Experience;