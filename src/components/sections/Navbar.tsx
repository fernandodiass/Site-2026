"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" }, // Mudei de "#" para "#inicio" para ser mais preciso
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLElement, MouseEvent>, href: string) => {
    e.preventDefault();
    
    // 1. Fecha o menu primeiro
    setIsMenuOpen(false); 
    
    // 2. Pequeno delay para garantir que o menu começou a fechar antes do scroll
    setTimeout(() => {
      if (href === "#inicio" || href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={(e) => handleScroll(e, "#inicio")}
        >
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
            <Image src="/logo.svg" alt="Logo Fernando" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col justify-center">            
            <span className="text-[14px] font-medium tracking-[0.3em] text-zinc-500 leading-none mt-1 uppercase">
              Fernando Dev
            </span>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 right-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden text-zinc-400 hover:text-white outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE ANIMADO */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-white/5 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-8 py-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-[12px] font-bold uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}