import React from 'react';
import { Code } from 'lucide-react';

const SkillCard = ({ skillGroup }) => (
  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl hover:scale-105 transition-all duration-500">
    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
      <Code className="w-6 h-6 text-blue-400" />
      {skillGroup.category}
    </h3>
    <div className="flex flex-wrap gap-2 md:gap-3">
      {skillGroup.items.map((skill, i) => (
        <span key={i} className="px-3 py-1 text-xs md:text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-lg border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
