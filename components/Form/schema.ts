import { z } from "zod";


export const formSchema = z.object({
    FirstName: z.string()
        .min(1, "First name is required")
        .min(2, "First name must be at least 2 characters"),

    LastName: z.string()
        .min(1, "Last name is required")
        .min(2, "Last name must be at least 2 characters"),

    Email: z.string()
        .min(1, "Email is required")
        .email("Invalid email address"),

    Phone: z.string()
        .min(1, "Phone number is required")
        .min(9, "Phone number must be at least 9 digits"),

    Subject: z.string()
        .min(1, "Please select a service"),

    Message: z.string()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters"),
});
export type FormData = z.infer<typeof formSchema>;