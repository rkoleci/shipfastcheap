import Image from 'next/image'
import shipfastAvatar from '../../../../public/shipfast_avatar.webp'

export default function TestimonialTriple() {

    return (
        <section className="bg-base-100 py-24 px-8 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            <div className="flex-1 relative w-full lg:max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <div className="text-accent-main/80 leading-relaxed whitespace-pre-wrap pb-8">Don’t marry your startup idea.
                    Out of the 20+ startups I launched, only 1 made good money and grew.
                    It’s the same pattern for most solopreneurs who made life-changing money.</div>
                <div className="bg-base-100 h-0.5"></div>
                <div className="flex justify-between items-center pt-8">
                    <div>
                        <div className="font-medium text-accent-main md:mb-0.5 text-center">Marc Lou</div>
                        <div className="mt-0.5 text-sm text-accent-main/80  text-center">@marc_louvion</div>
                        <p className="text-accent-main/80 text-sm  text-center">100K followers on 𝕏</p>
                        <p className="text-accent-main/80 text-sm  text-center">$133k/month</p>
                    </div>
                    <Image
                        className="rounded-full   "
                        height={48}
                        width={48}
                        src={shipfastAvatar}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className="flex-1 relative w-full lg:max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <div className="text-accent-main/80 leading-relaxed whitespace-pre-wrap pb-8">Don’t marry your startup idea.
                    Out of the 20+ startups I launched, only 1 made good money and grew.
                    It’s the same pattern for most solopreneurs who made life-changing money.</div>
                <div className="bg-base-100 h-0.5"></div>
                <div className="flex justify-between items-center pt-8">
                    <div>
                        <div className="font-medium text-accent-main md:mb-0.5 text-center">Marc Lou</div>
                        <div className="mt-0.5 text-sm text-accent-main/80  text-center">@marc_louvion</div>
                        <p className="text-accent-main/80 text-sm  text-center">100K followers on 𝕏</p>
                        <p className="text-accent-main/80 text-sm  text-center">$133k/month</p>
                    </div>
                    <Image
                        className="rounded-full   "
                        height={48}
                        width={48}
                        src={shipfastAvatar}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className="flex-1 relative w-full lg:max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
                <div className="text-accent-main/80 leading-relaxed whitespace-pre-wrap pb-8">Don’t marry your startup idea.
                    Out of the 20+ startups I launched, only 1 made good money and grew.
                    It’s the same pattern for most solopreneurs who made life-changing money.</div>
                <div className="bg-base-100 h-0.5"></div>
                <div className="flex justify-between items-center pt-8">
                    <div>
                        <div className="font-medium text-accent-main md:mb-0.5 text-center">Marc Lou</div>
                        <div className="mt-0.5 text-sm text-accent-main/80  text-center">@marc_louvion</div>
                        <p className="text-accent-main/80 text-sm  text-center">100K followers on 𝕏</p>
                        <p className="text-accent-main/80 text-sm  text-center">$133k/month</p>
                    </div>
                    <Image
                        className="rounded-full   "
                        height={48}
                        width={48}
                        src={shipfastAvatar}
                        alt="Avatar"
                    />
                </div>
            </div>

        </section>
    )
}
