import React from 'react';
import { FullLogo } from './Logo';

const Hero: React.FC = () => {
  return (
    <section 
        className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.imgur.com/zCT2LT7.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <FullLogo className="h-16 md:h-20 mx-auto" />
            <h1 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                Acelere o crescimento do seu negócio
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
                Ambientes modernos, estrutura completa e a localização perfeita para impulsionar seus resultados.
            </p>
            <a
                href="https://wa.me/5521999057328"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
                Fale Conosco
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;