import React from 'react';
import { Lightbulb, Search, Heart } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            La Filosofía
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            La respuesta no puede ser el miedo ni la prohibición. THANOS nace para poner en valor lo que nos hace insustituibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Descubrimiento, no Castigo</h3>
            <p className="text-slate-600 leading-relaxed">
              No somos una herramienta policial. Somos una plataforma de descubrimiento diseñada para ayudar al docente a filtrar el ruido sintético y encontrar la voz humana.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6 text-rose-600">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Lo que la IA no Siente</h3>
            <p className="text-slate-600 leading-relaxed">
              Premiamos el pensamiento crítico, la imperfección creativa, el humor, la experiencia personal y el pensamiento lateral. Atributos que la IA simula, pero no posee.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 text-amber-600">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Filtrar para Valorar</h3>
            <p className="text-slate-600 leading-relaxed">
              Identificamos patrones mecánicos para que el docente pueda dedicar su tiempo a leer y valorar aquellos textos que realmente aportan originalidad y esfuerzo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;