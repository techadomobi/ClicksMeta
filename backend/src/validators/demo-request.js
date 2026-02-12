import { z } from 'zod'

export const demoRequestSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  mobileNumber: z.string().min(6, 'Phone required'),
  company: z.string().min(2),
  address: z.string().min(5),
  country: z.string().min(2),
  planId: z.string().min(1),
  planName: z.string().min(2).optional(),
  skypeId: z.string().optional().nullable(),
  domain: z.union([z.string().url(), z.literal('')]).optional(),
  password: z.string().min(6)
})
