const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const defaultContactInfo = {
  supportEmail: process.env.SUPPORT_EMAIL || 'support@clicksmeta.com',
  phone: process.env.SUPPORT_PHONE || '+1 (415) 555-0198',
  hours: process.env.SUPPORT_HOURS || 'Mon - Fri, 9am to 6pm ET',
  address: process.env.SUPPORT_ADDRESS || '123 Market Street, Suite 500, San Francisco, CA',
  sampleMessage: 'I would like to know more about enterprise plans and pricing.'
}

function validateContact(body = {}) {
  const issues = []
  const payload = {
    name: body.name?.trim(),
    email: body.email?.trim(),
    message: body.message?.trim(),
    subject: body.subject?.trim()
  }

  if (!payload.name || payload.name.length < 2) {
    issues.push({ field: 'name', message: 'Name is required' })
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    issues.push({ field: 'email', message: 'Valid email required' })
  }

  if (!payload.message || payload.message.length < 10) {
    issues.push({ field: 'message', message: 'Message should be at least 10 characters' })
  }

  if (payload.subject && payload.subject.length > 120) {
    issues.push({ field: 'subject', message: 'Subject must be 120 characters or fewer' })
  }

  return { isValid: issues.length === 0, payload, issues }
}

async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(defaultContactInfo)
  }

  if (req.method === 'POST') {
    const { isValid, payload, issues } = validateContact(req.body)
    if (!isValid) {
      return res.status(400).json({ error: 'Validation failed', details: issues })
    }

    return res.status(201).json({
      success: true,
      message: 'We received your message and will respond shortly.',
      receivedAt: new Date().toISOString(),
      data: payload
    })
  }

  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).json({ error: `Method ${req.method} not allowed.` })
}

module.exports = handler
