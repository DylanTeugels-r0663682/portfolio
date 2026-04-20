// Portfolio data — Dylan Teugels

window.PORTFOLIO_DATA = {
  name: "Dylan Teugels",
  role: "Technical Lead",
  employer: "PHPro",
  location: "Belgium",
  email: "dylan.teugels9@gmail.com",
  linkedin: "https://www.linkedin.com/in/dylan-teugels-942a82159/",
  github: "https://github.com/DylanTeugels-r0663682?tab=repositories",

  headline: {
    // rendered as lines; "em" = accent word
    parts: [
      { type: 'text', v: 'Technical Lead' },
      { type: 'br' },
      { type: 'text', v: 'building scalable' },
      { type: 'br' },
      { type: 'typed', v: 'Adobe Commerce', alts: ['Adobe Commerce', 'Magento 2', 'Hyvä storefronts', 'Hyvä Checkout', 'B2B commerce'] },
      { type: 'text', v: '.' },
    ]
  },
  sub: "5+ years shipping performant webshops for enterprise merchants — wiring Magento to SAP, Salesforce, PIMs and middleware without letting the monolith turn into a swamp.",

  meta: [
    { k: 'Role', v: 'Technical Lead' },
    { k: 'Company', v: 'PHPro · since 2021' },
    { k: 'Location', v: 'Belgium · remote-friendly' },
    { k: 'Stack', v: 'Adobe Commerce · Hyvä · PHP' },
  ],

  aboutBullets: [
    { w: 'Pragmatic', d: 'ship what works' },
    { w: 'Independent', d: 'hand me the brief' },
    { w: 'Communicator', d: 'explain to any room' },
    { w: 'Calm', d: "prod's on fire, fine" },
  ],

  timeline: [
    {
      year: '2021',
      role: 'Intern → Developer, PHPro',
      desc: 'Joined PHPro as Hyvä was freshly launched. Picked it up early and got hands-on with it while the ecosystem was still forming.',
    },
    {
      year: '2021 – 2024',
      role: 'Developer → Scrum Master',
      desc: 'Grew into increasingly complex work: integrations, the delicate parts of the codebase, and the Scrum Master role for the team.',
    },
    {
      year: '2025 – present',
      role: 'Technical Lead',
      desc: 'Architecture decisions, client-facing strategy, technical analysis, preparing dev-ready work.',
    },
  ],

  capabilities: [
    {
      title: 'Enterprise Integrations via Middleware',
      roles: ['Built', 'Designed', 'Discovered'],
      stack: 'SAP · Salesforce · DIP',
      what: 'Pricing sync, order export on "processing" status, B2B shipping-cost lookup during order simulation — all flowing through DIP (Delaware Integration Platform). Magento never talks to SAP or Salesforce directly.',
      why: 'Middleware-first architecture keeps Magento clean and absorbs integration complexity at the boundary, not inside the commerce platform.',
    },
    {
      title: 'Customer Master Data Architecture',
      roles: ['Discovered', 'Designed', 'Built'],
      stack: 'Salesforce · SAP',
      what: 'Salesforce as the customer master. SAP/Salesforce ID assignment on first order, lead-vs-account export logic, VAT-number lookup, customer master data sync.',
      why: 'One source of truth for customer identity across Magento, Salesforce and SAP — no duplicates, no drift.',
    },
    {
      title: 'Product Data & PIM',
      roles: ['Owned Adobe Commerce side'],
      stack: 'Akeneo · Induxx Connector',
      what: 'Akeneo PIM integrated with Adobe Commerce via the Induxx Connector. Simple products stay simple (never forced into product models); product data flows cleanly from PIM to storefront.',
      why: 'Correct product modeling from PIM → Commerce is foundational. Get it wrong and you pollute search, pricing and checkout downstream.',
    },
    {
      title: 'Search at Scale',
      roles: ['Implemented'],
      stack: 'Algolia · Adobe Commerce',
      what: "Replaced Magento's default search with Algolia for attribute-driven product discovery.",
      why: "At enterprise catalog size, default Magento search doesn't scale. Algolia delivers attribute-faceted results at latency merchants actually notice.",
    },
    {
      title: 'Microservices Decomposition',
      roles: ['Designed', 'Built'],
      stack: 'Custom services',
      what: 'Broke the Glue Calculator and Store Locator out of the Magento monolith into standalone services.',
      why: 'Domain logic lives where it belongs. Magento stays lean. Services evolve independently of the commerce platform.',
    },
    {
      title: 'Hyvä Full-Stack Frontend',
      roles: ['Built', 'Customized'],
      stack: 'Hyvä · Hyvä Enterprise · Hyvä Checkout',
      what: 'Hyvä + Hyvä Enterprise across all storefronts. Hyvä Checkout customized at module level to match client-specific business rules.',
      why: 'Checkout is the highest-risk, highest-value surface in commerce. Module-level Hyvä Checkout work requires deep knowledge of both Hyvä and Magento internals. Early adopter since 2021.',
    },
    {
      title: 'B2B Commerce Complexity',
      roles: ['Discovered', 'Designed', 'Built'],
      stack: 'Adobe Commerce B2B',
      what: 'Company admin with shared address books, role-based permissions (no-price / no-order roles), company-specific CSV price lists with RRP, quick order UI.',
      why: 'B2B commerce on Adobe Commerce is its own specialty — merchant org structure, permission models and price list management are where most implementations fail.',
    },
    {
      title: 'Multi-Store / Multi-Currency / International',
      roles: ['Discovered', 'Designed', 'Built'],
      stack: 'Adobe Commerce · GeoIP',
      what: 'International storefront setup: multi-currency, multi-country, geoip-based redirect — one installation, many markets.',
      why: 'Scaling to new countries without duplicating the platform is the whole point. Done right, each new market is configuration, not a fork.',
    },
    {
      title: 'Technical Leadership',
      roles: ['Technical Lead · RACI: Responsible'],
      stack: 'Charter · Steering committee',
      what: 'Architecture decisions, client-facing strategy, technical analysis, preparing dev-ready work, team meetings, steering committee attendance.',
      why: 'The bridge between business intent and engineering execution. Being named on project charters alongside PM and PO is formal recognition of that role.',
    },
  ],

  skills: {
    core: {
      title: 'Core · Daily driver',
      span: 'sk-span-6',
      items: [
        { t: 'Adobe Commerce', s: '' },
        { t: 'Magento 2', s: '' },
        { t: 'Hyvä', s: 'since 2021' },
        { t: 'Hyvä Checkout', s: 'module-level' },
        { t: 'PHP', s: '' },
        { t: 'Alpine.js', s: '' },
        { t: 'Tailwind CSS', s: '' },
      ],
    },
    integrations: {
      title: 'Integrations · Adobe Commerce ecosystem',
      span: 'sk-span-6',
      items: [
        { t: 'SAP', s: 'via DIP' },
        { t: 'Salesforce', s: 'customer master' },
        { t: 'Akeneo PIM', s: 'via Induxx' },
        { t: 'Algolia', s: 'search' },
        { t: 'Custom microservices', s: '' },
        { t: 'ERP · CRM · PIM · Middleware', s: 'general' },
      ],
    },
    devops: {
      title: 'DevOps & tooling',
      span: 'sk-span-4',
      items: [
        { t: 'Docker / Warden', s: '' },
        { t: 'Git', s: '' },
        { t: 'CI/CD', s: '' },
        { t: 'MySQL', s: '' },
        { t: 'Redis', s: '' },
        { t: 'Varnish', s: '' },
        { t: 'Elasticsearch', s: '' },
      ],
    },
    ways: {
      title: 'Ways of working',
      span: 'sk-span-4',
      items: [
        { t: 'Scrum / Agile', s: 'Scrum Master' },
        { t: 'Code review', s: '' },
        { t: 'Technical writing', s: '' },
        { t: 'Client workshops', s: '' },
        { t: 'Discovery', s: '' },
      ],
    },
    langs: {
      title: 'Languages',
      span: 'sk-span-4',
      items: [
        { t: 'Dutch', s: 'native' },
        { t: 'English', s: 'good' },
        { t: 'French', s: 'medium' },
      ],
    },
  },

  certs: [
    { badge: 'AC', t: 'Adobe Commerce Certified Developer', s: 'Certified' },
    { badge: 'Hy', t: 'Hyvä Certified', s: 'Certified · early adopter 2021' },
  ],

  rdProjects: ['music app', 'personal assistant', 'AI alarm clock', 'AI recipe app', 'Claude Code workflows'],
};
