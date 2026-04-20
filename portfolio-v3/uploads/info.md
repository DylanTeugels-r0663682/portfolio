# Portfolio Data Document — Dylan Teugels

> This document is the source of truth for Dylan Teugels' developer portfolio. It contains all interview answers, structured for direct handoff to a designer or to Claude Design. Pair it with the 2026 portfolio research doc (neo-brutalism, bento grid, dark mode, GEO/llms.txt, JSON-LD schema, etc.) to generate the final site.

---

## 1. Identity & Contact

| Field | Value |
|---|---|
| **Full name** | Dylan Teugels |
| **Current title** | Technical Lead & Software Developer |
| **Employer** | PHPro |
| **Location** | Belgium |
| **Work mode** | Remote-friendly |
| **Email** | dylan.teugels9@gmail.com |
| **LinkedIn** | https://www.linkedin.com/in/dylan-teugels-942a82159/ |
| **GitHub** | https://github.com/DylanTeugels-r0663682?tab=repositories |
| **Profile photo** | ✅ Available (to be supplied) |
| **Languages** | Dutch (native), English (good), French (medium) |
| **Availability signal** | Ambiguous — portfolio is an online CV, no "looking / not looking" statement |

---

## 2. Positioning (Hero Section)

### Headline
> **Technical Lead analyzing and building scalable Adobe Commerce B2C/B2B platforms for big merchants.**

### Sub-headline (suggested)
> 5+ years building performant webshops that integrate smoothly with SAP, Salesforce, PIMs, ERPs, and other enterprise systems.

### Niche (one line)
Full-stack, Adobe Commerce specialist — with a focus on integrations and enterprise complexity.

---

## 3. About Me (Human Layer)

### Why I got into tech
> **Curiosity. That's it.**

*(Recommended as a standalone, oversized statement on the About page — perfect fit for the neo-brutalist aesthetic.)*

### What keeps me in it
- Solving complex puzzles — debugging, architecture, integration challenges
- Translating client needs into technical solutions
- Seeing real merchants use what I built
- Squeezing performance out of systems
- Constant learning

### Working style
**Pragmatic · Independent · Communicator · Calm under pressure**

One-line translation: *Give me a hard problem, I'll figure it out, I'll explain it clearly to whoever needs to hear it, and I won't panic when production catches fire.*

---

## 4. Career Timeline (PHPro, 2021–present)

| Period | Role | Defining work |
|---|---|---|
| **2021** | Intern, PHPro | Hyvä early adopter — first-wave developer with hands-on Hyvä experience (Hyvä launched late 2020) |
| **2021 – ~2024** | Developer → Scrum Master | Grew into increasingly complex work: integrations, delicate system areas. Took on Scrum Master role for the team. |
| **2025 – present** | Technical Lead | Architecture decisions, client calls, team meetings, technical strategy, analysis, preparing dev-ready work. |

### Narrative
Intern → full-time → Technical Lead at the same agency. Deep domain mastery, continuity, and trust from employer.

---

## 5. Capability Showcase — The Orac Decor "One Site" Program

> **Context:** Merging Orac Decor's separate B2C and B2B websites into a single multi-currency, multi-country Adobe Commerce installation, with Hyvä as the unified frontend. Dylan is Technical Lead (RACI: Responsible), steering committee attendee, named on the project charter alongside the PM and PO. Sponsor: Thomas Nyssen. Stakeholders: Orac CEO, CFO, CIO, and Delaware (as DIP middleware integrator).

This section is structured as a **capability matrix** — not a list of projects — anchored in the Orac Decor program as real-world proof. Each block uses a consistent three-verb pattern (**discovered · designed · built**) to signal Technical Lead ownership.

---

### 🧩 1. Enterprise Integrations via Middleware (SAP + Salesforce via DIP)

**Role:** Built, designed, and discovered with the client.

