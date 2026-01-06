import React from 'react';
import { Hexagon, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-corporateBlue text-blue-200 py-12 border-t border-blue-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
              <Hexagon size={28} className="text-techBlue fill-current" />
              <span>QHS <span className="font-light">TELEMED</span></span>
            </div>
            <p className="text-sm leading-relaxed opacity-80 mb-4">
                Soluções de saúde corporativa focadas em redução de absenteísmo, gestão populacional inteligente e bem-estar para PMEs.
            </p>
            <div className="text-sm opacity-80">
                <p>CNPJ: 64.107.405/0001-06</p>
                <p>Av. Brigadeiro Faria Lima, 1811, Sala 1119 - São Paulo, SP</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-12">
              <div className="flex flex-col gap-3 text-sm">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Institucional</h4>
                  <a href="#inicio" className="hover:text-white transition-colors">A Solução</a>
                  <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
                  <a href="#planos" className="hover:text-white transition-colors">Planos</a>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Legal</h4>
                  <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                  <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                  <a href="#" className="hover:text-white transition-colors">LGPD</a>
              </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} QHS Telemed. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;