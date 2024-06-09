import SubscriptionsTable from "@/components/ui/dashboard/SubscriptionsTable";
import { SubscriptionRow } from "@/types_db";
import { createClient } from "@/utils/supabase/server";


export default async function Subscriptions() {
    const supabase = createClient();

    const { data, error } = await supabase.from('subscriptions').select('*, users(*), prices(*)')
    console.log(111, 'subs', data)

    if (error) {
        throw new Error(error.message)
    }

    return (
        <SubscriptionsTable data={data as Array<SubscriptionRow>} />
    )
}