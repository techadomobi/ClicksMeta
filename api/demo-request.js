const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const urlPattern = /^https?:\/\/[^\s]+$/i
const offersMetaEndpoint = process.env.OFFERSMETA_CONTACT_URL?.trim()

const demoPlans = [
  { id: 'starter', name: 'Starter', description: 'Up to 50k tracked events' },
  { id: 'growth', name: 'Growth', description: 'Scaling teams and integrations' },
  { id: 'pro', name: 'Pro', description: '200k+ events with multi-workspace support' },
  { id: 'enterprise', name: 'Enterprise', description: 'Custom contract and white-glove onboarding' }
]

const planMap = new Map(demoPlans.map((plan) => [plan.id, plan]))

function validateDemoRequest(body = {}) {
  const issues = []
  const payload = {
    name: body.name?.trim(),
    email: body.email?.trim(),
    mobileNumber: body.mobileNumber?.trim(),
    company: body.company?.trim(),
    address: body.address?.trim(),
    country: body.country?.trim(),
    planId: body.planId?.trim(),
    planName: body.planName?.trim(),
    skypeId: body.skypeId?.trim(),
    domain: body.domain?.trim(),
    message: body.message?.trim()
  }

  const requiredFields = ['name', 'email', 'mobileNumber', 'company', 'address', 'country', 'planId']
  requiredFields.forEach((field) => {
    if (!payload[field]) {
      issues.push({ field, message: `${field} is required` })
    }
  })

  if (payload.email && !emailPattern.test(payload.email)) {
    issues.push({ field: 'email', message: 'Valid email required' })
  }

  if (payload.domain && !urlPattern.test(payload.domain)) {
    issues.push({ field: 'domain', message: 'Domain must be a valid URL starting with http or https' })
  }

  if (payload.message && payload.message.length > 2000) {
    issues.push({ field: 'message', message: 'Message must be 2000 characters or fewer' })
  }

  return { isValid: issues.length === 0, payload, issues }
}

async function forwardToOffersMeta(payload) {
  if (!offersMetaEndpoint) return null
  const response = await fetch(offersMetaEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data?.message || `Upstream request failed with status ${response.status}`)
  }

  return data
}

async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ plans: demoPlans })
  }

  if (req.method === 'POST') {
    const { isValid, payload, issues } = validateDemoRequest(req.body)
    if (!isValid) {
      return res.status(400).json({ error: 'Validation failed', details: issues })
    }

    const planDetails = planMap.get(payload.planId)
    payload.planName = payload.planName || planDetails?.name
    if (!payload.domain) payload.domain = undefined
    if (!payload.skypeId) payload.skypeId = undefined
    if (!payload.message) payload.message = undefined

    let upstreamData = null
    if (offersMetaEndpoint) {
      try {
        upstreamData = await forwardToOffersMeta(payload)
      } catch (error) {
        console.warn('Failed to forward demo request to OffersMeta API:', error.message)
      }
    }

    const responsePayload = upstreamData || payload
    return res.status(201).json({
      success: true,
      message: upstreamData?.message || 'Demo request submitted successfully.',
      receivedAt: new Date().toISOString(),
      data: responsePayload
    })
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ error: `Method ${req.method} not allowed.` })
}

module.exports = handler
