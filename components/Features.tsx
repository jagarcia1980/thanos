import React from 'react';
import { Upload, ScanEye, FileCheck, Copy } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
    <div className="w-12 h-12 bg-thanos-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-thanos-600 transition-colors duration-300">
      <Icon className="w-6 h-6 text-thanos-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Evaluación por Lotes",
      description: "Carga masiva de tareas (PDF, Word, Código, TXT) para analizar el ecosistema del aula en un solo clic, no alumno por alumno.",
      icon: Upload
    },
    {
      title: "Mapas de Calor Semánticos",
      description: "Visualización interactiva: amarillo para estructuras sintéticas, verde para evidencias de humanidad (coloquialismos, creatividad).",
      icon: ScanEye
    },
    {
      title: "Rúbricas Generativas",
      description: "THANOS genera automáticamente una rúbrica que pondera el 'Factor Humano', basándose en el enunciado y los errores comunes del grupo.",
      icon: FileCheck
    },
    {
      title: "Detección Peer-to-Peer",
      description: "Identificación de similitudes extremas entre alumnos, diferenciando claramente el plagio entre compañeros del uso de IA.",
      icon: Copy
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Características Principales</h2>
          <p className="mt-4 text-slate-600">Herramientas diseñadas para el flujo de trabajo real del docente.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Visual representation of Heatmap */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-4xl mx-auto">
            <div className="bg-slate-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-slate-500 font-mono ml-2">analisis_resultado.html</span>
            </div>
            <div className="p-6 md:p-8 font-serif text-lg leading-relaxed text-slate-800">
                <p>
                    <span className="bg-yellow-100 border-b-2 border-yellow-400 px-1" title="Alta probabilidad sintética">La Revolución Industrial marcó un punto de inflexión en la historia, transformando los métodos de producción.</span> 
                    <span> Sin embargo, </span>
                    <span className="bg-green-100 border-b-2 border-green-400 px-1" title="Evidencia de humanidad: Opinión subjetiva/Coloquialismo">a mi parecer, lo más fuerte fue cómo cambió la vida de la gente normal, que pasó de vivir tranquila en el campo a estar hacinada en las ciudades.</span>
                    <span> Este cambio estructural conllevó consecuencias socioeconómicas profundas...</span>
                </p>
                <div className="mt-4 flex gap-4 text-sm font-sans">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-yellow-400 rounded-sm"></span>
                        <span className="text-slate-600">Sintético / Genérico</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-400 rounded-sm"></span>
                        <span className="text-slate-600">Evidencia Humana</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;