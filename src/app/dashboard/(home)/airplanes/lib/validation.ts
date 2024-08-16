import { z } from "zod";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];
const maxSize = 2000000; // 2MB

export const airplanesFormSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }).min(3, "Name must be at least 3 characters"),
    code: z.string({
        required_error: "Code is required",
    }).regex(/^[A-Z]{3}-[0-9]{3}$/, "Code is invalid! Example (XXX-111)"),
    image: z
        .instanceof(File)
        .refine((file) => imageTypes.includes(file.type), {
            message: "Invalid image type! Only jpeg, jpg, and png are allowed",
        })
        .refine((file) => file.size <= maxSize, {
            message: "Image size must be less than 2MB",
        }),
});
