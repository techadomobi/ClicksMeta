import { z } from 'zod'

export const contactMessageSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  subject: z.string().max(120).optional()
})
