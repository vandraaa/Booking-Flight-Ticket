"use server"

import { getUser, lucia } from "@/lib/auth"
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

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