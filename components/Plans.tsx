
import React from 'react';
import { Check, Info } from 'lucide-react';

const Plans: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#173577] mb-6">Previsibilidade de Caixa.</h2>
            <p className="text-xl text-gray-600">Eliminamos as taxas de coparticipação e reajustes por sinistralidade excessiva.</p>
          </div>

          <div className="bg-[#173577] rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#51dcec] rounded-full blur-[120px] opacity-20"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="md:w-1/2">
                <h3 className="text-sm font-black text-[#51dcec] uppercase tracking-[0.2em] mb-4">Investimento Founding Client</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl md:text-7xl font-black">R$ 20</span>
                  <span className="text-xl font-medium opacity-60">/vida/mês</span>
                </div>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed font-medium">
                  Este valor é travado por contrato para as empresas que se qualificarem para o pré-lançamento.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black text-[#51dcec] bg-white/10 px-4 py-2 rounded-lg w-fit uppercase tracking-widest">
                  <Info size={14} /> Foco em Operações de 51-200 vidas.
                </div>
              </div>

              <div className="md:w-1/2 bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                <ul className="space-y-4">
                  {[
                    'Disponibilidade 24/7 (Zero Fila)',
                    'Interface via WhatsApp (Zero App)',
                    'Ativação em 24h (Zero TI)',
                    'Atestados com Validade Jurídica',
                    'Painel de Gestão de ROI',
                    'Suporte Executivo Dedicado'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-sm">
                      <Check size={18} className="text-[#51dcec]" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-10 text-xs font-bold uppercase tracking-widest">
            *Sujeito a análise de perfil de absenteísmo e porte da empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
