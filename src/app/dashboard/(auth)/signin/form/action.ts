"use server"

import { formSchema } from "./validation"
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import prisma from "../../../../../../lib/prisma";
const bcrypt = require('bcrypt');

export interface ActionResult {
    errorTitle: string | null
    errorMessage: string[] | null
    success: boolean
    successMessage: string | null
}

export async function handleSignIn(prevState: any, formData: FormData): Promise<ActionResult> {
    const values = formSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    if(!values.success) {
        const errorMessage = values.error.issues.map((issue) => issue.message)

        return { errorTitle: 'Error Validation', errorMessage: errorMessage || null, success: false, successMessage: null }
    } 

    const existingUser = await prisma.user.findUnique({
        where: {
            email: values.data.email
        }
    })

    if (!existingUser) {
        return { errorTitle: 'Error Validation', errorMessage: ['Email not found'], success: false, successMessage: null }
    }

    const validPassword = await bcrypt.compare(values.data.password, existingUser.password)

    if(!validPassword) {
        return { errorTitle: 'Error Validation', errorMessage: ['Password not match'], success: false, successMessage: null }
    }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = await lucia.createSessionCookie(session.id);

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return { errorTitle: null, errorMessage: null, success: true, successMessage: "Sign in successfully!" }
}