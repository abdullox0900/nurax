'use client'

import { MdCheck } from 'react-icons/md'
import './PricingSection.css'

const PricingSection = () => {
    const pricingPlans = [
        {
            id: 'free',
            name: 'Бесплатно',
            price: '0 ₽',
            features: [
                'Общественные проекты',
                'Базовая модель (Ограниченные возможности)'
            ]
        },
        {
            id: 'basic',
            name: 'Базовый',
            price: '1 500 ₽',
            features: [
                '1 час',
                'Личные проекты',
                'Стандартная модель'
            ]
        },
        {
            id: 'pro',
            name: 'Профи',
            price: '2 500 ₽',
            features: [
                '2 часа',
                'Частные проекты',
                'Доступ к интеллектуальной модели'
            ]
        },
        {
            id: 'premium',
            name: 'Обычный',
            price: '5 500 ₽',
            features: [
                'Соответствует вашим потребностям'
            ]
        }
    ]

    return (
        <div id="pricing" className="w-full pb-[120px] pt-[80px] max-w-[1440px] mx-auto px-4">
            <div className="text-center mb-[50px]">
                <h2 className="max-w-[750px] leading-[112%] mx-auto text-[40px] font-bold mb-[25px] tabletSm:text-[25px] tabletSm:leading-[112%]">
                    Выберите подходящий <span className="text-blue-500">план для ваших нужд</span>
                </h2>
                <p className="text-[15px] leading-[135%] text-[#121414] max-w-[500px] mx-auto dark:text-white">
                    Начните с нашего бесплатного плана или перейдите на премиум-план,
                    чтобы увеличить количество часов использования
                </p>
            </div>

            <div className="grid grid-cols-4 gap-[15px] laptopMd:grid-cols-1">
                {pricingPlans.map((plan, index) => (
                    <div key={plan.id} className={
                        index === 2 ?
                            "border border-blue-500 rounded-[20px] p-[40px] bg-[#2D63F3] text-white overflow-hidden flex flex-col h-[410px] pricing-section tabletSm:h-[360px] tabletSm:px-[20px] tabletSm:py-[25px]" :
                            index === 3 ?
                                "border border-[rgba(131,144,167,0.2)] dark:border-[rgba(249,249,250,0.08)] rounded-[20px] p-[40px] dark:bg-[#222429] flex flex-col laptopMd:h-[410px] tabletSm:h-[360px] tabletSm:px-[20px] tabletSm:py-[25px]" :
                                "border border-[rgba(131,144,167,0.2)] dark:border-[rgba(249,249,250,0.08)] rounded-[20px] p-[40px] bg-[#F9F9F9] dark:bg-[#222429] flex flex-col laptopMd:h-[410px] tabletSm:h-[360px] tabletSm:px-[20px] tabletSm:py-[25px]"
                    }>
                        <div className="mb-[40px]">
                            <p className="text-[15px] font-bold mb-[15px]">{plan.name}</p>
                            <div className="flex items-end">
                                <h3 className="text-[40px] font-semibold laptopMd:text-[30px] tabletSm:text-[40px]">{plan.price}</h3>
                                <span className={index === 2 ? "text-white ml-2 mb-1" : "text-[#121414] ml-2 mb-1 dark:text-white"}>/ в месяц</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[8px] flex-grow">
                            {plan.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-[10px]">
                                    <span className={`w-[12px] h-[12px] rounded-full flex items-center justify-center ${index === 2 ? "bg-white" : "bg-[#8390A7]"}`}>
                                        <MdCheck className={index === 2 ? "text-[#2D63F3] text-[8px]" : "text-[#fff] text-[8px]"} />
                                    </span>
                                    <span className={index === 2 ? "text-[15px] font-medium" : "text-[15px] font-medium text-[#121414] dark:text-[#F9F9FA]"}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className={
                            index === 2 ?
                                "w-full py-3 text-white rounded-[11px] text-[15px] font-semibold  transition-colors border border-white bg-transparent" :
                                "w-full py-3 border border-[#121414] text-[#121414] rounded-[11px] text-[15px] font-semibold dark:hover:bg-gray-700 transition-colors dark:border-white dark:text-white"
                        }>
                            Попробовать бесплатно
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingSection