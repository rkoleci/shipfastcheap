
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
    const supabase = createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser(); 

    if (!user) {
        return redirect('/signin');
    }

    return (
        <div>Welcome to Dashboad! {user?.email} </div>
    )
}