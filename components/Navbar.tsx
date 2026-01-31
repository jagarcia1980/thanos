import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Docentes', href: '#ventajas' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://i.ibb.co/6cBqhDs0/thanos.png" 
              alt="THANOS Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 hover:text-thanos-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://huggingface.co/spaces/jagarcia1980/Thanos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-thanos-700 hover:bg-thanos-800 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg"
              >
                Probar Beta v4.11
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-thanos-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-thanos-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="https://huggingface.co/spaces/jagarcia1980/Thanos"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 bg-thanos-700 text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Probar Beta
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;