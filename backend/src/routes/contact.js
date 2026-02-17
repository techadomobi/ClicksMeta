import { Router } from 'express'
import { contactMessageSchema } from '../validators/contact.js'

const router = Router()

const defaultContactInfo = {
  supportEmail: process.env.SUPPORT_EMAIL || 'support@clicksmeta.com',
  phone: process.env.SUPPORT_PHONE || '+1 (415) 555-0198',
  hours: process.env.SUPPORT_HOURS || 'Mon – Fri, 9am – 6pm ET',
  address: process.env.SUPPORT_ADDRESS || '123 Market Street, Suite 500, San Francisco, CA',
  sampleMessage: 'I would like to know more about enterprise plans and pricing.'
}

router.get('/', (req, res) => {
  res.json(defaultContactInfo)
})

router.post('/', async (req, res, next) => {
  try {
    const payload = contactMessageSchema.parse(req.body)

    await new Promise((resolve) => setTimeout(resolve, 150))

    res.status(201).json({
      success: true,
      message: 'We received your message and will respond shortly.',
      receivedAt: new Date().toISOString(),
      data: payload
    })
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Validation failed', details: error.issues })
    }
    return next(error)
  }
})

export default router
