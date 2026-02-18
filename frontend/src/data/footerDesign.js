export const footerDesignConfig = {
  defaults: {
    Products: { layout: "product" },
    Solutions: { layout: "solution" },
    Resources: { layout: "resource" },
    Company: { layout: "company" },
  },
  pages: {
    "campaign-management": {
      layout: "product",
      statGrid: [
        { label: "Campaigns governed", value: "1.2K+" },
        { label: "Bulk edits automated", value: "380/day" },
        { label: "Launch time saved", value: "42%" },
      ],
      featurePanels: [
        { title: "Campaign wizard", description: "Prebuilt templates sequence tags, goals, and payout logic in a few guided clicks.", badge: "Setup" },
        { title: "Allowed channels", description: "Lock approved sources, promos, and territories so compliance teams stay confident.", badge: "Policy" },
        { title: "Bulk targeting", description: "Edit budgets, caps, and geo rules across campaigns without spreadsheets.", badge: "Ops" },
      ],
      faqs: [
        { question: "How is this different from a generic ads manager?", answer: "Campaign targeting, payouts, and fraud policies sit together so partner teams avoid jumping between tools." },
        { question: "Can mission control views be shared externally?", answer: "Yes, create expiring share links or export PDF snapshots for agencies and finance." },
      ],
    },
    "marketing-analytics": {
      layout: "product",
      statGrid: [
        { label: "Dashboards curated", value: "240+" },
        { label: "Alert recipes", value: "640" },
        { label: "Attribution accuracy", value: "99.4%" },
      ],
      featurePanels: [
        { title: "Story-driven boards", description: "Card-based layouts stack funnels, cohorts, and callouts for any leadership review.", badge: "Narratives" },
        { title: "Server-side telemetry", description: "Ingest APIs, webhooks, and uploads without losing accuracy.", badge: "Data" },
        { title: "Benchmark layers", description: "Layer competitive baselines or historical medians onto every metric.", badge: "Context" },
      ],
      faqs: [
        { question: "Does this support hybrid web + app programs?", answer: "Yes. Merge web, iOS, Android, and OTT journeys into a single attribution graph." },
        { question: "Can alerts stream into Slack or BI tools?", answer: "Webhook connectors forward digests or anomaly alerts wherever teams collaborate." },
      ],
    },
    "automated-payout": {
      layout: "product",
      statGrid: [
        { label: "Currencies supported", value: "58" },
        { label: "Average audit time", value: "12 min" },
        { label: "Payout accuracy", value: "99.8%" },
      ],
      featurePanels: [
        { title: "Cost ETL", description: "Trace fees, FX, and partner adjustments back to every campaign.", badge: "Visibility" },
        { title: "Scaling payouts", description: "Design custom payout logic that rewards top performers automatically.", badge: "Incentives" },
        { title: "Delegated processing", description: "Route payments through the right provider while staying compliant.", badge: "Payments" },
      ],
      faqs: [
        { question: "Can payouts sync with our ERP?", answer: "Yes, push journals into NetSuite, Xero, or any finance stack via API." },
        { question: "How are tax forms handled?", answer: "Request, store, and expire compliance documents automatically with reminders." },
      ],
    },
    "fraud-detection": {
      layout: "product",
      statGrid: [
        { label: "Threats blocked weekly", value: "4.1M" },
        { label: "Rule templates", value: "75" },
        { label: "Investigation time saved", value: "60%" },
      ],
      featurePanels: [
        { title: "Protect budgets", description: "Filter invalid clicks, bot traffic, and duplicate installs in real time.", badge: "Defense" },
        { title: "Validate traffic", description: "Stack rules per campaign to whitelist clean traffic instantly.", badge: "Quality" },
        { title: "Evidence kits", description: "Download ready-to-share case files for networks or partners.", badge: "Trust" },
      ],
      faqs: [
        { question: "Do fraud alerts integrate with automation rules?", answer: "Yes. Pipe any anomaly into workflows that pause offers or notify reps." },
        { question: "Can we tune sensitivity per partner?", answer: "Create partner-level rule stacks so VIP supply is monitored differently." },
      ],
    },
    "easy-automation": {
      layout: "product",
      statGrid: [
        { label: "Automation recipes", value: "120+" },
        { label: "Dry-run accuracy", value: "97%" },
        { label: "Hours saved weekly", value: "35" },
      ],
      featurePanels: [
        { title: "Playbook shelf", description: "Pin pacing, payout, fraud, and reporting recipes you rely on.", badge: "Templates" },
        { title: "Testing sandbox", description: "Run rules against historical data before activating.", badge: "Quality" },
        { title: "Change journal", description: "Every workflow stores owner, purpose, and history automatically.", badge: "Audit" },
      ],
      faqs: [
        { question: "Can automations trigger across workspaces?", answer: "Yes. Fire actions in CRM, Slack, billing, or other ClicksMeta modules simultaneously." },
        { question: "Do we need engineers to maintain these rules?", answer: "No. Operators adjust logic through the same visual UI." },
      ],
    },
    "ecommerce": {
      layout: "solution",
      statGrid: [
        { label: "Average basket lift", value: "+18%" },
        { label: "Influencers onboarded", value: "420" },
        { label: "Promo codes governed", value: "3.4K" },
      ],
      journey: [
        { title: "Acquire", description: "Unify paid, affiliate, and creator channels with shared attribution.", metric: "Traffic +22%" },
        { title: "Convert", description: "Sync inventory, promo rules, and checkout signals to target high-intent shoppers.", metric: "CVR +14%" },
        { title: "Retain", description: "Trigger loyalty offers and restock alerts when cohorts hit milestones.", metric: "Repeat +11%" },
      ],
      playbooks: [
        { title: "Merch intelligence", description: "Sku-level dashboards highlight winners by market or influencer.", chips: ["SKU heatmap", "Dynamic funnels"] },
        { title: "Creator governance", description: "Automate coupon approvals, payouts, and fraud controls for ambassadors.", chips: ["Creator onboarding", "Auto payouts"] },
      ],
      faqs: [
        { question: "Can we cap coupons per creator?", answer: "Yes. Apply spend, redemption, or geo constraints exactly like Trackier's coupon governance." },
        { question: "Do you sync with commerce platforms?", answer: "Use connectors for Shopify, VTEX, or marketplace feeds plus SFTP backups." },
      ],
    },
    "fintech": {
      layout: "solution",
      statGrid: [
        { label: "Fraud reduced", value: "-38%" },
        { label: "Geo policies", value: "95+" },
        { label: "Activation velocity", value: "+27%" },
      ],
      journey: [
        { title: "Acquire", description: "Whitelist publishers by license, geo, or product type.", metric: "Qualified leads +30%" },
        { title: "Verify", description: "Pass KYC statuses and funding milestones back to marketing.", metric: "Approval speed +18%" },
        { title: "Scale", description: "Reward partners for activated accounts, not just clicks.", metric: "CPI -22%" },
      ],
      playbooks: [
        { title: "Regulation-ready", description: "Geo-fencing, offer caps, and disclosure reminders keep every affiliate compliant.", chips: ["KYC sync", "Offer caps"] },
        { title: "Lifecycle clarity", description: "Connect acquisition metrics to funded accounts and card activations.", chips: ["Activation feed", "Value weighting"] },
      ],
      faqs: [
        { question: "Do you support multi-brand banking groups?", answer: "Spin up brand workspaces with shared governance and reporting." },
        { question: "How are rate changes handled?", answer: "Trigger partner alerts and automatically update landing URLs or terms." },
      ],
    },
    "banking": {
      layout: "solution",
      statGrid: [
        { label: "Branches digitized", value: "260" },
        { label: "Campaign approval speed", value: "2.5x" },
        { label: "Deposit visibility", value: "Real-time" },
      ],
      journey: [
        { title: "Plan", description: "Bundle offers, disclosures, and creatives per region.", metric: "Launch time -40%" },
        { title: "Promote", description: "Distribute compliant assets to affiliates and branch partners.", metric: "Errors -60%" },
        { title: "Measure", description: "Tie goals to deposits, card activations, and digital signups.", metric: "Reporting daily" },
      ],
      playbooks: [
        { title: "Offer orchestration", description: "Run localized campaigns with automated approvals, compliance notes, and templated assets.", chips: ["Disclosure blocks", "Asset locker"] },
        { title: "Executive-ready insights", description: "KPIs map directly to deposit growth, card activations, and digital adoption goals.", chips: ["Board pack", "Goal tracker"] },
      ],
      faqs: [
        { question: "Do community banks get the same tooling?", answer: "Yes, scale down seats while keeping enterprise-grade compliance." },
        { question: "Can wealth teams share dashboards?", answer: "Role-based sharing lets wealth, retail, and cards collaborate with purpose-built filters." },
      ],
    },
    "travel": {
      layout: "solution",
      statGrid: [
        { label: "Routes monitored", value: "640" },
        { label: "Geo payouts", value: "85" },
        { label: "Ancillary lift", value: "+19%" },
      ],
      journey: [
        { title: "Plan", description: "Overlay seat maps, stays, and partners into pacing boards.", metric: "Forecasting +30%" },
        { title: "Promote", description: "Distribute compliant creatives and fares by market.", metric: "Approval time -45%" },
        { title: "Optimize", description: "Shift spend toward high-performing corridors instantly.", metric: "Load factor +8%" },
      ],
      playbooks: [
        { title: "Route intelligence", description: "Overlay availability, fare classes, and partner mixes to avoid overselling.", chips: ["Seat mix", "Fare guard"] },
        { title: "Traveler trust", description: "Creative approvals and compliance snapshots keep partners on brand across every region.", chips: ["Creative QA", "Policy feed"] },
      ],
      faqs: [
        { question: "Do you integrate with GDS feeds?", answer: "Yes, sync route and inventory data into pacing views." },
        { question: "Can agencies view performance by hotel chain?", answer: "Share curated dashboards filtered by brand, region, or partner tier." },
      ],
    },
    "media-network": {
      layout: "solution",
      statGrid: [
        { label: "Active publishers", value: "2.1K" },
        { label: "Hybrid deal templates", value: "32" },
        { label: "Fraud savings", value: "-28% waste" },
      ],
      journey: [
        { title: "Onboard", description: "Approve partners with automated due diligence.", metric: "Time -55%" },
        { title: "Optimize", description: "Route traffic via smart links and pacing guardrails.", metric: "Fill +17%" },
        { title: "Monetize", description: "Run mixed payout models per campaign.", metric: "Margin +9%" },
      ],
      playbooks: [
        { title: "Marketplace quality", description: "Score partners on compliance, conversion, and retention to surface your strongest supply.", chips: ["Health score", "Review queue"] },
        { title: "Monetization mix", description: "Model CPM, CPA, and hybrid deals with fast what-if analysis.", chips: ["Deal builder", "What-if"] },
      ],
      faqs: [
        { question: "Do we need separate workspaces for agencies?", answer: "Create partner portals or consolidated network views as needed." },
        { question: "How granular are fraud flags?", answer: "Investigate anomalies down to placement, device, or creative IDs." },
      ],
    },
    "saas": {
      layout: "solution",
      statGrid: [
        { label: "ARR sourced", value: "$84M" },
        { label: "Partner programs", value: "5" },
        { label: "Churn reduction", value: "-6 pts" },
      ],
      journey: [
        { title: "Attract", description: "Highlight partner and self-serve funnels side-by-side.", metric: "Pipeline +23%" },
        { title: "Adopt", description: "Track product usage milestones that unlock revenue share.", metric: "Time-to-value -30%" },
        { title: "Expand", description: "Identify upsell-ready accounts and hand them to partners.", metric: "Expansion +18%" },
      ],
      playbooks: [
        { title: "Pipeline to ARR", description: "Track the journey from lead to activation to renewal in a single view.", chips: ["Lifecycle", "Usage feed"] },
        { title: "Ecosystem growth", description: "Give resellers, affiliates, and tech partners transparent revenue sharing and certification paths.", chips: ["Partner tiers", "Certifications"] },
      ],
      faqs: [
        { question: "Can we sync product usage from our data warehouse?", answer: "Yes, push feature and seat events via API or reverse ETL." },
        { question: "How do certifications show up?", answer: "Partners unlock badges and new playbooks once training tasks complete." },
      ],
    },
    "blog": {
      layout: "resource",
      statGrid: [
        { label: "Editorial clusters", value: "18" },
        { label: "Avg. read time", value: "6 min" },
        { label: "Newsletter CTR", value: "41%" },
      ],
      pillars: [
        { title: "Editorial system", description: "Topic clusters, hero stories, and CTA tiles highlight the most actionable reads." },
        { title: "Reader experience", description: "Estimated read time, content tags, and inline summaries keep engagement high." },
        { title: "Distribution", description: "Surface popular posts in-product and automate weekly digests." },
      ],
      spotlights: [
        { title: "Playbook: Automating partner onboarding", category: "Guides", readingTime: "8 min" },
        { title: "Data story: What 1B clicks reveal", category: "Insights", readingTime: "7 min" },
        { title: "Launch recap: New automation recipes", category: "Product", readingTime: "5 min" },
      ],
      faqs: [
        { question: "How often do new stories go live?", answer: "Twice a week plus real-time release notes." },
        { question: "Can I filter by industry?", answer: "Yes, tag filters mirror Trackier's blog layout for fast discovery." },
      ],
    },
    "documentation": {
      layout: "resource",
      statGrid: [
        { label: "Guides", value: "320" },
        { label: "SDKs", value: "9" },
        { label: "Avg. satisfaction", value: "4.8/5" },
      ],
      pillars: [
        { title: "Information architecture", description: "Break content down by role, job-to-be-done, and API surface." },
        { title: "Embedded support", description: "Inline feedback widgets and chat escalations keep teams unblocked." },
        { title: "Release hygiene", description: "Docs deploy alongside product releases, mirroring Trackier's DX standards." },
      ],
      spotlights: [
        { title: "Partner template quickstart", category: "Setup", readingTime: "10 min" },
        { title: "Server-to-server conversion tracking", category: "Developers", readingTime: "12 min" },
        { title: "Designing payout matrices", category: "Finance", readingTime: "9 min" },
      ],
      faqs: [
        { question: "Do you offer PDF exports?", answer: "Yes, export sections or entire guides for regulated reviews." },
        { question: "Can partners suggest edits?", answer: "Authenticated partners can comment or open requests straight from the doc." },
      ],
    },
    "api-reference": {
      layout: "resource",
      statGrid: [
        { label: "Endpoints", value: "140" },
        { label: "SDK languages", value: "7" },
        { label: "Latency", value: "<200ms" },
      ],
      pillars: [
        { title: "Reliable schemas", description: "Versioning, changelog notes, and sample payloads update instantly." },
        { title: "Test-friendly", description: "Inline environment switching lets teams move between sandbox and production." },
        { title: "DX niceties", description: "Keyboard shortcuts, dark mode, and copy-to-clipboard mirror Trackier's dev experience." },
      ],
      spotlights: [
        { title: "Create offer API", category: "REST", readingTime: "5 min" },
        { title: "Webhook retries", category: "Guides", readingTime: "6 min" },
        { title: "GraphQL beta", category: "Updates", readingTime: "4 min" },
      ],
      faqs: [
        { question: "Is there a Postman collection?", answer: "Yes, download auto-updated collections per environment." },
        { question: "Do you support GraphQL?", answer: "A curated GraphQL surface is rolling out for partner metadata and analytics." },
      ],
    },
    "case-studies": {
      layout: "resource",
      statGrid: [
        { label: "Industries covered", value: "14" },
        { label: "Avg. lift", value: "+28%" },
        { label: "Customer quotes", value: "58" },
      ],
      pillars: [
        { title: "Storytelling framework", description: "Hero visuals, tangible metrics, and customer voices build credibility fast." },
        { title: "Conversion moments", description: "Interweave demo CTAs, downloads, and related industries for bingeable proof." },
        { title: "Navigation", description: "Filter stories by vertical, region, or solution in one click." },
      ],
      spotlights: [
        { title: "Agency scaled 1000+ campaigns", category: "Agency", readingTime: "6 min" },
        { title: "Fintech brand cut fraud 35%", category: "Fintech", readingTime: "7 min" },
        { title: "Travel marketplace doubled ROAS", category: "Travel", readingTime: "5 min" },
      ],
      faqs: [
        { question: "Can I download a PDF?", answer: "Each story includes a one-page brief for sales follow-ups." },
        { question: "Do you accept co-marketing requests?", answer: "Yes, submit wins via the partner hub and we'll help package them." },
      ],
    },
    "help-center": {
      layout: "resource",
      statGrid: [
        { label: "Articles", value: "620" },
        { label: "Avg. CSAT", value: "4.9/5" },
        { label: "Chat response", value: "<2 min" },
      ],
      pillars: [
        { title: "Search-first", description: "Predictive search, trending topics, and saved views keep customers moving." },
        { title: "Continuity", description: "Ticket handoffs retain article context so agents know what customers already tried." },
        { title: "Proactive care", description: "Trigger nurture campaigns after tough journeys to rebuild confidence." },
      ],
      spotlights: [
        { title: "Troubleshoot tracking pixels", category: "Setup", readingTime: "4 min" },
        { title: "Resolve payout discrepancies", category: "Finance", readingTime: "5 min" },
        { title: "Automation rule audits", category: "Automation", readingTime: "6 min" },
      ],
      faqs: [
        { question: "Is chat live 24/7?", answer: "Weekday coverage is live with automated callbacks overnight." },
        { question: "Can partners see their tickets?", answer: "Yes, partner hub permissions mirror Trackier's support portal." },
      ],
    },
    "about-us": {
      layout: "about",
      lockModules: true,
      statGrid: [
        { label: "Markets served", value: "70+" },
        { label: "Team members", value: "180" },
        { label: "Customer NPS", value: "+63" },
      ],
      timeline: [
        { year: "2016", title: "Trackier is born", description: "Founded to bridge the gap between marketers and trustworthy attribution." },
        { year: "2018", title: "Global stage", description: "Took the brand to AdTech and other global events to connect with customers." },
        { year: "2022", title: "Worldwide footprint", description: "Expanded into the US and Singapore to support international clients." },
        { year: "2024", title: "Platform launches", description: "Introduced Affnook and surpassed $5.5M ARR while preparing for $9M." },
      ],
      values: [
        { title: "Customer-first innovation", description: "We listen to customer needs before chasing competitors, just like Trackier's founders describe." },
        { title: "Ethical growth", description: "Security, privacy, and compliance stay non-negotiable in every launch." },
        { title: "Community impact", description: "Leadership summits and CSR initiatives keep empathy central to execution." },
      ],
      leadershipQuotes: [
        { name: "Irfan Khan", role: "Co-founder & CEO", quote: "We never build for vanity metrics—every feature must create clarity for customers." },
        { name: "Faizan Ayubi", role: "Co-founder & COO", quote: "Our culture is obsessed with listening before shipping, no matter how fast we move." },
      ],
      cultureCards: [
        { title: "Leadership Summit", description: "Annual retreats (like Baku 2024) realign teams around empathy, communication, and execution.", tag: "Summit" },
        { title: "CSR Programs", description: "Partnerships with Voice of Slum, Srimati Sita Ram Foundation, and Prayas celebrate giving back.", tag: "Impact" },
        { title: "Innovation Pods", description: "Cross-functional pods spin up experiments quickly, mirroring Trackier's build-measure-learn loops.", tag: "R&D" },
      ],
    },
    "careers": {
      layout: "careers",
      lockModules: true,
      statGrid: [
        { label: "Teams hiring", value: "7" },
        { label: "Employee tenure", value: "3.4 yrs" },
        { label: "Learning stipend", value: "$2.5K" },
      ],
      timeline: [
        { year: "Leadership Summit", title: "Baku Gathering", description: "Leaders regroup annually to sharpen empathy, communication, and strategy." },
        { year: "Culture Moments", title: "Festivals & CSR", description: "Diwali celebrations and Voice of Slum drives keep culture vibrant." },
        { year: "Growth Path", title: "From onboarding to ownership", description: "New hires shadow teams, then own initiatives backed by mentors." },
      ],
      values: [
        { title: "Innovation", description: "Teams are encouraged to experiment and bring bold ideas to production." },
        { title: "Accountability", description: "Respect, collaboration, and measurable impact define performance." },
        { title: "Continuous learning", description: "Leadership promotes skill-building, wellness, and flexible work models." },
      ],
      benefits: [
        { title: "Hybrid comfort", description: "Flexible hours, remote-first tooling, and wellness leave mirror Trackier's flexible work policy." },
        { title: "Recognition rituals", description: "Applause Awards and weekly shoutouts celebrate makers in every department." },
        { title: "Learning wallets", description: "Dedicated budgets for certifications, conferences, and leadership courses." },
      ],
      cultureMoments: [
        { title: "Voice of Slum visit", description: "Teams spend time mentoring students in Delhi NCR communities." },
        { title: "Diwali & Holi jams", description: "Cultural celebrations keep the workplace vibrant and inclusive." },
        { title: "Run for their Dreams", description: "Trackier-backed marathon encouraging wellness and social impact." },
      ],
    },
    "privacy-policy": {
      layout: "policy",
      lockModules: true,
      statGrid: [
        { label: "Regions supported", value: "US/EU" },
        { label: "SLA", value: "30 days" },
        { label: "Audit cadence", value: "2x yearly" },
      ],
      principles: [
        { title: "Purpose-built", description: "We only collect what is required to deliver, secure, or bill the platform." },
        { title: "Shared accountability", description: "Customers own their data, we keep it encrypted and auditable." },
        { title: "Control first", description: "Access, correction, deletion, and export live behind a clear SLA." },
      ],
      clauses: [
        { title: "Data we process", description: "Contact info, usage telemetry, and billing details collected to deliver platform services." },
        { title: "Retention", description: "Data retention defaults to 24 months unless contracts specify other timelines." },
        { title: "Subprocessors", description: "Vendors go through security, privacy, and availability reviews before onboarding." },
        { title: "Your controls", description: "Requests route through privacy@clicksmeta.com with a 30-day SLA." },
      ],
      faqs: [
        { question: "Where is data stored?", answer: "Primarily in US and EU regions with customer-specific residency options." },
        { question: "Do you sell customer data?", answer: "No. Data is never sold and only shared with contracted subprocessors." },
      ],
    },
    "terms-of-service": {
      layout: "policy",
      lockModules: true,
      statGrid: [
        { label: "Uptime target", value: "99.5%" },
        { label: "Support window", value: "24/5" },
        { label: "Liability cap", value: "12 mos fees" },
      ],
      principles: [
        { title: "Shared success", description: "We provide the tooling, you bring compliant growth motions." },
        { title: "Security by default", description: "Encryption, SSO, and audit logging ship standard." },
        { title: "Transparency", description: "Status pages, release notes, and SLA metrics stay public." },
      ],
      clauses: [
        { title: "Customer obligations", description: "Keep credentials secure, follow acceptable use, and pay invoices on time." },
        { title: "Our obligations", description: "Provide 99.5% uptime, proactive security notifications, and fair API limits." },
        { title: "Liability", description: "Standard cap at 12 months of fees with carve-outs for confidentiality breaches." },
        { title: "Termination", description: "Either party may terminate for uncured material breach with standard notice." },
      ],
      faqs: [
        { question: "Do you offer DPAs and BAAs?", answer: "Yes, standardized templates are available during onboarding." },
        { question: "What support is included?", answer: "Every customer receives 24/5 support plus optional premium SLAs." },
      ],
    },
  },
}
