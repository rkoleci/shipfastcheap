import { ProductWithPrices } from '@/app/(home)/page';
import Pricing from '@/components/ui/Pricing';
import { createClient } from '@/utils/supabase/server';

export const revalidate = 0

interface Props {
    product: ProductWithPrices;
    sessionId: string;
    sessionIdSecondPlan: string
}

export default async function PricingPage(props: Props) {


    return (
        <Pricing
            {...props}
        />
    )
}