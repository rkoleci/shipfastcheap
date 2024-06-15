'use client'
import { useRouter } from "next/navigation"

interface Props {
    url: string
}

export default function RedirectAction ({ url}: Props) {
    const router = useRouter()

    router.push(`/${url}`)
    return <></>

}