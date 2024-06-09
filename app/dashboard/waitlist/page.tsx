import WaitListTable from "@/components/ui/dashboard/WaitlistTable";
import { createClient } from "@/utils/supabase/server";


export default async function Waitlist() {
    const supabase = createClient();

    const { data, error } = await supabase.from('waitlist').select()

    if (error) {
        throw new Error(error.message)
    }

    return (
        <WaitListTable data={data} />
    )
}