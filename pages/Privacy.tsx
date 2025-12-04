import React, { useEffect } from 'react';

export const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 bg-black min-h-screen">
            <div className="container mx-auto px-5 max-w-4xl">
                <div className="bg-light p-8 md:p-12 rounded-lg border border-zinc-800 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">ПОЛОЖЕНИЕ</h1>
                    <p className="text-xl text-center text-gray-300 mb-8">об обработке персональных данных</p>
                    
                    <div className="text-center text-sm text-gray-500 mb-10 pb-6 border-b border-zinc-700">
                        <p>Дата публикации: 05.08.2025</p>
                        <p>Актуальная версия всегда доступна на: https://badfoxbike.ru/</p>
                    </div>

                    <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Общие положения</h2>
                            <p>1.1. Настоящая Политика конфиденциальности действует в отношении всей информации, которую Кузнецов Владислав Игоревич (далее — «Оператор») может получить о Вас в процессе использования сайта и Telegram-бота.</p>
                            <p className="mt-2">1.2. Использование сервисов означает безоговорочное согласие Пользователя с настоящей Политикой.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Оператор данных</h2>
                            <p>Оператор: Кузнецов Владислав Игоревич (НПД № 81914483).</p>
                            <p>Адрес: 111672, г. Москва, ул. Салтыковская, д. 51, бокс 93.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Состав данных</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Идентификационные данные:</strong> ФИО, паспортные данные (фото, загруженные через Бот).</li>
                                <li><strong>Контактные данные:</strong> Телефон, Telegram ID.</li>
                                <li><strong>Финансовые данные:</strong> Обрабатываются платежным агрегатором. Оператор получает только статус оплаты.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Цели обработки</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Заключение и исполнение договора аренды.</li>
                                <li>Идентификация арендатора.</li>
                                <li>Связь с клиентом и техническая поддержка.</li>
                                <li>Соблюдение требований законодательства РФ.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Защита данных</h2>
                            <p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий.</p>
                        </section>

                        <section>
                             <h2 className="text-xl font-bold text-white mb-4">6. Сроки хранения</h2>
                             <p>Паспортные данные хранятся только на период первичной верификации и удаляются в течение 5 рабочих дней после проверки, если иное не требуется законодательством.</p>
                        </section>

                        <div className="p-4 bg-zinc-800 rounded border border-zinc-700 mt-8">
                            <p className="font-bold text-primary mb-2">Контакты для связи по вопросам ПД:</p>
                            <p>Telegram: @BFbike</p>
                            <p>Email/Телефон: +7 (917) 570-54-79</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};