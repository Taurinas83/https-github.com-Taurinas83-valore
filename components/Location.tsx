
import React from 'react';

const WhatsAppIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Localização Privilegiada</h2>
                <ul className="space-y-3 text-lg text-gray-600">
                    <li className="flex items-start"><span className="text-brand-red mr-2 mt-1">✓</span> A poucos minutos das Barcas e do Plaza Shopping.</li>
                    <li className="flex items-start"><span className="text-brand-red mr-2 mt-1">✓</span> Fácil acesso para clientes e parceiros.</li>
                    <li className="flex items-start"><span className="text-brand-red mr-2 mt-1">✓</span> Próximo a bancos, cartórios e comércio em geral.</li>
                </ul>

                <div className="mt-12 bg-brand-light-blue p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-brand-blue">Agende sua visita no espaço:</h3>
                    <a 
                        href="https://wa.me/5521999057328" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 flex items-center space-x-4 text-3xl font-bold text-gray-800 hover:text-brand-red transition-colors duration-300"
                    >
                        <WhatsAppIcon />
                        <span>(21) 99905-7328</span>
                    </a>
                </div>
            </div>
            <div className="h-96 md:h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29402.78453006121!2d-43.14154462568359!3d-22.89437299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983db0826955f%3A0x3368d2492652613b!2sCentro%2C%2C%20Niter%C3%B3i%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1689283749281!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da Localização no Centro de Niterói"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Location;