"use server"

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { userSchema } from "../../sign-up/lib/validation";
import prisma from "../../../../../lib/prisma";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function SignInUser(prevState: unknown, formData: FormData): Promise<ActionResult> {
    const signInSchema = userSchema.pick({
        email: true,
        password: true
    })

    const validate = signInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validate.success) {
        const errorDesc = validate.error.issues.map((issue) => issue.message)

        return {
            errorTitle: 'Error Validation',
            errorMessage: errorDesc,
            success: false,
            successMessage: null
        }
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            email: validate.data.email
        }
    })

    if (!existingUser) {
        return {
            errorTitle: 'Error Validation',
            errorMessage: ['Email not found'],
            success: false,
            successMessage: null
        }
    }

    const validPassword = await bcrypt.compare(validate.data.password, existingUser.password)

    if(!validPassword) {
        return {
            errorTitle: 'Error Validation',
            errorMessage: ['Password not match'],
            success: false,
            successMessage: null
        }
    }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = await lucia.createSessionCookie(session.id);

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return { errorTitle: null, errorMessage: [], success: true, successMessage: "Sign in successfully!" }
}