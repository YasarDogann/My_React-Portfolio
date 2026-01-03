import React from 'react';
import { Code } from 'lucide-react';

const SkillCard = ({ skillGroup }) => (
  <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/30 shadow-2xl hover:scale-105 transition-all duration-500 h-full flex flex-col">
    {/* Header - Responsive */}
    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 flex items-center gap-2 sm:gap-3">
      <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
      <span className="line-clamp-1">{skillGroup.category}</span>
    </h3>
    
    {/* Skills badges - Responsive */}
    <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
      {skillGroup.items.map((skill, i) => (
        <span 
          key={i} 
          className="px-2.5 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 whitespace-nowrap"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;