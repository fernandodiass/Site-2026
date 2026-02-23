"use client";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  // CONFIGURAÇÃO DO SEU WHATSAPP
  const meuNumero = "5562984468562"; 
  const mensagem = encodeURIComponent("Olá Fernando! Vi seu portfólio e gostaria de conversar.");
  const whatsappUrl = `https://wa.me/${meuNumero}?text=${mensagem}`;

  const serviceStrings = [
    "Dashboards de Alta Performance",
    2500,
    "Landing Pages de Integração",
    2500,
    "Engenharia de Prompts & IA",
    2500,
  ];

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-[#09090b]">
      
      {/* --- PLANO DE FUNDO ESTÁTICO E SUAVE --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.12]" />
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* SUB-TAG SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-blue-500/80">
            Especialista em:
          </span>
        </motion.div>

        {/* HEADLINE COM ESTABILIZAÇÃO DE MOVIMENTO */}
<div className="relative mb-10 flex justify-center items-center min-h-20 md:min-h-30">
  <motion.h1
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 1.2 }}
    /* Ajustes principais:
       1. leading-[1.5] e pt-6 para o til não sumir.
       2. antialiased para suavizar a fonte.
       3. h-full para manter o container fixo.
    */
    className="relative flex items-center justify-center text-2xl md:text-5xl font-semibold tracking-tight antialiased leading-normal pt-6"
  >
    <div className="flex items-center justify-center">
      <TypeAnimation
        sequence={serviceStrings}
        wrapper="span"
        speed={50}
        deletionSpeed={70}
        repeat={Infinity}
        cursor={false}
        /* Adicionado inline-block e text-center para estabilizar.
           O padding vertical (py-2) evita o corte do degradê no topo e base.
        */
        className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 uppercase inline-block py-2 text-center"
      />
      
      {/* CURSOR ANIMADO - Agora com margem fixa para não empurrar o texto */}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        className="ml-2 w-1.5 h-7 md:w-2 md:h-11 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0"
      />
    </div>
  </motion.h1>
</div>

        {/* TEXTO DE APOIO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6 mb-12"
        >
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto font-normal italic leading-relaxed">
            Projetando ecossistemas digitais onde dados se tornam decisões e processos complexos se tornam automação de alta performance.
          </p>
        </motion.div>

        {/* BOTÃO CTA WHATSAPP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-sm hover:border-blue-500/50 overflow-hidden"
          >
            <span className="relative z-10 text-[10px] uppercase tracking-[0.4em]">
              Vamos conversar
            </span>
            <MessageSquare size={14} className="relative z-10 text-blue-500 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full opacity-20" />
          </a>
        </motion.div>
      </div>     

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#09090b] to-transparent z-20" />
    </section>
  );
}