
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
            <h1 className='p-2 text-accent-main/80 leading-relaxed font-medium'>Welcome to Dashboad! {user?.email} </h1>
        </div>
    )
}