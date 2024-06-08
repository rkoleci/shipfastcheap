'use client'

export default function ErrorBoundary({ error }: any) {

    return (
        <div className="text-red-400 font-bold leading-relaxed bg-base-200 p-2">{error.message}</div>
    )
}