import React from 'react';
import { TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-techBlue">
            <div className="w-14 h-14 bg-corporateBlue/5 rounded-lg flex items-center justify-center mb-6 text-corporateBlue">
              <TrendingDown size={30} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Menos Absenteísmo</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Evite que uma simples dor de cabeça vire um dia inteiro de folga. Resolvemos 80% dos casos remotamente.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-techBlue">
            <div className="w-14 h-14 bg-corporateBlue/5 rounded-lg flex items-center justify-center mb-6 text-corporateBlue">
              <Clock size={30} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Rapidez no Atendimento</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Seu colaborador fala com um médico em minutos. Sem agendamento prévio, sem deslocamento, sem espera.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-techBlue">
            <div className="w-14 h-14 bg-corporateBlue/5 rounded-lg flex items-center justify-center mb-6 text-corporateBlue">
              <ShieldCheck size={30} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Atestados Éticos</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Controle rigoroso e ético na emissão de atestados e receitas, garantindo a segurança jurídica da sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;