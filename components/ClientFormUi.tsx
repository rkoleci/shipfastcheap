'use client'

import { getProducts } from "@/utils/auth-helpers/server"
import { createClient } from "@/utils/supabase/client"
import { useUser } from "./context/UserProvider"

export default function ClientFormUi() {
    const supabase = createClient()
    const user = useUser()

     
    const onSave = async () => {
        const data = await getProducts()
    }

    return (
        <div>ClieenForm UI <button onClick={onSave}>Save</button></div>
    )
}