// firstname
//       lastName,
//       email,
//       password,
//       confirmPassword,
//       bio,
//       skills,
//       profileUrl,

import z from "zod";

//       acceptTerms,
//       confirmationCode,
//       gender,


export const userSchema = {
    signupUser : z.object({
        firstName: z.string().min(2, "First name must be at least 2 characters long"),
        lastName: z.string().min(2, "Last name must be at least 2 characters long"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
        bio: z.string().max(160, "Bio must be at most 160 characters long").optional(),
        skills: z.array(z.string()).optional(),
        profileUrl: z.string().url("Invalid URL").optional(),
        acceptTerms: z.boolean().optional(),
        confirmationCode: z.string().optional()
    }),
    loginUser : z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long")
    })
}