'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function LegalNavigation() {
    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 640) // tabletSm breakpoint
        }

        checkIsMobile()
        window.addEventListener('resize', checkIsMobile)

        return () => {
            window.removeEventListener('resize', checkIsMobile)
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const getCurrentLabel = () => {
        if (pathname === '/legal/user-agreement') {
            return 'Пользовательское соглашение'
        } else if (pathname === '/legal/privacy-policy') {
            return 'Политика конфиденциальности'
        }
        return 'Выберите документ'
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    // Mobile dropdown view
    if (isMobile) {
        return (
            <div className="w-full max-w-[300px] mx-auto relative" ref={dropdownRef}>
                <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center p-4 bg-[#F9F9F9] dark:bg-[#222429] rounded-[10px] cursor-pointer border border-[rgba(131,144,167,0.2)]"
                >
                    <span className={`text-[13px] font-semibold ${pathname === '/legal/user-agreement' || pathname === '/legal/privacy-policy'
                        ? 'text-[#121414] dark:text-white'
                        : 'text-[#121414] dark:text-white'
                        }`}>
                        {getCurrentLabel()}
                    </span>
                    <svg
                        className={`w-[25px] h-[15px] ${pathname === '/legal/user-agreement' || pathname === '/legal/privacy-policy'
                            ? 'text-[#121414] dark:text-white'
                            : 'text-[#121414] dark:text-white'
                            } transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                {isDropdownOpen && (
                    <div className="absolute w-full mt-1 bg-white dark:bg-[#222429] border border-[rgba(131,144,167,0.2)] rounded-[10px] overflow-hidden z-10 shadow-lg">
                        <Link
                            href="/legal/user-agreement"
                            className={`block p-4 text-[13px] font-semibold hover:bg-[#e7f0ff] dark:hover:bg-[#2c2f36] ${pathname === '/legal/user-agreement'
                                ? 'bg-[#e7f0ff] text-[#2D63F3] dark:bg-[#2c2f36] dark:text-[#2D63F3]'
                                : 'text-[#121414] dark:text-white'
                                }`}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            Пользовательское соглашение
                        </Link>
                        <Link
                            href="/legal/privacy-policy"
                            className={`block p-4 text-[13px] font-semibold hover:bg-[#e7f0ff] dark:hover:bg-[#2c2f36] ${pathname === '/legal/privacy-policy'
                                ? 'bg-[#e7f0ff] text-[#2D63F3] dark:bg-[#2c2f36] dark:text-[#2D63F3]'
                                : 'text-[#121414] dark:text-white'
                                }`}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            Политика конфиденциальности
                        </Link>
                    </div>
                )}
            </div>
        )
    }

    // Desktop view
    return (
        <div className="flex gap-[30px] max-w-[490px] mx-auto border-b border-[rgba(131,144,167,0.2)]">
            <Link
                href="/legal/user-agreement"
                className={`text-[14px] font-semibold pb-[15px] ${pathname === '/legal/user-agreement'
                    ? 'text-[#2D63F3] border-b-2 border-[#2D63F3]'
                    : 'text-[#121414] dark:text-white'
                    }`}
            >
                Пользовательское соглашение
            </Link>
            <Link
                href="/legal/privacy-policy"
                className={`text-[15px] font-semibold pb-[15px] ${pathname === '/legal/privacy-policy'
                    ? 'text-[#2D63F3] border-b-2 border-[#2D63F3]'
                    : 'text-[#121414] dark:text-white'
                    }`}
            >
                Политика конфиденциальности
            </Link>
        </div>
    )
} 