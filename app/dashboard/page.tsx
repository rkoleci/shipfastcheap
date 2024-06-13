
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
        <div className='bg-base-100'>
            <h1>Welcome to Dashboad! {user?.email} </h1>
            <h1>Welcome to Dashboad! {user?.email} </h1>
        </div>
    )
}