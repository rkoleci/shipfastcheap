import Boost from './components/Boost'
import FAQ from './components/FAQ'
import FeaturedOn from './components/FeaturedOn'
import FeaturesListicle from './components/FeaturesListicle'
import Hero from './components/Hero'
import Pricing from './components/Pricing' 

export default function Landing() {
    return (
        <main>
        <Hero />
        <FeaturedOn />
        <FeaturesListicle /> 
         <Pricing />
         <FAQ />
         <Boost />
        </main>
    )
}