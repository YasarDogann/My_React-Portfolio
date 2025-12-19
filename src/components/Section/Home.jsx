// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const Home = ({ id, currentSection, scrollToSection }) => (
//   <section id={id} className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
//     style={{
//       opacity: currentSection === 0 ? 1 : 0,
//       pointerEvents: currentSection === 0 ? 'auto' : 'none'
//     }}>
//     <div className="text-center">
//       <h1 className="text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">YAŞAR DOĞAN</h1>
//       <p className="text-3xl text-gray-200 tracking-wide">Full Stack Developer</p>
//     </div>

//     {currentSection === 0 && (
//       <button onClick={() => scrollToSection(1)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
//         <div className="flex flex-col items-center">
//           <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Hakkımda</span>
//           <ChevronDown className="w-10 h-10 text-white animate-bounce" />
//         </div>
//       </button>
//     )}
//   </section>
// );

// export default Home;

import React from 'react';
import { ChevronDown, User } from 'lucide-react';
import profilePic from '../../assets/pp.jpg';

const Home = ({ id, currentSection, scrollToSection }) => (
  <section 
    id={id} 
    className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
    style={{
      opacity: currentSection === 0 ? 1 : 0,
      pointerEvents: currentSection === 0 ? 'auto' : 'none'
    }}
  >
    <div className="text-center">
      
      {/* Profile Photo */}
      <div className="flex justify-center mb-8 animate-fade-in">
        <div className="relative group">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-md"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow-reverse opacity-50 blur-lg"></div>
          
          {/* Main photo container */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/10 group-hover:scale-105 transition-transform duration-500">
            
            {/* Profil fotoğrafı - 3 seçenek */}
            
            {/* SEÇENEK 1: Kendi fotoğrafınız varsa (public klasöründen) */}
            <img 
              src={profilePic} 
              alt="Yaşar Doğan"
              className="w-full h-full object-cover"
            />
            
            {/* SEÇENEK 2: URL'den */}
            {/* <img 
              src="https://your-image-url.com/photo.jpg" 
              alt="Yaşar Doğan"
              className="w-full h-full object-cover"
            /> */}
            
            {/* SEÇENEK 3: Placeholder ikon (şimdilik bu aktif) */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <User className="w-24 h-24 text-white/80" strokeWidth={1.5} />
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Decorative dots */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg animate-pulse"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
          YAŞAR DOĞAN
        </h1>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
          <p className="text-3xl text-gray-200 tracking-wide">Full Stack Developer</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
        </div>
        
        {/* Tech stack badges (opsiyonel) */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 border border-white/20">
            React
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 border border-white/20">
            .NET
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 border border-white/20">
            Angular
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white/80 border border-white/20">
            Javascript
          </span>
        </div>
      </div>
    </div>

    {/* Scroll Down Button */}
    {currentSection === 0 && (
      <button 
        onClick={() => scrollToSection(1)} 
        className="absolute bottom-12 group cursor-pointer animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">
            Hakkımda
          </span>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Home;