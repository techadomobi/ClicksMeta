const MOCK_PLANS = [
  { id: "starter", name: "Starter", description: "Up to 50k events" },
  { id: "growth", name: "Growth", description: "Scaling teams" },
  { id: "enterprise", name: "Enterprise", description: "Custom contracts" },
]

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ plans: MOCK_PLANS })
  }

  if (req.method === "POST") {
    const { name, email, mobileNumber, company, address, country, planId } = req.body || {}
    if (!name || !email || !mobileNumber || !company || !address || !country || !planId) {
      return res.status(400).json({ error: "Please fill in all required fields." })
    }

    return res.status(201).json({
      success: true,
      message: "Demo request submitted successfully.",
      receivedAt: new Date().toISOString(),
    })
  }

  res.setHeader("Allow", ["GET", "POST"])
  return res.status(405).json({ error: `Method ${req.method} not allowed.` })
}
