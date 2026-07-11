import { readFileSync, writeFileSync } from 'node:fs'

const insertBeforeFooter = (file, html) => {
  const source = readFileSync(file, 'utf8')
  const marker = '<!-- Start Footer Area -->'
  const cleaned = source.replace(/<!-- DREAMDASH ENRICHMENT -->[\s\S]*?<!-- END DREAMDASH ENRICHMENT -->\s*/g, '')
  if (!cleaned.includes(marker)) throw new Error(`${file}: footer marker not found`)
  writeFileSync(file, cleaned.replace(marker, `<!-- DREAMDASH ENRICHMENT -->\n${html}\n<!-- END DREAMDASH ENRICHMENT -->\n${marker}`))
}

const card = (eyebrow, title, copy) => `<article class="dd-card"><span>${eyebrow}</span><h3>${title}</h3><p>${copy}</p></article>`
const sectionHead = (eyebrow, title, copy) => `<div class="dd-section-head"><span>${eyebrow}</span><h2>${title}</h2><p>${copy}</p></div>`
const app = 'https://app.dreamdash.org'

insertBeforeFooter('index.html', `
<section class="dd-dark-section"><div class="container">
  ${sectionHead('MEET THE DREAM DASHER','Dash from intent to a complete Dream.','A Dream Dasher can be an individual builder, a capture team, or a company operator. Give Dream Dash the outcome you want; it structures the work, coordinates the relay, and keeps the whole Dream visible.')}
  <div class="dd-grid dd-grid-3">
    ${card('01 · BUILD','Start with an idea or opportunity','Source Now organizes signals across the available data planes. Constellation helps inspect the seven O.R.B.I.T.A.L. dimensions before momentum is committed.')}
    ${card('02 · DASH','Move through the relay','Dream Dash coordinates a ten-stage path from Discovery through De-Orbit, carrying context, ownership, artifacts, and decisions forward.')}
    ${card('03 · GOVERN','Choose where people step in','Configurable Dream Gates let humans approve, change, or reject at the moments that matter. Automation stays fast everywhere else.')}
  </div>
</div></section>
<section class="dd-image-story"><div class="container"><div class="row align-items-center g-5">
  <div class="col-lg-6"><img src="assets/img/banner/background-main.png" alt="Abstract constellation becoming an organized orbital system"></div>
  <div class="col-lg-6">${sectionHead('THE DREAM LIFECYCLE','Dream → Orbital → World.','A Dream begins as an idea or nascent initiative. When it gains structure and momentum, it becomes an Orbital. When it becomes a sustainable company or business entity, it becomes a World.')}
    <div class="dd-lifecycle"><div><b>Dream</b><small>Intent, evidence, possibility</small></div><i class='bx bx-right-arrow-alt'></i><div><b>Orbital</b><small>Structured work in motion</small></div><i class='bx bx-right-arrow-alt'></i><div><b>World</b><small>A durable operating entity</small></div></div>
  </div>
</div></div></section>
<section class="dd-dark-section"><div class="container">
  ${sectionHead('ONE PORTAL','Six views of the same Dream.','The current application groups work into Mission Control, Launch Pad, Dreams, Controls, Co-Pilot, and Trust & Governance. Each view preserves the same operating context.')}
  <div class="dd-grid dd-grid-3">
    ${card('MISSION CONTROL','See what needs attention','Review the dashboard, matched opportunities, intake, relay activity, and the human-approval inbox.')}
    ${card('DREAMS','View every Dream','Open the O.R.B.I.T.A.L. roster, pursuits, Source Now, Constellation, Dream Score, and the Cosmology Loop view.')}
    ${card('CO-PILOT','Steer through conversation or goals','Use Advisor for guided interaction and Pilot for bounded goal orchestration, both presented inside Dream Dash.')}
    ${card('CONTROLS','Set speed, spend, and boundaries','Configure agent-fund tiers, per-stage and per-project budgets, connector gates, integrations, roles, and World-level budgets.')}
    ${card('LAUNCH PAD','Run the work','Open a Dream cockpit, follow the relay, inspect artifacts, prepare proposals, and invoke pre-submission auditing.')}
    ${card('TRUST','Inspect how work happened','Review DNA versions, audit trails, compliance matrices, CUI controls, entitlements, and security posture.')}
  </div>
  <div class="dd-center"><a class="default-btn" href="${app}"><span>Open Dream Dash</span><i class='bx bx-chevron-right'></i></a></div>
</div></section>`)

