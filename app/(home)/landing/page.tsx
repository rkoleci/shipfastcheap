import Boost from '@/components/ui/Boost'
import FAQ from '@/components/ui/FAQ'
import FeaturedOn from '@/components/ui/FeaturedOn'
import FeaturesListicle from '@/components/ui/FeaturesListicle'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Intro from '@/components/ui/Intro'
import Pricing from '@/components/ui/Pricing'
import Problem from '@/components/ui/Problem'
import TestimonialTriple from '@/components/ui/TestimonialTriple'
import Link from 'next/link'

export default function Landing() {
    return (
        <main>
            <Hero />
            <Problem />
            <TestimonialTriple />
            <FeaturedOn />
            <FeaturesListicle />
            <Intro />
            <Pricing />
            <FAQ />
            <Boost />
            <Footer />
        </main>
    )
}