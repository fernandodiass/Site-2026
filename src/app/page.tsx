import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500/80 block mb-4">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white uppercase">
            Soluções <span className="text-zinc-500 font-light">Sob Medida</span>
          </h2>
        </div>
        <Services />
      </section>

      {/* 3. SEÇÃO DE PROJETOS */}
      <section id="projetos" className="py-24 border-t border-white/5 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-500/80 block mb-4">
            Portfolio Selecionado
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white uppercase">
            Projetos em <span className="text-zinc-500 font-light">Destaque</span>
          </h2>
        </div>
        <Projects />
      </section>

      <Footer />
    </main>
  );
}