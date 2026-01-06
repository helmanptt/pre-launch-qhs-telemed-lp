import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section id="resultados" className="py-12 bg-white -mt-10 relative z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-corporateBlue rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-techBlue mb-2 tracking-tight">80%</div>
              <p className="text-blue-100 font-medium text-sm sm:text-base">dos casos resolvidos via teleconsulta</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-techBlue mb-2 tracking-tight">-40%</div>
              <p className="text-blue-100 font-medium text-sm sm:text-base">na emissão de atestados de curto prazo</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-techBlue mb-2 tracking-tight">15min</div>
              <p className="text-blue-100 font-medium text-sm sm:text-base">tempo médio de espera para atendimento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;