import { Bike, Zap, Wrench, Battery, Droplets, Lock, Coins, Luggage } from 'lucide-react';
import { ServiceItem, PricingItem, ReviewItem, AdvantageItem } from './types';
import React from 'react';

export const SERVICES: ServiceItem[] = [
  {
    icon: <Bike className="w-12 h-12 text-primary" />,
    title: "Работаем по г. Москве и МО",
    description: "🔥 Акция для новых клиентов: 0 руб. залог для первого договора аренды нашего электровелосипеда для граждан СНГ и РФ"
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Kugoo и Wenbox",
    description: "Современные и мощные электровелосипеды для комфортной работы"
  }
];

export const PRICING: PricingItem[] = [
  {
    title: "Kugoo",
    period: "Неделя",
    price: "3 500 ₽",
    features: ["Модель Kugoo", "Без IoT, без ограничения скорости", "1 АКБ в комплекте"],
    link: "https://t.me/badfoxbikebot"
  },
  {
    title: "Kugoo",
    period: "Месяц",
    price: "13 000 ₽",
    features: ["Модель Kugoo", "Без IoT, без ограничения скорости", "1 АКБ в комплекте"],
    isPopular: true,
    link: "https://t.me/badfoxbikebot"
  },
  {
    title: "Wendox",
    period: "Неделя",
    price: "5 000 ₽",
    features: ["Модель Wendox", "С IoT, ограничение 25 км/ч", "1 АКБ в комплекте"],
    link: "https://t.me/badfoxbikebot"
  },
  {
    title: "Wendox",
    period: "Месяц",
    price: "19 000 ₽",
    features: ["Модель Wendox (Wenbox)", "С IoT, ограничение 25 км/ч", "1 АКБ в комплекте"],
    link: "https://t.me/badfoxbikebot"
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Собственный сервисный центр",
    description: "Обслуживание, ремонт и запасные части всегда под рукой"
  },
  {
    icon: <Battery className="w-10 h-10" />,
    title: "Новые аккумуляторы",
    description: "Гарантируем отличную автономность и бесперебойную работу"
  },
  {
    icon: <Droplets className="w-10 h-10" />,
    title: "Полная гидроизоляция",
    description: "Можно работать в любую погоду"
  },
  {
    icon: <Luggage className="w-10 h-10" />,
    title: "Надежный багажник",
    description: "Специально разработан для комфортной перевозки заказов"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Замок в комплекте",
    description: "И держатель для телефона в комплекте"
  },
  {
    icon: <Coins className="w-10 h-10" />,
    title: "Доступные цены",
    description: "Окупите аренду за счет увеличения количества заказов"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    name: "Mikas",
    date: "25 июля",
    rating: 5,
    text: "Очень хороший сервис! К клиентам относятся с добротой и лояльностью, я доволен!"
  },
  {
    name: "Gopster Top",
    date: "19 июля",
    rating: 5,
    text: "Все прошло очень гладко, мужчина все объяснил и показал, в договоре все четко и по делу, всем доволен!"
  },
  {
    name: "Kazaryan Artem",
    date: "16 июля",
    rating: 5,
    text: "Все очень хорошо, велосипед полностью исправен, помогли, все объяснили. Пошли на уступки в некоторых ситуациях. Спасибо большое"
  },
  {
    name: "Fresh Air Pro",
    date: "15 июля",
    rating: 5,
    text: "Все отлично, люди добрые, русские, отзывчивые, всегда на связи, договор чист и прозрачен, советую, честно от души 😌"
  },
  {
    name: "Александр Литвин",
    date: "14 июля",
    rating: 5,
    text: "Все быстро, четко, а главное качественно, электровело приятный на дорогах, все понравилось, советую!"
  },
  {
    name: "Лев",
    date: "12 июля",
    rating: 5,
    text: "Все прошло отлично, очень компетентные и приятные люди. Рекомендую"
  }
];