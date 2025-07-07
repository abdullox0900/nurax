'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'

const Footer = () => {
    const { theme } = useTheme()

    return (
        <footer className="w-full bg-white dark:bg-[#121414] border-t  dark:border-[rgba(249,249,250,0.10)] pt-[70px] pb-[80px]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-start">
                    {/* Logo Section */}
                    <div>
                        <Image src={theme === 'dark' ? logoLight : logoDark} alt="logo" className="w-[185px] h-[35px] mb-[30px]" />
                        <div className="text-sm text-[#8390A7] dark:text-[#8390A7]">
                            <p>Nurax от RoboGPT</p>
                            <p>Ваш личный ИИ-сотрудник</p>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className='flex gap-[160px]'>
                        <div>
                            <h3 className="text-[18px] font-bold text-[#121414] dark:text-white mb-[25px]">Nurax</h3>
                            <div className="flex flex-col gap-[15px]">
                                <p><Link href="#" className="text-[15px] font-medium text-[#121414] dark:text-[#F9F9FA] hover:text-gray-900 dark:hover:text-white">Войти</Link></p>
                                <p><Link href="#" className="text-[15px] font-medium text-[#121414] dark:text-[#F9F9FA] hover:text-gray-900 dark:hover:text-white">Регистрация</Link></p>
                            </div>
                        </div>

                        {/* Legal Section */}
                        <div>
                            <h3 className="text-[18px] font-bold text-[#121414] dark:text-white mb-[25px]">Юридическая информация</h3>
                            <div className="flex flex-col gap-[15px]">
                                <p><Link href="#" className="text-[15px] font-medium text-[#121414] dark:text-[#F9F9FA] hover:text-gray-900 dark:hover:text-white">Политика конфиденциальности</Link></p>
                                <p><Link href="#" className="text-[15px] font-medium text-[#121414] dark:text-[#F9F9FA] hover:text-gray-900 dark:hover:text-white">Условия использования</Link></p>
                                <p><Link href="#" className="text-[15px] font-medium text-[#121414] dark:text-[#F9F9FA] hover:text-gray-900 dark:hover:text-white">Правила и положения</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start">
                        <div className="flex gap-[10px]">
                            <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V25.3125C0 27.9013 2.09867 30 4.6875 30H25.3125C27.9013 30 30 27.9013 30 25.3125V4.6875C30 2.09867 27.9013 0 25.3125 0Z" fill={theme === 'dark' ? '#8390A7' : 'rgba(131, 144, 167, 0.30)'} fillOpacity="0.7" />
                                    <path d="M7.59367 14.7265C11.6202 12.9722 14.3052 11.8157 15.6486 11.2569C19.4844 9.66148 20.2814 9.38434 20.8009 9.37509C20.9152 9.37317 21.1707 9.40149 21.3362 9.53577C21.4759 9.64916 21.5143 9.80232 21.5327 9.90982C21.5511 10.0173 21.574 10.2622 21.5558 10.4536C21.348 12.6376 20.4486 17.9376 19.991 20.3838C19.7974 21.4189 19.4161 21.7659 19.047 21.7999C18.2449 21.8737 17.6359 21.2698 16.859 20.7605C15.6434 19.9637 14.9566 19.4676 13.7766 18.69C12.4129 17.7914 13.2969 17.2974 14.0741 16.4902C14.2775 16.279 17.8115 13.0645 17.8799 12.7729C17.8885 12.7364 17.8964 12.6005 17.8157 12.5287C17.7349 12.4569 17.6157 12.4815 17.5297 12.501C17.4078 12.5287 15.4658 13.8123 11.7036 16.3518C11.1524 16.7303 10.6531 16.9147 10.2058 16.9051C9.71261 16.8944 8.76396 16.6262 8.05873 16.397C7.19374 16.1158 6.50627 15.9671 6.56613 15.4896C6.59731 15.2409 6.93983 14.9865 7.59367 14.7265Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V25.3125C0 27.9013 2.09867 30 4.6875 30H25.3125C27.9013 30 30 27.9013 30 25.3125V4.6875C30 2.09867 27.9013 0 25.3125 0Z" fill={theme === 'dark' ? '#8390A7' : 'rgba(131, 144, 167, 0.30)'} fillOpacity="0.7" />
                                    <path d="M22.125 11.3438C21.9375 10.6875 21.4688 10.2188 20.8125 10.0313C19.6875 9.75 14.9062 9.75 14.9062 9.75C14.9062 9.75 10.2188 9.75 9.00001 10.0313C8.34376 10.2188 7.875 10.6875 7.6875 11.3438C7.5 12.5625 7.5 15 7.5 15C7.5 15 7.5 17.4375 7.78125 18.6562C7.96875 19.3125 8.4375 19.7812 9.09375 19.9687C10.2187 20.25 15 20.25 15 20.25C15 20.25 19.6875 20.25 20.9062 19.9687C21.5625 19.7812 22.0313 19.3125 22.2188 18.6562C22.5 17.4375 22.5 15 22.5 15C22.5 15 22.5 12.5625 22.125 11.3438ZM13.5 17.25V12.75L17.4375 15L13.5 17.25Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 