**What:** Pricing sync, order export (on "processing" status), and B2B shipping-cost lookup during order simulation — all flowing through DIP (Delaware Integration Platform). Magento never talks to SAP or Salesforce directly.

**Why it matters:** Middleware-first architecture keeps Magento clean and absorbs the complexity at the integration layer.

---

### 🧩 2. Customer Master Data Architecture (Salesforce)

**Role:** Discovered, designed, and built.

**What:** Salesforce as the customer master. SAP/Salesforce ID assignment on first order, lead-vs-account export logic, VAT-number lookup flow, customer master data sync (ODOS-1858).

**Why it matters:** A single source of truth for customer identity across Magento, Salesforce, and SAP — no duplicate records, no drift.

---

### 🧩 3. Product Data & PIM (Akeneo)

**Role:** Owned the Adobe Commerce side of the integration.

**What:** Integrated Akeneo PIM with Adobe Commerce via the Induxx Connector. Ensured simple products stay simple (not forced into product models) and that product data flows cleanly from PIM to storefront.

**Why it matters:** Correct product modeling from PIM → Commerce is foundational; getting it wrong pollutes search, pricing, and checkout downstream.

---

### 🧩 4. Search at Scale (Algolia)

**Role:** Implemented in Adobe Commerce.

**What:** Replaced Magento's default search with Algolia for attribute-driven product discovery.

**Why it matters:** At enterprise catalog size, default Magento search simply doesn't scale. Algolia delivers attribute-faceted results at latency merchants actually notice.

---

### 🧩 5. Microservices Decomposition

**Role:** Fully custom designed and built.

**What:** Broke the Glue Calculator and Store Locator out of the Magento monolith into standalone services.

**Why it matters:** Domain logic lives where it belongs. Magento stays lean. Services evolve independently of the commerce platform.

---

### 🧩 6. Hyvä Full-Stack Frontend

**Role:** Built across storefronts; customized Hyvä Checkout as a standalone module.

**What:** Hyvä + Hyvä Enterprise across all storefronts. Hyvä Checkout customized at module level to match client-specific business rules.

**Why it matters:** Checkout is the highest-risk, highest-value surface on any commerce platform. Module-level Hyvä Checkout customization requires deep knowledge of both Hyvä and Magento internals.

**Credential:** Hyvä early adopter since 2021 — first wave of developers with hands-on Hyvä experience.

---

### 🧩 7. B2B Commerce Complexity

**Role:** Discovered, designed, and built.

**What:** Company admin with shared address books, role-based permissions (no-price / no-order roles), company-specific CSV price lists with RRP, quick order UI.

**Why it matters:** B2B commerce on Adobe Commerce is a specialty of its own — merchant org structure, permission models, and price list management are where most implementations fail.

---

### 🧩 8. Multi-Store / Multi-Currency / International

**Role:** Discovered, designed, and built.

**What:** International storefront setup: multi-currency, multi-country, geoip-based redirect.

**Why it matters:** One installation, many markets — without duplicating the platform.

**TODO:** Add exact count of countries / storefronts once confirmed.

---

### 🧩 9. Technical Leadership *(meta-capability)*

**Role:** Technical Lead, RACI: Responsible. Named on project charter alongside PM and PO. Steering committee attendee.

**What:** Architecture decisions, client-facing strategy, technical analysis, preparing dev-ready work, team meetings, steering committee.

**Why it matters:** A Technical Lead is the bridge between business intent and engineering execution. Being on the project charter alongside the PM and PO is formal recognition of that role.

**TODO (to align with PO):**
- Team size (number of devs led)
- Client-facing cadence (weekly / monthly rhythm)
- The one leadership responsibility to spotlight most

---

## 6. Skills

### Core — Daily Driver
- Adobe Commerce / Magento 2
- Hyvä *(early adopter since 2021)*
- Hyvä Checkout *(module-level customization)*
- PHP
- Alpine.js
- Tailwind CSS

