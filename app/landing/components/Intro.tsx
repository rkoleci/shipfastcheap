import Image from "next/image";
import makerOfTheYear from '../../../public/maker-of-the-year-2023.webp'
import shipfastAvatar2 from '../../../public/shipfast_avatar_2.webp'

export default function Intro() {

    return (
        <section className="bg-base-100   flex flex-col justify-center items-center">
            <div className="bg-base-100 p-16  flex flex-col items-center rounded-lg mb-8">

                <div className="leading-relaxed text-base-content/80 mb-12 max-w-xl  ">
                    <Image
                        src={makerOfTheYear}
                        alt='123'
                        className="w-32 h-32 md:w-52 md:h-52 rounded-lg float-left mr-8 mb-8 object-center object-cover"
                        width={200} height={200} />

                    <p className="break-words whitespace-normal hyphens-auto  mb-4 text-base-content md:text-lg font-medium">Hey, it's Marc 👋</p>
                    <p className="mb-5">In 2018, I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0 users...</p>
                    <p className="mb-5">A few years after my burnout, I restarted the journey differently: I shipped like a madman—<a className="link text-base-content font-medium hover:link-accent whitespace-nowrap" target="_blank" href="https://marclou.com?ref=shipfast_intro">16 startups in 2 years.</a> Now I'm happy and earn $45,000 a month.</p>
                    <p className="mb-5">I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks, design pricing section... So I built ShipFast for 3 reasons:</p>
                    <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5"><li><span className="text-base-content font-medium">Save time</span> and focus on what matters: building a business</li><li><span className="text-base-content font-medium">Avoid headaches</span> like emails ending in spam or handling Stripe subscriptions</li><li><span className="text-base-content font-medium">Get profitable fast</span>—the more you ship, the more you learn, the more you earn</li></ul>
                    <p className="mb-12"><a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" target="_blank" href="https://twitter.com/marc_louvion">65,000+ people</a> trust me on Twitter, Product Hunt awarded me <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" target="_blank" href="https://www.producthunt.com/golden-kitty-awards/hall-of-fame#maker-of-the-year">Maker of the Year 2023</a>, and <a className="link whitespace-nowrap text-base-content hover:link-accent font-medium group" href="/#testimonials">3400 indie makers</a> are using ShipFast to launch startups quickly, scroll to see what they say.</p>

                </div>

                <iframe className="bg-white w-full lg:w-[750px] h-[300px] lg:h-[455px]" src="https://www.youtube.com/embed/W3Pb3v_GpoE?si=gpbgsKruTQW3h9x9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\

                <div className="flex flex-col items-start gap-4 pt-16 max-w-lg  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-primary" viewBox="0 0 35 30" fill="none"><path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"></path></svg>

                    <p className="md:text-lg leading-relaxed text-left">I was able to launch my project in just one day! I made 170$ already.</p>

                    <div className="flex items-center gap-2">
                        <div className="rounded-full bg-base-100">
                            <Image
                                className="rounded-full   "
                                height={40}
                                width={40}
                                src={shipfastAvatar2}
                                alt="Avatar"
                            />
                        </div>
                        <p>Mateus De Nardo</p>
                        <span className="badge badge-primary badge-outline">Built a SaaS</span>
                    </div>

                </div>

            </div>

        </section>
    )
}