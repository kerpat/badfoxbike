
import React from 'react';
import { Send, Bike, ChevronRight, ChevronLeft, Star, Phone, MapPin, ExternalLink, Battery, Check } from 'lucide-react';
import { SERVICES, PRICING, ADVANTAGES, REVIEWS } from '../constants';
import { FadeIn } from '../components/UI/FadeIn';
import { Logo } from '../components/Logo';

// --- Background Decorations ---
const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 opacity-30" />
  </div>
);

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-105 animate-[pulse-slow_10s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative z-20 container mx-auto px-5 pt-32 pb-10 flex flex-col items-center">
        
        <FadeIn delay={0.2} className="relative z-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-8 leading-tight max-w-5xl mx-auto tracking-tighter drop-shadow-2xl">
            Аренда электровелосипедов <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">для курьеров</span> <br/>
            <span className="text-primary text-glow">без залога</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-lg mx-auto mt-8 relative z-20">
          <a 
            href="https://t.me/badfoxbikebot" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group w-full sm:w-auto justify-center"
          >
            <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span>Связаться в Telegram</span>
          </a>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-bold uppercase hover:bg-white hover:text-black transition-all hover:scale-105 backdrop-blur-sm"
          >
            Узнать больше
          </button>
        </FadeIn>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
const Services = () => (
  <section id="services" className="py-24 md:py-32 relative z-10">
    <div className="container mx-auto px-5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
        <FadeIn>
          <h2 className="section-title">Наши услуги</h2>
          <p className="text-gray-400 max-w-md mt-4 text-lg">Предоставляем лучший сервис аренды для курьеров в Москве и Московской области.</p>
        </FadeIn>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {SERVICES.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 0.2} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass h-full p-8 md:p-10 rounded-2xl overflow-hidden group-hover:border-primary/50 transition-colors duration-300 flex flex-col">
                <div className="bg-zinc-900/50 w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-primary/50 shrink-0">
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                        {service.icon}
                    </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg flex-grow">{service.description}</p>
                
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <ExternalLink className="text-primary transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Pricing Section ---
const Pricing = () => (
  <section className="py-24 md:py-32 relative z-10">
    <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 skew-y-3 pointer-events-none" />
    
    <div className="container mx-auto px-5 relative">
      <FadeIn className="text-center mb-16 md:mb-20">
        <h2 className="section-title">Тарифы</h2>
        <p className="text-gray-400 mt-4 text-lg">Прозрачные условия без скрытых платежей</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6 items-start max-w-3xl mx-auto">
        {PRICING.map((plan, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className={`relative group h-full ${plan.isPopular ? 'lg:transform lg:scale-105 z-20' : 'z-10'}`}>
            {plan.isPopular && (
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full h-full bg-primary/20 rounded-3xl blur-[40px] opacity-60" />
            )}
            
            <div className={`h-full glass rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 ${plan.isPopular ? 'border-primary/50 shadow-[0_0_30px_rgba(241,98,45,0.15)] bg-zinc-900/80' : 'hover:border-white/30'}`}>
              {plan.isPopular && (
                <div className="bg-primary text-white text-xs font-black py-2 text-center uppercase tracking-widest">
                  Хит продаж
                </div>
              )}
              
              <div className={`p-8 text-center border-b border-white/5 ${plan.isPopular ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold text-white uppercase mb-2 tracking-wide">{plan.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-6">{plan.period}</p>
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">{plan.price}</div>
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="mt-1 min-w-[16px]">
                         <Check size={14} className="text-primary" strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0 mt-auto">
                 <a 
                    href={plan.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`block w-full text-center py-4 rounded-xl font-bold uppercase text-sm tracking-wider transition-all duration-300 ${plan.isPopular ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}
                 >
                   Выбрать
                 </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} className="mt-16 flex justify-center">
        <div className="glass px-8 py-5 rounded-full flex flex-col md:flex-row items-center gap-4 text-gray-300 group hover:border-primary/50 transition-colors cursor-default text-center">
           <div className="bg-zinc-800 p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
             <Battery size={24} />
           </div>
           <span className="text-sm md:text-base">Дополнительный АКБ: <span className="text-white font-bold text-lg mx-1">1 500 ₽</span> / неделя</span>
        </div>
      </FadeIn>
    </div>
  </section>
);

// --- Advantages Section ---
const Advantages = () => (
  <section id="advantages" className="py-24 md:py-32 relative z-10 overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-5">
      <FadeIn className="text-center mb-16 md:mb-20">
        <h2 className="section-title">Преимущества</h2>
      </FadeIn>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ADVANTAGES.map((adv, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="group h-full">
            <div className="glass p-8 rounded-2xl h-full hover:bg-white/[0.07] transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary hover:-translate-y-1 flex flex-col">
              <div className="mb-6 inline-flex p-4 w-fit rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 text-primary group-hover:text-white group-hover:from-primary group-hover:to-orange-600 transition-all duration-500 shadow-lg">
                {React.cloneElement(adv.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{adv.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">{adv.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Reviews Section ---
const Reviews = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = 350;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
        }
    };

    return (
        <section id="reviews" className="py-24 md:py-32 relative z-10 bg-gradient-to-b from-transparent to-black/80">
            <div className="container mx-auto px-5">
                <div className="flex justify-between items-end mb-12">
                    <FadeIn>
                        <h2 className="section-title mb-0">Отзывы</h2>
                    </FadeIn>
                    <div className="hidden md:flex gap-3">
                        <button onClick={() => scroll('left')} className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all active:scale-95"><ChevronLeft /></button>
                        <button onClick={() => scroll('right')} className="p-3 glass rounded-full hover:bg-primary hover:text-white transition-all active:scale-95"><ChevronRight /></button>
                    </div>
                </div>

                {/* Adjusted container to prevent layout shifts on small screens */}
                <div className="relative group">
                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide pt-4 px-2">
                        {REVIEWS.map((review, idx) => (
                            <div key={idx} className="min-w-[300px] md:min-w-[400px] glass p-8 rounded-2xl snap-center relative group/card h-full flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white text-sm shrink-0">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-base">{review.name}</h4>
                                            <span className="text-xs text-gray-500">{review.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex text-orange-400 gap-0.5">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed italic border-l-2 border-white/10 pl-4 flex-grow">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                    {/* Fade gradients for scrolling indication */}
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent pointer-events-none md:hidden" />
                </div>
                
                {/* Mobile Navigation */}
                <div className="flex md:hidden justify-center gap-6 mt-2">
                     <button onClick={() => scroll('left')} className="p-4 glass rounded-full active:bg-primary transition-colors"><ChevronLeft size={24}/></button>
                     <button onClick={() => scroll('right')} className="p-4 glass rounded-full active:bg-primary transition-colors"><ChevronRight size={24}/></button>
                </div>
            </div>
        </section>
    );
};

// --- Investment Section ---
const Investment = () => (
    <section id="investment" className="py-24 relative z-10">
        <div className="container mx-auto px-5">
            <FadeIn>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="p-8 md:p-16 relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">Инвестирование</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
                            Мы активно развиваемся и ищем партнеров. Если вы заинтересованы в инвестировании в перспективный бизнес, мы открыты к диалогу.
                        </p>
                        <a href="https://t.me/BFbike" target="_blank" rel="noreferrer" className="btn-primary inline-flex">
                            <Send size={18} />
                            <span>Обсудить условия</span>
                        </a>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

// --- Contact Section ---
const Contact = () => (
    <section id="contact" className="py-24 relative z-10">
        <div className="container mx-auto px-5">
            <FadeIn className="text-center mb-16">
                <h2 className="section-title">Контакты</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <FadeIn delay={0.1} className="glass p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Send size={28} />
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Telegram</p>
                    <a href="https://t.me/BFbike" target="_blank" rel="noreferrer" className="text-xl font-bold text-white hover:text-primary transition-colors">@BFbike</a>
                </FadeIn>

                <FadeIn delay={0.2} className="glass p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Phone size={28} />
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Телефон</p>
                    <a href="tel:+79175705479" className="text-xl font-bold text-white hover:text-primary transition-colors">+7 (917) 570-54-79</a>
                </FadeIn>

                <FadeIn delay={0.3} className="glass p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors h-full flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                        <MapPin size={28} />
                    </div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Локация</p>
                    <p className="text-xl font-bold text-white">Москва и МО</p>
                </FadeIn>
            </div>

            <FadeIn delay={0.5} className="mt-16 text-center">
                 <a href="https://www.avito.ru/balashiha/predlozheniya_uslug/arenda_elektrovelosipedov_dlya_kurerov_7399129611" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#00AAFF] hover:bg-[#0099e5] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,170,255,0.3)] hover:shadow-[0_10px_40px_rgba(0,170,255,0.5)]">
                    <ExternalLink size={24} />
                    <span>Арендовать на Avito</span>
                </a>
            </FadeIn>
        </div>
    </section>
);

export const Home = () => {
  return (
    <>
      <AmbientBackground />
      <Hero />
      <Services />
      <Pricing />
      <Advantages />
      <Reviews />
      <Investment />
      <Contact />
    </>
  );
};
