import Pricing from '@/components/ui/Pricing';
import { createClient } from '@/utils/supabase/server';
import PricingUICTA from '../ui/PricingCTA';

export const revalidate = 0

interface Props {
    extraClasses?: string
}

export default async function PricingCTA({ extraClasses }:Props) {
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
        <PricingUICTA
            user={user}
            products={products ?? []}
            extraClasses={extraClasses}
        />
    )
}