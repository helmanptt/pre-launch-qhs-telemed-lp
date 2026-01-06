
import React, { useState } from 'react';
import { Calculator, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';

const RoiCalculator: React.FC = () => {
  const [employees, setEmployees] = useState('');
  const [avgCost, setAvgCost] = useState('');
  const [absenceDays, setAbsenceDays] = useState('');

  const [results, setResults] = useState<{
    monthlySavings: number;
    annualSavings: number;
    showWarning: boolean;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const numEmployees = parseInt(employees, 10);
    const costPerEmployee = parseFloat(avgCost);
    const daysAbsent = parseInt(absenceDays, 10);

    if (isNaN(numEmployees) || isNaN(costPerEmployee) || isNaN(daysAbsent) || numEmployees < 0 || costPerEmployee < 0 || daysAbsent < 0) {
        setResults(null);
        return;
    }

    const costOfAbsence = (costPerEmployee / 22) * daysAbsent;
    const reducedCost = costOfAbsence / 2;
    const planCost = numEmployees * 15; // Média estimada
    let finalSavings = reducedCost - planCost;
    let showWarning = false;

    if (finalSavings < 0) {
      finalSavings = 0;
      showWarning = true;
    }

    setResults({
      monthlySavings: finalSavings,
      annualSavings: finalSavings * 12,
      showWarning: showWarning,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const inputStyles = "w-full px-4 py-3.5 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51dcec] transition-shadow text-base text-gray-800";

  return (
    <section id="calculadora" className="py-16 sm:py-24 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#173577] tracking-tight">Calcule sua Economia</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubra o potencial de redução de custos que sua empresa terá com o protocolo QHS.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <form onSubmit={handleCalculate} className="space-y-6">
                    <div>
                        <label htmlFor="employees" className="block text-sm font-semibold text-gray-700 mb-2">Número de funcionários</label>
                        <input type="number" id="employees" value={employees} onChange={e => setEmployees(e.target.value)} min="0" placeholder="Ex: 50" required className={inputStyles} />
                    </div>
                    <div>
                        <label htmlFor="avgCost" className="block text-sm font-semibold text-gray-700 mb-2">Custo médio mensal por funcionário (R$)</label>
                        <input type="number" id="avgCost" value={avgCost} onChange={e => setAvgCost(e.target.value)} min="0" step="0.01" placeholder="Ex: 2400" required className={inputStyles} />
                    </div>
                    <div>
                        <label htmlFor="absenceDays" className="block text-sm font-semibold text-gray-700 mb-2">Dias de afastamento no mês (total)</label>
                        <input type="number" id="absenceDays" value={absenceDays} onChange={e => setAbsenceDays(e.target.value)} min="0" placeholder="Ex: 30" required className={inputStyles} />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 bg-[#51dcec] text-[#173577] font-black py-3.5 rounded-lg hover:bg-[#51dcec]/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
                    >
                        <Calculator size={20} strokeWidth={2.5} />
                        CALCULAR ECONOMIA
                    </button>
                </form>

                <div className="text-center bg-[#173577]/5 p-6 rounded-xl border border-[#173577]/10 min-h-[300px] flex flex-col justify-center">
                    {results ? (
                        <div className="animate-fade-in">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <h3 className="text-lg font-bold text-gray-800">Economia Estimada</h3>
                                <div className="relative group">
                                    <HelpCircle size={18} className="text-gray-500 cursor-pointer" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-4 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none text-left">
                                        Cálculo baseado em 50% de redução no absenteísmo por meio de triagem digital.
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <p className="text-xs sm:text-sm font-bold text-[#173577] uppercase tracking-wider mb-1">Economia Mensal</p>
                                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-600 break-words">{formatCurrency(results.monthlySavings)}</p>
                            </div>
                            <div>
                                <p className="text-xs sm:text-sm font-bold text-[#173577] uppercase tracking-wider mb-1">Economia Anual</p>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#173577] break-words">{formatCurrency(results.annualSavings)}</p>
                            </div>
                            
                            <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-[#173577] font-bold border-b-2 border-[#51dcec] hover:text-[#51dcec] transition-colors group">
                                Quero essa economia no pré-lançamento <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 animate-fade-in py-8">
                            <TrendingUp size={48} className="mb-4 text-gray-300"/>
                            <p className="font-semibold text-lg text-[#173577]">Seus resultados aparecerão aqui.</p>
                            <p className="text-sm mt-2 text-gray-400">Preencha e descubra o ROI.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
