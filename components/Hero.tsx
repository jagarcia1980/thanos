import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToPhilosophy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('filosofia')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-slate-900 pt-36 pb-16 sm:pt-48 sm:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-thanos-700/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-thanos-300 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Versión Beta v4.11 disponible
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          <span className="block">THANOS</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-thanos-300 via-purple-300 to-indigo-300 text-2xl sm:text-3xl mt-2 font-normal">
            Talento Humano: Análisis de Narrativa Original y Singular
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
          Premiar la genialidad, no penalizar la herramienta. Filtra el ruido sintético para encontrar la voz humana en los trabajos de tus alumnos.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://huggingface.co/spaces/jagarcia1980/Thanos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-gray-100 transition-all md:text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <Sparkles className="w-5 h-5 mr-2 text-thanos-600" />
            Probar en HuggingFace
          </a>
          <a
            href="#filosofia"
            onClick={handleScrollToPhilosophy}
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-full text-white hover:bg-slate-800 transition-colors md:text-lg"
          >
            Saber más
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        <div className="mt-12 text-slate-400 text-sm">
          <p>Creado por docentes para docentes en Andalucía 🇪🇸</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;