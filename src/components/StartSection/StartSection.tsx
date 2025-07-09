'use client'

import Image from 'next/image'
import avatar1 from '../../assets/avatar-1.png'
import avatar2 from '../../assets/avatar-2.png'
import avatar3 from '../../assets/avatar-3.png'
import './StartSection.css'

const StartSection = () => {
    return (
        <div className="pb-[120px] max-w-[1440px] mx-auto px-4 tablet:px-0 tabletSm:pb-[0px]">
            <div className="w-full start-section-bg text-white py-[80px] px-4 rounded-[20px] tablet:rounded-[0px] tabletSm:py-[60px] tabletSm:px-[20px]">
                <div className="mx-auto text-center">
                    {/* Avatar group */}
                    <div className="flex justify-center mb-[30px] tabletSm:mb-[25px]">
                        <div className="flex -space-x-[10px]">
                            <div className="w-[55px] h-[55px] rounded-full border-2 border-[#12124A] bg-gray-300 flex items-center justify-center text-xs text-gray-600 tabletSm:w-[40px] tabletSm:h-[40px]">
                                <Image src={avatar1} alt="avatar" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-[55px] h-[55px] rounded-full border-2 border-[#12124A] bg-blue-300 flex items-center justify-center text-xs text-blue-600 tabletSm:w-[40px] tabletSm:h-[40px]">
                                <Image src={avatar2} alt="avatar" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-[55px] h-[55px] rounded-full border-2 border-[#12124A] bg-green-300 flex items-center justify-center text-xs text-green-600 tabletSm:w-[40px] tabletSm:h-[40px]">
                                <Image src={avatar3} alt="avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Main heading */}
                    <h2 className="text-[50px] font-semibold mb-[10px] tabletSm:text-[25px] tabletSm:leading-[112%]">
                        Начните использовать Nurax сегодня
                    </h2>

                    {/* Subheading */}
                    <p className="text-white mb-[70px] tabletSm:mb-[60px]">
                        Универсальный ИИ-сотрудник, работающий 24/7
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button className="bg-[#2D63F3] hover:bg-blue-600 text-white px-6 py-3 rounded-[11px] font-medium transition-colors ">
                            Начать бесплатно
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartSection 