export const footerNav = [
  {
    title: "Products",
    links: [
      { label: "Campaign Management", slug: "campaign-management" },
      { label: "Marketing Analytics", slug: "marketing-analytics" },
      { label: "Automated Payout", slug: "automated-payout" },
      { label: "Fraud Detection", slug: "fraud-detection" },
      { label: "Easy Automation", slug: "easy-automation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "E-Commerce", slug: "ecommerce" },
      { label: "Fintech", slug: "fintech" },
      { label: "Banking", slug: "banking" },
      { label: "Travel", slug: "travel" },
      { label: "Media & Network", slug: "media-network" },
      { label: "SaaS", slug: "saas" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", slug: "blog" },
      { label: "Documentation", slug: "documentation" },
      { label: "API Reference", slug: "api-reference" },
      { label: "Case Studies", slug: "case-studies" },
      { label: "Help Center", slug: "help-center" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", slug: "about-us" },
      { label: "Careers", slug: "careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", slug: "privacy-policy" },
      { label: "Terms of Service", slug: "terms-of-service" },
    ],
  },
]

export const footerPageContent = {
  "campaign-management": {
    category: "Products",
    title: "Campaign Management",
    hero: {
      eyebrow: "Products / Campaign Management",
      title: "Command centers for modern growth teams",
      description:
        "Coordinate every partner, publisher, and paid channel from a single workspace with playbooks influenced by premium tracking platforms.",
    },
    highlights: [
      { title: "Unified Tracking", description: "Roll up KPIs from affiliates, media buyers, and in-house channels in real time." },
      { title: "Workflow Automation", description: "Approval, QA, and optimization actions can trigger automatically when thresholds move." },
      { title: "Collaboration", description: "Give internal teams and agencies shared context without duplicating spreadsheets." },
    ],
    sections: [
      {
        title: "Operational visibility",
        description:
          "Live widgets for spend, revenue, ROI, and traffic quality remove tab fatigue and let leaders act quickly.",
        bullets: [
          "Cross-network attribution with currency normalization.",
          "Pacing forecasts vs. target budgets with automatic variance flags.",
          "Smart suggestions surface segments that deserve extra spend or throttling.",
        ],
      },
      {
        title: "Team-ready workflows",
        description:
          "Launch briefs, checklists, and change logs stay tied to each campaign so every contributor knows the latest context.",
        bullets: [
          "Reusable launch templates covering tags, budgeting, and creative QA.",
          "Notifications sync to Slack or email the moment KPIs change.",
          "Executive-friendly exports share insights without manual slide work.",
        ],
      },
    ],
  },
  "marketing-analytics": {
    category: "Products",
    title: "Marketing Analytics",
    hero: {
      eyebrow: "Products / Marketing Analytics",
      title: "Insight layers purpose-built for performance teams",
      description:
        "Blend media spend, partner payouts, and revenue into curated dashboards that feel like a premium analytics suite while remaining tailor-made for ClicksMeta users.",
    },
    highlights: [
      { title: "Attribution", description: "Understand channel influence with multi-touch and first-party data combined." },
      { title: "Spend Intelligence", description: "Budgets highlight drift before overages hit the ledger." },
      { title: "Benchmarking", description: "Industry tags place every KPI in the right competitive context." },
    ],
    sections: [
      {
        title: "Metric storytelling",
        description:
          "Modular cards, funnels, and cohort visuals translate raw numbers into insights that even non-technical leaders appreciate.",
        bullets: [
          "Drag-and-drop board builder for every team persona.",
          "Instant comparisons to previous periods or sibling campaigns.",
          "Digest emails keep executives aligned without logging in.",
        ],
      },
      {
        title: "Data governance",
        description:
          "Audit trails, transformation logs, and role-based access maintain trust when multiple systems feed data into the platform.",
      },
    ],
  },
  "automated-payout": {
    category: "Products",
    title: "Automated Payout",
    hero: {
      eyebrow: "Products / Automated Payout",
      title: "Finance operations that run themselves",
      description:
        "Calculate commissions, trigger approvals, and send payments in every currency without exporting CSVs or forwarding invoices around.",
    },
    highlights: [
      { title: "Multi-currency", description: "Support dozens of currencies with transparent FX snapshots." },
      { title: "Compliance", description: "Invoice archives, tax forms, and audit trails stay organized automatically." },
      { title: "Payment Flexibility", description: "ACH, wire, PayPal, and digital wallets are supported out of the box." },
    ],
    sections: [
      {
        title: "Finance automation",
        description:
          "Approval queues, dispute workflows, and balance checks sit in one clean interface so finance teams stay confident at scale.",
      },
      {
        title: "Partner trust",
        description:
          "Partners download invoices, review adjustments, and track payment status from their own portal instead of chasing email threads.",
      },
    ],
  },
  "fraud-detection": {
    category: "Products",
    title: "Fraud Detection",
    hero: {
      eyebrow: "Products / Fraud Detection",
      title: "Stay ahead of risky traffic",
      description:
        "Device fingerprinting, anomaly scoring, and compliance rules are embedded in every campaign view so bad actors never get comfortable.",
    },
    highlights: [
      { title: "Real-Time Alerts", description: "Bot spikes and click floods trigger notifications instantly." },
      { title: "Policy Guardrails", description: "Geo and offer rules auto-block violating sources." },
      { title: "Investigation Kits", description: "One-click evidence packs make escalations painless." },
    ],
    sections: [
      {
        title: "Always-on monitoring",
        description:
          "Heatmaps, timelines, and inventory health scores reveal suspicious activity before it touches billing cycles.",
      },
      {
        title: "Actionable outcomes",
        description:
          "Automations can pause, redirect, or require manual review with a couple of clicks.",
      },
    ],
  },
  "easy-automation": {
    category: "Products",
    title: "Easy Automation",
    hero: {
      eyebrow: "Products / Easy Automation",
      title: "No-code rules for busy operators",
      description:
        "Drag, drop, and publish automations that sync budgets, pause creatives, or ping partners the moment performance drifts.",
    },
    highlights: [
      { title: "Recipe Library", description: "Start from pacing, payout, or quality templates." },
      { title: "Visual Editor", description: "Condition builder with AND/OR logic plus testing mode." },
      { title: "Integrations", description: "Connect chat, CRM, sheets, and dozens of ad networks." },
    ],
    sections: [
      {
        title: "Publish with confidence",
        description:
          "Dry-run rules against historical data to preview the impact before pushing live.",
      },
      {
        title: "Documented ownership",
        description:
          "Every workflow stores creator, purpose, and change history for future teammates.",
      },
    ],
  },
  ecommerce: {
    category: "Solutions",
    title: "E-Commerce",
    hero: {
      eyebrow: "Solutions / E-Commerce",
      title: "Merchandising intelligence for omnichannel retail",
      description:
        "Track the shopper journey from first touch to repeat purchase while keeping pacing and inventory realities front and center.",
    },
    sections: [
      {
        title: "Merch performance",
        description:
          "Sku-level dashboards show which inventory, influencers, and promo codes actually convert.",
        bullets: [
          "Merged funnels across paid, affiliate, and marketplace channels.",
          "Automatic callouts for net-new vs. returning revenue.",
        ],
      },
      {
        title: "Partnership scaling",
        description:
          "Onboard creators, coupon partners, and publishers with curated sign-up flows and automated payouts.",
      },
    ],
  },
  fintech: {
    category: "Solutions",
    title: "Fintech",
    hero: {
      eyebrow: "Solutions / Fintech",
      title: "Acquisition clarity for regulated teams",
      description:
        "Blend geo controls, KYC checkpoints, and funnel analytics keyed to cards, wallets, and credit products.",
    },
    sections: [
      {
        title: "Regulation-ready",
        description:
          "Geo-fencing, offer caps, and disclosure reminders keep every affiliate compliant.",
      },
      {
        title: "Lifecycle clarity",
        description:
          "Connect acquisition metrics to funded accounts so incentives reward real value.",
      },
    ],
  },
  banking: {
    category: "Solutions",
    title: "Banking",
    hero: {
      eyebrow: "Solutions / Banking",
      title: "Partner marketing for modern banks",
      description:
        "Offer governance, co-branded asset libraries, and ROI reporting designed for financial institutions.",
    },
    sections: [
      {
        title: "Offer orchestration",
        description:
          "Run localized campaigns with automated approvals, compliance notes, and templated assets.",
      },
      {
        title: "Executive-ready insights",
        description:
          "KPIs map directly to deposit growth, card activations, and digital adoption goals.",
      },
    ],
  },
  travel: {
    category: "Solutions",
    title: "Travel",
    hero: {
      eyebrow: "Solutions / Travel",
      title: "Inventory-aware travel marketing",
      description:
        "Blend demand forecasts, region pacing, and partner performance for OTAs, airlines, and hospitality groups.",
    },
    sections: [
      {
        title: "Route-specific insights",
        description:
          "Overlay availability, fare classes, and partner mixes to avoid overselling while maximizing load factor.",
      },
      {
        title: "Traveler trust",
        description:
          "Creative approvals and compliance snapshots keep partners on brand across every region.",
      },
    ],
  },
  "media-network": {
    category: "Solutions",
    title: "Media & Network",
    hero: {
      eyebrow: "Solutions / Media & Network",
      title: "Marketplace playbooks for publishers",
      description:
        "Manage supply quality, payouts, and deal types in one revenue cockpit built for ad networks and media houses.",
    },
    sections: [
      {
        title: "Marketplace quality",
        description:
          "Score partners on compliance, conversion, and retention to surface your strongest supply.",
      },
      {
        title: "Monetization mix",
        description:
          "Model CPM, CPA, and hybrid deals with fast what-if analysis to protect margins.",
      },
    ],
  },
  saas: {
    category: "Solutions",
    title: "SaaS",
    hero: {
      eyebrow: "Solutions / SaaS",
      title: "Recurring revenue clarity",
      description:
        "Connect acquisition campaigns to product adoption, renewals, and partner-sourced ARR across your SaaS ecosystem.",
    },
    sections: [
      {
        title: "Pipeline to ARR",
        description:
          "Track the journey from lead to activation to renewal in a single view.",
      },
      {
        title: "Ecosystem growth",
        description:
          "Give resellers, affiliates, and tech partners transparent revenue sharing and certification paths.",
      },
    ],
  },
  blog: {
    category: "Resources",
    title: "Blog",
    hero: {
      eyebrow: "Resources / Blog",
      title: "Insight hub for performance leaders",
      description:
        "Collect release notes, growth tactics, partner stories, and industry analysis inside a modern reading experience.",
    },
    sections: [
      {
        title: "Editorial system",
        description:
          "Topic clusters, hero stories, and CTA tiles highlight the most actionable reads.",
      },
      {
        title: "Reader experience",
        description:
          "Estimated reading time, content tags, and email capture modules keep engagement high.",
      },
    ],
  },
  documentation: {
    category: "Resources",
    title: "Documentation",
    hero: {
      eyebrow: "Resources / Documentation",
      title: "Crystal-clear product guidance",
      description:
        "Organize getting-started guides, advanced tutorials, and role-based paths with collapsible menus and smart search.",
    },
    sections: [
      {
        title: "Information architecture",
        description:
          "Break content down by role, job-to-be-done, and API surface so builders spend less time hunting.",
      },
      {
        title: "Embedded support",
        description:
          "Inline feedback widgets and chat escalations keep implementation teams unblocked.",
      },
    ],
  },
  "api-reference": {
    category: "Resources",
    title: "API Reference",
    hero: {
      eyebrow: "Resources / API Reference",
      title: "Live explorer for every endpoint",
      description:
        "Auto-generated schemas, try-it consoles, and SDK tabs make integrations fast for any developer persona.",
    },
    sections: [
      {
        title: "Reliable schemas",
        description:
          "Versioning, changelog notes, and sample payloads update the moment backend contracts change.",
      },
      {
        title: "Test-friendly",
        description:
          "Inline environment switching lets teams move between sandbox and production instantly.",
      },
    ],
  },
  "case-studies": {
    category: "Resources",
    title: "Case Studies",
    hero: {
      eyebrow: "Resources / Case Studies",
      title: "Proof backed by real metrics",
      description:
        "Tell stories with challenge, solution, and outcome chapters plus bold KPI callouts and quotes.",
    },
    sections: [
      {
        title: "Storytelling framework",
        description:
          "Hero visuals, tangible metrics, and customer voices build credibility fast.",
      },
      {
        title: "Conversion moments",
        description:
          "Interweave demo CTAs, downloads, and related industries for bingeable proof.",
      },
    ],
  },
  "help-center": {
    category: "Resources",
    title: "Help Center",
    hero: {
      eyebrow: "Resources / Help Center",
      title: "Self-service that feels human",
      description:
        "Blend quick links, modular articles, and escalation paths so customers find answers without feeling abandoned.",
    },
    sections: [
      {
        title: "Search-first",
        description:
          "Predictive search, trending topics, and saved views keep customers moving.",
      },
      {
        title: "Continuity",
        description:
          "Ticket handoffs retain article context so agents see what was already attempted.",
      },
    ],
  },
  "about-us": {
    category: "Company",
    title: "About Us",
    hero: {
      eyebrow: "Company / About Us",
      title: "Pioneering partner marketing with heart",
      description:
        "ClicksMeta takes cues from Trackier’s customer-first heritage to blend measurable growth with ethical data practices.",
      points: [
        "Founded to bridge the gap between marketing teams and clear attribution signals.",
        "Leadership summits keep empathy, collaboration, and innovation at the center of our decisions.",
      ],
    },
    sections: [
      {
        title: "Our story",
        description:
          "Three founders set out to remove the guesswork from partner marketing, building a platform that treats data as a superpower rather than an obstacle.",
        bullets: [
          "Customer conversations shape every roadmap iteration.",
          "Privacy and compliance standards mirror enterprise expectations.",
        ],
      },
      {
        title: "Growing better together",
        description:
          "Inspired by Trackier’s emphasis on people-first growth, we pair innovation with community initiatives and leadership retreats.",
        bullets: [
          "Annual leadership summits to align on empathy-driven execution.",
          "Social impact programs backing education, wellness, and local causes.",
        ],
      },
      {
        title: "Global presence",
        description:
          "Hubs across San Francisco, Bengaluru, Berlin, and Dubai let us support customers in every major region while staying close to their markets.",
      },
    ],
  },
  careers: {
    category: "Company",
    title: "Careers",
    hero: {
      eyebrow: "Company / Careers",
      title: "Build your best work life",
      description:
        "Our talent experience mirrors Trackier’s careers page—hybrid-friendly schedules, recognition rituals, and space to keep learning.",
      points: [
        "Hybrid work with flexible hours and wellness-forward benefits.",
        "Culture of recognition, innovation, and continuous learning.",
      ],
    },
    sections: [
      {
        title: "Values that guide us",
        description:
          "Innovation, accountability, and constant learning power every role—direct reflections of Trackier’s leadership quotes.",
        bullets: [
          "Respectful collaboration anchored in transparent communication.",
          "Growth mindsets backed by mentorship and cross-team exposure.",
        ],
      },
      {
        title: "Why work here",
        description:
          "From recognition programs to professional development stipends, we make sure meaningful work is matched by support and rewards.",
        bullets: [
          "Hybrid model with flexible hours and wellness leave.",
          "Learning budgets, leadership summits, and global offsites.",
          "Opportunities to own products end-to-end, not just slices.",
        ],
      },
      {
        title: "Voices from the team",
        description:
          "Employee spotlights showcase engineers, GTM leaders, and customer success partners who drive tangible outcomes.",
      },
    ],
  },
  "privacy-policy": {
    category: "Company",
    title: "Privacy Policy",
    hero: {
      eyebrow: "Company / Privacy Policy",
      title: "Data practices you can trust",
      description:
        "We honor global privacy regulations with transparent collection, retention, and access controls.",
    },
    sections: [
      {
        title: "Data we process",
        description:
          "Contact info, usage telemetry, and billing details are collected solely to deliver services.",
        bullets: [
          "We never sell customer data.",
          "Subprocessors complete regular security reviews.",
          "Data retention defaults to 24 months unless contracts specify otherwise.",
        ],
      },
      {
        title: "Your controls",
        description:
          "Access, correction, deletion, and export requests route through privacy@clicksmeta.com with a 30-day SLA.",
      },
    ],
  },
  "terms-of-service": {
    category: "Company",
    title: "Terms of Service",
    hero: {
      eyebrow: "Company / Terms of Service",
      title: "Ground rules for using ClicksMeta",
      description:
        "These summaries highlight the commitments inside our customer agreements.",
    },
    sections: [
      {
        title: "Customer obligations",
        description:
          "Keep credentials secure, follow acceptable use, and pay invoices on time.",
      },
      {
        title: "Our obligations",
        description:
          "Provide 99.5% uptime, proactive security notifications, and fair API limits.",
      },
      {
        title: "Liability",
        description:
          "Standard cap at 12 months of fees with carve-outs for confidentiality breaches.",
      },
    ],
  },
}
