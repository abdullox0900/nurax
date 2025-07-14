import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Юридическая информация | Nurax',
    description: 'Юридическая информация, пользовательское соглашение и политика конфиденциальности Nurax',
}

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header bgColor='bg-[#e7f0ff] dark:bg-[#222429] px-[20px]' />
            {children}
            <Footer />
        </>
    )
} 