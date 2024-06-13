import { createClient } from "@/utils/supabase/server";
import { redirect } from 'next/navigation';

export default async function Saas() {
    
    const supabase = createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect('/signin');
    }

    return (
        <div className="bg-base-200 flex flex-col items-center min-h-screen  gap-8 w-full px-8 py-16">
            <p className="text-primary font-semibold text-lg">develop your ideas...</p>

            <p className="text-accent-main/80 leading-relaxed">User: {user && user?.email}</p>
        </div>
    )
}
 