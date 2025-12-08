// import React, { useState } from 'react';
// import { GraduationCap } from 'lucide-react';

// const EducationCard = ({ education }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div 
//       className="relative w-80 h-64 cursor-pointer perspective"
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//     >
//       <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
//         <div className="absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 flex flex-col justify-center items-center shadow-2xl">
//           <GraduationCap className="w-16 h-16 text-blue-400 mb-4" />
//           <h3 className="text-2xl font-bold text-white mb-2 text-center">{education.title}</h3>
//           <p className="text-blue-200 text-lg">{education.institution}</p>
//           <p className="text-gray-300 mt-2">{education.year}</p>
//         </div>

//         <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 flex flex-col justify-center rotate-y-180 shadow-2xl">
//           <p className="text-white text-center leading-relaxed">{education.details}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationCard;

import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const EducationCard = ({ education, index = 0}) => {
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
      className="relative w-80 h-100 cursor-pointer"
      style={{ perspective: '1500px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
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
          className={`absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border-2 ${theme.border} p-6 shadow-2xl overflow-hidden`}
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Decorative gradient orbs */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${theme.gradient} opacity-20 rounded-full blur-2xl`}></div>
          <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr ${theme.gradient} opacity-20 rounded-full blur-2xl`}></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            
            {/* Top badge */}
            <div className="flex justify-end mb-2">
              <div className="px-3 py-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                <span className="text-xs text-white font-mono">{education.year}</span>
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className={`p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border ${theme.border} shadow-lg hover:scale-110 transition-transform duration-300`}>
                <GraduationCap className={`w-14 h-14 ${theme.icon} drop-shadow-lg`} />
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-4 flex-1 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white leading-tight px-2">
                {education.title}
              </h3>
            </div>

            {/* Institution */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 justify-center text-gray-200 bg-white/5 rounded-lg p-2 border border-white/10">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm font-medium text-center">{education.institution}</span>
              </div>
            </div>

            {/* Hover hint */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 text-xs text-gray-300 backdrop-blur-sm">
                <BookOpen className="w-3 h-3" />
                <span>Detaylar için çevir</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARKA YÜZ */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} rounded-2xl p-6 shadow-2xl overflow-hidden`}
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>

          <div className="relative z-10 flex flex-col h-full">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-white/30">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Detaylar</span>
              </div>
              <Calendar className="w-5 h-5 text-white/80" />
            </div>

            {/* Description - Scrollable if needed */}
            <div className="flex-1 overflow-y-auto mb-4 scrollbar-hide">
              <p className="text-white text-sm leading-relaxed">
                {education.details}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t-2 border-white/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-white/90 text-sm font-semibold">{education.institution}</span>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">{education.year}</span>
                </div>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCard;