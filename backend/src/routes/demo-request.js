import { Router } from 'express'
import { demoRequestSchema } from '../validators/demo-request.js'

const router = Router()
const offersMetaEndpoint = process.env.OFFERSMETA_CONTACT_URL?.trim()
const demoPlans = [
  { id: 'starter', name: 'Starter', description: 'Up to 50k tracked events' },
  { id: 'growth', name: 'Growth', description: 'Scaling teams and integrations' },
  { id: 'pro', name: 'Pro', description: '200k+ events with multi-workspace support' },
  { id: 'enterprise', name: 'Enterprise', description: 'Custom contract and white-glove onboarding' }
]
const planMap = new Map(demoPlans.map((plan) => [plan.id, plan]))

router.get('/', (req, res) => {
  res.json({ plans: demoPlans })
})

router.post('/', async (req, res, next) => {
  try {
    const parsedBody = demoRequestSchema.parse(req.body)
    const planDetails = planMap.get(parsedBody.planId)
    const cleanedPayload = {
      ...parsedBody,
      domain: parsedBody.domain?.trim() || undefined,
      skypeId: parsedBody.skypeId?.trim() || undefined,
      message: parsedBody.message?.trim() || undefined,
      planName: parsedBody.planName || planDetails?.name
    }

    let upstreamData = null
    if (offersMetaEndpoint) {
      try {
        const response = await fetch(offersMetaEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cleanedPayload)
        })

        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          throw new Error(data?.message || `Upstream request failed with status ${response.status}`)
        }
        upstreamData = data
      } catch (upstreamError) {
        console.warn('Failed to forward demo request to OffersMeta API:', upstreamError.message)
      }
    }

    const payload = upstreamData || cleanedPayload
    res.status(201).json({
      success: true,
      message: upstreamData?.message || 'Demo request submitted successfully.',
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
