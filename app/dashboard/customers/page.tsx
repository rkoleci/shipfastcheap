import CustomersTable from "@/components/ui/dashboard/CustomerTable";
import { CustomerRow } from "@/types_db";
import { createClient } from "@/utils/supabase/server";

export default async function Customers() {
    const supabase = createClient();

    const { data, error } = await supabase.from('customers').select('*, users(*)')

    if (error) {
        throw new Error(error.message)
    }

    return (
        <CustomersTable data={data as Array<CustomerRow>} />
    )
}