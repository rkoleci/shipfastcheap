import Image from 'next/image'
import shipfastAvatar from '../../public/shipfast_avatar.webp'
import nico from '../../public/nicotroia.jpeg'
import terri from '../../public/terrip.jpeg'
import ar from '../../public/arsalan_najm.jpeg'
import Link from 'next/link'

export default function TestimonialTriple() {

    return (
        <section className="bg-base-100 py-24 px-8 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            
            <div className="flex-1 relative w-full lg:max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <div className="text-accent-main/80 leading-relaxed whitespace-pre-wrap pb-8">"ShipFastCheap is a lifesaver for lean startups. It enabled me to build and deploy my SaaS product in weeks rather than months"</div>
                <div className="bg-base-100 h-0.5"></div>
                <div className="flex justify-between items-center pt-8">
                    <div>
                        <div className="font-medium text-accent-main md:mb-0.5 text-left">Terri P</div>
                        <p className="text-accent-main/80 text-sm  text-center">Building <Link href="https://sensora.io/" target='_blank' className="link underline">sensora.io</Link> </p>

                    </div>
                    <Image
                        className="rounded-full   "
                        height={48}
                        width={48}
                        src={terri}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className="flex-1 relative w-full lg:max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <div className="text-accent-main/80 leading-relaxed whitespace-pre-wrap pb-8">"ShipFastCheap drastically cut my development time and costs, helping me launch my SaaS product swiftly and affordably"</div>
                <div className="bg-base-100 h-0.5"></div>
                <div className="flex justify-between items-center pt-8">
                    <div>
                        <div className="font-medium text-accent-main md:mb-0.5 text-left">Arsalan Najm</div>
                        <p className="text-accent-main/80 text-sm  text-center">Building <Link href="https://jenni.ai/" target='_blank' className="link underline">Jenny AI</Link> </p>
                    </div>
                    <Image
                        className="rounded-full   "
                        height={48}
                        width={48}
                        src={ar}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className="flex-1 relative w-full lg:max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <div className="text-accent-main/80 leading-relaxed whitespace-pre-wrap pb-8">"Thanks to ShipFastCheap, I brought my SaaS idea to market quickly without overspending. Highly recommended for any startup"</div>
                <div className="bg-base-100 h-0.5"></div>
                <div className="flex justify-between items-center pt-8">
                    <div>
                        <div className="font-medium text-accent-main md:mb-0.5 text-left">Nico Troia </div>
                        <p className="text-accent-main/80 text-sm  text-center">Building <Link href="https://www.guidejar.com/" target='_blank' className="link underline">GuideJar</Link> </p>

                    </div>
                    <Image
                        className="rounded-full   "
                        height={48}
                        width={48}
                        src={nico}
                        alt="Avatar"
                    />
                </div>
            </div>

        </section>
    )
}
