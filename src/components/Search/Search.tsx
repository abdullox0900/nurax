import { useTheme } from "next-themes"

export default function Search() {
    const { theme } = useTheme()
    return (
        <div className='max-w-[860px] h-[140px] bg-white p-[25px] mx-auto border border-[rgba(131,144,167,0.3)] rounded-[20px] dark:bg-[#121414]'>
            <div>
                <input className='w-full h-full text-[15px] font-medium outline-none bg-transparent placeholder:text-[#8390A7] text-[#121414] dark:text-gray-200' placeholder='Опишите с чем нужна помощь...' type="text" />
            </div>

            <div className='flex justify-between mt-[30px] gap-[10px]'>
                <button className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[rgba(131,144,167,0.20)]'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0797 8.28744L9.18723 15.1799C8.34285 16.0243 7.19762 16.4987 6.00348 16.4987C4.80934 16.4987 3.66411 16.0243 2.81973 15.1799C1.97535 14.3356 1.50098 13.1903 1.50098 11.9962C1.50098 10.8021 1.97535 9.65682 2.81973 8.81244L9.71223 1.91994C10.2752 1.35702 11.0386 1.04077 11.8347 1.04077C12.6308 1.04077 13.3943 1.35702 13.9572 1.91994C14.5202 2.48286 14.8364 3.24635 14.8364 4.04244C14.8364 4.83853 14.5202 5.60202 13.9572 6.16494L7.05723 13.0574C6.77577 13.3389 6.39403 13.497 5.99598 13.497C5.59793 13.497 5.21619 13.3389 4.93473 13.0574C4.65327 12.776 4.49514 12.3942 4.49514 11.9962C4.49514 11.5981 4.65327 11.2164 4.93473 10.9349L11.3022 4.57494" stroke={theme !== 'dark' ? '#121414' : '#fff'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className='w-[70px] h-[40px] flex items-center justify-center rounded-full bg-[rgba(131,144,167,0.15)]'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15.8333V4.16663" stroke={theme !== 'dark' ? '#8390A7' : '#fff'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 9L10 4L15 9" stroke={theme !== 'dark' ? '#8390A7' : '#fff'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}