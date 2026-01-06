
import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Methodology from '../components/Methodology';
import IdealFit from '../components/IdealFit';
import Plans from '../components/Plans';
import ContactForm from '../components/ContactForm';
import SocialProof from '../components/SocialProof';
import RoiCalculator from '../components/RoiCalculator';

export default function LandingPage() {
  return (
    <div className="w-full font-sans text-gray-800 scroll-smooth">
      {/* 1. CLAREZA: O que é e para quem é */}
      <Hero />

      {/* 2. PROVA: Resultados rápidos */}
      <SocialProof />

      {/* 3. O PROBLEMA: O custo da cadeira vazia */}
      <ProblemSolution />

      {/* 4. A LÓGICA: Calculadora de ROI */}
      <RoiCalculator />

      {/* 5. A SIMPLICIDADE: Como funciona em 3 passos */}
      <Methodology />

      {/* 6. O FILTRO: Para quem é / Para quem não é */}
      <IdealFit />
      
      {/* 7. O MODELO: Transparência de Preço */}
      <Plans />

      {/* 8. AÇÃO: Convite seletivo */}
      <ContactForm />
    </div>
  );
}
