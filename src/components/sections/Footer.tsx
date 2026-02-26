"use client";
import { ChevronUp, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const meuNumero = "5562984468562"; 
  const mensagem = encodeURIComponent("Olá Fernando! Vi seu portfólio e gostaria de conversar.");
  const whatsappUrl = `https://wa.me/${meuNumero}?text=${mensagem}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contato" className="py-16 border-t border-white/5 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-6">        
        
        <div className="flex justify-center mb-12">
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-zinc-600 hover:text-white transition-all duration-300"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Início</span>
            <div className="p-2 rounded-full border border-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
              <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">          
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Disponível para novos projetos</span>
            </div>
            <p className="text-[10px] text-zinc-600 tracking-widest uppercase">
              © 2017 - {currentYear} — Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">            
           
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-500 group shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Chamar no WhatsApp</span>
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          
            <div className="flex gap-6 border-l border-white/10 pl-8 ml-2">
              <a href="https://github.com/fernandodiass" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/fdsdigital/" target="_blank" className="text-zinc-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}