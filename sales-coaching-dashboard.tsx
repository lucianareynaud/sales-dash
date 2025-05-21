import React, { useState } from 'react';
import { BarChart2, Clock, MessageSquare, Award, ThumbsUp, AlertTriangle, ArrowRight, CheckCircle, PieChart, Zap, FileText } from 'lucide-react';

const SalesCoachingDashboard = () => {
  const [activeTab, setActiveTab] = useState('visao-geral');
  
  // Dados simulados baseados na transcrição da reunião
  const callData = {
    date: "16/05/2025",
    duration: "58 minutos",
    participants: ["Harold (Vendedor)", "Rodrigo (Vendedor)", "Renato (Cliente)", "Danilo (Cliente)", "Tim (Cliente)"],
    talkRatio: {
      "Harold": 25,
      "Rodrigo": 20,
      "Renato": 30,
      "Danilo": 20,
      "Tim": 5
    },
    keyTopics: [
      { topic: "Inteligência Artificial", mentions: 12, sentiment: "positivo" },
      { topic: "Redução de Custos", mentions: 8, sentiment: "positivo" },
      { topic: "Gestão de Frota", mentions: 15, sentiment: "neutro" },
      { topic: "Análise de Dados", mentions: 10, sentiment: "positivo" },
      { topic: "Manutenção Preditiva", mentions: 7, sentiment: "positivo" }
    ],
    keyMoments: [
      { time: "05:12", description: "Cliente revela dor principal: gestão de frota e manutenção", type: "pain" },
      { time: "12:45", description: "Cliente explica desafio com dados: 'temos muita informação mas não usamos de forma assertiva'", type: "challenge" },
      { time: "18:30", description: "Vendedor identifica oportunidade de Data Lake e preditividade", type: "opportunity" },
      { time: "32:15", description: "Apresentação de cases pelo vendedor", type: "presentation" },
      { time: "48:20", description: "Proposta de próximos passos (workshop de 2 dias)", type: "nextSteps" }
    ],
    competitorMentions: [
      { competitor: "Intel", mentions: 1, context: "parceria para trabalho com dados" }
    ],
    questions: [
      { time: "03:18", question: "Quantos caminhões vocês operam hoje? Em qual região?", askedBy: "Harold", answeredBy: "Renato", quality: "alta" },
      { time: "07:30", question: "Qual o volume de entregas diárias?", askedBy: "Harold", answeredBy: "Renato", quality: "alta" },
      { time: "26:45", question: "Quais sistemas são importantes para vocês?", askedBy: "Harold", answeredBy: "Danilo", quality: "alta" },
      { time: "38:12", question: "Vocês usam IoT ou mensurações de sistemas?", askedBy: "Rodrigo", answeredBy: "Renato", quality: "alta" }
    ],
    nextSteps: [
      { description: "Agendar workshop de 2 dias para diagnóstico completo", owner: "Harold", status: "pendente" },
      { description: "Enviar ata da reunião e proposta de datas", owner: "Harold", status: "pendente" },
      { description: "Renato e Danilo definirem usuários-chave para a próxima reunião", owner: "Cliente", status: "pendente" }
    ],
    coachingOpportunities: [
      { area: "Descoberta", description: "Poderia ter explorado mais a dor sobre fechamento contábil", severity: "média" },
      { area: "Personalização", description: "Excelente conexão com a dor do cliente sobre análise de dados de frota", severity: "baixa" },
      { area: "Escuta Ativa", description: "Boa captura da necessidade de trabalhar primeiro com dados de maior ROI", severity: "baixa" }
    ],
    winningBehaviors: [
      { behavior: "Proposta de valor clara", description: "Foco em ROI e resultados rápidos", score: 9 },
      { behavior: "Demonstração de expertise", description: "Exemplos de cases relevantes", score: 8 },
      { behavior: "Escuta ativa", description: "Captura precisa das dores", score: 7 },
      { behavior: "Próximos passos claros", description: "Workshop de diagnóstico bem estruturado", score: 9 }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                <Zap className="mr-2 text-blue-600" size={24} />
                Dashboard de Coaching de Vendas
              </h1>
              <div className="text-gray-500 mt-1">
                Reunião: Fadel Transporte - Implementação de IA • {callData.date}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fase: Descoberta de Necessidades
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Score: 8.5/10
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu de navegação em tabs */}
        <div className="bg-white rounded-lg shadow mb-6 overflow-x-auto">
          <div className="flex">
            <button 
              className={`px-4 py-3 font-medium text-sm border-b-2 ${activeTab === 'visao-geral' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('visao-geral')}
            >
              <div className="flex items-center">
                <BarChart2 size={18} className="mr-2" />
                <span>Visão Geral</span>
              </div>
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm border-b-2 ${activeTab === 'momentos-chave' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('momentos-chave')}
            >
              <div className="flex items-center">
                <Zap size={18} className="mr-2" />
                <span>Momentos-Chave</span>
              </div>
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm border-b-2 ${activeTab === 'topicos' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('topicos')}
            >
              <div className="flex items-center">
                <PieChart size={18} className="mr-2" />
                <span>Tópicos Discutidos</span>
              </div>
            </button>
            <button 
              className={`px-4 py-3 font-medium text-sm border-b-2 ${activeTab === 'transcricao' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('transcricao')}
            >
              <div className="flex items-center">
                <FileText size={18} className="mr-2" />
                <span>Transcrição</span>
              </div>
            </button>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna 1 */}
          <div className="lg:col-span-2 space-y-6">
            {/* KPIs */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Métricas da Reunião</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="text-blue-500 mr-3" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Duração</div>
                      <div className="text-xl font-bold">{callData.duration}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <MessageSquare className="text-green-500 mr-3" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Talk Ratio (Vendedor)</div>
                      <div className="text-xl font-bold">{callData.talkRatio["Harold"] + callData.talkRatio["Rodrigo"]}%</div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Award className="text-purple-500 mr-3" size={24} />
                    <div>
                      <div className="text-sm text-gray-500">Perguntas Feitas</div>
                      <div className="text-xl font-bold">{callData.questions.length}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Momentos-chave */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Momentos-Chave</h2>
              <div className="space-y-4">
                {callData.keyMoments.map((moment, idx) => (
                  <div key={idx} className="border-l-4 pl-4 py-2" style={{
                    borderColor: 
                      moment.type === 'pain' ? '#ef4444' : 
                      moment.type === 'challenge' ? '#f59e0b' : 
                      moment.type === 'opportunity' ? '#10b981' : 
                      moment.type === 'presentation' ? '#3b82f6' : '#8b5cf6'
                  }}>
                    <div className="flex">
                      <div className="text-sm text-gray-500 w-12">{moment.time}</div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-gray-500">
                          {moment.type === 'pain' ? 'Dor do Cliente' : 
                          moment.type === 'challenge' ? 'Desafio' : 
                          moment.type === 'opportunity' ? 'Oportunidade' : 
                          moment.type === 'presentation' ? 'Apresentação' : 'Próximos Passos'}
                        </div>
                        <div className="mt-1">{moment.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tópicos discutidos */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Tópicos Discutidos</h2>
              <div className="space-y-4">
                {callData.keyTopics.map((topic, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{topic.topic}</span>
                      <span className="text-gray-500 text-sm">{topic.mentions} menções</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          topic.sentiment === 'positivo' ? 'bg-green-500' : 
                          topic.sentiment === 'negativo' ? 'bg-red-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${(topic.mentions / 15) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2 - Sidebar */}
          <div className="space-y-6">
            {/* Distribuição de fala */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Distribuição de Fala</h2>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full border-8 border-gray-100 relative mb-4">
                  {/* Este é um placeholder visual simples para o gráfico de pizza */}
                  <div className="absolute inset-0 bg-blue-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}></div>
                  <div className="absolute inset-0 bg-green-500" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)' }}></div>
                  <div className="absolute inset-0 bg-purple-500" style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 0)' }}></div>
                  <div className="absolute inset-0 bg-yellow-500" style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0)' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm">Harold: {callData.talkRatio["Harold"]}%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm">Rodrigo: {callData.talkRatio["Rodrigo"]}%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Renato: {callData.talkRatio["Renato"]}%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm">Danilo/Tim: {callData.talkRatio["Danilo"] + callData.talkRatio["Tim"]}%</span>
                </div>
              </div>
            </div>

            {/* Pontos fortes */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <ThumbsUp className="mr-2 text-green-500" size={20} />
                Pontos Fortes
              </h2>
              <div className="space-y-3">
                {callData.winningBehaviors.filter(b => b.score >= 8).map((behavior, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <span className="font-medium">{behavior.behavior}:</span> {behavior.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Oportunidades de melhoria */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-amber-500" size={20} />
                Oportunidades de Melhoria
              </h2>
              <div className="space-y-3">
                {callData.coachingOpportunities.map((opportunity, idx) => (
                  <div key={idx} className="flex items-start">
                    <div 
                      className={`mr-2 h-2 w-2 mt-2 rounded-full flex-shrink-0 ${
                        opportunity.severity === 'alta' ? 'bg-red-500' : 
                        opportunity.severity === 'média' ? 'bg-amber-500' : 'bg-blue-500'
                      }`} 
                    />
                    <div>
                      <span className="font-medium">{opportunity.area}:</span> {opportunity.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Próximos passos */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <ArrowRight className="mr-2 text-blue-500" size={20} />
                Próximos Passos
              </h2>
              <div className="space-y-3">
                {callData.nextSteps.map((step, idx) => (
                  <div key={idx} className="border-b pb-3 last:border-0 last:pb-0">
                    <div className="font-medium">{step.description}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Responsável: {step.owner} • Status: {step.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transcrição (visível apenas quando selecionada) */}
        {activeTab === 'transcricao' && (
          <div className="bg-white p-6 rounded-lg shadow mt-6">
            <h2 className="text-lg font-semibold mb-4">Transcrição da Reunião</h2>
            <div className="max-h-96 overflow-y-auto space-y-4">
              <div className="pb-3 border-b">
                <div className="font-medium text-blue-600">Renato (05:12)</div>
                <p>Acho que a gente tem se provocado bastante. Como que a gente consegue usufruir da inteligência artificial de forma estratégica no nosso negócio? A gente tem muitos dados, Harold. Temos dados pra caramba, só que a gente não tem, a gente tem uma deficiência. Como que a gente usa esses dados de uma forma assertiva para a gente evoluir no quesito gestão?</p>
              </div>

              <div className="pb-3 border-b">
                <div className="font-medium text-blue-600">Danilo (12:45)</div>
                <p>O que eu percebo assim, a gente tem uma oportunidade, a gente tem uma, a Ana Fadel é uma empresa que ela tem uma gestão muito bacana, tem mais do que a média, em termos de BI, de informação disponível, de gestão do negócio... Acho que tem uma oportunidade, nós temos muita informação, mas a gente não é tão rápido na análise, na profundidade dela, pela quantidade de dados que tem, versus quanto a gente efetivamente tira proveito desses dados.</p>
              </div>

              <div className="pb-3 border-b">
                <div className="font-medium text-blue-600">Harold (48:20)</div>
                <p>Pessoal, o que eu acredito aqui, olhando o cenário de vocês, a gente é um grande parceiro no Brasil da Databricks, que hoje é a plataforma número um do mercado em Data Lake. O Danilo está até concordando aí. É um grande líder de mercado. É uma plataforma, a gente tem usado em diversos projetos. Nosso time tem mais de oito anos usando essa plataforma. O que ela faz? Basicamente, ela reúne todos os tipos de dados em um ambiente comum, e essa se torna a sua fonte única de dados.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesCoachingDashboard;
