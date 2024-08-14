"use server"

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "../(auth)/signin/form/action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleLogout(): Promise<ActionResult> {
    const {session} = await getUser();

    if(!session) {
        return {
            errorTitle: 'Error',
            errorMessage: ['No session found'],
        } as ActionResult
    }
    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    return redirect('/dashboard/signin')
}