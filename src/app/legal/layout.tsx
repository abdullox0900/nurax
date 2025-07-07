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
            <Header bgColor='bg-[rgba(18,20,20,0.3)]' />
            {children}
        </>
    )
} 