// import React from 'react';
// import { projects } from '../../data/projects';
// import { Github, ChevronDown } from 'lucide-react';

// const Projects = ({ id, currentSection, scrollToSection }) => (
//   <section id={id} className="absolute inset-0 flex flex-col items-center justify-center p-10 gap-10 transition-opacity duration-1000"
//     style={{
//       opacity: currentSection === 5 ? 1 : 0,
//       pointerEvents: currentSection === 5 ? 'auto' : 'none'
//     }}
//   >
//     <h2 className="text-5xl text-white font-bold mb-10">Projelerim</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//       {projects.map((proj, i) => (
//         <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500">
//           <h3 className="text-2xl font-bold text-white flex items-center gap-2">
//             <Github className="w-6 h-6 text-blue-400" /> {proj.title}
//           </h3>
//           <p className="text-gray-300 mt-2">{proj.description}</p>
//           <div className="flex flex-wrap gap-2 mt-4">
//             {proj.technologies.map((tech, j) => (
//               <span key={j} className="px-3 py-1 text-sm bg-white/10 rounded-lg border border-white/20 text-white">{tech}</span>
//             ))}
//           </div>
//           <a href={proj.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:text-blue-500 transition-colors">
//             GitHub Link
//           </a>
//         </div>
//       ))}
//     </div>

//     {currentSection === 5 && (
//       <button onClick={() => scrollToSection(6)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
//         <div className="flex flex-col items-center">
//           <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Deneyim</span>
//           <ChevronDown className="w-10 h-10 text-white animate-bounce" />
//         </div>
//       </button>
//     )}
//   </section>
// );

// export default Projects;

import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import { Github, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Star, Code2, Zap, Image as ImageIcon } from 'lucide-react';

