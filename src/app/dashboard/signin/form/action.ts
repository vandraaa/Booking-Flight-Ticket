"use server"

import { redirect } from "next/navigation"
import { formSchema } from "./validation"
import prisma from "../../../../../lib/prisma"
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
const bcrypt = require('bcrypt');

export interface ActionResult {
    errorTitle: string | null
    errorMessage: string[] | null
}

export async function handleSignIn(prevState: any, formData: FormData): Promise<ActionResult> {
    console.log(formData.get("email"), formData.get("password"))

    const values = formSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    if(!values.success) {
        const errorMessage = values.error.issues.map((issue) => issue.message)

        return { errorTitle: 'Error Validation', errorMessage: errorMessage || null }
    } 

    const existingUser = await prisma.user.findUnique({
        where: {
            email: values.data.email
        }
    })

    if (!existingUser) {
        return { errorTitle: 'Error Validation', errorMessage: ['Email not found'] || null }
    }

    const validPassword = await bcrypt.compare(values.data.password, existingUser.password)

    if(!validPassword) {
        return { errorTitle: 'Error Validation', errorMessage: ['Password not match'] || null }
    }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = await lucia.createSessionCookie(session.id);

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return redirect('/dashboard')
}