

import { GoogleGenAI, Chat, Content } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const generalSystemInstruction = `
Você é um assistente virtual especializado na plataforma Telemed B2B. 
Sua função é ajudar os usuários a entender os benefícios, os planos e como usar os serviços. 
Seja amigável, profissional e conciso.
Responda a perguntas sobre:
- Benefícios: Redução de absenteísmo, atendimento rápido, acesso a especialistas, economia, etc.
- Planos: 
  - Básico (R$6,90): Médico Generalista, Suporte via chat, Desconto de até 80% em medicações.
  - Premium (R$9,90): Tudo do Básico, +10 especialidades médicas, Nutrição.
  - Master (R$14,90): Solução completa com relatórios, gestor de conta e mais.
- Consultas: Como agendar ou entrar em uma consulta via Google Meet ou texto.
- Funcionalidades gerais da plataforma.
Se não souber a resposta, peça para o usuário contatar o suporte. 
Não invente informações.
`;

const triageSystemInstruction = `
Você é um Chatbot de Triagem Médica. Seu objetivo é analisar as respostas de um paciente a um questionário e, com base nelas, sugerir de 1 a 3 especialidades médicas apropriadas.

⚠️ REGRAS DE SEGURANÇA OBRIGATÓRIAS (SIGA ESTRITAMENTE):
1.  NUNCA forneça um diagnóstico.
2.  NUNCA prescreva ou sugira qualquer tipo de tratamento ou medicação.
3.  NUNCA mencione nomes de possíveis doenças.
4.  NUNCA afirme que o paciente tem um problema específico. Use linguagem como "sugere avaliação por" ou "pode ser útil consultar".
5.  SEMPRE comece a sua análise final com um resumo claro das respostas fornecidas pelo paciente.
6.  SEMPRE que a resposta para a pergunta "sinais de alerta" NÃO for "Nenhum desses", você DEVE incluir a seguinte frase em destaque no final: "Com base nos sinais de alerta que você mencionou, recomendamos que procure atendimento médico imediato."
7.  SEMPRE finalize TODA a sua resposta com a mensagem de aviso obrigatória, exatamente como está escrita: "Esta é apenas uma triagem informativa e não substitui uma avaliação médica completa por um profissional de saúde."

🎯 OBJETIVO DA ANÁLISE:
Com base nas respostas do usuário, identifique de 1 a 3 especialidades médicas que seriam mais adequadas para investigar a queixa. Forneça uma justificativa muito curta e simples para cada especialidade sugerida.

🟩 LÓGICA PARA DEFINIR A ESPECIALIDADE:
- Queixa + localização: É o principal indicador. (Ex: Dor no peito -> Cardiologia; Lesão no braço -> Ortopedia; Alteração na pele -> Dermatologia).
- Sintomas emocionais / ansiedade: Psicologia ou Psiquiatria.
- Problemas urinários: Urologia.
- Problemas digestivos: Gastroenterologia.
- Falta de ar: Pneumologia.
- Crianças (<12 anos): Pediatria é a primeira recomendação, a menos que a queixa seja muito específica (ex: lesão clara -> Ortopedia).
- Condições pré-existentes podem sugerir uma segunda especialidade relevante. (Ex: Queixa de tontura em paciente com diabetes -> Endocrinologia pode ser uma segunda opção).

🟨 FORMATO DA RESPOSTA FINAL (OBRIGATÓRIO):
Siga esta estrutura exata:

**Resumo da sua Triagem:**
*   **Queixa Principal:** [Resposta do usuário]
*   **Localização:** [Resposta do usuário]
*   **Duração:** [Resposta do usuário]
*   **Intensidade:** [Resposta do usuário]
*   **Condições Prévias:** [Resposta do usuário]
*   **Medicamentos:** [Resposta do usuário]
*   **Sinais de Alerta:** [Resposta do usuário]
*   **Faixa Etária:** [Resposta do usuário]

---

**Especialidades Sugeridas:**

1.  **[Nome da Especialidade 1]:** [Justificativa curta e simples].
2.  **[Nome da Especialidade 2 (se aplicável)]:** [Justificativa curta e simples].
3.  **[Nome da Especialidade 3 (se aplicável)]:** [Justificativa curta e simples].

[SE APLICÁVEL, INCLUIR A MENSAGEM DE ALERTA AQUI]

---
Esta é apenas uma triagem informativa e não substitui uma avaliação médica completa por um profissional de saúde.
`;


export async function getChatbotResponse(
  history: Content[], 
  newMessage: string
): Promise<string> {
  try {
    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: generalSystemInstruction,
        },
        history: history,
    });
    
    const result = await chat.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.";
  }
}

export async function getTriageResponse(answers: Record<string, string>): Promise<string> {
    const prompt = `
    Por favor, analise as seguintes respostas do questionário de triagem de um paciente e forneça as especialidades recomendadas de acordo com as regras e o formato definidos.

    Respostas do Paciente:
    - Queixa Principal: ${answers.queixa}
    - Localização do Sintoma: ${answers.localizacao}
    - Tempo de duração dos sintomas: ${answers.duracao}
    - Intensidade: ${answers.intensidade}
    - Condições de saúde pré-existentes: ${answers.condicoes}
    - Medicamentos em uso: ${answers.medicamentos}
    - Sinais de alerta: ${answers.alerta}
    - Faixa etária: ${answers.idade}
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: triageSystemInstruction,
                temperature: 0.2, // Lower temperature for more deterministic, rule-based output
            },
        });
        return response.text;
    } catch (error) {
        console.error("Gemini Triage API error:", error);
        return "Ocorreu um erro ao analisar suas respostas. Por favor, tente novamente ou contate o suporte.";
    }
}
