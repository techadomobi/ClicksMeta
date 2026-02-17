export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      supportEmail: "support@yourapp.com",
      phone: "+1 (415) 555-0198",
      hours: "Mon – Fri, 9am to 6pm ET",
      sampleMessage: "I would like to know more about enterprise plans.",
    })
  }

  if (req.method === "POST") {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." })
    }

    return res.status(201).json({
      success: true,
      message: "We received your message and will get back to you shortly.",
      receivedAt: new Date().toISOString(),
      payload: { name, email, message },
    })
  }

  res.setHeader("Allow", ["GET", "POST"])
  return res.status(405).json({ error: `Method ${req.method} not allowed.` })
}
