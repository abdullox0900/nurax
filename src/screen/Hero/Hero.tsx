'use client'

import Header from '@/components/Header/Header'
import InfoCards from '@/components/InfoCards/InfoCards'
import Search from '@/components/Search/Search'
import { useTheme } from 'next-themes'

export default function Hero() {
    const { theme } = useTheme()
    return (
        <div className='p-[20px] pb-0'>
            <div className={`rounded-[20px] screen-linear-gradient p-[10px] ${theme === 'dark' ? 'bg-[#222429]' : ' bg-custom-gradient'}`}>
                <div className='relative z-10 pb-[140px]'>
                    <Header bgColor='bg-transparent' />
                    <div className='mt-[75px]'>
                        <h1 className='text-[50px] font-bold max-w-[875px] mx-auto mb-[50px] text-center leading-[120%]'>
                            Ваш личный ИИ-Сотрудник <br />
                            Работает 24/7, пока вы отдыхаете
                        </h1>
                        <div className=' mx-auto'>
                            <Search />
                        </div>
                    </div>
                </div>
                <InfoCards />
            </div>
        </div>
    )
}
