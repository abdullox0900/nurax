'use client'

import { LegalNavigation } from '../components'

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <div className="py-[80px] pb-[50px] text-center tabletSm:pt-[60px] tabletSm:pb-[25px]">
                <h1 className="text-[50px] font-bold text-[#121414] dark:text-white mb-[30px] tabletSm:text-[30px] tabletSm:leading-[120%]" >
                    Юридическая информация
                </h1>
                <LegalNavigation />
            </div>

            {/* Content */}
            <div className="flex-1 px-[80px] py-[40px] tabletSm:pt-[0px] tablet:px-[20px] tabletSm:px-[0px]">
                <div className="max-w-[1200px] mx-auto bg-[#F9F9F9] dark:bg-[#222429] rounded-[20px] p-[80px] tablet:p-[30px] tabletSm:p-[20px] tabletSm:rounded-[0px]">
                    <h2 className="text-[40px] font-bold text-[#121414] dark:text-white mb-[15px] tabletSm:text-[25px] tabletSm:leading-[120%]">
                        Пользовательское соглашение
                    </h2>
                    <p className="text-[15px] text-[#121414] dark:text-white tablet:text-[13px] mb-[50px] tabletSm:mb-[25px] tabletSm:text-[13px] leading-[145%]">
                        Сервис искусственного интеллекта Nurax AI (nurax.ai) Дата последнего обновления: 01 июля 2025 г.                    </p>

                    <div className='flex flex-col gap-[50px]'>
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                1. Общие положения
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.1.</span>
                                    Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сервиса Nurax AI (далее — «Сервис»), размещенного по адресу nurax.ai.
                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.2.</span>
                                    Оператором персональных данных является Индивидуальный предприниматель Шуков Никита Вячеславович, ИНН 771672909530 (далее — «Оператор», «мы»).                            </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.3.</span>
                                    Политика разработана в соответствии с:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных»</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Федеральным законом от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации»</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Постановлением Правительства РФ от 01.11.2012 № 1119 1.4. Иными нормативными правовыми актами Российской Федерации.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 2 - Definitions */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                2. Определения
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>2.1.</span>
                                    Персональные данные: Любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>2.2.</span>
                                    Обработка персональных данных: Любое действие или совокупность действий, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.
                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>2.3.</span>
                                    Пользователь: Лицо, посещающее Сайт и/или использующее Сервис.
                                </p>
                            </div>
                        </div>

                        {/* Section 3 - Processing Principles */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                3. Принципы обработки персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Законность:</strong> Обработка на законных основаниях.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Справедливость:</strong> Недопущение ущемления прав субъектов.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Соразмерность:</strong> Соответствие целям обработки.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Достоверность:</strong> Обеспечение точности данных.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 4 - Processing Purposes */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                4. Цели обработки персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%] whitespace-nowrap'><span>-</span><strong className='font-bold whitespace-nowrap'>Предоставление Сервиса:</strong> Обеспечение функционирования ИИ агента, обработка запросов пользователей, персонализация ответов.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Управление аккаунтом:</strong> Регистрация, авторизация, управление профилем пользователя.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Коммуникация:</strong> Отправка уведомлений, ответы на обращения, информирование об изменениях.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Улучшение Сервиса:</strong> Анализ использования, разработка новых функций, повышение качества обслуживания.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Обеспечение безопасности:</strong> Предотвращение мошенничества, защита от несанкционированного доступа.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 5 - Processed Data Categories */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                5. Категории обрабатываемых персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <h4 className="text-[18px] font-bold mt-[20px] mb-[15px]">5.1 Данные, предоставляемые пользователем:</h4>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-center gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mb-[5px]'><span>-</span> Учетная запись:</li>
                                    <ul className='pl-[20px] space-y-[5px] list-decimal'>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span> Имя пользователя</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span> Адрес электронной почты</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span> Пароль (в зашифрованном виде)</li>
                                    </ul>
                                    <li className='flex items-center gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mb-[5px] mt-[10px]'><span>-</span> Контент:</li>
                                    <ul className='pl-[20px] space-y-[5px] list-decimal'>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span> Текстовые запросы к ИИ</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span> Загружаемые файлы</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span> Сообщения в чате</li>
                                    </ul>
                                </ul>

                                <h4 className="text-[18px] font-bold mt-[20px] mb-[15px]">5.2 Данные, собираемые автоматически:</h4>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-center gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mb-[5px]'><span>-</span>Технические данные:</li>
                                    <ul className='pl-[20px] space-y-[5px] list-decimal'>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>IP-адрес</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Тип устройства</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Браузер</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Операционная система</li>
                                    </ul>
                                    <li className='flex items-center gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mb-[5px] mt-[10px]'><span>-</span>Данные использования:</li>
                                    <ul className='pl-[20px] space-y-[5px] list-decimal'>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Время посещения</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Просмотренные страницы</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Переходы по ссылкам</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Продолжительность сессий</li>
                                    </ul>
                                    <li className='flex items-center gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mb-[5px] mt-[10px]'><span>-</span>Cookies:</li>
                                    <ul className='pl-[20px] space-y-[5px] list-decimal'>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Идентификаторы сессий</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Настройки пользователя</li>
                                        <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>•</span>Аналитические данные</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        {/* Section 6 - Legal Bases */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                6. Правовые основания обработки
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Согласие субъекта персональных данных:</strong> На обработку персональных данных для предоставления Сервиса.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Исполнение договора:</strong> Пользовательского соглашения и оказания услуг.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Законные интересы оператора:</strong> Обеспечение безопасности, предотвращение мошенничества.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                7. Сроки обработки и хранения персональных данных
                            </h3>
                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto rounded-[20px] bg-white dark:bg-[#121414]">
                                <table className="w-full text-[15px] md:text-[13px] border-collapse rounded-[20px]">
                                    <thead className="bg-[#F3F3F3] dark:border-none dark:bg-[#F3F3F3]/10 rounded-[20px] p-[20px]">
                                        <tr className="border-b border-[#F9F9F9] dark:border-[#444]">
                                            <th className="text-left py-[15px] px-[20px] font-bold text-[#121414] dark:text-white">Категория данных</th>
                                            <th className="text-left py-[15px] px-[20px] font-bold text-[#121414] dark:text-white">Срок хранения</th>
                                            <th className="text-left py-[15px] px-[20px] font-bold text-[#121414] dark:text-white">Основание</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-[#F9F9F9] dark:border-[#444]">
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Данные учетной записи</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">До удаления аккаунта пользователем</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Согласие пользователя</td>
                                        </tr>
                                        <tr className="border-b border-[#F9F9F9] dark:border-[#444]">
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">История запросов к ИИ</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">12 месяцев</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Улучшение сервиса</td>
                                        </tr>
                                        <tr className="border-b border-[#F9F9F9] dark:border-[#444]">
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Технические логи</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">6 месяцев</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Обеспечение безопасности</td>
                                        </tr>
                                        <tr>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Аналитические данные</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">24 месяца</td>
                                            <td className="py-[15px] px-[20px] text-[#121414] dark:text-white">Статистический анализ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-[20px]">
                                <div className="bg-[#F9F9F9] border border-[#e0e0e0] dark:border-none dark:bg-[#121414] rounded-[20px] p-[20px]">
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Категория данных</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Данные учетной записи</p>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Срок хранения</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">До удаления аккаунта пользователем</p>
                                    </div>
                                    <div>
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Основание</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Согласие пользователя</p>
                                    </div>
                                </div>

                                <div className="bg-[#F9F9F9] border border-[#e0e0e0] dark:border-none dark:bg-[#121414] rounded-[20px] p-[20px]">
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Категория данных</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">История запросов к ИИ</p>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Срок хранения</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">12 месяцев</p>
                                    </div>
                                    <div>
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Основание</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Улучшение сервиса</p>
                                    </div>
                                </div>

                                <div className="bg-[#F9F9F9] border border-[#e0e0e0] dark:border-none dark:bg-[#121414] rounded-[20px] p-[20px]">
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Категория данных</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Технические логи</p>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Срок хранения</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">6 месяцев</p>
                                    </div>
                                    <div>
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Основание</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Обеспечение безопасности</p>
                                    </div>
                                </div>

                                <div className="bg-[#F9F9F9] border border-[#e0e0e0] dark:border-none dark:bg-[#121414] rounded-[20px] p-[20px]">
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Категория данных</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Аналитические данные</p>
                                    </div>
                                    <div className="mb-[20px]">
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Срок хранения</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">24 месяца</p>
                                    </div>
                                    <div>
                                        <span className="text-[13px] font-bold text-[#121414] dark:text-white">Основание</span>
                                        <p className="text-[13px] text-[#121414] dark:text-white mt-[5px]">Статистический анализ</p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                8. Права субъектов персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Право на получение информации:</strong> О наличии и содержании персональных данных.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Право на уточнение:</strong> Исправление неточных или неполных данных.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Право на ограничение обработки:</strong> Приостановка операций с данными.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Право на удаление:</strong> Уничтожение персональных данных.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Право на отзыв согласия:</strong> Прекращение обработки по согласию.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Право на обжалование:</strong> Подача жалобы в контролирующие органы.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 9 - Security Measures */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                9. Меры по обеспечению безопасности персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Шифрование:</strong> Применение современных алгоритмов шифрования для защиты данных при передаче и хранении.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Контроль доступа:</strong> Разграничение прав доступа к персональным данным сотрудников и систем.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Защита инфраструктуры:</strong> Использование защищенных серверов и современных технологий безопасности.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Резервное копирование:</strong> Регулярное создание резервных копий для предотвращения потери данных.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Мониторинг:</strong> Постоянный контроль за несанкционированным доступом и инцидентами безопасности.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Обучение персонала:</strong> Регулярное обучение сотрудников вопросам защиты персональных данных.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 10 - Data Transfer to Third Parties */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                10. Передача персональных данных третьим лицам
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold'>
                                    Важно: Мы не продаем, не арендуем и не передаем персональные данные третьим лицам без согласия субъекта, за исключением случаев, предусмотренных законодательством.
                                </p>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mt-[20px]'>
                                    Случаи передачи данных:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Поставщики ИИ-сервисов:</strong> Для обработки запросов к искусственному интеллекту (OpenAI, Anthropic, Google AI).</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Облачные провайдеры:</strong> Для хранения и обработки данных в защищенной среде.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>По требованию закона:</strong> При получении официальных запросов от уполномоченных органов.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 11 - Cookies Usage */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                11. Использование Cookies
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    Сайт использует файлы cookie для улучшения пользовательского опыта и анализа использования сервиса.
                                </p>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mt-[20px]'>
                                    Случаи передачи данных:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Необходимые cookies:</strong> Обеспечивают базовую функциональность сайта.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Функциональные cookies:</strong> Запоминают ваши настройки и предпочтения.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Аналитические cookies:</strong> Помогают понять, как пользователи взаимодействуют с сайтом.</li>
                                </ul>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mt-[20px]'>
                                    Управление cookies:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Вы можете управлять cookies в настройках браузера.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Отключение cookies может ограничить функциональность сайта.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Вы можете удалить cookies в любое время.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 12 - Cross-Border Data Transfer */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                12. Трансграничная передача персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    Уведомление о трансграничной передаче: В связи с использованием международных ИИ-сервисов, ваши персональные данные могут передаваться в страны, не являющиеся участниками международных договоров с Российской Федерацией по вопросам взаимной правовой помощи.
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Страны передачи:</strong> США, страны ЕС.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Гарантии защиты:</strong> Договорные обязательства с поставщиками сервисов.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Правовое основание:</strong> Согласие субъекта персональных данных.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 13 - Policy Changes */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                13. Изменения Политики конфиденциальности
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
                                </p>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mt-[20px]'>
                                    Уведомление об изменениях:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>По электронной почте зарегистрированным пользователям.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Уведомлением на сайте.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Обновлением даты в верхней части документа.</li>
                                </ul>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold mt-[20px]'>
                                    Вступление в силу:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Изменения вступают в силу через 30 дней после уведомления.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Продолжение использования сервиса означает согласие с изменениями.</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>При несогласии — право прекратить использование сервиса.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 14 - Contact Information */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                14. Контактная информация
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] font-bold'>
                                    Оператор персональных данных:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Наименование:</strong> ИП Шуков Никита Вячеславович</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>ИНН:</strong> 771672909530</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Сайт:</strong> nurax.ai</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Для обращений по вопросам защиты данных:</strong> support@nurax.ai</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Ответ на обращения:</strong> в течение 30 дней с момента получения запроса.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Section 15 - Supervisory Authority */}
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                15. Контролирующий орган
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    Федеральная служба по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор)
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Адрес:</strong> 109074, Москва, Китайгородский проезд, 7, стр. 2</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Официальный сайт:</strong> lkn.gov.ru</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span><strong>Телефон:</strong> +7 (495) 987-67-67</li>
                                </ul>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] mt-[20px]'>
                                    Вы имеете право обратиться в Роскомнадзор с жалобой на действия (бездействие) оператора при обработке ваших персональных данных.
                                </p>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] mt-[20px]'>
                                    Мы ценим ваше доверие и продолжим совершенствовать меры защиты ваших персональных данных. При возникновении вопросов обращайтесь к нам через указанные контакты.
                                </p>
                                <p className='text-[15px] tabletSm:text-[13px] leading-[145%] mt-[20px]'>
                                    2024 ИП Шуков Никита Вячеславович. Все права защищены. | nurax.ai
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 