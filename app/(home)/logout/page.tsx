import RedirectAction from "@/components/ui/Redirect";
import { createClient } from "@/utils/supabase/server";

export default async function Logout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Error logging out:', error);
        return null
    }

    return <RedirectAction url="logout" />

}

