
import React from 'react';
import { Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-[#173577] tracking-tight hover:opacity-90 transition-opacity">
          <Hexagon size={28} className="text-[#51dcec] fill-current" strokeWidth={2.5} />
          <span className="tracking-tighter uppercase font-black">QHS <span className="font-light">TELEMED</span></span>
        </a>

        {/* CTA Button - Desktop & Mobile (Hormozi focused) */}
        <div>
            <a 
                href="#contato"
                className="bg-[#173577] text-white text-[10px] sm:text-xs font-black px-4 sm:px-6 py-2.5 sm:py-3 rounded uppercase tracking-widest hover:bg-[#173577]/90 transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
                Entrar na lista
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
