import Boost from '@/components/ui/Boost'
import FAQ from '@/components/ui/FAQ'
import FeaturedOn from '@/components/ui/FeaturedOn'
import FeaturesListicle from '@/components/ui/FeaturesListicle'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Intro from '@/components/ui/Intro'
import Pricing from '@/components/server/Pricing'
import Problem from '@/components/ui/Problem'
import TestimonialTriple from '@/components/ui/TestimonialTriple'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import type { Tables } from '@/types_db';
import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { getErrorRedirect } from '@/utils/helpers';
import { User } from '@supabase/supabase-js';
import WithWithout from '@/components/ui/WithWithout'
import TestimonialSmall from '@/components/ui/TestimonialSmall'
import LogoAndName from '@/components/ui/LogoAndName'
import { appName } from '@/utils/config'

type Product = Tables<'products'>;
type Price = Tables<'prices'>;
export interface ProductWithPrices extends Product {
    prices: Price[];
}
interface PriceWithProduct extends Price {
    products: Product | null;
}

interface Props {
    user: User | null | undefined;
    products: ProductWithPrices[];
    extraClasses?: string;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default async function Landing() {
    const supabase = createClient()

    const {
        data: { user }
    } = await supabase.auth.getUser();

    const { data: products } = await supabase
        .from('products')
        .select('*, prices(*)')
        .eq('active', true)
        .eq('prices.active', true)
        .order('metadata->index')
        .order('unit_amount', { referencedTable: 'prices' });

    const intervals = Array.from(
        new Set(
            products?.flatMap((product) =>
                product?.prices?.map((price) => price?.interval)
            )
        )
    );
    const product = products && products[0]
    if (!product) return null

    const { sessionId } = await checkoutWithStripe(
        product?.prices[0],
        '/'
    );

    const { sessionId: sessionIdSecondPlan } = await checkoutWithStripe(
        product?.prices[1],
        '/'
    ); 

    return (
        <main>
            <Hero sessionId={sessionIdSecondPlan!} />
            <WithWithout />
            <FeaturedOn />
            <FeaturesListicle />
            <Intro />
            <Pricing product={product} sessionId={sessionId!} sessionIdSecondPlan={sessionIdSecondPlan!} />
            <FAQ />
            <TestimonialTriple />
            <Boost sessionId={sessionIdSecondPlan!} />
            <Footer />
        </main>
    )
}