import UsersTable from "@/components/ui/dashboard/UsersTable";
import { createClient } from "@/utils/supabase/server";


export default async function Users() {
    const supabase = createClient();

    const { data, error } = await supabase.from('users').select("*")

    if (error) {
        throw new Error(error.message)
    }

    return (
        <UsersTable data={data} />
    )
}