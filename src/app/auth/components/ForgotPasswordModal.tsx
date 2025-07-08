"use client"

import { useEffect, useRef, useState } from 'react'
import FormInput from './FormInput'

interface ForgotPasswordModalProps {
    onClose: () => void
}

export default function ForgotPasswordModal({ onClose }: ForgotPasswordModalProps) {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [error, setError] = useState('')
    const [touched, setTouched] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    // Handle animation on mount
    useEffect(() => {
        // Small delay to ensure the modal is in the DOM before animating
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 10)

        return () => clearTimeout(timer)
    }, [])

    const validateEmail = (email: string) => {
        if (!email) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid'
        return ''
    }

    const handleBlur = () => {
        setTouched(true)
        setError(validateEmail(email))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const emailError = validateEmail(email)
        setError(emailError)
        setTouched(true)

        if (emailError) {
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            // In a real app, you would send a request to your backend here
        }, 1000)
    }

    // Handle smooth closing animation
    const handleClose = () => {
        setIsVisible(false)
        // Wait for animation to complete before removing modal from DOM
        setTimeout(() => {
            onClose()
        }, 300) // Match this with the CSS transition duration
    }

    // Close modal when clicking outside
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleClose()
        }
    }

    const emailIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-300 ease-in-out ${isVisible ? 'bg-opacity-50' : 'bg-opacity-0'}`}
            onClick={handleOutsideClick}
        >
            <div
                ref={modalRef}
                className={`relative w-full max-w-[500px] bg-white dark:bg-[#222429] rounded-[20px] transition-all duration-300 ease-in-out transform z-[100] tabletSm:max-w-full ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} mx-4`}
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >

                <div className="p-4 md:p-6">
                    <h2 className="text-[32px] font-bold text-[#121414] dark:text-white mb-[15px] leading-[120%] tabletSm:text-[24px]">
                        Сбросить пароль
                    </h2>

                    <p className="text-[15px] text-[#121414] dark:text-[#F9F9FA] font-semibold leading-[151%] mb-[20px] tabletSm:text-[12px]">
                        Введите свой адрес электронной почты, и мы вышлем вам ссылку для сброса пароля
                    </p>

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            icon={emailIcon}
                            type="email"
                            placeholder="Адрес электронной почты"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleBlur}
                            error={error}
                            touched={touched}
                            required
                            className="mb-[20px] tabletSm:mb-[10px]"
                        />

                        <div className="flex flex-col gap-[20px]">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#2D63F3] text-white font-medium py-[13px] rounded-[11px] transition duration-200 disabled:opacity-70 text-[15px] leading-[151%]"
                            >
                                {isSubmitting ? 'Отправка...' : 'Отправить ссылку сброса'}
                            </button>

                            <button
                                type="button"
                                onClick={handleClose}
                                className="w-full text-[#121414] dark:text-white font-semibold leading-[151%] text-[15px] pb-[14px]"
                            >
                                Отмена
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
} 