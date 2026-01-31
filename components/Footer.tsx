import React from 'react';
import { MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-white p-3 rounded-lg inline-block">
                        <img 
                            src="https://i.ibb.co/6cBqhDs0/thanos.png" 
                            alt="THANOS Logo" 
                            className="h-32 w-auto object-contain"
                        />
                    </div>
                </div>
                <p className="text-slate-400 max-w-md mb-6">
                    "Veo tu esfuerzo, veo tu singularidad y eso es lo que voy a evaluar."
                </p>
                <div className="flex flex-col gap-2">
                    <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Creado en</span>
                    <span className="text-white font-medium">Andalucía, España 🇪🇸</span>
                    <span className="text-slate-500 text-sm">Por docentes, para docentes.</span>
                </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">¿Listo para probarlo?</h3>
                <p className="text-slate-300 mb-6">
                    Ayúdanos a mejorar. La versión Beta v4.11 ya está disponible para pruebas abiertas. Tu feedback es vital para nosotros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="https://huggingface.co/spaces/jagarcia1980/Thanos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-thanos-600 hover:bg-thanos-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors shadow-lg shadow-thanos-900/20"
                    >
                        Acceder a la Beta
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Proyecto THANOS. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
                <a 
                    href="https://huggingface.co/spaces/jagarcia1980/Thanos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                    <MessageSquare className="w-4 h-4" />
                    Dar Feedback
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;