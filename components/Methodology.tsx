
import React from 'react';
import { Smartphone, ShieldPlus, CheckSquare } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#173577] mb-6">Integração Zero. Impacto Total.</h2>
          <p className="text-xl text-gray-600">Não pedimos tempo do seu time de TI. A QHS roda sobre a infraestrutura que seus funcionários já usam: o WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-[#173577] mb-8">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-black text-[#173577] mb-4">Ponto de Contato</h3>
            <p className="text-gray-600 font-medium leading-relaxed">Colaborador envia uma mensagem. Identificação imediata via banco de dados seguro.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-[#173577] mb-8">
              <ShieldPlus size={32} />
            </div>
            <h3 className="text-xl font-black text-[#173577] mb-4">Triagem Clínica</h3>
            <p className="text-gray-600 font-medium leading-relaxed">Protocolo médico focado em resolutividade e retorno seguro à atividade.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-[#173577] mb-8">
              <CheckSquare size={32} />
            </div>
            <h3 className="text-xl font-black text-[#173577] mb-4">Gestão de Dados</h3>
            <p className="text-gray-600 font-medium leading-relaxed">O RH recebe relatórios de saúde populacional para decisões estratégicas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