insertBeforeFooter('services.html', `
<section class="dd-dark-section"><div class="container">
  ${sectionHead('SOURCE TO SCORE','Find and shape the right Dream.','The discovery layer is designed to turn fragmented signals into comparable, reviewable candidates without hiding the underlying evidence.')}
  <div class="dd-grid dd-grid-3">
    ${card('SOURCE NOW','Browse the opportunity substrate','Explore organized source planes and bring candidate opportunities into the pursuit flow.')}
    ${card('CONSTELLATION','Inspect the seven-axis shape','Visualize Objective, Resources, Budget, Indicators, Transport, Activities, and Logistics as one connected structure.')}
    ${card('DREAM SCORE','Compare before committing','Use the shipped Pwin × ROI leaderboard as a decision aid. It informs judgment; it does not replace a human bid decision.')}
  </div>
</div></section>
<section class="dd-relay"><div class="container">
  ${sectionHead('THE TEN-STAGE RELAY','Automation with an explicit handoff model.','The shipped BPF relay spine moves a Dream through ten canonical stages. Nine inter-stage Dream Gates can be configured; selected accountability gates carry special meaning in the governing policy.')}
  <ol class="dd-stage-list">
    <li><b>Discovery</b><span>Find and frame the signal.</span></li><li><b>Research</b><span>Gather evidence and constraints.</span></li><li><b>Preparation</b><span>Build the initial operating picture.</span></li><li><b>Simulation</b><span>Test the planned approach.</span></li><li><b>Validation</b><span>Check readiness to launch.</span></li><li><b>Launch</b><span>Commit the structured pursuit.</span></li><li><b>Ascent</b><span>Coordinate active production.</span></li><li><b>Growth</b><span>Advance the work and evidence.</span></li><li><b>Orbit</b><span>Sustain the operating rhythm.</span></li><li><b>De-Orbit</b><span>Close, transition, or graduate.</span></li>
  </ol>
</div></section>
<section class="dd-dark-section"><div class="container">
  ${sectionHead('O.R.B.I.T.A.L.','A complete Dream needs more than a task list.','Each Orbital is structured across seven first-class axes. Proposal workflows can transform that record into technical, management, past-performance, pricing, and compliance artifacts.')}
  <div class="dd-axis-grid">${[['O','Objective','What outcome must exist?'],['R','Resources','Who and what can make it real?'],['B','Budget','What can be spent and sustained?'],['I','Indicators','How will progress and success be known?'],['T','Transport','How does value move between people and systems?'],['A','Activities','What coordinated work creates momentum?'],['L','Logistics','What operational conditions must hold?']].map(([l,h,p])=>`<article><b>${l}</b><div><h3>${h}</h3><p>${p}</p></div></article>`).join('')}</div>
</div></section>`)

insertBeforeFooter('portfolio.html', `
<section class="dd-dark-section"><div class="container">
  ${sectionHead('FOR PEOPLE AND COMPANIES','One operating model, multiple starting points.','Dream Dash is built for individual Dream Dashers and coordinated organizations. Access, data boundaries, and workflows are shaped to the operating context.')}
  <div class="dd-grid dd-grid-2">
    ${card('INDIVIDUAL DREAM DASHERS','Build the whole Dream without losing the thread','Start with intent, see possible Dreams, structure an Orbital, set spending and approval boundaries, and keep every decision attached to the work.')}
    ${card('COMPANY DREAM DASHERS','Coordinate teams around shared truth','Align opportunity, capture, proposal, governance, finance, and delivery-readiness work without making every team operate from a separate version of reality.')}
  </div>
  ${sectionHead('END-TO-END USE CASES','The system follows the Dream, not a single document.','These are the principal workflows already represented in the application information architecture and underlying records.')}
  <div class="dd-grid dd-grid-3">
    ${card('DISCOVER','Source and qualify','Organize opportunity signals, compare Dream Scores, inspect Constellation, and decide what deserves momentum.')}
    ${card('CAPTURE','Shape the pursuit','Manage teaming, vehicles, past performance, owners, gates, communications, and the ten-stage relay.')}
    ${card('PROPOSE','Build from the Orbital','Use the seven O.R.B.I.T.A.L. axes as the structured source for proposal volumes and the compliance matrix.')}
    ${card('AUDIT','Inspect readiness','Dream Auditor evaluates a draft against its target NOFO and keeps Pwin distinct from post-draft readiness.')}
    ${card('GOVERN','Keep authority visible','Use Dream Gates, DNA pins, audit trails, entitlements, CUI controls, and security views to preserve accountability.')}
    ${card('MOBILIZE','Carry the context forward','Move assumptions, commitments, artifacts, budgets, and ownership into delivery readiness instead of restarting after an award.')}
  </div>
</div></section>`)

