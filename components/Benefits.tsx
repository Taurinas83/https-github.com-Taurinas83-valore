
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center">
        {children}
    </div>
);

const WifiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.536a15 15 0 0121.212 0" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const FurnitureIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const PrinterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l-2 2 2.293 2.293a1 1 0 010 1.414L11 20M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const CoffeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 14l-2-2m2 2l2-2m-2 2v5M12 3c-4.418 0-8 2.015-8 4.5S7.582 12 12 12s8-2.015 8-4.5S16.418 3 12 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10.5v5a5 5 0 0010 0v-5" /></svg>;

const BenefitItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <IconWrapper>{icon}</IconWrapper>
        <div>
            <h4 className="font-bold text-lg text-brand-blue">{title}</h4>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);

const Benefits: React.FC = () => {
  const benefitsList = [
    { icon: <WifiIcon />, title: "Internet Estável", description: "Conexão de alta velocidade para você não perder nada." },
    { icon: <LocationIcon />, title: "Localização Estratégica", description: "No coração de Niterói, perto de tudo que você precisa." },
    { icon: <FurnitureIcon />, title: "Mobiliário Completo", description: "Mesas, cadeiras ergonômicas e ar condicionado." },
    { icon: <UsersIcon />, title: "Sala de Reunião", description: "Espaço para 6 a 8 pessoas, totalmente equipada." },
    { icon: <PrinterIcon />, title: "Impressora de Apoio", description: "Impressão e cópias disponíveis para suas necessidades." },
    { icon: <ClockIcon />, title: "Acesso 24/7", description: "Flexibilidade para trabalhar a qualquer hora do dia." },
    { icon: <SparklesIcon />, title: "Limpeza Inclusa", description: "Ambiente sempre limpo e organizado para você." },
    { icon: <BuildingIcon />, title: "Endereço Comercial", description: "Um endereço de prestígio para sua empresa." },
    { icon: <CoffeeIcon />, title: "Café & Água", description: "Para manter a energia e a hidratação em dia." },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-brand-light-blue">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Benefícios Exclusivos</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Escritórios compartilhados que impulsionam o crescimento do seu negócio. Uma nova maneira de trabalhar, adaptando-se ao seu ritmo e promovendo economia, networking e produtividade.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">
                    Um espaço sob medida para o seu negócio focar e produzir.
                </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-x-8 gap-y-10">
                {benefitsList.map(b => (
                    <BenefitItem key={b.title} icon={b.icon} title={b.title}>{b.description}</BenefitItem>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;