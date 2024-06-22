export default function WithWithout() {

    return (
        <section className="w-full bg-base-100 flex justify-center">

            <div className="bg-base-100   gap-8 flex-col   max-w-7xl px-8 py-16">
                <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 text-center  mx-auto text-accent-main/80">Tired of managing Stripe invoices?</h2>

                <div className="flex flex-col lg:flex-row justify-center items-center  gap-12 w-full  ">
                    <div className="bg-[#FDE4E3] p-8 rounded text-left w-full lg:w-fit ">
                        <p className="mb-4 text-semibold text-lg leading-relaxed text-[#F57372]">Stripe invoices without ZenVoice</p>
                        <ul>
                            <li className="flex flex-start items-center gap-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-[#DB9597]">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                <p className="text-base  leading-relaxed text-[#DB9597] ">Manually create invoices</p>
                            </li>
                            <li className="flex flex-start items-center gap-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-[#DB9597]">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                <p className="text-base  leading-relaxed text-[#DB9597] ">Or pay up to $12 per invoice</p>
                            </li>
                            <li className="flex flex-start items-center gap-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-[#DB9597]" >
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                <p className="text-base  leading-relaxed text-[#DB9597] ">Waste hours in customer support</p>
                            </li>
                            <li className="flex flex-start items-center gap-2 t ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-[#DB9597]">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                <p className="text-base  leading-relaxed text-[#DB9597] ">Can't update details once sent (VAT, Tax ID)</p>
                            </li>
                            <li className="flex flex-start items-center gap-2 text-[#DB9597]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-[#DB9597]">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                                <p className="text-base  leading-relaxed text-[#DB9597] ">Can't make invoices for previous purchases</p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#DBF7ED] p-8 rounded text-left w-full lg:w-fit ">
                        <p className="mb-4 text-semibold text-lg leading-relaxed text-[#57D6AA]">Stripe invoices + ZenVoice</p>
                        <ul>
                            <li className="flex flex-start items-center gap-2 text-green-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-[#90D8B9]">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                                </svg>

                                <p className="text-base  leading-relaxed text-[#90D8B9] ">Self serve invoices</p>
                            </li>
                            <li className="flex flex-start items-center gap-2 text-green-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  text-[#90D8B9] ">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                                </svg>

                                <p className="text-base  leading-relaxed  text-[#90D8B9]">One time payment for unlimited invoices</p>
                            </li>
                            <li className="flex flex-start items-center gap-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5   text-[#90D8B9]">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                                </svg>

                                <p className="text-base  leading-relaxed  text-[#90D8B9] ">No more customer support</p>
                            </li>
                            <li className="flex flex-start items-center gap-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  text-[#90D8B9]">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                                </svg>

                                <p className="text-base  leading-relaxed text-[#90D8B9] ">Editable invoices to stay compliant</p>
                            </li>
                            <li className="flex flex-start items-center gap-2  ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5  text-[#90D8B9]">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                                </svg>

                                <p className="text-base leading-relaxed text-[#90D8B9] ">Invoices for any payment, even old ones</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}