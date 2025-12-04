
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black pt-20 pb-10">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transform hover:scale-105 transition-transform">
            <Logo className="scale-125" />
          </Link>
          
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 md:gap-x-10">
            {['Услуги', 'Преимущества', 'Отзывы', 'Инвестирование', 'Контакты'].map((item, idx) => {
               const hashes = ['services', 'advantages', 'reviews', 'investment', 'contact'];
               return (
                <button 
                  key={idx}
                  onClick={() => handleNavClick(hashes[idx])}
                  className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors py-2"
                >
                  {item}
                </button>
               );
            })}
             <Link to="/oferta" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors py-2">
               Оферта
             </Link>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs gap-6 text-center md:text-left">
          <p className="tracking-wide">&copy; {currentYear} Bad Fox Bike. Все права защищены.</p>
          <div className="flex gap-8">
            <Link to="/oferta" className="hover:text-gray-300 transition-colors uppercase tracking-wider">
              Публичная оферта
            </Link>
            <Link to="/privacy" className="hover:text-gray-300 transition-colors uppercase tracking-wider">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
