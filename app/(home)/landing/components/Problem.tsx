export default function Problem() {

    return (
        <section className="bg-base-100">
            <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="mb-8 text-[46px] text-center text-accent-main/80 leading-relaxed font-bold">80% of startups fail because founders never launch</div>
                <div className="mb-16 text-[20px] text-accent-main/80 leading-relaxed font-normal">Email, DNS records, user authentication... There's so much going on.</div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-0 w-full">
                    <div className="flex  flex-col items-center gap-2 flex-1">
                        <p className="text-2xl">👨‍💻</p>
                        <p className="text-accent-main/80 font-semibold text-lg leading-relaxed">8 hours to add Stripe</p>
                    </div>
                    <div className="text-accent-main/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>
                    </div>
                    <div className="flex  flex-col items-center gap-2 flex-1">
                        <p className="text-2xl">😣</p>
                        <p className="text-accent-main/80 font-semibold text-lg leading-relaxed">Struggle to find time</p>
                    </div>
                    <div className="text-accent-main/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>
                    </div>

                    <div className="flex  flex-col items-center gap-2 flex-1">
                        <p className="text-2xl">😔</p>
                        <p className="text-accent-main/80 font-semibold text-lg leading-relaxed">Quit</p>
                    </div>
                </div>
            </div>
        </section>
    )
}