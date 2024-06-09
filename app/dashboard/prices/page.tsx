import PricesTable from "@/components/ui/dashboard/PricesTable";
import { PriceRow } from "@/types_db";
import { createClient } from "@/utils/supabase/server";


export default async function Prices() {
    const supabase = createClient();

    const { data, error } = await supabase.from('prices').select('*, products(*)')

    if (error) {
        throw new Error(error.message)
    }

    return (
        <PricesTable data={data as Array<PriceRow>} />
    )
}