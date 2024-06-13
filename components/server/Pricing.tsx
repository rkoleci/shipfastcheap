import Pricing from '@/components/ui/Pricing';
import { createClient } from '@/utils/supabase/server';

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
  
    return (
        <Pricing
            user={user}
            products={products ?? []}
        />
    )
}