import React from 'react';

interface PricingCardProps {
  planName: string;
  price: string;
  description: string;
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, description, isFeatured = false }) => {
  const cardClasses = `flex flex-col p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 ${
    isFeatured 
      ? 'bg-brand-blue text-white shadow-2xl border-brand-red scale-105' 
      : 'bg-white text-gray-800 shadow-lg border-gray-200'
  }`;

  const buttonClasses = `w-full mt-8 font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 shadow-lg ${
    isFeatured
      ? 'bg-brand-red hover:bg-red-700 text-white'
      : 'bg-brand-blue hover:bg-blue-800 text-white'
  }`;
  
  return (
    <div className={cardClasses}>
      <div className="flex-grow">
        <h3 className={`text-2xl font-semibold ${isFeatured ? 'text-white' : 'text-brand-red'}`}>{planName}</h3>
        <p className={`mt-2 text-sm ${isFeatured ? 'text-gray-300' : 'text-gray-500'}`}>Escritório Privativo 2 a 3 pessoas</p>
        <div className="mt-6">
          <span className="text-5xl font-bold">{price}</span>
          <span className={`text-lg ml-1 ${isFeatured ? 'text-gray-300' : 'text-gray-500'}`}>/mês</span>
        </div>
        <p className={`mt-4 ${isFeatured ? 'text-gray-200' : 'text-gray-600'}`}>{description}</p>
      </div>
      <a href="https://wa.me/5521999057328" target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        Contratar Agora
      </a>
    </div>
  );
};


const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-brand-light-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Planos e Preços</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para a sua necessidade com total transparência e sem surpresas.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:items-stretch">
            <PricingCard 
                planName="Plano Mensal"
                price="R$ 1.400"
                description="Flexibilidade total com contrato mensal, sem compromisso de longo prazo."
            />
            <PricingCard 
                planName="Plano Anual"
                price="R$ 1.000"
                description="O melhor custo-benefício para quem busca estabilidade e economia."
                isFeatured={true}
            />
        </div>
      </div>
    </section>
  );
};

export default Pricing;