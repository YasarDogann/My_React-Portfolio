import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

const EducationCard = ({ education }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-80 h-64 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 flex flex-col justify-center items-center shadow-2xl">
          <GraduationCap className="w-16 h-16 text-blue-400 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2 text-center">{education.title}</h3>
          <p className="text-blue-200 text-lg">{education.institution}</p>
          <p className="text-gray-300 mt-2">{education.year}</p>
        </div>

        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 flex flex-col justify-center rotate-y-180 shadow-2xl">
          <p className="text-white text-center leading-relaxed">{education.details}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
