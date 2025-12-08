// import React from 'react';
// import EducationCard from '../EducationCard';
// import { educations } from '../../data/educations';
// import { ChevronDown } from 'lucide-react';

// const Education = ({ id, currentSection, scrollToSection }) => (
//   <section id={id} className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-10 transition-opacity duration-1000"
//     style={{
//       opacity: currentSection === 3 ? 1 : 0,
//       pointerEvents: currentSection === 3 ? 'auto' : 'none'
//     }}
//   >
//     <h2 className="text-5xl text-white font-bold mb-10">Eğitimlerim</h2>
//     <div className="flex flex-wrap justify-center gap-10">
//       {educations.map((edu, i) => <EducationCard key={i} education={edu} />)}
//     </div>
//     {currentSection === 3 && (
//       <button onClick={() => scrollToSection(4)} className="absolute bottom-12 group cursor-pointer animate-fade-in">
//         <div className="flex flex-col items-center">
//           <span className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 text-lg">Deneyim</span>
//           <ChevronDown className="w-10 h-10 text-white animate-bounce" />
//         </div>
//       </button>
//     )}
//   </section>
// );

// export default Education;

import React from 'react';
import EducationCard from '../EducationCard';
import { educations } from '../../data/educations';
import { ChevronDown, GraduationCap, Sparkles } from 'lucide-react';

const Education = ({ id, currentSection, scrollToSection }) => (
  <section
    id={id}
    className="absolute inset-0 flex flex-col items-center justify-center px-12 py-12 transition-all duration-1000 overflow-hidden"
    style={{
      opacity: currentSection === 3 ? 1 : 0,
      pointerEvents: currentSection === 3 ? 'auto' : 'none'
    }}
  >
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
      
      {/* Header - Compact */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30">
            <GraduationCap className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-5xl text-white font-bold drop-shadow-lg">
            Eğitimlerim
          </h2>
        </div>
        <p className="text-gray-300 text-xs">
          {educations.length} eğitim • Kartları çevirmek için üzerine gelin
        </p>
      </div>

      {/* Timeline - Compact */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-full max-w-2xl">
          <div className="w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg"></div>
          
          {/* Animated particles */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-pink-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>

      {/* Cards - Scrollable Grid with Max Height */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-5xl max-h-[520px] overflow-y-auto scrollbar-hide px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center py-2">
            {educations.map((edu, i) => (
              <EducationCard key={i} education={edu} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Hint - Compact */}
      <div className="text-center mt-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
          <Sparkles className="w-3 h-3 text-yellow-400" />
          <span className="text-gray-400 text-xs">Kartları çevirerek detayları keşfedin</span>
        </div>
      </div>
    </div>

    {/* Next Button */}
    {currentSection === 3 && (
      <button
        onClick={() => scrollToSection(4)}
        className="absolute bottom-6 group cursor-pointer animate-fade-in"
      >
        <div className="flex flex-col items-center">
          <span className="text-white mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 text-sm">
            Deneyim
          </span>
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </div>
      </button>
    )}
  </section>
);

export default Education;