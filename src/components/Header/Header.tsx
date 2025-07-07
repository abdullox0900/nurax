import logoDark from '@/assets/logo-dark.svg'
import logoLight from '@/assets/logo-light.svg'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ bgColor }: { bgColor: string }) {
    const { theme } = useTheme()
    const isDarkMode = theme === 'dark'

    return (
        <div className={`container mx-auto ${bgColor}`}>
            <header className='flex justify-between items-center py-[65px]'>
                <Image src={isDarkMode ? logoLight : logoDark} alt="logo" width={185} height={35} />
                <nav>
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

                <div className="flex items-center gap-6">
                    <ThemeToggle />

                    <div className="flex gap-[4px]">
                        <Link href="/auth/login" className="px-[25px] py-[17px] flex items-center justify-center h-[45px] text-[15px] font-medium text-white rounded-[11px] bg-[#121414] dark:bg-white dark:text-black">Войти</Link>
                        <Link href="/auth/register" className="px-[25px] py-[17px] flex items-center justify-center h-[45px] text-[15px] font-medium text-black rounded-[11px] border border-[#121414] bg-transparent dark:text-white dark:border-white">Зарегистрироваться</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}
