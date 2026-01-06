
import React from 'react';
import { Gift, Rocket, Users, BadgeCheck } from 'lucide-react';

const PreLaunchBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Gift className="text-[#51dcec]" size={32} />,
      title: "Condições Vitalícias",
      desc: "Desconto agressivo garantido para sempre para as primeiras 10 PMEs que entrarem neste ciclo."
    },
    {
      icon: <Rocket className="text-[#51dcec]" size={32} />,
      title: "Onboarding Prioritário",
      desc: "Implementação assistida pelo nosso time técnico para garantir ROI nos primeiros 30 dias."
    },
    {
      icon: <Users className="text-[#51dcec]" size={32} />,
      title: "Co-Criação Estratégica",
      desc: "Sua empresa ajuda a moldar nossos relatórios de saúde para que atendam exatamente às suas dores."
    },
    {
      icon: <BadgeCheck className="text-[#51dcec]" size={32} />,
      title: "Selo Founding Client",
      desc: "Acesso antecipado a novas funcionalidades e suporte concierge dedicado sem custo adicional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#173577] mb-4">O que você ganha entrando agora?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Não estamos apenas vendendo um serviço, estamos convidando parceiros estratégicos para construir o futuro da saúde corporativa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#f2f9fc] border border-gray-100 hover:shadow-xl transition-all group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{b.icon}</div>
              <h3 className="text-xl font-bold text-[#173577] mb-3">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreLaunchBenefits;
