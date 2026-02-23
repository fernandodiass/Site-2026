"use client";
import { BarChart3, BrainCircuit, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Dashboards de Alta Performance",
      description: "Interfaces analíticas ultravelozes que transformam dados complexos em decisões estratégicas em tempo real.",
      techs: ["Next.js 15", "TanStack Query", "Recharts", "RESTfuL API"],
      icon: <BarChart3 className="text-blue-500" size={32} />,
    },
    {
      title: "Landing Pages de Integração",
      description: "Páginas de alta conversão conectadas diretamente ao seu CRM, WhatsApp e sistemas de automação de marketing.",
      techs: ["Tailwind CSS", "Framer Motion", "Webhooks", "n8n/Make"],
      icon: <Zap className="text-emerald-500" size={32} />,
    },
    {
      title: "Engenharia de Prompts & IA",
      description: "Implementação de inteligência artificial e modelos de LLM personalizados para otimizar processos e atendimento.",
      techs: ["LangChain", "OpenAI API", "Gemini Pro", "Vector Databases"],
      icon: <BrainCircuit className="text-purple-500" size={32} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl border border-white/5 bg-zinc-900/40 hover:border-white/10 hover:bg-zinc-900/60 transition-all group flex flex-col h-full"
          >
            {/* Ícone */}
            <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
              {service.icon}
            </div>

            {/* Conteúdo */}
            <h3 className="text-xl font-bold mb-3 text-zinc-100">
              {service.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 grow">
              {service.description}
            </p>

            {/* Tecnologias (Badges) */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.techs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-500 rounded-md group-hover:border-blue-500/30 group-hover:text-zinc-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}