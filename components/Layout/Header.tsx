
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '../Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setIsOpen(false);
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

  const navItems: { label: string; hash?: string; href?: string }[] = [
    { label: 'Услуги', hash: 'services' },
    { label: 'Преимущества', hash: 'advantages' },
    { label: 'Отзывы', hash: 'reviews' },
    { label: 'Инвестирование', hash: 'investment' },
    { label: 'Регистрация', href: 'https://badfoxbike.xn----7sbudcwsigrzv.space/registration.html' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-primary/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center h-full">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative z-50 flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
            {navItems.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-white font-bold uppercase text-xs tracking-widest transition-all hover:scale-105"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.hash!)}
                  className="text-gray-300 hover:text-white font-medium uppercase text-xs tracking-widest transition-all hover:scale-105"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center">
             <button
              onClick={() => handleNavClick('contact')}
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(241,98,45,0.5)] flex items-center justify-center"
            >
              Связаться
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white relative z-50 p-2 glass rounded-lg flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background gradient blob for mobile menu */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        {navItems.map((item) => (
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-primary text-2xl uppercase font-black tracking-tighter hover:text-white transition-colors relative z-10"
            >
              {item.label}
            </a>
          ) : (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.hash!)}
              className="text-white text-2xl uppercase font-black tracking-tighter hover:text-primary transition-colors relative z-10"
            >
              {item.label}
            </button>
          )
        ))}
        <button
          onClick={() => handleNavClick('contact')}
          className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold uppercase hover:bg-primary-hover transition-all shadow-lg shadow-primary/30 mt-8 relative z-10"
        >
          Связаться
        </button>
      </div>
    </header>
  );
};
