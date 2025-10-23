import React from 'react';

const Structure: React.FC = () => {
  const images = [
    { src: 'https://i.imgur.com/32yBUwq.jpeg', alt: 'Sala de Reunião' },
    { src: 'https://i.imgur.com/MMmfJ55.jpeg', alt: 'Escritório Privativo' },
    { src: 'https://i.imgur.com/qJBBtZ1.jpeg', alt: 'Estação de Trabalho Individual' },
    { src: 'https://i.imgur.com/VT2VLKX.jpeg', alt: 'Espaço de Trabalho Confortável' },
    { src: 'https://i.imgur.com/fyoGEyd.jpeg', alt: 'Copa' },
    { src: 'https://i.imgur.com/73zu4O9.jpeg', alt: 'Sala de Reunião com TV' },
  ];

  return (
    <section id="structure" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Nossa Estrutura</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os espaços projetados para o máximo de conforto e produtividade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;