import React from 'react';
import { Target, Activity, Users } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">
            Ingeniería Forense Educativa
          </h2>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl">
            Un enfoque multicapa e híbrido, combinando lingüística computacional y análisis semántico vectorial.
          </p>
        </div>

        <div className="space-y-12">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-800 pb-12 last:border-0">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-thanos-700 text-white">
                <Target className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">1. El Paradigma del "Gold Standard"</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                THANOS genera su propia solución ideal utilizando el enunciado de la tarea. Comparamos matemáticamente el trabajo del alumno con la respuesta de la máquina.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <span className="text-thanos-400 mr-2">•</span>
                  <span><strong>Vectorización Semántica:</strong> Convertimos textos en vectores matemáticos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-thanos-400 mr-2">•</span>
                  <span><strong>Medición de Distancia:</strong> Poca distancia = falta de aporte personal. Amplia distancia = originalidad celebrada.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start border-b border-slate-800 pb-12 last:border-0">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-600 text-white">
                <Activity className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">2. Análisis Estilométrico</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                La IA es estadísticamente perfecta y predecible. El humano es caótico y brillante.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span><strong>Riqueza Léxica (Índice de Guiraud):</strong> Vocabulario real vs. verborrea repetitiva de los LLM.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-400 mr-2">•</span>
                  <span><strong>Burstiness (Ráfagas):</strong> Los humanos alternan frases cortas y largas; la IA tiende a la monotonía rítmica.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-rose-600 text-white">
                <Users className="h-8 w-8" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">3. Detección de Anomalías (Outliers)</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Analizamos el contexto de la clase completa. Si muchos alumnos entregan trabajos con estructura vectorial idéntica, el sistema identifica el patrón y destaca a los <strong>"Outliers positivos"</strong>: estudiantes que se han atrevido a pensar diferente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;