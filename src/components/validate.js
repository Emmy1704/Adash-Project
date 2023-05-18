import { z } from "zod";

const validateForm = z.object({
   name: z.string({ description: "Your name"}),
   email: z.string().email(),
   password: z
   .string()
   .min(8, "Password must be at least 8 characters")
   .max(64, "Password must be at most 64 characters"),
})
 
export default validateForm;