"use server"

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { userSchema } from "./validation";
import bcrypt from "bcrypt";
import prisma from "../../../../../lib/prisma";

export async function signUpUser(prevState: unknown, formData: FormData): Promise<ActionResult> {
    const validate = userSchema.safeParse({
        name: formData.get("name"),
        passport: formData.get("passport"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if(!validate.success) {
        const errorDesc = validate.error.issues.map((issue) => issue.message);

        return {
            errorTitle: "Error Validation",
            errorMessage: errorDesc,
            success: false,
            successMessage: null
        }
    }

    const hashingPassword = bcrypt.hashSync(validate.data.password, 10);

    await prisma.user.create({
        data: {
            name: validate.data.name,
            passport: validate.data.passport,
            email: validate.data.email,
            password: hashingPassword,
            role: 'CUSTOMER'
        }
    })

    const existingUser = await prisma.user.findUnique({
        where: {
            email: validate.data.email
        }
    })

    if (!existingUser) {
        return { errorTitle: 'Error Validation', errorMessage: ['Email not found'], success: false, successMessage: null }
    }

    const existingPassport = await prisma.user.findUnique({
        where: {
            passport: validate.data.passport
        }
    })

    if (!existingPassport) {
        return { errorTitle: 'Error Validation', errorMessage: ['Passport not found'], success: false, successMessage: null }
    }

    return { successMessage: "Sign Up Successfully! Please Sign In to continue", success: true, errorTitle: null, errorMessage: [] };
}