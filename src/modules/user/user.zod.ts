import z from "zod";

export const userSchema = z.object({
    name: z.string().trim().min(1),
    email: z.email(),
    password: z.string().min(7).max(12)
});

export const updateUserSchema = userSchema.partial();