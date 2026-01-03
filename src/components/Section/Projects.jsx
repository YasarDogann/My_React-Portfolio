import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import { Github, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Star, Code2, Zap, Image } from 'lucide-react';

const Projects = ({ id, currentSection, scrollToSection }) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const nextProject = () => {
    setFeaturedIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setFeaturedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Klavye navigasyonu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentSection !== 5) return;
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  // Auto-play
  useEffect(() => {
    if (currentSection !== 5) return;
    const interval = setInterval(nextProject, 10000);
    return () => clearInterval(interval);
  }, [currentSection, featuredIndex]);

  // Reset expansion
  useEffect(() => {
    setExpanded(false);
  }, [featuredIndex]);

  const featuredProject = projects[featuredIndex];

  // Thumbnail scrolling
  const thumbRef = useRef(null);
  const scrollThumb = (dir = 1) => {
    if (!thumbRef.current) return;
    const amount = dir * 120;
    thumbRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 transition-all duration-1000 overflow-y-auto"
      style={{
        opacity: currentSection === 5 ? 1 : 0,
        pointerEvents: currentSection === 5 ? 'auto' : 'none'
      }}
    >
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center py-4">
        
        {/* Header - Responsive */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2">
            <div className="p-1.5 sm:p-2 bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-lg sm:rounded-xl border border-red-400/30">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold drop-shadow-lg">
              Projelerim
            </h2>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm">
            {projects.length} proje • {featuredIndex + 1}. gösteriliyor
          </p>
        </div>

        {/* Code Stream - Hidden on mobile */}
        <div className="hidden sm:flex items-center justify-center mb-4 sm:mb-6">
          <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl">
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            
            <div className="absolute -top-5 left-0 w-full flex justify-between text-xs font-mono text-blue-400/40">
              <span className="animate-pulse">{"<code>"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>{"function()"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>{"return"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>{"{ }"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.8s" }}>{"</code>"}</span>
            </div>
          </div>
        </div>

        {/* Featured Project - NO SCROLL, COMPACT */}
        <div className="flex-1 flex items-center justify-center mb-4 sm:mb-6">
          <div className="relative w-full max-w-full sm:max-w-5xl lg:max-w-6xl px-8 sm:px-12 lg:px-16">
            
            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 sm:left-2 lg:-left-14 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/5 sm:bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-white/10 sm:border-blue-400/30 rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:scale-110 backdrop-blur-md group"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:animate-pulse" />
            </button>

            {/* Main Card - COMPACT, NO SCROLL */}
            <div 
              key={featuredIndex}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-blue-400/40 hover:border-blue-400 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-2xl transition-all duration-700 hover:shadow-blue-400/30 hover:scale-[1.01] animate-project-enter"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              
              {/* Floating icons - Hidden on mobile */}
              <div className="hidden sm:flex absolute top-4 right-4 gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400" style={{ animationDelay: "0.3s" }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400" style={{ animationDelay: "0.6s" }}></div>
              </div>

              {/* Badge - Responsive */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 rounded-full backdrop-blur-md">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-xs sm:text-sm font-bold">Featured</span>
              </div>

              {/* Content - COMPACT Grid */}
              <div className="relative z-10 mt-10 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-start">
                
                {/* Left - Content */}
                <div className="space-y-2 sm:space-y-3">
                  {/* Title */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30 flex-shrink-0">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white line-clamp-2">
                        {featuredProject.title}
                      </h3>
                      <span className="text-gray-400 font-mono text-xs">
                        Project #{featuredIndex + 1}
                      </span>
                    </div>
                  </div>

                  {/* Description - COMPACT */}
                  <div>
                    <p
                      className="text-gray-200 text-xs sm:text-sm leading-relaxed break-words"
                      style={
                        expanded
                          ? {}
                          : {
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }
                      }
                    >
                      {featuredProject.description}
                    </p>
                    {featuredProject.description.length > 150 && (
                      <button
                        onClick={() => setExpanded((s) => !s)}
                        className="text-xs text-blue-300 hover:text-blue-400 transition-colors mt-1"
                      >
                        {expanded ? 'Gizle' : 'Devamı'}
                      </button>
                    )}
                  </div>

                  {/* Technologies - COMPACT */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Zap className="w-3 h-3 text-yellow-400" />
                      <span className="text-gray-300 text-xs font-semibold">Teknolojiler</span>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {featuredProject.technologies.slice(0, 6).map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-md text-white text-xs font-medium hover:scale-105 hover:border-blue-400/60 transition-all duration-300 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.technologies.length > 6 && (
                        <span className="px-2 py-0.5 text-xs text-gray-400">
                          +{featuredProject.technologies.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions - COMPACT */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
                      GitHub
                    </a>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg font-semibold text-xs transition-all duration-300 hover:scale-105 backdrop-blur-md group">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Demo
                    </button>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-36 sm:h-40 md:h-48 lg:h-56 rounded-xl overflow-hidden border-2 border-blue-400/30 shadow-2xl group">
                    {featuredProject.image ? (
                      <img 
                        src={featuredProject.image} 
                        alt={featuredProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm flex flex-col items-center justify-center">
                        <Image className="w-10 h-10 sm:w-12 sm:h-12 text-white/40 mb-2" />
                        <span className="text-white/60 text-xs font-medium">Proje Görseli</span>
                        <span className="text-white/40 text-xs mt-1">Yakında</span>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-3">
                      <span className="text-white text-xs font-medium">Görüntüle</span>
                    </div>

                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/20">
                      Preview
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>

            {/* Right Navigation */}
            <button
              onClick={nextProject}
              className="absolute right-0 sm:right-2 lg:-right-14 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/5 sm:bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 border border-white/10 sm:border-purple-400/30 rounded-lg sm:rounded-xl text-white transition-all duration-300 hover:scale-110 backdrop-blur-md group"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:animate-pulse" />
            </button>
          </div>
        </div>

        {/* Thumbnail Gallery - CENTERED */}
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <div className="relative flex items-center justify-center gap-2 w-full max-w-4xl">
            <button
              onClick={() => scrollThumb(-1)}
              className="flex-shrink-0 p-1.5 sm:p-2 bg-white/5 rounded-full"
              aria-label="scroll left"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
            </button>

            <div ref={thumbRef} className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide justify-center">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setFeaturedIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 lg:w-28 lg:h-20 rounded-lg sm:rounded-xl transition-all duration-300 overflow-hidden ${
                    index === featuredIndex
                      ? 'border-2 border-blue-400 scale-105 shadow-lg shadow-blue-400/50'
                      : 'border-2 border-white/20 hover:border-white/40 hover:scale-105'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 4 === 0 ? 'from-blue-500/20 to-purple-500/20' :
                    index % 4 === 1 ? 'from-purple-500/20 to-pink-500/20' :
                    index % 4 === 2 ? 'from-pink-500/20 to-blue-500/20' :
                    'from-cyan-500/20 to-blue-500/20'
                  } backdrop-blur-sm`}></div>
                  
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                  )}
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-1 sm:p-2">
                    <Code2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white mb-0.5 sm:mb-1" />
                    <span className="text-white text-xs font-medium truncate w-full text-center px-1 leading-tight">
                      {project.title}
                    </span>
                  </div>

                  {index === featuredIndex && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  )}

                  {hoveredIndex === index && index !== featuredIndex && (
                    <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap z-30 animate-fade-in pointer-events-none">
                      {project.title}
                    </div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollThumb(1)}
              className="flex-shrink-0 p-1.5 sm:p-2 bg-white/5 rounded-full"
              aria-label="scroll right"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
            </button>
          </div>
        </div>

        {/* Progress & Dots */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-gray-400 text-xs font-mono">
              {featuredIndex + 1}/{projects.length}
            </span>
            <div className="w-32 sm:w-40 h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 shadow-lg"
                style={{
                  width: `${((featuredIndex + 1) / projects.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          <div className="flex gap-1.5 sm:gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
                  index === featuredIndex
                    ? 'bg-blue-400 scale-150 shadow-lg shadow-blue-400'
                    : 'bg-white/30 hover:bg-white/60 hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="hidden sm:block text-center mt-2 sm:mt-3 text-gray-500 text-xs font-mono">
          ← → Klavye ile gezilebilir • Otomatik değişim: 10s
        </div>
      </div>

      {/* Next Button */}
      {currentSection === 5 && (
        <button
          onClick={() => scrollToSection(6)}
          className="absolute bottom-6 sm:bottom-8 md:bottom-6 group cursor-pointer animate-fade-in"
        >
          <div className="flex flex-col items-center">
            <span className="text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs sm:text-sm">
              İletişim
            </span>
            <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-bounce" />
          </div>
        </button>
      )}
    </section>
  );
};

export default Projects;