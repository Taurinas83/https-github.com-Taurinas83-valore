
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src="https://i.imgur.com/76c1bmX.png" alt="Espaço Valore Coworking Logo" className="h-14 mx-auto md:mx-0" />
            <p className="mt-4 text-gray-300 text-sm max-w-xs mx-auto md:mx-0">
              Acelerando o crescimento do seu negócio com estrutura e profissionalismo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-brand-red">Quem Somos</a></li>
              <li><a href="#structure" className="hover:text-brand-red">Estrutura</a></li>
              <li><a href="#benefits" className="hover:text-brand-red">Benefícios</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-red">Diferenciais</a></li>
              <li><a href="#pricing" className="hover:text-brand-red">Planos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
                <li>
                    <a href="https://wa.me/5521999057328" className="hover:text-brand-red">(21) 99905-7328</a>
                </li>
                <li>
                    <span>Centro, Niterói - RJ</span>
                </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Espaço Valore Coworking. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por <a href="https://dryos.com.br/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white transition-colors">DRYOS</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;