'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LegalNavigation() {
    const pathname = usePathname()

    return (
        <div className="flex space-x-[30px] border-b border-[rgba(131,144,167,0.2)]">
            <Link
                href="/legal/user-agreement"
                className={`text-[15px] font-semibold pb-[15px] ${pathname === '/legal/user-agreement'
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