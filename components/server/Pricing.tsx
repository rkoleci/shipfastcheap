import Pricing from '@/components/ui/Pricing';
import { createClient } from '@/utils/supabase/server'
import type { Tables } from '@/types_db';
import { checkoutWithStripe } from '@/utils/stripe/server';

type Product = Tables<'products'>;
type Price = Tables<'prices'>;
export interface ProductWithPrices extends Product {
    prices: Price[];
}
interface PriceWithProduct extends Price {
    products: Product | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';
export const revalidate = 0

export default async function PricingPage() {
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

    const { sessionId: basicPlan } = await checkoutWithStripe(
        product?.prices[0],
        '/'
    );

    const { sessionId: premiumPlan } = await checkoutWithStripe(
        product?.prices[1],
        '/'
    ); 

    return (
        <Pricing
            product={product} basicPlan={basicPlan!} premiumPlan={premiumPlan!}
        />
    )
}