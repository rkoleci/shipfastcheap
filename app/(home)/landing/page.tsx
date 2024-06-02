import Boost from './components/Boost'
import FAQ from './components/FAQ'
import FeaturedOn from './components/FeaturedOn'
import FeaturesListicle from './components/FeaturesListicle'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Pricing from './components/Pricing' 

export default function Landing() {
    return (
        <main>
        <Hero />
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