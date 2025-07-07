"use client"

import { InputHTMLAttributes, ReactNode, useState } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: ReactNode
    error?: string
    touched?: boolean
}

export default function FormInput({
    icon,
    error,
    touched = false,
    className = '',
    ...props
}: FormInputProps) {
    const [isFocused, setIsFocused] = useState(false)

    const getInputStateClasses = () => {
        if (error && touched) {
            return 'border-[#FB3636] dark:border-[#FB3636] focus:ring-[#FB3636] focus:border-[#FB3636]'
        }
        if (isFocused) {
            return 'border-[#121414] dark:border-white focus:ring-[#121414] dark:focus:ring-white focus:border-[#121414] dark:focus:border-white'
        }
        return 'border-[rgba(131,144,167,0.2)] dark:border-[rgba(131,144,167,0.2)] hover:border-[#121414] dark:hover:border-white'
    }

    return (
        <div className="mb-[15px] tabletSm:mb-[10px]">
            <div className="relative">
                <div className="absolute inset-y-[5px] left-[5px] flex items-center justify-center bg-[#F9F9F9] dark:bg-[#222429] rounded-full pointer-events-none w-[40px] h-[40px]">
                    {icon}
                </div>
                <input
                    className={`w-full pl-[60px] pr-[20px] py-[13px] border rounded-[17px] bg-white dark:bg-[#121414] text-[#121414] dark:text-white placeholder-[#8390A7] dark:placeholder-[#8390A7] focus:outline-none transition-colors duration-200 text-[15px] font-medium outline-none ${getInputStateClasses()} ${className}`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </div>
        </div>
    )
} 