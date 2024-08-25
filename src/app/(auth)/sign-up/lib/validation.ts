import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, { message: "Name must be at least 3 characters" }),
  passport: z.string({
    required_error: "Passport is required",
  }).min(4, { message: "Passport must be at least 4 characters" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is invalid",
    }),
  password: z.string({
    required_error: "Password is required",
  }).min(6, { message: "Password must be at least 6 characters" }),
});
