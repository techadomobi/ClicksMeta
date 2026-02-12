import { Router } from 'express'
import { demoRequestSchema } from '../validators/demo-request.js'

const router = Router()
const offersMetaEndpoint = process.env.OFFERSMETA_CONTACT_URL || 'https://apiv2.offersmeta.in/contactUs/contact'

router.post('/', async (req, res, next) => {
  try {
    const parsedBody = demoRequestSchema.parse(req.body)
    const cleanedPayload = {
      ...parsedBody,
      domain: parsedBody.domain || undefined,
      skypeId: parsedBody.skypeId || undefined
    }

    const response = await fetch(offersMetaEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cleanedPayload)
    })

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      const error = new Error(data?.message || 'Upstream request failed')
      error.status = response.status
      throw error
    }

    res.status(201).json({ success: true, data })
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Validation failed', details: error.issues })
    }
    return next(error)
  }
})

export default router
