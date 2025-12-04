import React, { useEffect } from 'react';

export const Oferta = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 bg-black min-h-screen">
            <div className="container mx-auto px-5 max-w-4xl">
                <div className="bg-light p-8 md:p-12 rounded-lg border border-zinc-800 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">ПУБЛИЧНАЯ ОФЕРТА</h1>
                    <p className="text-xl text-center text-gray-300 mb-8">о заключении договора аренды электровелосипеда</p>
                    
                    <div className="text-center text-sm text-gray-500 mb-10 pb-6 border-b border-zinc-700">
                        <p>г. Москва, редакция от 05.08.2025 года</p>
                    </div>

                    <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
                        <p className="italic bg-zinc-900 p-4 rounded border-l-4 border-primary">
                            Настоящий документ является официальной публичной офертой Кузнецова Владислава Игоревича (Арендодатель) физическому лицу (Арендатор) о заключении Договора аренды Электровелосипеда.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Предмет договора</h2>
                            <p>1.1. Арендодатель обязуется предоставить во временное владение и пользование Электровелосипед, а Арендатор принять, оплатить и своевременно вернуть его.</p>
                            <p>1.2. Акцептом оферты считается подписание Акта приема-передачи в Мобильном приложении (Telegram-бот).</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Тарифы и Оплата</h2>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>Kugoo (неделя): 3 500 ₽</li>
                                <li>Kugoo (месяц): 13 000 ₽</li>
                                <li>Wendox (неделя): 5 000 ₽</li>
                                <li>Wendox (месяц): 19 000 ₽</li>
                            </ul>
                            <p>Депозит: до 2000 рублей (блокируется на карте).</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Обязанности Арендатора</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Бережно использовать имущество, соблюдать ПДД.</li>
                                <li>Не передавать управление третьим лицам.</li>
                                <li>Использовать велосипед только в личных целях или для курьерской деятельности.</li>
                                <li>Запрещено выполнять трюки, ездить вдвоем, погружать в воду.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Ответственность</h2>
                            <p>4.1. В случае утери/кражи велосипеда Арендатор компенсирует его полную стоимость.</p>
                            <p>4.2. Штраф за передачу третьим лицам: 10 000 руб.</p>
                            <p>4.3. Штраф за просрочку возврата: 1 000 руб/день.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Возврат</h2>
                            <p>Возврат осуществляется по адресу: г. Москва, ул. Салтыковская, д. 51. Арендатор обязан вернуть велосипед в чистом виде.</p>
                        </section>
                        
                         <div className="p-4 bg-zinc-800 rounded border border-zinc-700 mt-8 text-center">
                            <p>Полный текст оферты доступен в Telegram-боте при регистрации.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};