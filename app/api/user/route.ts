import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from '@/utils/supabase/server';
import { User } from "@supabase/supabase-js";
import { Tables } from "@/types_db";

export const dynamic = "force-dynamic";

export async function POST(req: any) {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
 
  if (user) {
    const body = await req.json();

    if (!body.full_name) {
      return NextResponse.json({ error: "full_name is required" }, { status: 400 });
    }

    try {
      // const {  error, data: prods}= await supabase.from('products').insert<any>({
      //   id: Math.random(),
      //   active: false,
      //   name: "prodicts",

      // });

      const { data,} = await supabase.from('products').update<any>({name: 'update'}).eq('id', 2445)
      return  NextResponse.json({ data }, { status: 204 });
    } catch(e) {
     return  NextResponse.json({ error: e }, { status: 401 });
    }

    try {
      // This call will fail if you haven't created a table named "users" in your database
        // const { error, data } = await supabase.auth.updateUser({
        //   data: { full_name: body.full_name }
        // });

       
    } catch (e) {
      console.error(e);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  } else {
    // Not Signed in
    NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}
