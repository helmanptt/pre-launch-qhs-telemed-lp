
import React from 'react';
import { X, Check, TrendingDown, Target } from 'lucide-center';
import { XCircle, CheckCircle, Target as TargetIcon } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#173577] mb-6">O Vazamento de Caixa Silencioso.</h2>
            <p className="text-xl text-gray-600">Planos de saúde tradicionais são feitos para catástrofes. A QHS foi feita para o dia a dia da operação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            {/* O Modelo Quebrado */}
            <div className="p-10 bg-gray-50 border-r border-gray-200">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8">Saúde Reativa (Plano Comum)</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <span className="text-gray-500 font-medium">Jornada de 6h a 8h de ausência para casos simples (gripe, dor lombar).</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <span className="text-gray-500 font-medium">Sinistralidade imprevisível que estoura o orçamento do RH.</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <span className="text-gray-500 font-medium">Barreira de uso: apps complexos e senhas esquecidas.</span>
                </li>
              </ul>
            </div>

            {/* A Ferramenta Operacional */}
            <div className="p-10 bg-[#f2f9fc]">
              <h3 className="text-sm font-black text-[#173577] uppercase tracking-widest mb-8">Saúde Ativa (QHS Telemed)</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} strokeWidth={3} />
                  <span className="text-[#173577] font-bold">Resolução em 15 min. O colaborador volta ao posto no mesmo período.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} strokeWidth={3} />
                  <span className="text-[#173577] font-bold">Investimento Fixo de R$ 20. Margem de lucro protegida.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-green-600 shrink-0 mt-1" size={20} strokeWidth={3} />
                  <span className="text-[#173577] font-bold">Acesso via WhatsApp: Adoção imediata por 100% do time.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-[#173577] p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="bg-[#51dcec] p-4 rounded-xl text-[#173577]">
              <TargetIcon size={32} />
            </div>
            <div>
              <h4 className="text-white text-xl font-bold mb-1">Nosso KPI é a sua Disponibilidade.</h4>
              <p className="text-blue-100 text-lg">Tratamos a saúde como uma variável de manutenção preventiva da sua mão de obra.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
