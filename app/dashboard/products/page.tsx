import ProductsTable from "@/components/ui/dashboard/ProductsTable";
import { createClient } from "@/utils/supabase/server";


export default async function Waitlist() {
    const supabase = createClient();

    const { data, error } = await supabase.from('products').select()

    if (error) {
        throw new Error(error.message)
    }

    return (
        <ProductsTable data={data} />
    )
}