insertBeforeFooter('about.html', `
<section class="dd-dark-section"><div class="container">
  ${sectionHead('THE PRODUCT PERSONA','A Dream Dasher builds Dreams.','The name is intentional: Dream Dash is designed for momentum. A Dream Dasher describes the outcome, chooses the controls, and steers the exceptions while the system coordinates the route.')}
  <div class="row align-items-center g-5"><div class="col-lg-6"><img class="dd-framed-image" src="assets/img/all-img/about-1.png" alt="Abstract collaboration between a human operator and intelligent systems"></div><div class="col-lg-6"><div class="dd-principles">
    <article><b>Fast by default</b><p>Routine coordination should not consume the attention needed for judgment.</p></article>
    <article><b>Human when chosen</b><p>Dream Gates can be placed wherever a person wants to review, change, approve, or stop the Dash.</p></article>
    <article><b>Inspectable throughout</b><p>Evidence, DNA versions, actions, budgets, and gate history remain connected to the Dream.</p></article>
  </div></div></div>
  ${sectionHead('THE STRUCTURAL MODEL','UBF provides the cosmology. O.R.B.I.T.A.L. structures the work.','Dream Dash uses the Universal Business Framework as the larger organizational model. At the Moon level, O.R.B.I.T.A.L. gives every initiative an explicit Objective, Resources, Budget, Indicators, Transport, Activities, and Logistics.')}
</div></section>`)

insertBeforeFooter('faq.html', `
<section class="dd-dark-section"><div class="container">
  ${sectionHead('MORE STRAIGHT ANSWERS','The boundaries matter as much as the features.','Dream Dash is a restricted application surface. This public site explains the product; provisioned users enter the secure application separately.')}
  <div class="dd-grid dd-grid-2">
    ${card('WHAT IS A DREAM GATE?','A configurable human decision point','Dream Gates interrupt an otherwise automated relay so an accountable person can approve, request changes, or reject. Nine inter-stage toggles are represented in the current ten-stage control plane.')}
    ${card('WHAT DO PILOT AND ADVISOR DO?','Two ways to steer','Pilot owns bounded goal orchestration and its durable goal ledger; Dream Dash hosts its visual client. Advisor provides the conversation shell that steers work through the agent stack.')}
    ${card('WHAT DOES AUDITOR SCORE?','Post-draft readiness','Dream Auditor checks an Orbital and its target NOFO, producing findings and readiness information. Readiness is deliberately separate from the pre-draft Pwin score.')}
    ${card('IS EVERYTHING FULLY LIVE?','The core B1–B7 views are shipped','The canonical product status records Mission Control, relay, controls, Dreams roster, Co-Pilot/trust, and Source Now/Constellation/Dream Score as landed. The Cosmology route exists, but end-to-end wiring was not independently verified in the latest overview audit.')}
  </div>
</div></section>`)

insertBeforeFooter('pricing.html', `
<section class="dd-dark-section"><div class="container">
  ${sectionHead('ACCESS, NOT A FICTIONAL PRICE TAG','Scope the Dream before pricing the Dash.','No fixed public price is currently published. The right commercial structure depends on users, workflow scope, integration boundaries, data handling, support, and the controls your organization needs.')}
  <div class="dd-grid dd-grid-3">
    ${card('EXPLORE','Map the workflow','Discuss the Dream lifecycle, current systems, decision points, and desired pace.')}
    ${card('CONFIGURE','Define the boundaries','Confirm roles, integrations, Dream Gates, budgets, governance needs, and access model.')}
    ${card('ACTIVATE','Provision the workspace','Agree written scope and terms, then onboard the organization to the restricted application.')}
  </div>
</div></section>`)

