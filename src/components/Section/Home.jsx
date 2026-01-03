import React from 'react';
import { ChevronDown, User } from 'lucide-react';
import profilePic from '../../assets/pp.jpg';

const Home = ({ id, currentSection, scrollToSection }) => (
  <section 
    id={id} 
    className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 px-4 sm:px-6 lg:px-8"
    style={{
      opacity: currentSection === 0 ? 1 : 0,
      pointerEvents: currentSection === 0 ? 'auto' : 'none'
    }}
  >
    <div className="text-center max-w-7xl mx-auto w-full">
      
      {/* Profile Photo - Responsive sizing */}
      <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
        <div className="relative group">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow-reverse opacity-50 blur-lg"></div>
          
          {/* Main photo container - Responsive: mobil 32 (128px), tablet 40 (160px), desktop 48 (192px) */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10 group-hover:scale-105 transition-transform duration-500">
            
            {/* Profil fotoğrafı */}
            <img 
              src={profilePic} 
              alt="Yaşar Doğan"
              className="w-full h-full object-cover"
            />
            
            {/* Placeholder fallback */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <User className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white/80" strokeWidth={1.5} />
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Decorative dots - Responsive sizing */}
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full border-2 sm:border-4 border-gray-900 shadow-lg animate-pulse"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Name and Title - Responsive text sizing */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* İsim: mobil 4xl, tablet 6xl, desktop 8xl */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 sm:mb-4 tracking-wider drop-shadow-2xl break-words">
          YAŞAR DOĞAN
        </h1>
        
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white/50"></div>
          {/* Title: mobil xl, tablet 2xl, desktop 3xl */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 tracking-wide">
            Full Stack Developer
          </p>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white/50"></div>
        </div>
        
        {/* Tech stack badges - Responsive wrapping */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-4">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm text-white/80 border border-white/20 whitespace-nowrap">
            .NET
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm text-white/80 border border-white/20 whitespace-nowrap">
            React
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm text-white/80 border border-white/20 whitespace-nowrap">
            Angular
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-xs sm:text-sm text-white/80 border border-white/20 whitespace-nowrap">
            Javascript
          </span>
        </div>
      </div>
    </div>

    {/* Scroll Down Button - Responsive positioning */}
    {currentSection === 0 && (
      <button 
        onClick={() => scrollToSection(1)} 
        className="absolute bottom-8 sm:bottom-12 group cursor-pointer animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm sm:text-base lg:text-lg text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            Hakkımda
          </span>
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Home;