const Projects = ({ id, currentSection, scrollToSection }) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  // Auto-play (opsiyonel)
  useEffect(() => {
    if (currentSection !== 5) return;
    const interval = setInterval(nextProject, 10000);
    return () => clearInterval(interval);
  }, [currentSection, featuredIndex]);

  const featuredProject = projects[featuredIndex];

  return (
    <section
      id={id}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 transition-all duration-1000"
      style={{
        opacity: currentSection === 5 ? 1 : 0,
        pointerEvents: currentSection === 5 ? 'auto' : 'none'
      }}
    >
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl text-white font-bold mb-2 drop-shadow-lg">
            Projelerim
          </h2>
          <p className="text-gray-300 text-sm">
            {projects.length} proje • {featuredIndex + 1}. gösteriliyor
          </p>
        </div>

        {/* Code Stream Animation */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-full max-w-4xl">
            {/* Stream çizgisi */}
            <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            
            {/* Binary stream */}
            <div className="absolute -top-5 left-0 w-full flex justify-between text-xs font-mono text-blue-400/40">
              <span className="animate-pulse">{"<code>"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>{"function()"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>{"return"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>{"{ }"}</span>
              <span className="animate-pulse" style={{ animationDelay: "0.8s" }}>{"</code>"}</span>
            </div>

            {/* Code particles */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-400 animate-code-flow"></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-purple-400 rounded-full shadow-lg shadow-purple-400 animate-code-flow" style={{ animationDelay: "1.5s" }}></div>
            <div className="absolute top-0 left-0 w-1 h-1 bg-pink-400 rounded-full shadow-lg shadow-pink-400 animate-code-flow" style={{ animationDelay: "3s" }}></div>
          </div>
        </div>

        {/* Featured Project - Büyük Showcase */}
        <div className="flex-1 flex items-center justify-center mb-6 max-h-[420px]">
          <div className="relative w-full max-w-6xl">
            
            {/* Sol Navigation */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-blue-400/30 rounded-xl text-white transition-all duration-300 hover:scale-110 backdrop-blur-md group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
            </button>

            {/* Ana Kart */}
            <div 
              key={featuredIndex}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-blue-400/40 hover:border-blue-400 rounded-3xl p-8 shadow-2xl transition-all duration-700 hover:shadow-blue-400/30 hover:scale-[1.01] animate-project-enter overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              {/* Floating icons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400" style={{ animationDelay: "0.3s" }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400" style={{ animationDelay: "0.6s" }}></div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 rounded-full backdrop-blur-md">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-bold">Featured</span>
              </div>

              {/* Content - İki Kolon Layout */}
              <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Sol Taraf - İçerik */}
                <div>
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30">
                      <Code2 className="w-7 h-7 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white">
                        {featuredProject.title}
                      </h3>
                      <span className="text-gray-400 font-mono text-xs">
                        Project #{featuredIndex + 1}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 text-base leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm font-semibold">Teknolojiler:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-lg text-white text-sm font-medium hover:scale-110 hover:border-blue-400/60 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      GitHub
                    </a>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 backdrop-blur-md group">
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Demo
                    </button>
                  </div>
                </div>

                {/* Sağ Taraf - Proje Görseli */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-2xl group">
                    {/* Proje görseli varsa */}
                    {featuredProject.image ? (
                      <img 
                        src={featuredProject.image} 
                        alt={featuredProject.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      /* Placeholder - Görsel yoksa */
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm flex flex-col items-center justify-center">
                        <ImageIcon className="w-16 h-16 text-white/40 mb-3" />
                        <span className="text-white/60 text-sm font-medium">Proje Görseli</span>
                        <span className="text-white/40 text-xs mt-1">Yakında eklenecek</span>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-medium">Görüntülemek için tıkla</span>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-white text-xs font-bold border border-white/20">
                      Preview
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>

            {/* Sağ Navigation */}
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 border border-purple-400/30 rounded-xl text-white transition-all duration-300 hover:scale-110 backdrop-blur-md group"
            >
              <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
            </button>
          </div>
        </div>

        {/* Thumbnail Gallery - Altta - DÜZELTİLMİŞ */}
        <div className="flex justify-center items-center mb-4 px-16">
          <div className="flex gap-3 overflow-x-auto max-w-4xl pb-2 px-2 scrollbar-hide">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex-shrink-0 w-28 h-20 rounded-xl transition-all duration-300 overflow-hidden ${
                  index === featuredIndex
                    ? 'border-2 border-blue-400 scale-105 shadow-lg shadow-blue-400/50'
                    : 'border-2 border-white/20 hover:border-white/40 hover:scale-105'
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-blue-500/20 to-purple-500/20' :
                  index % 4 === 1 ? 'from-purple-500/20 to-pink-500/20' :
                  index % 4 === 2 ? 'from-pink-500/20 to-blue-500/20' :
                  'from-cyan-500/20 to-blue-500/20'
                } backdrop-blur-sm`}></div>
                
                {/* Proje görseli - Thumbnail */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                ) : null}
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-2">
                  <Code2 className="w-5 h-5 text-white mb-1" />
                  <span className="text-white text-xs font-medium truncate w-full text-center px-1">
                    {project.title}
                  </span>
                </div>

                {/* Active indicator - İÇERDE */}
                {index === featuredIndex && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                )}

                {/* Hover tooltip */}
                {hoveredIndex === index && index !== featuredIndex && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap z-30 animate-fade-in pointer-events-none">
                    {project.title}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress & Navigation Dots */}
        <div className="flex justify-center items-center gap-6">
          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs font-mono">
              {featuredIndex + 1}/{projects.length}
            </span>
            <div className="w-40 h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 shadow-lg"
                style={{
                  width: `${((featuredIndex + 1) / projects.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setFeaturedIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === featuredIndex
                    ? 'bg-blue-400 scale-150 shadow-lg shadow-blue-400'
                    : 'bg-white/30 hover:bg-white/60 hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Keyboard hint */}
        <div className="text-center mt-3 text-gray-500 text-xs font-mono">
          ← → Klavye ile gezilebilir • Otomatik değişim: 10s
        </div>
      </div>

      {/* Next Section Button */}
      {currentSection === 5 && (
        <button
          onClick={() => scrollToSection(6)}
          className="absolute bottom-6 group cursor-pointer animate-fade-in"
        >
          <div className="flex flex-col items-center">
            <span className="text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm">
              İletişim
            </span>
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </div>
        </button>
      )}
    </section>
  );
};

export default Projects;