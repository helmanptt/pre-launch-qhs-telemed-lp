import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

const EmployeesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-corporateBlue text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="inline-block bg-white/10 text-techBlue font-extrabold px-4 py-1.5 rounded-full text-xs tracking-wide mb-6 border border-white/10">
              PARA COLABORADORES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight">
              Saúde na palma da mão, onde estiverem
            </h2>
            <p className="text-base sm:text-lg text-blue-50/90 mb-8 sm:mb-10 leading-relaxed">
              Ofereça um benefício que seu time realmente valoriza. Cuidado imediato, sem filas de espera e com total privacidade.
            </p>
            <ul className="space-y-5 sm:space-y-6">
              <li className="flex items-center gap-4">
                <ShieldCheck className="text-techBlue flex-shrink-0" size={26} />
                <span className="text-lg sm:text-xl text-white font-medium">Atendimento médico 24h por dia</span>
              </li>
              <li className="flex items-center gap-4">
                <ShieldCheck className="text-techBlue flex-shrink-0" size={26} />
                <span className="text-lg sm:text-xl text-white font-medium">Receitas médicas digitais aceitas em todo país</span>
              </li>
              <li className="flex items-center gap-4">
                <ShieldCheck className="text-techBlue flex-shrink-0" size={26} />
                <span className="text-lg sm:text-xl text-white font-medium">Atestados digitais com certificação</span>
              </li>
              <li className="flex items-center gap-4">
                <ShieldCheck className="text-techBlue flex-shrink-0" size={26} />
                <span className="text-lg sm:text-xl text-white font-medium">Sigilo absoluto e segurança de dados</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[10px] sm:border-[12px] rounded-[2.5rem] h-[450px] sm:h-[500px] w-[260px] sm:w-[280px] shadow-2xl transform scale-95 sm:scale-100">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] sm:-left-[15px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] sm:-left-[15px] top-[124px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[13px] sm:-right-[15px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
                <div className="bg-corporateBlue h-24 w-full p-6 flex items-end">
                  <div className="text-white font-bold text-lg">Olá, João</div>
                </div>
                <div className="p-5 space-y-4 bg-lightSurface flex-grow">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-techBlue rounded-full flex items-center justify-center text-corporateBlue flex-shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-corporateBlue block">Plantão 24h</span>
                      <span className="text-xs text-gray-500">Médico disponível agora</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 animate-pulse">
                    <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 animate-pulse delay-75">
                    <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="p-4 bg-white border-t">
                  <div className="bg-techBlue text-corporateBlue text-center py-3 rounded font-bold text-sm shadow-lg">Iniciar Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeesSection;