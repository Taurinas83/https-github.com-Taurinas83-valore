
import React from 'react';

const WhatsAppIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="h-8 w-8"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const FloatingCTA: React.FC = () => {
  return (
    <a
      href="https://wa.me/5521999057328"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-2xl z-50 transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
      <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Agende sua visita!
      </span>
    </a>
  );
};

export default FloatingCTA;
