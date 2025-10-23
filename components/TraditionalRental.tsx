
import React from 'react';

const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

const TraditionalRental: React.FC = () => {
    const worries = [
        'Contas de água e luz', 'Aluguel e condomínio', 'Manutenção e limpeza', 'Mobiliário e IPTU', 'Internet e segurança'
    ];
    return (
        <section id="diferenciais" className="py-20 md:py-28 bg-brand-blue text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Esqueça as preocupações de uma locação tradicional</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            No Espaço Valore, você foca 100% no seu negócio. Nós cuidamos de toda a burocracia e custos extras para você.
                        </p>
                        <div className="space-y-4">
                            {worries.map((worry, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                                    <CheckIcon />
                                    <span className="font-medium text-lg">{worry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-96">
                        <img src="https://i.imgur.com/I2Ssgj0.jpeg" alt="Pessoas sorrindo em reunião" className="w-full h-full object-cover rounded-xl shadow-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TraditionalRental;