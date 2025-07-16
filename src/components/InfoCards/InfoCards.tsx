import React from 'react'
import { MdArrowForward } from 'react-icons/md'

const InfoCards = () => {
    const cards = [
        {
            title: "Задача",
            content: "Опишите свою задачу или цель на естественном языке — от написания текста и анализа данных до планирования проекта или решения рабочих вопросов"
        },
        {
            title: "Образовы",
            content: "Nurax проанализирует ваш запрос, выберет оптимальную модель ИИ и выполнит задачу с максимальным качеством и точностью"
        },
        {
            title: "Уточнение",
            content: "Доработайте результат через диалог — попросите изменить стиль, добавить детали, исправить ошибки или адаптировать под ваши требования"
        },
        {
            title: "Применение",
            content: "Получите готовое решение в нужном формате — скопируйте текст, экспортируйте файл, интегрируйте в свой рабочий процесс или делитесь результатом"
        }
    ]

    return (
        <div className="w-full py-[31px] rounded-[20px] bg-white/40 dark:bg-[#121414]/40 laptopMd:py-[20px] laptopMd:px-[20px]">
            <div className="flex items-center justify-center laptopMd:flex-col laptopMd:gap-[20px]">
                {cards.map((card, index) => (
                    <React.Fragment key={index}>
                        <div className='max-w-[300px] laptopMd:max-w-[600px] tabletMd:max-w-full'>
                            <h3 className="text-[15px] leading-[134%] font-semibold text-[#121414] mb-[12px] dark:text-[#fff] tabletSm:text-[13px] tabletSm:mb-[10px]">
                                {card.title}
                            </h3>
                            <p className="text-[#121414] text-[11px] leading-[148%] dark:text-[#fff] tabletSm:text-[10px]">
                                {card.content}
                            </p>
                        </div>
                        {index < cards.length - 1 && (
                            <div className="flex items-center justify-center mr-[20px] ml-[5px] w-[40px] h-[40px] bg-white rounded-full dark:bg-[#121414] laptop:hidden">
                                <MdArrowForward className='' />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default InfoCards