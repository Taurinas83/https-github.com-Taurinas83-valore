
import React, { useState, useRef } from 'react';
import { FullLogo } from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Estrutura', href: '#structure' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Localização', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = headerRef.current?.offsetHeight || 100;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: targetPosition - headerHeight,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header ref={headerRef} className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" aria-label="Página inicial" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
            <FullLogo className="h-12" />
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-brand-blue font-medium transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5521999057328"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-brand-red text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
          >
            Agende sua Visita
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-600 hover:text-brand-blue py-2 px-4 rounded-md text-center bg-gray-50 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5521999057328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg text-center mt-2"
              >
                Agende sua Visita
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;