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
        title: "Manage campaigns from one cockpit",
        description:
          "Mirror Trackier's centralized command center by editing settings, tracking performance, and optimizing launches without juggling spreadsheets.",
        bullets: [
          "Centralized dashboards highlight spend, pacing, and ROI at a glance.",
          "Bulk targeting pushes geo, device, or creative changes across campaigns in one motion.",
          "Metric tiles reveal clicks, conversions, and fraud risk for fast decision-making.",
        ],
        outcome: "Operators manage, optimize, and conquer without tab fatigue.",
      },
      {
        title: "Campaign wizards & playbooks",
        description:
          "Guided flows make it simple to launch new campaigns with pre-configured goals, budgets, and targeting, just like Trackier's step-by-step builders.",
        bullets: [
          "Start from templates to launch with pre-configured settings in minutes.",
          "Customization controls tailor messaging, audiences, and payouts to each goal.",
          "Test variations and spotlight winners with built-in experimentation.",
        ],
        outcome: "Teams ship more campaigns without sacrificing precision.",
      },
      {
        title: "Allowed traffic channels",
        description:
          "Define which sources are permitted so your budget focuses on the right inventory and risky placements are blocked automatically.",
        bullets: [
          "Specify approved sources per campaign, publisher, or geo.",
          "Automated fraud checks reduce fake clicks and low-quality traffic.",
          "Target specific sites, apps, or categories for more relevant audiences.",
        ],
        outcome: "Confidence that every dollar flows through trusted supply.",
      },
      {
        title: "Featured and creative asset management",
        description:
          "Prioritize top campaigns, share spotlight placements with publishers, and manage creative assets from a single locker.",
        bullets: [
          "Highlight impactful campaigns to drive more visitors and conversions.",
          "Streamline creative workflows with centralized upload/edit/versioning.",
          "Support multiple ad formats so messages stay on-brand everywhere.",
        ],
        outcome: "Campaigns stay fresh, compliant, and ready for cross-channel rotation.",
      },
      {
        title: "Accolades & proof",
        description:
          "Surface testimonial panels, ratings, and badges to match Trackier's credibility cues when pitching stakeholders.",
        bullets: [
          "Showcase G2, Capterra, and TrustRadius scores next to automation stats.",
          "Embed rotating customer quotes tied to conversion or quality lifts.",
          "Mirror award badges so enterprise buyers see third-party validation.",
        ],
        outcome: "Stakeholders trust the platform as much as operators already do.",
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
        title: "Smart links & routing",
        description:
          "Recreate Trackier's smart links to automatically route traffic toward the best-performing offers while feeding analytics with behavioral context.",
        bullets: [
          "Route traffic to relevant offers using behavioral targeting and UTM parameters.",
          "Distribute visits across multiple campaigns without manual intervention.",
          "Automatically remove underperforming offers to protect ROI.",
        ],
        outcome: "Traffic stays efficient and every click is measured with clarity.",
      },
      {
        title: "Workflow automation",
        description: "Automate funnel triggers, pausing, and approvals based on conversion thresholds or CRM signals.",
        bullets: [
          "Block underperforming sources once conversion rate thresholds dip.",
          "Pause inactive campaigns to prevent wasted ad spend.",
          "Approve publishers or offers based on defined criteria for faster onboarding.",
        ],
        outcome: "Marketers focus on strategy while repetitive tasks run themselves.",
      },
      {
        title: "Offer health & link testing",
        description: "Keep customer journeys intact by validating offers, redirections, and landing page accuracy.",
        bullets: [
          "Automated link testing prevents lost traffic and highlights broken flows.",
          "Preview URL mismatch alerts ensure landing pages stay correct.",
          "Monitor hop count to optimize redirection speed and data capture.",
        ],
        outcome: "Every click lands on the right destination with verifiable analytics.",
      },
      {
        title: "Data import & enrichment",
        description: "Bulk upload conversions, publishers, and CRM data to keep analytics in sync.",
        bullets: [
          "Migrate existing platform data via CSV uploads with minimal lift.",
          "Bulk edit historical conversions to support predictive analytics.",
          "Upload conversion data when postback connections fail to keep reports accurate.",
        ],
        outcome: "Dashboards reflect the complete truth even when integrations glitch.",
      },
      {
        title: "Link test & async validation",
        description: "Scan links for broken connections before they impact app installs or social journeys.",
        bullets: [
          "Verify CPI redirection to app stores or landing pages.",
          "Troubleshoot postback test failures with publishers or CRM systems.",
          "Confirm every tracking URL points to the right ClicksMeta endpoint.",
        ],
        outcome: "Analytics teams trust the data powering their reports.",
      },
      {
        title: "Accolades & social proof",
        description:
          "Borrow Trackier's testimonial sections to show G2, Capterra, and TrustRadius scores alongside customer wins.",
        bullets: [
          "Highlight real quotes from growth, ops, and media leaders.",
          "Display badges and star ratings inside the analytics narrative.",
        ],
        outcome: "Stakeholders see proof that automation and analytics pay off.",
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
        title: "Real-time fraud detection",
        description:
          "Analyze traffic as it arrives to prevent immediate fraud, protect campaign performance, and maintain advertiser relationships.",
        bullets: [
          "Block fraudulent activity the moment it triggers suspicious thresholds.",
          "Filter bad traffic to improve KPIs across every offer.",
          "Keep advertiser trust high with continuously cleansed supply.",
        ],
        outcome: "Revenue stays protected during flash sales and peak seasons.",
      },
      {
        title: "Fraud reports and analytics",
        description:
          "Reveal trends, sources, and geos behind suspicious activity with detailed reports modeled after Trackier's dashboards.",
        bullets: [
          "Identify fraud patterns down to campaign, publisher, and country.",
          "Share actionable data with stakeholders to guide corrective actions.",
          "Refine campaign strategy faster using fraud insights.",
        ],
        outcome: "Teams move from reacting to forecasting where fraud strikes next.",
      },
      {
        title: "Click and conversion validation",
        description:
          "Multiple validation rules confirm clicks and conversions are legitimate before payouts are approved.",
        bullets: [
          "Filter bot and proxy-based fraud for cleaner metrics.",
          "Validate device IDs to confirm conversions originate from real hardware.",
          "Prevent duplicate conversions from the same source.",
        ],
        outcome: "Finance only pays for genuine traffic.",
      },
      {
        title: "Customizable fraud rules",
        description:
          "Create campaign-specific rule stacks and custom actions so blocking, redirecting, or flagging risky traffic is instant.",
        bullets: [
          "Specific rule setup per offer or vertical.",
          "Custom actions define what happens when rules are triggered.",
          "Targeted fraud prevention applies different playbooks to each campaign.",
        ],
        outcome: "Ops handles nuance without writing code.",
      },
      {
        title: "Multiple integrations",
        description:
          "Connect third-party anti-fraud tools, data points, and coverage options so detection is flexible and thorough.",
        bullets: [
          "Enhanced detection through external data feeds.",
          "Choice of integrations to match regional or product needs.",
          "Comprehensive protection that scales with your program.",
        ],
        outcome: "A layered defense that mirrors Trackier's ecosystem.",
      },
      {
        title: "Accolades & proof",
        description:
          "Bring in testimonial-style proof, ratings, and badges to show how fraud prevention boosts conversions.",
        bullets: [
          "Highlight G2, Capterra, and TrustRadius scores tied to fraud wins.",
          "Include quotes from digital leaders who doubled revenue after cleaning traffic.",
        ],
        outcome: "Stakeholders see that secure growth is possible today.",
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
        title: "Global partner payments on autopilot",
        description:
          "Route payouts in local currencies, cut conversion fees, and keep accounting teams aligned without spreadsheet gymnastics.",
        bullets: [
          "Pay partners in their preferred currency for a better payout experience.",
          "Reduce conversion fees by batching multi-currency payments with better FX.",
          "Track multi-currency payouts in one ledger for simplified reconciliation.",
        ],
        outcome: "Invoices to instant partner payments, sorted.",
      },
      {
        title: "Automated invoicing & reconciliation",
        description:
          "Let automations generate invoices, assign IDs, and match disbursements so finance teams stay audit-ready.",
        bullets: [
          "Auto-generate invoices using templates tied to thresholds and cadence.",
          "Customize invoice IDs to track regions, partners, or campaigns.",
          "Run automated reconciliation by matching invoices with payments instantly.",
        ],
        outcome: "Close the books faster with verifiable records.",
      },
      {
        title: "Managed payments with compliance guardrails",
        description:
          "Trackier-style managed payments ensure taxes, payment history, and security safeguards are baked into every payout workflow.",
        bullets: [
          "Central payment reconciliation tools keep history at your fingertips.",
          "Full visibility across every transaction with searchable payment history.",
          "Secure payment processing protects against fraud and losses.",
        ],
        outcome: "Finance teams trust the automation as much as operators do.",
      },
      {
        title: "Proactive support & self-service",
        description:
          "Give teams 24/7 help, in-platform assistance, and self-service assets so payout automations never stall.",
        bullets: [
          "Multi-platform support choices for every communication style.",
          "In-platform help lets operators get answers without leaving the workflow.",
          "Self-service resources offer answers anytime, even off-hours.",
        ],
        outcome: "Automation stays online because humans stay informed.",
      },
      {
        title: "Smart payouts tuned to performance",
        description:
          "Design payout logic that reacts to performance, peak hours, or special events with fine-grained control.",
        bullets: [
          "Mix and match payout structures by metric, event, or tier.",
          "Multiple time-slot configuration fine-tunes peak-hour incentives.",
          "Payout prioritization logic ensures the right rules apply every time.",
        ],
        outcome: "Partners feel seen and motivated when rewards fit reality.",
      },
      {
        title: "Accolades & appreciation",
        description:
          "Mirror Trackier's ratings and quotes so teams see proof that automation improves growth and relationships.",
        bullets: [
          "Showcase G2, Capterra, and TrustRadius scores next to automation wins.",
          "Highlight customer testimonials about achieving 2x growth with smoother payouts.",
        ],
        outcome: "Stakeholders buy into automation backed by social proof.",
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
        title: "Secure tracking & offer orchestration",
        description:
          "Bundle localized offers, disclosures, and creatives before launch so branch teams, affiliates, and media partners distribute only approved assets.",
        bullets: [
          "Automate approvals with compliance notes tracked per market.",
          "Auto-expire creatives when rates, APRs, or eligibility windows change.",
          "One workspace keeps copy decks, disclosures, and creative history auditable.",
        ],
        outcome: "Faster launches with a provable compliance trail.",
      },
      {
        title: "White-label partner experiences",
        description:
          "Mirror your brand across portals so agencies, branches, and influencers log into a trustworthy, cohesive banking hub.",
        bullets: [
          "Consistent branding across domains, palettes, and typography.",
          "Customizable partner dashboards surface only the KPIs each role needs.",
          "Dedicated support workflows route requests to the right analyst or RM.",
        ],
        outcome: "Franchise-ready experiences without spawning extra microsites.",
      },
      {
        title: "Decision-grade reporting",
        description:
          "Granular analytics expose which partners, audiences, and journeys drive visible deposit, card, and lending growth.",
        bullets: [
          "Real-time performance snapshots for funnel KPIs and geography.",
          "Report templates tuned to each banking product or leadership audience.",
          "Fraud signals appear alongside results so risky traffic is filtered fast.",
          "Automated digests keep RM and finance teams aligned without exports.",
        ],
        outcome: "Executives get board-ready KPI packs without spreadsheet gymnastics.",
      },
      {
        title: "Flexible commission science",
        description:
          "Match payout logic to the nuances of checking, lending, wealth, or card programs so every incentive reinforces profitable growth.",
        bullets: [
          "Publisher- and product-specific payout matrices.",
          "Performance bonuses triggered by approved applications or funded accounts.",
          "Automated commission tiers adjust when goals are exceeded.",
        ],
        outcome: "Partners stay motivated even as rate cards or product lines shift.",
      },
      {
        title: "Compliance & security guardrails",
        description:
          "Built-in privacy controls and infrastructure choices align with GDPR, CCPA, and bank-grade security expectations.",
        bullets: [
          "GDPR, CCPA, and FFIEC-inspired controls with exportable audit logs.",
          "Isolated storage and Google Cloud infrastructure for sensitive data.",
          "Routine security testing plus encryption across data in transit and at rest.",
        ],
        outcome: "Security teams see exactly how partner marketing stays compliant.",
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
        title: "Efficient partner management",
        description:
          "Give media buyers and publisher managers a shared cockpit for onboarding, communication, and payouts so collaboration stays fast even when the network scales.",
        bullets: [
          "Dedicated partner onboarding support tied to each offer.",
          "Custom dashboards track KPIs for every advertiser and publisher.",
          "Automated KPI alerts highlight pacing slips or overdeliveries.",
          "Auto-triggered commission payouts with approvals baked in.",
        ],
        outcome: "Fewer back-and-forth threads and cleaner partner satisfaction scores.",
      },
      {
        title: "Rapid publisher access management",
        description:
          "License-level rules and instant visibility controls keep offers secure while letting qualified publishers move quickly.",
        bullets: [
          "Control publisher access, visibility, and caps per campaign.",
          "One-click blacklist or IP blocks when risk signatures appear.",
          "Two-factor authentication and audit logs for every login.",
          "Self-serve portals surface approved offers instantly.",
        ],
        outcome: "Networks stay protected without throttling legitimate growth.",
      },
      {
        title: "Multi-channel performance intelligence",
        description:
          "Understand how display, mobile, social, and emerging placements contribute to revenue so you can reallocate spend confidently.",
        bullets: [
          "Cross-channel attribution cards tie spend to conversions.",
          "Granular localized reporting filters by geo, format, or placement.",
          "Manage multiple advertisers inside one workspace with role-based access.",
          "Real-time monitoring keeps fraud, latency, and margin issues visible.",
        ],
        outcome: "Media leads get the narrative they need for every executive review.",
      },
      {
        title: "Marketplace quality controls",
        description:
          "Blend compliance scoring, conversion health, and retention data to surface the highest-quality supply.",
        bullets: [
          "Score partners on compliance, conversion, and retention trends.",
          "Bulk updates push disclosures, caps, or asset refreshes in minutes.",
          "Smartlink routing and testing options steer traffic toward winner offers.",
          "Alerting workflows notify AMs the moment anomalies appear.",
        ],
        outcome: "Inventory stays healthy while ops teams work from one connected view.",
      },
      {
        title: "Monetization mix modeling",
        description:
          "Simulate CPM, CPC, CPA, or hybrid deals before launch so finance, sales, and ops agree on the levers that protect margin.",
        bullets: [
          "What-if analysis for rate cards, caps, and payout tiers.",
          "Route traffic intelligently with Smartlink functionality.",
          "Share board-ready exports with advertisers or internal finance.",
        ],
        outcome: "Deal desks move faster with confidence in every scenario.",
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
      points: [
        "Security and compliance sit at the foundation of every Trackier workflow.",
        "We invest in infrastructure, monitoring, and culture so customers trust every data touchpoint.",
      ],
    },
    sections: [
      {
        title: "Proactive governance",
        description:
          "Systems are designed to prevent threats before they materialize. Automated compliance frameworks align with global regulations while privacy-first design guides every feature.",
        bullets: [
          "Regular risk assessments and automated controls anticipate problems early.",
          "Privacy-first design principles are embedded across the platform.",
        ],
        outcome: "Governance is proactive, not reactive.",
      },
      {
        title: "Resilient infrastructure",
        description:
          "Trackier runs on Google Cloud Platform with redundant backups, disaster recovery, and automated monitoring so campaigns run without interruption.",
        bullets: [
          "Global footprint with GCP, CDN distribution, and automated recovery drills.",
          "Continuous monitoring via Cloudflare Security Center, GCP Security Command Center, and partner tools.",
        ],
        outcome: "Operations stay online even when threats evolve.",
      },
      {
        title: "Intelligent vigilance & security culture",
        description:
          "Dedicated security teams run AI-driven anomaly detection, penetration testing, and vulnerability management while every employee trains on data protection.",
        bullets: [
          "24/7 scanning and logging surfaces issues faster than manual processes.",
          "Mandatory security awareness and data handling training for all employees.",
        ],
        outcome: "Security is everyone's job.",
      },
      {
        title: "How we protect your data",
        description:
          "Identity is the new perimeter, so we layer SSO, zero trust networking, and endpoint protection to keep access secure.",
        bullets: [
          "Google Workspace SSO enforces strong authentication across apps.",
          "Cloudflare Zero Trust applies 'never trust, always verify' for every request.",
          "Enterprise-grade endpoint protection shields workstations on Windows, macOS, and Linux.",
        ],
        outcome: "Secure access, every time.",
      },
      {
        title: "Continuous monitoring & encryption",
        description:
          "Monitoring, logging, and AES-256 encryption protect data in transit and at rest. Automated alerts trigger rapid responses when anomalies appear.",
        bullets: [
          "Tools like Astra Security and Cloudflare Security Center scan for misconfigurations.",
          "HTTPS/TLS everywhere plus AES-256 protects clicks, conversions, and custom dimensions end-to-end.",
          "Data anonymization and pseudonymization guard visitor privacy.",
        ],
        outcome: "Data remains protected at every point in its journey.",
      },
      {
        title: "Visitor data storage & retention",
        description:
          "We collect only the telemetry needed for accurate attribution. Retention defaults to 24 months unless contracts specify otherwise, with secure destruction upon request.",
        bullets: [
          "Anonymized IP, device, and referral data stay in Trackier without directly accessing your backend.",
          "Accounts retain data for historical reporting until closure, then delete within 45–90 days.",
          "Customers can submit deletion, correction, and export requests via privacy@clicksmeta.com with a 30-day SLA.",
        ],
        outcome: "You stay in control while Trackier handles analytics on top.",
      },
      {
        title: "Compliance & incident response",
        description:
          "We maintain GDPR, CCPA, and other frameworks through third-party audits, penetration tests, and structured incident response playbooks.",
        bullets: [
          "Cross-border transfers follow GDPR transfer requirements and secure data centers with strict access controls.",
          "Incident response notifies affected customers within 48 hours and supports regulatory obligations.",
        ],
        outcome: "Trust is defended even when the unexpected happens.",
      },
      {
        title: "What it means for your business",
        description:
          "Security and privacy investments let you scale confidently, maintain partner trust, and stay compliant automatically.",
        bullets: [
          "Focus on growth instead of data risk thanks to built-in safeguards.",
          "Partners know their data is protected from collection through retention.",
          "Global reliability ensures low latency and zero single points of failure.",
        ],
        outcome: "Security becomes a competitive edge.",
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
        title: "Shared success commitments",
        description:
          "We each bring important responsibilities. Customers keep credentials secure, follow acceptable use, and ensure invoices are paid on time while we provide the tooling, context, and alerts needed for safe growth.",
        bullets: [
          "Define authorized users and protect credentials with SSO or MFA.",
          "Use the platform only for lawful programs that respect partner agreements.",
          "Pay invoices within agreed terms so services remain active.",
        ],
        outcome: "Clear expectations keep partnerships healthy.",
      },
      {
        title: "Security & compliance partnership",
        description:
          "ClicksMeta operates on secure infrastructure with privacy-first processes, while customers configure permissions, data retention choices, and custom compliance workflows.",
        bullets: [
          "We run on hardened cloud infrastructure with 24/7 monitoring.",
          "Customers set role-based access so each teammate sees only what they need.",
          "Shared audit logs record login, configuration, and payout events for future review.",
        ],
        outcome: "Security becomes a joint discipline rather than a handoff.",
      },
      {
        title: "Usage guidelines & acceptable behavior",
        description:
          "Automations are powerful, so rules outline what’s prohibited—abuse, illegal content, and attempts to reverse engineer or overload the platform.",
        bullets: [
          "No sending malware, spam, or fraudulent traffic through tracking links.",
          "Respect API rate limits, automation quotas, and partner-facing SLAs.",
          "Do not resell or white-label the service without written approval.",
        ],
        outcome: "Every customer enjoys consistent, reliable performance.",
      },
      {
        title: "Billing, renewals, and changes",
        description:
          "Contracts specify term lengths, renewal windows, and how overages are calculated so finance teams avoid surprises.",
        bullets: [
          "Plans renew automatically unless notice is provided per agreement.",
          "Usage beyond contracted volumes is billed at documented overage rates.",
          "Feature upgrades or downgrades follow mutually agreed change orders.",
        ],
        outcome: "Forecasting is easier when pricing mechanics stay transparent.",
      },
      {
        title: "Support, uptime, and remediation",
        description:
          "We commit to 99.5% uptime with proactive notifications, published maintenance windows, and collaborative issue resolution.",
        bullets: [
          "Access 24/5 support plus optional premium response SLAs.",
          "Scheduled maintenance is announced in advance with status-page updates.",
          "If incidents occur, we share timelines, root causes, and remediation steps.",
        ],
        outcome: "Customers always know who is working the problem.",
      },
      {
        title: "Data handling & continuity",
        description:
          "Contracts outline data retention, export rights, and deletion timelines so customers stay in control.",
        bullets: [
          "Export data anytime through APIs or dashboards during the subscription.",
          "When accounts end, we delete customer data within 30–90 days unless laws require longer retention.",
          "Mutual confidentiality clauses protect proprietary information on both sides.",
        ],
        outcome: "Even contract sunsets feel predictable and respectful.",
      },
      {
        title: "Liability & dispute resolution",
        description:
          "Standard liability caps equal twelve months of fees with carve-outs for confidentiality breaches and misuse. Disputes follow the governing law and venue noted in your order form.",
        bullets: [
          "Neither party is liable for indirect or consequential damages.",
          "Each party indemnifies the other for claims tied to their own misuse or IP infringement.",
          "Governing law, venue, and escalation paths are documented in the MSA.",
        ],
        outcome: "Both sides know how risks are managed before work begins.",
      },
    ],
  },
}
