'use client'

import { LegalNavigation } from '../components'

export default function UserAgreement() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <div className="py-[80px] pb-[50px] text-center tabletSm:pt-[60px] tabletSm:pb-[25px]">
                <h1 className="text-[50px] font-bold text-[#121414] dark:text-white mb-[30px] tabletSm:text-[30px] tabletSm:leading-[120%]">
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
                        Создано пользовательское соглашение Nurax AI 01.04.2023. Дата последнего обновления: 01 июля 2023 г.
                    </p>

                    <div className='flex flex-col gap-[50px]'>
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                1. Общие положения
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.1.</span>
                                    Настоящее Пользовательское соглашение (далее – «Соглашение») регулирует отношения между Индивидуальным предпринимателем Шуковым Никитой Вячеславовичем, ИНН 771672909530 (далее – «Администрация», «мы») и физическими и юридическими лицами (далее – «Пользователь», «вы»), использующими сервис искусственного интеллекта Nurax AI, расположенный по адресу nurax.ai (далее – «Сервис»).
                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.2.</span>
                                    Использование Сервиса означает ваше полное и безоговорочное согласие с условиями настоящего Соглашения. Если вы не согласны с какими-либо условиями, вы должны прекратить использование Сервиса.
                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.3.</span>
                                    Администрация имеет право в любое время изменять условия настоящего Соглашения без предварительного уведомления. Новая редакция Соглашения вступает в силу с момента ее размещения на сайте. Продолжение использования Сервиса после внесения изменений означает ваше согласие с новыми условиями.
                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>1.4.</span>
                                    Настоящее Соглашение составлено в соответствии с законодательством Российской Федерации.                            </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                2. Описание сервиса
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>2.1</span>
                                    Nurax AI представляет собой универсальный сервис искусственного интеллекта, предоставляющий пользователям возможность:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Генерировать текстовый контент на основе запросов пользователя;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Анализировать и обрабатывать предоставленную информацию;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Выполнять задачи по автоматизации различных процессов;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Предоставлять консультации и рекомендации в рамках возможностей ИИ;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Осуществлять другие функции, доступные через интерфейс Сервиса. </li>
                                </ul>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>2.2</span>
                                    Сервис предоставляется «как есть» и может содержать ограничения, связанные с техническими возможностями системы искусственного интеллекта.                                </p>
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>2.3</span>
                                    Администрация не гарантирует бесперебойной работы Сервиса и оставляет за собой право проводить технические работы, которые
                                    могут временно ограничить доступ к Сервису.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                3. Права и обязанности пользователя
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>3.1</span>
                                    Пользователь имеет право:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Использовать Сервис в соответствии с его назначением и настоящим Соглашением;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Получать техническую поддержку по вопросам использования Сервиса;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Требовать защиты своих персональных данных в соответствии с законодательством РФ;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Прекратить использование Сервиса в любое время. </li>
                                </ul>

                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>3.2</span>
                                    Пользователь обязуется:                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Предоставлять достоверную информацию при регистрации и использовании Сервиса;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Соблюдать требования законодательства Российской Федерации;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Не использовать Сервис для незаконных целей;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Не нарушать права третьих лиц при использовании Сервиса;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Самостоятельно нести ответственность за контент, генерируемый с помощью Сервиса;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Не предпринимать действий, направленных на нарушение работы Сервиса.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                4. Запрещенные виды использования
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'>
                                    <span>4.1</span>
                                    При использовании Сервиса категорически запрещается:
                                </p>
                                <ul className='pl-[40px] space-y-[5px] list-none'>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Создавать контент, содержащий экстремистские материалы, призывы к насилию или дискриминации;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Генерировать материалы порнографического характера или эротического содержания;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Создавать контент, нарушающий авторские и смежные права;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Генерировать заведомо ложную информацию, способную причинить вред;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Использовать Сервис для создания спама или массовой рассылки;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Попытки взлома, нарушения безопасности или иного вмешательства в работу Сервиса;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Использование автоматизированных средств для массового обращения к Сервису без согласования;</li>
                                    <li className='flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]'><span>-</span>Любые действия, направленные на причинение вреда несовершеннолетним.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                5. Интеллектуальная собственность
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>5.1</span> Исключительные права на Сервис, включая программное обеспечение, базы данных, дизайн и другие элементы, принадлежат Администрации или ее правообладателям.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>5.2</span> Контент, создаваемый Пользователем с помощью Сервиса, принадлежит Пользователю. Однако Пользователь предоставляет Администрации неисключительную лицензию на использование такого контента для улучшения работы Сервиса.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>5.3</span> Пользователь гарантирует, что не нарушает права интеллектуальной собственности третьих лиц при использовании Сервиса.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>5.4</span> В случае нарушения авторских прав, правообладатель может направить уведомление на адрес электронной почты: support@nurax.ai.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                6. Обработка персональных данных
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>6.1</span> Обработка персональных данных осуществляется в соответствии с Федеральным законом «О персональных данных» № 152-ФЗ и Политикой конфиденциальности Сервиса.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>6.2</span> Используя Сервис, Пользователь дает согласие на обработку своих персональных данных для целей предоставления услуг.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>6.3</span> Администрация обязуется не передавать персональные данные третьим лицам без согласия Пользователя, за исключением случаев, предусмотренных законодательством.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>6.4</span> Пользователь имеет право потребовать удаления своих персональных данных, направив соответствующий запрос.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                7. Ответственность сторон
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>7.1</span> Администрация не несет ответственности за:</p>
                                <ul className="pl-[40px] space-y-[5px] list-none">
                                    <li className="flex items-start gap-[10px]"><span>-</span>Содержание контента, создаваемого Пользователями с помощью Сервиса;</li>
                                    <li className="flex items-start gap-[10px]"><span>-</span>Решения, принятые Пользователем на основе информации, полученной через Сервис;</li>
                                    <li className="flex items-start gap-[10px]"><span>-</span>Временную недоступность Сервиса по техническим причинам;</li>
                                    <li className="flex items-start gap-[10px]"><span>-</span>Ущерб, причиненный третьим лицам действиями Пользователя;</li>
                                    <li className="flex items-start gap-[10px]"><span>-</span>Использование Пользователем информации, полученной через Сервис, в коммерческих целях без соответствующей проверки.</li>
                                </ul>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>7.2</span> Пользователь несет полную ответственность за соблюдение требований законодательства при использовании Сервиса и созданного с его помощью контента.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>7.3</span> В случае предъявления к Администрации претензий третьими лицами в связи с действиями Пользователя, Пользователь обязуется возместить все расходы и ущерб.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>7.4</span> Общая ответственность Администрации по любым искам не может превышать стоимость услуг, оплаченных Пользователем за последние 12 месяцев.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                8. Условия оплаты
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>8.1</span> Базовые функции Сервиса могут предоставляться бесплатно с ограничениями по объему использования.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>8.2</span> Расширенные возможности предоставляются на платной основе согласно тарифным планам, размещенным на сайте.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>8.3</span> Оплата производится в российских рублях через платежные системы, интегрированные в Сервис.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>8.4</span> Возврат денежных средств осуществляется в соответствии с законодательством РФ о защите прав потребителей.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>8.5</span> При оплате услуг Пользователь получает электронный чек в соответствии с требованиями 54-ФЗ.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                9. Разрешение споров
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>9.1</span> Все споры и разногласия решаются путем переговоров между сторонами.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>9.2</span> При невозможности достижения соглашения споры рассматриваются в судебном порядке в соответствии с законодательством Российской Федерации.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>9.3</span> До обращения в суд обязательно соблюдение претензионного порядка урегулирования споров. Срок рассмотрения претензии составляет 30 (тридцать) календарных дней.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>9.4</span> Споры с участием потребителей рассматриваются с учетом норм Закона РФ «О защите прав потребителей».</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                10. Прекращение действия соглашения
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>10.1</span> Соглашение действует до момента его расторжения по инициативе любой из сторон.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>10.2</span> Пользователь может прекратить использование Сервиса в любое время без объяснения причин.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>10.3</span> Администрация имеет право прекратить предоставление доступа к Сервису в случае нарушения Пользователем условий настоящего Соглашения.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>10.4</span> При прекращении действия Соглашения сохраняются обязательства сторон, возникшие до момента его прекращения.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                11. Заключительные положения
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>11.1</span> Настоящее Соглашение регулируется и подлежит толкованию в соответствии с законодательством Российской Федерации.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>11.2</span> Если какое-либо положение Соглашения будет признано недействительным, это не влияет на действительность остальных положений.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>11.3</span> Бездействие Администрации в случае нарушения Пользователем условий Соглашения не лишает Администрацию права предпринять соответствующие действия в защиту своих интересов позднее.</p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>11.4</span> Настоящее Соглашение составлено на русском языке и может быть предоставлено для ознакомления на других языках. В случае расхождения русскоязычной и иноязычной версий преимущественную силу имеет русскоязычная версия.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[23px] font-bold text-[#121414] dark:text-white mb-[25px]">
                                12. Контактная информация
                            </h3>
                            <div className="space-y-[15px] text-[14px] text-[#121414] dark:text-white">
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]">
                                    <span>12.1</span>
                                    <div>
                                        По всем вопросам, связанным с использованием Сервиса и исполнением настоящего Соглашения, вы можете обращаться: Индивидуальный предприниматель: Шуков Никита Вячеславович ИНН: 771672909530 Веб-сайт: nurax.ai Электронная почта: <br /> <a href="mailto:support@nurax.ai" className="text-[#007bff] hover:underline">support@nurax.ai</a> Время рассмотрения обращений: до 5 рабочих дней
                                    </div>
                                </p>
                                <p className="flex items-start gap-[10px] text-[15px] tabletSm:text-[13px] leading-[145%]"><span>12.2</span> Уведомления, направляемые Администрацией Пользователю, считаются полученными с момента их отправки на указанный при регистрации адрес электронной почты.</p>
                                <p className="text-[15px] tabletSm:text-[13px] leading-[145%]">ИП Шуков Никита Вячеславович, ИНН 771672909530 Nurax AI - Универсальный сервис искусственного интеллекта Настоящее соглашение вступает в силу с момента его акцепта Пользователем</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
} 