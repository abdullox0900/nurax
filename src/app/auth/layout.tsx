'use client'

import { useTheme } from 'next-themes'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { theme } = useTheme()

    return (
        <main className={`h-screen screen-linear-gradient ${theme === 'light' ? 'bg-custom-gradient' : 'bg-[#121414]'} `}>
            {children}
        </main>
    )
} 