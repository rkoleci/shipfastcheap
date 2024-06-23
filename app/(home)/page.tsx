import Boost from '@/components/ui/Boost'
import FAQ from '@/components/ui/FAQ'
import FeaturedOn from '@/components/ui/FeaturedOn'
import FeaturesListicle from '@/components/ui/FeaturesListicle'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Intro from '@/components/ui/Intro'
import Pricing from '@/components/server/Pricing'
import TestimonialTriple from '@/components/ui/TestimonialTriple'

export default async function Landing() {
   
    return (
        <main>
            <Hero />
            <FeaturedOn />
            <FeaturesListicle />
            <Intro />
            <Pricing />
            <FAQ />
            <TestimonialTriple />
            <Boost   />
            <Footer />
        </main>
    )
}