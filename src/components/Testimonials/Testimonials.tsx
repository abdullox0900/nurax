'use client'

import Image, { StaticImageData } from 'next/image'
import './Testimonials.css'

import avatar1 from '@/assets/avatar-t-1.png'
import avatar2 from '@/assets/avatar-t-2.png'
import avatar3 from '@/assets/avatar-t-3.png'
import avatar4 from '@/assets/avatar-t-4.png'
import { useTheme } from 'next-themes'


interface TestimonialProps {
    id: string
    name: string
    position: string
    avatar: StaticImageData | string
    quote: string[]
}

const TestimonialCard = ({ id, name, position, avatar, quote }: TestimonialProps) => {

    const { theme } = useTheme()

    return (
        <div className="relative self-stretch w-full h-[340px] ">
            {theme === 'dark' ? (
                <svg width={420} height={340} viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M420 260C420 271.046 411.046 280 400 280H380C368.954 280 360 288.954 360 300V320C360 331.046 351.046 340 340 340H20C8.95432 340 0 331.046 0 320V20.0001C0 8.95443 8.95431 0.00012207 20 0.00012207H400C411.046 0.00012207 420 8.95443 420 20.0001V260Z" fill="#222429" />
                </svg>
            ) : (
                <svg width={420} height={340} viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M420 260C420 271.046 411.046 280 400 280H380C368.954 280 360 288.954 360 300V320C360 331.046 351.046 340 340 340H20C8.95432 340 0 331.046 0 320V20.0001C0 8.95443 8.95431 0.00012207 20 0.00012207H400C411.046 0.00012207 420 8.95443 420 20.0001V260Z" fill="#F9F9F9" />
                </svg>
            )}

            <div className="flex flex-col w-[340px] items-start gap-[15px] absolute top-10 left-10">
                {quote.map((paragraph, index) => (
                    <p
                        key={index}
                        className={`relative self-stretch ${index === 0 ? "mt-[-1.00px]" : ""} font-medium italic text-[#121414] dark:text-white text-[13px] tracking-[0] leading-[17.6px]`}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="inline-flex items-center gap-[15px] absolute top-[252px] left-10">
                <div className="h-[46px] w-[46px] rounded-full overflow-hidden">
                    <Image
                        src={avatar}
                        alt={name}
                        width={46}
                        height={46}
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col w-[211px] items-start gap-0.5 relative">
                    <h3 className="relative self-stretch mt-[-1.00px] font-bold text-[#121414] dark:text-white text-[15px] tracking-[0] leading-[20.2px]">
                        {name}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 relative self-stretch font-medium text-[13px] tracking-[0] leading-[17.6px]">
                        {position}
                    </p>
                </div>
            </div>

            <div className="absolute w-[50px] h-[50px] top-[289px] left-[370px] bg-[#2d63f3] rounded-[15px] flex items-center justify-center p-0">
                <span className="font-bold text-white text-[15px] text-center tracking-[0] leading-[20.2px]">
                    {id}
                </span>
            </div>
        </div>
    )
}

const Testimonials = () => {
    const testimonials = [
        {
            id: "01",
            name: "Михаил Соколов",
            position: "Руководитель отдела маркетинга",
            avatar: avatar1,
            quote: [
                "«Nurax изменил мой подход к работе с данными. Раньше подготовка месячных отчетов занимала целый день — сбор метрик, анализ трендов, визуализация. Теперь я просто загружаю файлы и описываю, что нужно.",
                "Результат превосходит ожидания: четкие инсайты, красивые графики и готовые рекомендации за 15 минут. Это как иметь персонального аналитика данных 24/7»",
            ],
        },
        {
            id: "03",
            name: "Дмитрий Волков",
            position: "Генеральный директор стартапа",
            avatar: avatar3,
            quote: [
                "«В стартапе каждая минута на счету. Nurax помогает мне в самых разных задачах — от анализа конкурентов до подготовки питчей для инвесторов.",
                "Недавно за полчаса собрал полное исследование рынка с трендами, ключевыми игроками и перспективными нишами. Раньше на это ушла бы неделя работы целой команды. Это серьезное конкурентное преимущество.",
            ],
        },
        {
            id: "02",
            name: "Анна Петрова",
            position: "Freelance копирайтер",
            avatar: avatar2,
            quote: [
                "«Как фрилансер, я постоянно жонглирую десятками проектов. Nurax стал моим спасением — помогает с исследованиями, генерирует идеи для контента, адаптирует тексты под разные аудитории.",
                "Особенно впечатляет его способность понимать контекст. Даю ему техническое ТЗ — получаю продающий текст. Рассказываю про B2B клиента  выдает серьезный экспертный контент. Качество на уровне!»",
            ],
        },
        {
            id: "04",
            name: "Елена Морозова",
            position: "Преподаватель университета",
            avatar: avatar4,
            quote: [
                "Nurax стал незаменимым помощником в подготовке лекций и научной работе. Он быстро обрабатывает большие объемы литературы, выделяет ключевые концепции, помогает структурировать материал.",
                "Студенты теперь получают более качественные материалы, а я экономлю часы времени на рутинной работе. Могу сосредоточиться на том, что действительно важно.",
            ],
        },
    ]

    const leftColumnTestimonials = testimonials.filter(
        (t) => t.id === "01" || t.id === "03",
    )

    const rightColumnTestimonials = testimonials.filter(
        (t) => t.id === "02" || t.id === "04",
    )

    return (
        <section className="bg-white dark:bg-[#121414] flex flex-row justify-center w-full border-y border-[#F9F9FA] dark:border-[rgba(249,249,250,0.01)] testimonials-card">
            <div className="container mx-auto overflow-hidden w-full h-[830px] relative">
                <header className="flex flex-col w-[400px] items-start gap-[25px] absolute top-[171px]">
                    <h1 className="relative self-stretch mt-[-1.00px] font-bold text-[#121414] dark:text-white text-[40px] tracking-[0] leading-[44.8px]">
                        Отзывы из разных
                        <br />
                        отраслей
                    </h1>

                    <p className="relative self-stretch font-semibold text-[#121414] dark:text-white text-[15px] tracking-[0] leading-[20.2px]">
                        Мы любим слышать наших пользователей, <br />
                        особенно тех, кто формирует свои отрасли
                    </p>
                </header>

                <div className="absolute w-[936px] h-[795px] top-20 left-[664px]">
                    <div className="flex flex-col w-[420px] items-start gap-[15px] absolute top-0 left-0">
                        {leftColumnTestimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                id={testimonial.id}
                                name={testimonial.name}
                                position={testimonial.position}
                                avatar={testimonial.avatar}
                                quote={testimonial.quote}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col w-[420px] items-start gap-[15px] absolute top-[100px] left-[435px]">
                        {rightColumnTestimonials.map((testimonial) => (
                            <TestimonialCard
                                key={testimonial.id}
                                id={testimonial.id}
                                name={testimonial.name}
                                position={testimonial.position}
                                avatar={testimonial.avatar}
                                quote={testimonial.quote}
                            />
                        ))}
                    </div>

                    <div className="w-[936px] h-[170px] top-[580px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] absolute left-0  dark:bg-[linear-gradient(0deg,rgba(18,20,20,1)_0%,rgba(18,20,20,0)_100%)]" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials 