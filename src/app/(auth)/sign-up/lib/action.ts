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

    // return redirect("/sign-in")
    return { successMessage: "Sign Up Successfully! Please Sign In to continue", success: true, errorTitle: null, errorMessage: [] };
}