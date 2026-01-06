import React from 'react';
import { TrendingDown, Clock, MousePointerClick } from 'lucide-react';

const ManagersSection: React.FC = () => {
  return (
    <section id="gestores" className="py-16 md:py-24 bg-[#f2f9fc]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="inline-block bg-[#173577] text-white font-extrabold px-4 py-1.5 rounded-sm text-xs tracking-widest uppercase mb-6">
              Gestão Simplificada
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173577] mb-6 leading-tight">
              Pare de perder dinheiro com processos arcaicos.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed font-medium">
              Esqueça integrações complexas de software. A QHS funciona como uma extensão do seu RH, cuidando da saúde do time via Concierge Digital.
            </p>
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="mt-1 bg-white p-2 rounded shadow-sm text-[#173577] h-fit border border-[#51dcec]/20">
                  <TrendingDown size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-[#173577] mb-1">Custo Previsível (Flat Fee)</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Sem surpresas de coparticipação. Você paga um valor fixo e acessível por vida. O resto é lucro operacional.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="mt-1 bg-white p-2 rounded shadow-sm text-[#173577] h-fit border border-[#51dcec]/20">
                  <MousePointerClick size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-[#173577] mb-1">Ativação Imediata</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Sem instalação de sistemas. Cadastramos sua base e liberamos o canal de WhatsApp exclusivo para seus colaboradores no mesmo dia.</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="mt-1 bg-white p-2 rounded shadow-sm text-[#173577] h-fit border border-[#51dcec]/20">
                  <Clock size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-[#173577] mb-1">Auditoria de Saúde</h4>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Receba relatórios mensais que mostram exatamente quanto você economizou evitando idas ao Pronto Socorro.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full px-2 sm:px-0">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#173577]/10 shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute top-0 right-0 bg-[#51dcec] w-32 h-32 rounded-full blur-[60px] opacity-20"></div>
              
              <div className="bg-gradient-to-br from-[#f2f9fc] to-white rounded-xl border border-[#51dcec]/30 p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-black text-gray-400 text-xs uppercase tracking-wider">Resultado Real (Mês 1)</h4>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">+ ROI POSITIVO</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-[#173577] mb-2 tracking-tighter">R$ 14.250</div>
                <div className="text-gray-500 text-sm font-medium">
                  Economizados em horas de trabalho recuperadas.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#173577] text-white rounded-xl shadow-lg p-5">
                  <div className="text-[#51dcec] text-xs font-bold uppercase mb-1">Custo da Solução</div>
                  <div className="text-2xl font-bold">R$ 990</div>
                </div>
                <div className="bg-[#51dcec] text-[#173577] rounded-xl shadow-lg p-5">
                  <div className="text-[#173577]/70 text-xs font-bold uppercase mb-1">Lucro Líquido</div>
                  <div className="text-2xl font-bold">R$ 13.260</div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-6">
                *Dados baseados na média de clientes com 100 vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagersSection;