import React from 'react';

const Sidebar = ({ sections, currentSection, scrollToSection }) => (
  <>
    {/* Sol Menü */}
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6">
      {sections.map((section, index) => {
        const Icon = section.icon;
        return (
          <button key={index} onClick={() => scrollToSection(index)} className="group relative">
            <div className={`p-3 rounded-lg transition-all duration-300 ${
              currentSection === index ? 'bg-white/30 backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
            }`}>
              <Icon className={`w-6 h-6 transition-colors ${currentSection === index ? 'text-white' : 'text-gray-300'}`} />
            </div>
            <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
              {section.name}
            </span>
          </button>
        );
      })}
    </div>

    {/* Sağ Nokta Göstergeleri */}
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((_, index) => (
        <button key={index} onClick={() => scrollToSection(index)} className="group relative">
          <div className={`w-3 h-3 rounded-full transition-all duration-500 ${currentSection === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`}></div>
        </button>
      ))}
    </div>
  </>
);

export default Sidebar;
