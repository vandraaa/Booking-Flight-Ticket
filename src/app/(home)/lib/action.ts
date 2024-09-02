"use server"

import { getUser, lucia } from "@/lib/auth"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    const {session} = await getUser();

    if(!session) {
        return {
            error: "No session found"
        }
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    revalidatePath('/')
    return {
        success: true,
        successMessage: 'Logout success',
    }
}

export async function exploreFlights(formData: FormData) {
    const params = {
        departure: formData.get('departure'),
        destination: formData.get('destination'),
        date: formData.get('date')
    }

    return redirect(`/flights?departure=${params.departure}&destination=${params.destination}&date=${params.date}`)
}