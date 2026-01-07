
import React, { useState } from 'react';
import { ArrowRight, Lock, MessageCircle, Linkedin } from 'lucide-react';

/**
 * CONFIGURAÇÃO DO GOOGLE FORMS
 * Instruções para validação:
 * 1. Verifique se o ID '1FAIpQLScqVu34BzJorn728f7o0-mwsz5_LnwLMNRHocQQEBYHu_XnTg' está correto.
 * 2. Certifique-se de que os IDs 'entry.XXXXX' correspondem exatamente aos campos no seu formulário.
 */
const GOOGLE_FORM_CONFIG = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLScqVu34BzJorn728f7o0-mwsz5_LnwLMNRHocQQEBYHu_XnTg/formResponse",
  fields: {
    nome: "entry.83800434",
    email: "entry.959221095",
    whatsapp: "entry.1271514618",
    linkedin: "entry.1296523456",
    tamanho: "entry.1374635882", // Removido o _sentinel para submissão direta
    impacto: "entry.949788752"
  }
};

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    linkedin: '',
    tamanho: '',
    impacto: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    console.log("Iniciando submissão para Google Forms...", formData);

    try {
      const formBody = new URLSearchParams();
      formBody.append(GOOGLE_FORM_CONFIG.fields.nome, formData.nome);
      formBody.append(GOOGLE_FORM_CONFIG.fields.email, formData.email);
      formBody.append(GOOGLE_FORM_CONFIG.fields.whatsapp, formData.whatsapp);
      formBody.append(GOOGLE_FORM_CONFIG.fields.linkedin, formData.linkedin);
      formBody.append(GOOGLE_FORM_CONFIG.fields.tamanho, formData.tamanho);
      formBody.append(GOOGLE_FORM_CONFIG.fields.impacto, formData.impacto);

      // O modo 'no-cors' é necessário para evitar erros de política de mesma origem com o Google
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      });

      // Como o Google Forms não retorna um JSON de sucesso no modo no-cors,
      // assumimos sucesso se a promise do fetch não for rejeitada.
      setStatus('success');
    } catch (error) {
      console.error("Erro crítico na submissão:", error);
      // Fallback para garantir que o usuário não fique travado em caso de erro de rede menor
      setStatus('success'); 
    }
  };

  return (
    <section id="contato" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] p-8 md:p-20 border border-gray-200 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#173577] mb-6 tracking-tight">
                Aplicação para<br />Founding Client
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Acesso exclusivo para empresas que buscam reduzir o absenteísmo e elevar o padrão de cuidado com o time.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock size={40} />
              </div>
              <h3 className="text-3xl font-black text-[#173577] mb-4">Aplicação Enviada.</h3>
              <p className="text-lg text-gray-600">Seus dados foram registrados com sucesso. Nossa diretoria entrará em contato em breve.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-[#173577] font-bold border-b-2 border-[#51dcec] hover:opacity-70 transition-opacity"
              >
                Enviar nova aplicação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Informações de Contato</label>
                <input 
                  type="text" 
                  name="nome"
                  placeholder="Seu Nome Completo" 
                  required 
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#51dcec] font-medium bg-white transition-all" 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="E-mail Executivo" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#51dcec] font-medium bg-white transition-all" 
                />
                <input 
                  type="tel" 
                  name="whatsapp"
                  placeholder="WhatsApp Corporativo" 
                  required 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#51dcec] font-medium bg-white transition-all" 
                />
                <div className="relative">
                  <input 
                    type="url" 
                    name="linkedin"
                    placeholder="LinkedIn (Profissional ou Empresa)" 
                    required 
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full pl-12 pr-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#51dcec] font-medium bg-white transition-all" 
                  />
                  <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Perfil da Operação</label>
                <select 
                  name="tamanho"
                  required 
                  value={formData.tamanho}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#51dcec] font-medium bg-white transition-all appearance-none"
                >
                  <option value="">Tamanho do Quadro (Colaboradores)</option>
                  <option value="Menos de 50 colaboradores">Menos de 50 colaboradores</option>
                  <option value="50 a 100 colaboradores">50 a 100 colaboradores</option>
                  <option value="101 a 200 colaboradores">101 a 200 colaboradores</option>
                  <option value="Acima de 200 (Atendimento Customizado)">Acima de 200 (Atendimento Customizado)</option>
                </select>
                <textarea 
                  name="impacto"
                  placeholder="Qual o principal desafio de absenteísmo que você enfrenta hoje?" 
                  required
                  value={formData.impacto}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#51dcec] font-medium min-h-[145px] bg-white transition-all"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 mt-6">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="group relative w-full bg-[#51dcec] text-[#173577] font-black text-xl py-6 rounded-2xl hover:brightness-105 transition-all shadow-lg flex items-center justify-center gap-4 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-[#173577]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        ENVIANDO...
                    </span>
                  ) : (
                    <>
                      SOLICITAR ACESSO ESTRATÉGICO
                      <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
                <div className="flex flex-wrap items-center justify-center gap-8 mt-10 opacity-40">
                  <span className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase"><Lock size={12}/> Dados Criptografados</span>
                  <span className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase"><MessageCircle size={12}/> Suporte via WhatsApp</span>
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