### Integrations — Adobe Commerce Ecosystem
- SAP *(via DIP middleware)*
- Salesforce *(customer master)*
- Akeneo PIM *(via Induxx Connector)*
- Algolia *(search)*
- Custom microservices *(designed & built)*
- General: comfortable integrating Adobe Commerce with any enterprise system (ERP, CRM, PIM, middleware)

### DevOps & Tooling
- Modern tooling relevant to Adobe Commerce work
- **TODO:** confirm which to name explicitly (Docker/Warden, Git, CI/CD, MySQL, Redis, Varnish, Elasticsearch are typical)

### Ways of Working
- Scrum / Agile *(practitioner + Scrum Master)*
- Code review
- Technical writing
- Client workshops & discovery

### Certifications
- ✅ **Adobe Commerce Certified Developer**
- ✅ **Hyvä Certified**

### Polyglot (side projects)
Multiple languages via side projects — not named explicitly by choice.

---

## 7. Personal R&D (Side Projects, Building with AI)

> Quiet, non-performative side work. No public links, no spotlight. Listed as a confident cluster.

- AI-assisted development workflows with **Claude Code**
- Music app
- Personal assistant
- AI alarm clock
- AI recipe app
- General AI integration experiments across personal apps

**Signal:** Actively building with AI in 2025–2026 — curiosity-driven, ship-capable outside the Magento box, fluent in modern AI-assisted development.

---

## 8. Social Proof

**Decision:** No dedicated testimonials section.

**Implementation:** A single subtle line pointing to LinkedIn recommendations — e.g., *"References available on request"* or *"See LinkedIn for recommendations"* linking to the profile.

---

## 9. Visuals

| Element | Status |
|---|---|
| Profile photo | ✅ Included (user to supply) |
| Architecture diagrams | ❌ Skipped for v1 *(noted as optional future enhancement — a single anonymized middleware-first diagram would be a strong differentiator)* |

---

## 10. Design Direction

**Decision:** Defer to the 2026 portfolio research document (neo-brutalism, bento grid, dark mode, micro-interactions, kinetic typography, etc.). No additional user preferences expressed.

---

## 11. GEO / Discoverability Inputs (for implementation)

Inputs ready for JSON-LD `Person` schema and `llms.txt`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dylan Teugels",
  "jobTitle": "Technical Lead & Software Developer",
  "worksFor": { "@type": "Organization", "name": "PHPro" },
  "address": { "@type": "PostalAddress", "addressCountry": "BE" },
  "email": "dylan.teugels9@gmail.com",
  "sameAs": [
    "https://www.linkedin.com/in/dylan-teugels-942a82159/",
    "https://github.com/DylanTeugels-r0663682"
  ],
  "knowsAbout": [
    "Adobe Commerce",
    "Magento 2",
    "Hyvä",
    "Hyvä Checkout",
    "PHP",
    "Alpine.js",
    "Tailwind CSS",
    "SAP integration",
    "Salesforce integration",
    "Akeneo PIM",
    "Algolia",
    "Microservices",
    "B2B commerce",
    "Multi-store / multi-currency architecture",
    "Scrum"
  ],
  "knowsLanguage": ["nl", "en", "fr"],
  "hasCredential": [
    "Adobe Commerce Certified Developer",
    "Hyvä Certified"
  ]
}
```

### Suggested `llms.txt` treasure-map entries
- Canonical About section (Why I got into tech · What keeps me in it · Working style)
- Capability showcase (9 capability blocks)
- Certifications
- GitHub profile
- LinkedIn profile

---

## 12. TODOs before publishing

- [ ] Fill in **Technical Leadership** specifics with PO (team size, cadence, spotlight responsibility)
- [ ] Confirm country / storefront count for **Multi-Store / International** block
- [ ] Confirm specific DevOps tools to name explicitly
- [ ] Supply profile photo
- [ ] *(Optional)* Add one anonymized architecture diagram for the middleware-first story

---

*Document compiled from structured interview — ready for handoff to Claude Design alongside the 2026 portfolio research.*
