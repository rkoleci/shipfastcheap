

export default function ButtonLead() {
    // TOOD call api 
    return (
        <div className="flex flex-col gap-4">
            <input type="text" placeholder="tom@cruise.com" className="input rounded-lg input-border text-accent-main/80 w-full max-w-xs border border-slate-600" />
            <button className="btn btn-primary rounded-lg font-medium text-accent-secondary">
                Join Waitlist
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    )
}