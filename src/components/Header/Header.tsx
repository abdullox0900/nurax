"use client"

import logoDark from '@/assets/logo-dark.svg'
import logoLight from '@/assets/logo-light.svg'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ bgColor }: { bgColor: string }) {
    const { theme } = useTheme()
    const isDarkMode = theme === 'dark'
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <div className={`container mx-auto ${bgColor}`}>
            <header className='flex justify-between items-center py-[65px] tabletMd:py-[40px] tabletSm:py-[20px]'>
                <Image src={isDarkMode ? logoLight : logoDark} alt="logo" width={185} height={35} className='tabletSm:w-[127px] tabletSm:h-[24px]' />

                {/* Desktop Navigation */}
                <nav className='flex laptopSm:hidden'>
                    <ul className='flex gap-[70px]'>
                        <li>
                            <Link href="/" className='text-[15px] font-semibold text-gray-800 dark:text-gray-200'>Кейсы</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-[15px] font-semibold text-gray-800 dark:text-gray-200'>Отзывы</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-[15px] font-semibold text-gray-800 dark:text-gray-200'>Тарифы</Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex laptopSm:hidden items-center gap-6">
                    <ThemeToggle />

                    <div className="flex gap-[4px]">
                        <Link href="/auth/login" className="px-[25px] py-[17px] flex items-center justify-center h-[45px] text-[15px] font-medium text-white rounded-[11px] bg-[#121414] dark:bg-white dark:text-black">Войти</Link>
                        <Link href="/auth/register" className="px-[25px] py-[17px] flex items-center justify-center h-[45px] text-[15px] font-medium text-black rounded-[11px] border border-[#121414] bg-transparent dark:text-white dark:border-white">Зарегистрироваться</Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="hidden laptopSm:flex items-center gap-2 ">
                    <ThemeToggle />
                    <button
                        className="w-[60px] h-[40px] flex items-center justify-center bg-white dark:bg-[#121414] rounded-[12px]"
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6.5H3" stroke={isDarkMode ? "#fff" : "#121414"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 12.5H7" stroke={isDarkMode ? "#fff" : "#121414"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 18.5H3" stroke={isDarkMode ? "#fff" : "#121414"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6.5H3" stroke={isDarkMode ? "#fff" : "#121414"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 12.5H7" stroke={isDarkMode ? "#fff" : "#121414"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 18.5H3" stroke={isDarkMode ? "#fff" : "#121414"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-[#F9F9F9] dark:bg-[#121414] hidden laptopSm:block ">
                    <div className='dark:bg-[#222429] border-b border-[rgba(131,144,167,0.2)]  dark:border-[rgba(131,144,167,0.2)]'>
                        <div className="flex justify-between items-center container mx-auto py-[95px] tabletMd:py-[40px] tabletSm:py-[20px] tabletSm:px-[20px]">
                            <Image src={isDarkMode ? logoLight : logoDark} alt="logo" width={185} height={35} className='tabletSm:w-[127px] tabletSm:h-[24px]' />
                            <div className="flex items-center gap-2">
                                <ThemeToggle />
                                <button
                                    className="w-[60px] h-[40px] flex items-center justify-center bg-[#121414] dark:bg-white rounded-[12px]"
                                    onClick={toggleMobileMenu}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke={isDarkMode ? "#121414" : "#fff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 6L18 18" stroke={isDarkMode ? "#121414" : "#fff"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    <nav className="px-4 mt-12 tabletSm:mt-[80px]">
                        <ul className="flex flex-col gap-[40px]">
                            <li>
                                <Link href="/" className="text-[32px] font-bold text-black dark:text-white" onClick={toggleMobileMenu}>Кейсы</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-[32px] font-bold text-black dark:text-white" onClick={toggleMobileMenu}>Отзывы</Link>
                            </li>
                            <li>
                                <Link href="/" className="text-[32px] font-bold text-black dark:text-white" onClick={toggleMobileMenu}>Тарифы</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="absolute bottom-0 left-0 right-0 px-4 py-[30px] bg-[#FFFFFF] dark:bg-[#222429]">
                        <div className="flex flex-col gap-2 w-full">
                            <Link
                                href="/auth/login"
                                className="w-full py-4 text-center text-[15px] font-medium rounded-[11px] bg-[#121414] text-white dark:bg-white dark:text-black"
                                onClick={toggleMobileMenu}
                            >
                                Войти
                            </Link>
                            <Link
                                href="/auth/register"
                                className="w-full py-4 text-center text-[15px] font-medium rounded-[11px] border border-[#121414] bg-transparent text-black dark:text-white dark:border-white"
                                onClick={toggleMobileMenu}
                            >
                                Зарегистрироваться
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
