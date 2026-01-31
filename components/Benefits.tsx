import React, { useState } from 'react';
import { GraduationCap, Wrench, ChevronRight } from 'lucide-react';
import { BenefitProps } from '../types';

const Benefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'secondary' | 'fp'>('secondary');

  const secondaryBenefits: BenefitProps = {
    title: "Educación Secundaria",
    items: [
      {
        title: "Fomento de la Voz Propia",
        description: "Demuestra al alumno que su opinión y forma de expresarse tienen más valor que un texto perfecto de ChatGPT."
      },
      {
        title: "Evaluación Formativa Visual",
        description: "El alumno ve las partes 'verdes' vs 'amarillas', recibiendo feedback visual directo para autentificar su escritura."
      },
      {
        title: "Ahorro de Tiempo",
        description: "Pre-filtrado de trabajos para dedicar lectura profunda a textos originales y revisión rápida a reproducciones."
      }
    ]
  };

  const fpBenefits: BenefitProps = {
    title: "Formación Profesional (FP)",
    items: [
      {
        title: "Análisis de Código Fuente",
        description: "Detecta patrones de código generado vs. la lógica 'imperfecta' pero funcional de un estudiante (Python, Java, HTML)."
      },
      {
        title: "Memorias de Proyecto Reales",
        description: "Distingue entre memorias técnicas genéricas y narraciones reales de dificultades en la FCT."
      },
      {
        title: "Preparación Profesional",
        description: "Enseña que el valor en el mercado no es replicar máquinas, sino aportar la creatividad que ellas no tienen."
      }
    ]
  };

  return (
    <section id="ventajas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Ventajas para el Docente</h2>
          <p className="mt-4 text-slate-600">Adaptado a las necesidades específicas de cada etapa educativa.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-xl inline-flex">
            <button
              onClick={() => setActiveTab('secondary')}
              className={`px-6 py-3 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'secondary' 
                  ? 'bg-white text-thanos-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Secundaria
            </button>
            <button
              onClick={() => setActiveTab('fp')}
              className={`px-6 py-3 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'fp' 
                  ? 'bg-white text-thanos-700 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Wrench className="w-5 h-5" />
              Formación Profesional
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image/Illustration Side */}
            <div className={`transition-all duration-500 transform ${activeTab === 'secondary' ? 'order-1' : 'order-2 md:order-1'}`}>
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center p-8">
                    {activeTab === 'secondary' ? (
                         <div className="text-center">
                            <div className="inline-block p-4 rounded-full bg-indigo-500/20 mb-4">
                                <GraduationCap className="w-16 h-16 text-indigo-400" />
                            </div>
                            <h3 className="text-white text-xl font-bold">Pensamiento Crítico</h3>
                            <p className="text-slate-400 mt-2">Valorando el proceso sobre el resultado.</p>
                         </div>
                    ) : (
                        <div className="text-center">
                            <div className="inline-block p-4 rounded-full bg-teal-500/20 mb-4">
                                <Wrench className="w-16 h-16 text-teal-400" />
                            </div>
                            <h3 className="text-white text-xl font-bold">Competencia Técnica</h3>
                            <p className="text-slate-400 mt-2">Código funcional y memorias vividas.</p>
                         </div>
                    )}
                </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-8 ${activeTab === 'secondary' ? 'order-2' : 'order-1 md:order-2'}`}>
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        {activeTab === 'secondary' ? secondaryBenefits.title : fpBenefits.title}
                    </h3>
                    <div className="space-y-6">
                        {(activeTab === 'secondary' ? secondaryBenefits.items : fpBenefits.items).map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-thanos-100 flex items-center justify-center">
                                        <ChevronRight className="w-4 h-4 text-thanos-600" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                                    <p className="text-slate-600 mt-1">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;