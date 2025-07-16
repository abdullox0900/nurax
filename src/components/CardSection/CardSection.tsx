'use client'

import { cardsData, type Card } from '@/data/card-section'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import './CardSection.css'

const CardSection = () => {
    // Get unique categories
    const uniqueCategories = Array.from(new Set(cardsData.map(card => card.category)))
    const categories = ['Все задачи', ...uniqueCategories]

    // State for active category filter
    const [activeCategory, setActiveCategory] = useState('Все задачи')

    // State for pagination
    const [visibleCards, setVisibleCards] = useState(10)

    // Filter cards based on active category
    const filteredCards = activeCategory === 'Все задачи'
        ? cardsData
        : cardsData.filter(card => card.category === activeCategory)

    // Get currently visible cards
    const currentCards = filteredCards.slice(0, visibleCards)

    // Handle show more button click
    const handleShowMore = () => {
        setVisibleCards(prev => prev + 5)
    }

    return (
        <div id="cases" className="w-full pt-[120px] pb-[80px] card-section-bg">
            <h2 className="text-[40px] leading-[112%] font-bold mb-[25px] text-center dark:text-white tabletSm:text-[30px] tabletSm:mb-[15px]">
                Изучите примеры использования
                <br /> из <span className="text-blue-500">нашей официальной коллекции</span>
            </h2>
            <p className="text-center mb-[50px] text-[15px] leading-[135%] dark:text-[#F9F9FA] tabletSm:text-[13px] tabletSm:mb-[25px]">
                Узнайте как Наши специалисты с различными заданиями с помощью пошаговых примеров
            </p>

            {/* Category filter */}
            <div className="w-full mb-[50px] tabletSm:mb-[30px]">
                <div className="overflow-x-auto w-full">
                    <div className="flex gap-[5px] pl-[20px] whitespace-nowrap min-w-max mx-auto justify-center pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category)
                                    setVisibleCards(10) // Reset visible cards when changing category
                                }}
                                className={`px-4 py-2 rounded-[11px] text-[15px] font-semibold leading-[135%] transition-all whitespace-nowrap ${activeCategory === category
                                    ? 'bg-black text-white border border-transparent dark:bg-[#fff] dark:text-[#121414]'
                                    : 'bg-transparent border border-[rgba(131,144,167,0.2)] dark:bg-[#222429] text-[#121414] dark:text-[#fff] dark:border-[rgba(249,249,250,0.08)]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] px-4 mx-auto grid grid-cols-5 gap-[15px] laptop:grid-cols-4 laptopMd:grid-cols-3 tabletMd:grid-cols-2 tabletSm:grid-cols-1">
                {currentCards.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
            </div>

            {/* Show more button */}
            {visibleCards < filteredCards.length && (
                <div className="flex justify-center mt-[50px]">
                    <button
                        onClick={handleShowMore}
                        className="px-[74px] py-[14px] h-[45px] flex items-center justify-center border border-[#121414] text-black rounded-[11px] dark:border-[#fff] dark:text-[#fff]"
                    >
                        Показать еще
                    </button>
                </div>
            )}
        </div>
    )
}

// Card component with hover effect
const CardItem = ({ card }: { card: Card }) => {
    const [isHovered, setIsHovered] = useState(false)
    const { theme } = useTheme()

    return (
        <div
            className="relative w-[276px] h-[315px] rounded-[20px] overflow-hidden border border-[rgba(131,144,167,0.2)] dark:bg-[#121414] dark:border-[rgba(249,249,250,0.08)] cursor-pointer laptop:w-full"
            style={{
                backgroundColor: card.hasImage ? theme === 'dark' ? '' : '' : theme === 'dark' ? '#222429' : '#F9F9F9',
                padding: card.hasImage ? '10px 10px 25px' : '25px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {card.hasImage && (
                <div className="w-[256px] h-[155px] mb-[20px] rounded-[15px] overflow-hidden laptop:w-full">
                    <Image
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full"
                        width={256}
                        height={155}
                    />
                </div>
            )}

            <div
                className="flex flex-col justify-between px-[15px]"
                style={{
                    height: card.hasImage ? '100px' : '100%',
                    padding: card.hasImage ? '' : '0px'
                }}
            >
                <h3 className="text-[15px] leading-[125%] font-semibold z-10 relative text-[#121414] dark:text-white">
                    {card.title}
                </h3>

                <p className="text-[11px] leading-[148%] z-10 relative text-[#121414] dark:text-[#8390A7]">
                    {card.description}
                </p>
            </div>

            {/* Hover overlay with blur effect */}
            <div
                className={`absolute inset-0 flex flex-col gap-[17px] bg-white/20 dark:bg-[#222429]/20 backdrop-blur-[10px] items-center justify-center transition-all duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="w-[60px] h-[60px] rounded-full bg-black dark:bg-white flex items-center justify-center transform transition-all duration-300 z-20 relative">
                    <MdArrowForward className="text-white text-xl dark:text-[#121414]" />
                </div>
                <span className="text-[13px] leading-[125%] font-semibold z-10 relative text-[#121414] dark:text-[#fff]">
                    Посмотреть повторно
                </span>
            </div>
        </div>
    )
}

export default CardSection 