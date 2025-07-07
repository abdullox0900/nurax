"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative inline-flex h-[45px] w-[93px] cursor-pointer rounded-full bg-white/30 backdrop-blur-[60px] p-[2px] shadow-sm transition-colors dark:bg-[rgba(18,20,20,0.3)] border-[1px] border-white dark:border-[rgba(18,20,20,0.3)]"
        >
            <div className="absolute left-[12px] top-[11.5px] z-1">
                {theme !== 'dark' && (
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2006_1600)">
                            <path d="M10.502 14.875C12.9182 14.875 14.877 12.9162 14.877 10.5C14.877 8.08375 12.9182 6.125 10.502 6.125C8.08571 6.125 6.12695 8.08375 6.12695 10.5C6.12695 12.9162 8.08571 14.875 10.502 14.875Z" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.502 0.875V2.625" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.502 18.375V20.125" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.69531 3.69238L4.93781 4.93488" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.0664 16.0649L17.3089 17.3074" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.876953 10.5H2.62695" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.377 10.5H20.127" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.69531 17.3074L4.93781 16.0649" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.0664 4.93488L17.3089 3.69238" stroke="#121414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2006_1600">
                                <rect width="21" height="21" fill="white" transform="translate(0.00195312)" />
                            </clipPath>
                        </defs>
                    </svg>
                )}
            </div>
            <div className="absolute right-[10px] top-[10px]">
                {theme === 'dark' && (
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3767 11.1912C18.2391 12.6807 17.6801 14.1001 16.7652 15.2834C15.8503 16.4668 14.6173 17.3651 13.2105 17.8732C11.8037 18.3814 10.2812 18.4784 8.82131 18.1528C7.36139 17.8273 6.02436 17.0927 4.96669 16.0351C3.90902 14.9774 3.17444 13.6404 2.84891 12.1804C2.52339 10.7205 2.62037 9.19807 3.12852 7.79126C3.63667 6.38445 4.53497 5.15145 5.71831 4.23653C6.90164 3.32162 8.32107 2.76264 9.8105 2.625C8.93848 3.80473 8.51886 5.25827 8.62796 6.72124C8.73706 8.18421 9.36762 9.55943 10.405 10.5968C11.4423 11.6341 12.8175 12.2647 14.2805 12.3738C15.7435 12.4829 17.197 12.0633 18.3767 11.1912Z" stroke="#F9F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                )}
            </div>
            <div
                className={`${theme !== 'dark' ? 'translate-x-[50px] translate-y-[1.8px]' : 'translate-x-[1.5px] translate-y-[1.8px]'
                    } flex h-[35px] w-[35px] transform items-center justify-center rounded-full bg-white ring-0 transition duration-200 ease-in-out dark:bg-white`}
            />
        </div>
    )
} 