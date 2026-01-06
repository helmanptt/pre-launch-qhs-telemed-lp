
import React from 'react';
import { Target, ShieldAlert } from 'lucide-react';

const IdealFit: React.FC = () => {
  return (
    <section className="py-24 bg-[#173577]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Para quem é */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-black text-[#173577] mb-8 flex items-center gap-3">
               <Target className="text-[#51dcec]" size={28} /> Para quem é
            </h3>
            <ul className="space-y-5">
              {[
                'Empresas entre 51 e 200 colaboradores.',
                'Gestores que sofrem com faltas de "atestado de 1 dia".',
                'RHs cansados de burocracia e implantação lenta.',
                'Negócios que buscam ROI claro e imediato.'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-bold leading-tight">
                  <div className="w-1.5 h-1.5 bg-[#51dcec] rounded-full mt-2 shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
               <ShieldAlert className="text-red-400" size={28} /> Para quem não é
            </h3>
            <ul className="space-y-5">
              {[
                'Quem busca apenas o preço mais baixo do mercado.',
                'Empresas que não priorizam o bem-estar do time.',
                'Quem acredita que telemedicina é apenas "chat com bot".',
                'Multinacionais com processos de decisão de 12 meses.'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-blue-100/70 font-medium leading-tight italic">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealFit;
