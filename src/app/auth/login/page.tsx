"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ForgotPasswordModal from '../components/ForgotPasswordModal'
import FormInput from '../components/FormInput'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showForgotPassword, setShowForgotPassword] = useState(false)
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [touched, setTouched] = useState({ email: false, password: false })
    const router = useRouter()

    const validateEmail = (email: string) => {
        if (!email) return 'Email is required'
        if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid'
        return ''
    }

    const validatePassword = (password: string) => {
        if (!password) return 'Password is required'
        if (password.length < 6) return 'Password must be at least 6 characters'
        return ''
    }

    const handleBlur = (field: 'email' | 'password') => {
        setTouched({ ...touched, [field]: true })

        if (field === 'email') {
            setErrors({ ...errors, email: validateEmail(email) })
        } else if (field === 'password') {
            setErrors({ ...errors, password: validatePassword(password) })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validate all fields
        const emailError = validateEmail(email)
        const passwordError = validatePassword(password)

        setErrors({
            email: emailError,
            password: passwordError
        })

        setTouched({
            email: true,
            password: true
        })

        // If no errors, proceed with login
        if (!emailError && !passwordError) {
            // Handle login logic here
            console.log({ email, password })
        }
    }

    const emailIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )

    const passwordIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    )

    return (
        <div className="flex flex-col items-center justify-center relative z-10 pt-[120px] pb-[70px] tabletSm:pt-[110px]">
            <div className="absolute top-[40px] left-[80px] tablet:top-[30px] tablet:left-[20px] tabletSm:top-[20px] tabletSm:left-[10px]">
                <Link href="/" className="flex items-center text-[15px] font-semibold text-[#121414] dark:text-white tabletSm:text-[12px]">
                    <span className='flex items-center justify-center w-[40px] h-[40px] text-[#121414] bg-white dark:bg-[#222429] dark:text-white rounded-full mr-[15px] tabletSm:w-[35px] tabletSm:h-[35px]'>
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8327 10L4.16602 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 15L4 10L9 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    Вернуться назад
                </Link>
            </div>
            <div className="w-full">
                <div className="text-center mb-[45px] tabletSm:px-[20px]">
                    <h1 className="text-[50px] font-bold text-[#121414] dark:text-white mb-[15px] leading-[120%] tablet:text-[32px]">
                        Присоединяйтесь к Nurax
                    </h1>
                    <p className="text-[15px] text-[#121414] dark:text-white font-semibold leading-[133%] tabletSm:text-[12px]">
                        Создайте свою учетную запись и начните разрабатывать с помощью ИИ
                    </p>
                </div>

                <div className='flex flex-col gap-[20px] max-w-[500px] mx-auto tabletSm:px-[20px]'>
                    <button className="w-full flex items-center justify-center gap-[15px] bg-white dark:bg-[#222429] border border-[rgba(131,144,167,0.2)] dark:border-[rgba(131,144,167,0.08)] rounded-full py-[15px] px-[15px] text-[15px] font-semibold leading-[151%] text-[#121414] dark:text-white transition duration-200">
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4" />
                            <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853" />
                            <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05" />
                            <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335" />
                        </svg>
                        <span>Вход с аккаунтом Google</span>
                    </button>

                    <div className='text-[13px] text-[#121414] dark:text-white font-semibold leading-[151%] text-center'>или продолжить с электронной почтой</div>

                    <div className="bg-white dark:bg-[#222429] border border-[rgba(131,144,167,0.2)] dark:border-[rgba(131,144,167,0.08)] rounded-[20px] p-[30px] tabletSm:p-[20px]">
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                icon={emailIcon}
                                type="email"
                                placeholder="Адрес электронной почты"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => handleBlur('email')}
                                error={errors.email}
                                touched={touched.email}
                                required
                            />

                            <FormInput
                                icon={passwordIcon}
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={() => handleBlur('password')}
                                error={errors.password}
                                touched={touched.password}
                                required
                            />
                        </form>

                        <div className="flex flex-col gap-[6px] mt-[25px] text-center tabletSm:mt-[15px]">
                            <button
                                type="submit"
                                className="w-full bg-[#2D63F3] font-semibold text-white py-[13px] rounded-[11px] transition duration-200 text-[15px] md:text-base"
                            >
                                Войти
                            </button>
                            <button
                                onClick={() => router.push('/auth/register')}
                                className="w-full border border-[#121414] font-semibold dark:border-white text-[#121414] dark:text-white py-[13px] rounded-[11px] transition duration-200 text-[15px] leading-[151%]"
                            >
                                Уже есть учетная запись?
                            </button>
                        </div>

                        <div className="mt-[20px] text-center text-[15px] text-[#121414] dark:text-white font-semibold leading-[151%] tabletSm:text-[12px]">
                            <button
                                onClick={() => setShowForgotPassword(true)}
                            >
                                Забыли пароль?
                            </button>
                        </div>

                        <div className="mt-[20px] text-center text-[12px] text-[#121414] dark:text-white font-semibold leading-[151%] max-w-[320px] mx-auto tabletSm:text-[11px]">
                            <p>
                                Продолжая, вы соглашаетесь с нашими{' '}
                                <Link href="/legal/user-agreement" className="text-[#2D63F3] hover:underline dark:text-blue-400 transition-colors duration-200">
                                    Условиями обслуживания
                                </Link>{' '}
                                и{' '}
                                <Link href="/legal/privacy-policy" className="text-[#2D63F3] hover:underline dark:text-blue-400 transition-colors duration-200">
                                    Политикой конфиденциальности
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {showForgotPassword && (
                <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
            )}
        </div>
    )
} 