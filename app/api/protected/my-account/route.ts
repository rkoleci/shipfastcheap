import { NextResponse } from "next/server";
import { createClient } from '@/utils/supabase/server';

export const dynamic = "force-dynamic";

export async function GET(req: any) {
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    if (!data?.user) {
        return NextResponse.json({ error: 'No user data found' }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
}
