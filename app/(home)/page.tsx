import Boost from '@/components/ui/Boost'
import FAQ from '@/components/ui/FAQ'
import FeaturedOn from '@/components/ui/FeaturedOn'
import FeaturesListicle from '@/components/ui/FeaturesListicle'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Intro from '@/components/ui/Intro'
import Pricing from '@/components/server/Pricing'
import TestimonialTriple from '@/components/ui/TestimonialTriple'
import ButtonLead from '@/components/ui/ButtonLead'

export default async function Landing() {
    return (
        <main>
            <Hero />
            <FeaturedOn />
            <FeaturesListicle />
            <Intro />
            <Pricing />
            <section className="bg-base-400 py-2 px-8 flex flex-col justify-start items-center">
                <div className="max-w-md w-full flex flex-col items-center gap-4">
                    <ButtonLead />
                </div>
            </section>
            <FAQ />
            <TestimonialTriple />
            <Boost />
            <Footer />
        </main>
    )
}