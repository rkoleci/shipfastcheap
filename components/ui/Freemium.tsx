'use client'

import { useSearchParams } from "next/navigation"

export default function Freemium({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams()
    const plan = searchParams.get('plan')

    if (plan != 'freemium') return null

    return <>
        {children}
    </>
}