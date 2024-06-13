'use client'

export default function ErrorBoundary({ error }: any) {
    
    return (
        <div className="bg-base-200 p-2 flex flex-col gap-4">
            <p className="text-red-400 font-bold leading-relaxed ">{error.message}</p>
            <p className="text-accent-main font-normal leading-relaxed ">Contact support: {process.env.NEXT_PUBLIC_MAILGUN_SUPPORT_EMAIL}</p>
        </div>
        
    )
}