
import React, { useState } from 'react';
import { ArrowRight, Lock, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <section id="contato" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] p-8 md:p-20 border border-gray-200 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#173577] mb-6">Aplicação para<br />Founding Client</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Selecionamos empresas com real dor de absenteísmo para co-criar os novos padrões de saúde ocupacional do Brasil.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock size={40} />
              </div>
              <h3 className="text-3xl font-black text-[#173577] mb-4">Aplicação Recebida.</h3>
              <p className="text-lg text-gray-600">Nossa diretoria analisará seus dados. Entraremos em contato via WhatsApp corporativo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Informações de Contato</label>
                <input type="text" placeholder="Seu Nome Completo" required className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#173577] font-medium bg-white" />
                <input type="email" placeholder="E-mail Executivo" required className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#173577] font-medium bg-white" />
                <input type="tel" placeholder="WhatsApp Corporativo" required className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#173577] font-medium bg-white" />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Perfil da Operação</label>
                <select required className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#173577] font-medium bg-white">
                  <option value="">Tamanho do Quadro (Colaboradores)</option>
                  <option value="51-100">51 a 100 colaboradores</option>
                  <option value="101-200">101 a 200 colaboradores</option>
                  <option value="201+">Acima de 200 (Customizado)</option>
                </select>
                <textarea placeholder="Qual sua principal métrica de absenteísmo hoje?" className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#173577] font-medium min-h-[120px] bg-white"></textarea>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#173577] text-white font-black text-xl py-6 rounded-2xl hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? 'Processando...' : (
                    <>SOLICITAR ACESSO EXCLUSIVO <ArrowRight size={24} strokeWidth={3} /></>
                  )}
                </button>
                <div className="flex items-center justify-center gap-6 mt-8 opacity-40">
                  <span className="flex items-center gap-1 text-[10px] font-black tracking-widest uppercase"><Lock size={12}/> Dados Criptografados</span>
                  <span className="flex items-center gap-1 text-[10px] font-black tracking-widest uppercase"><MessageCircle size={12}/> Atendimento Direto</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
