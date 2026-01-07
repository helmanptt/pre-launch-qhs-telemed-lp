
import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#173577] pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom-left pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#51dcec]/20 border border-[#51dcec]/30 text-[#51dcec] rounded-md text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Programa de Founding Clients
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Recupere as horas perdidas por <br/>
            <span className="text-[#51dcec]">absenteísmo de curto prazo.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl leading-relaxed font-medium">
            Saúde de Primeira Resposta para PMEs. Resolva 80% das queixas médicas via WhatsApp e mantenha sua linha de produção ativa. <br/>
            <span className="text-white font-bold opacity-100">Sem apps pesados, sem burocracia, sem carência.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-[#51dcec] text-[#173577] font-black text-lg px-8 py-5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              APLICAR PARA O PRÉ-LANÇAMENTO <ArrowRight size={20} strokeWidth={3} />
            </a>
            <a 
              href="#metodologia" 
              className="border-2 border-white/20 text-white font-bold text-lg px-8 py-5 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              Ver Racional de ROI
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center gap-8 opacity-70">
            <div className="flex items-center gap-2 text-white text-xs font-black tracking-widest">
              <Zap size={14} className="text-[#51dcec]" /> IMPLEMENTAÇÃO EM 24H
            </div>
            <div className="flex items-center gap-2 text-white text-xs font-black tracking-widest">
              <ShieldCheck size={14} className="text-[#51dcec]" /> ZERO COPARTICIPAÇÃO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
