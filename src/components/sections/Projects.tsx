"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutPanelLeft, MousePointerClick, Terminal } from "lucide-react";

const projects = [
  {
    title: "Lumina Dashboard",
    category: "Análise de Dados & Finanças",
    description: "Dashboard de gestão financeira de alta performance com processamento de dados em tempo real via integração de API.",
    techs: ["React/Vite", "Tailwind", "Recharts", "Api Json"],
    icon: <LayoutPanelLeft className="text-blue-500" size={32} />,
    image: "/projetos/lumina_dashboard.jpg",
    link: "https://lumina-dash.vercel.app/",
    github: "https://github.com/fernandodiass/Lumina-dashboard" 
  },
  {
    title: "Nexus LP",
    category: "Landing Page de Integração",
    description: "Landing Page de conversão otimizada com integração direta via Webhooks para CRM e automações diversas.",
    techs: ["Framer Motion", "n8n", "Webhooks"],
    icon: <MousePointerClick className="text-emerald-500" size={32} />,
    image: "/projetos/nexus_lp.jpg",
    link: "https://nexuslp.vercel.app/",
    github: "https://github.com/fernandodiass/nexus-lp"
  },
  {
    title: "Aura Chat AI",
    category: "Engenharia de IA e RAG",
    description: "Chatbot com arquitetura RAG (Retrieval-Augmented Generation) e API da Groq para fornecer respostas contextuais de latência ultra-baixa.",
    techs: ["LangChain", "OpenAI", "Vector DB"],
    icon: <Terminal className="text-purple-500" size={32} />,
    image: "/projetos/aura_chat_ai.jpg",
    link: "https://aura-ai-fernando.vercel.app",
    github: "https://github.com/fernandodiass/AURA-AI" 
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-900/20 border border-white/5 rounded-sm overflow-hidden hover:border-blue-500/30 transition-all duration-500"
          >
            <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
              <div 
                className="w-full h-full bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#09090b] to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                {project.title}
              </h3>
              
              <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6 h-20 overflow-hidden">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techs.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-500 rounded-md group-hover:border-blue-500/30 group-hover:text-zinc-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-white hover:text-blue-500 transition-colors"
                >
                  Ver Case <ExternalLink size={12} />
                </a>
                
                {/* ALTERAÇÃO AQUI: Link do GitHub dinâmico */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-white transition-colors ml-auto"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}