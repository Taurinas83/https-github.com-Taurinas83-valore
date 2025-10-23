import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-brand-light-blue">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative w-full max-w-md mx-auto md:max-w-none">
            <div className="absolute -top-8 -left-8 w-full h-full bg-brand-red rounded-full opacity-10 transform rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-brand-blue rounded-full opacity-10 transform -rotate-12"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Quem Somos?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Já pensou em trabalhar em um ambiente moderno feito para proporcionar o crescimento da sua empresa? Esse é o Espaço Valore Coworking, um lugar que reúne escritórios privativos e estrutura completa para impulsionar o seu negócio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Uma nova forma de trabalhar e um ambiente propício para conexões, produtividade e criatividade. Ele foi feito para você focar em seus resultados e produzir ainda mais!
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://i.imgur.com/fijK94i.jpeg" alt="Equipe Espaço Valore Coworking" className="rounded-2xl shadow-2xl object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;