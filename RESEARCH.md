# Portfolio Research and Approved Facts

This document contains the source material, factual profile, approved portfolio content, and external research gathered for Shreyas Deshpande's portfolio. It is the factual source of truth; implementation requirements belong in `BUILD_PLAN.md`, and agent mechanics belong in `AGENT_WORKFLOW.md`.

## Research status and authoritative sources

- Resume: `Shreyas_Deshpande_Resume.pdf`, currently located at `/Users/shreyasdeshpande/Library/Mobile Documents/com~apple~CloudDocs/Documents/Shreyas_Deshpande_Resume.pdf`.
- Portrait: `DSC09040.jpg`, currently located at `/Users/shreyasdeshpande/Downloads/DSC09040.jpg`. It is a 1703 x 1703 professional graduation portrait. Preserve the original; derive an optimized web asset during implementation.
- LinkedIn: https://www.linkedin.com/in/shreyasjd/
- GitHub profile: https://github.com/shreyasjd777
- Public email: `shreyasjd777@gmail.com`
- Public location: San Francisco, CA / San Francisco Bay Area.
- Do not display the phone number in page content. The user approved publishing the current resume as-is, so the downloadable PDF may still contain it.
- LinkedIn was blocked by its public authentication wall during research. Do not use guessed search results as profile facts; the resume and the approved facts in this document are authoritative.

When facts conflict, prefer the user's latest explicit instruction, then the resume and approved decisions recorded here. Do not invent biography, employment, education, project claims, metrics, links, or availability details.

## Product framing and audience research

- Build a personal portfolio for recruiters and hiring managers.
- Present Shreyas as a product-minded full-stack engineer who ships reliable web and mobile products, applies AI where useful, and owns work end to end.
- Optimize for quick scanning first and deeper project exploration second.
- The site should feel warm and conversational, not stiff or overly technical.
- Show an understated availability message: open to full-time and internship engineering roles; recruiters may reach out with relevant opportunities.
- First milestone is local development only. GitHub Pages deployment and the custom domain are deferred until the user selects a domain.

## Approved identity and education

- Name: Shreyas Deshpande.
- Lead positioning: product-minded full-stack engineer.
- Education should show both schools without a timeline:
  - University of Illinois Urbana-Champaign, M.S. Computer Science.
  - University of California, Riverside, B.S. Computer Science.
- Secondary education details may include Dean's Honor List, machine learning/deep learning certifications, relevant CS coursework, and Theta Tau webmaster leadership, but keep the visible page concise.

## Approved experience

1. **ShriddleShreds Barbershop - Founder** (`May 2020 - Present`)
   - Built a Next.js, Flask, and Stripe booking platform with real-time availability and webhook-driven payment reconciliation.
   - Supports 100+ monthly appointments.
   - Built 10+ REST endpoints with idempotency and database constraints; achieved zero booking conflicts.
   - Built an LLM-driven booking assistant that increased conversion by 20%.
   - Live site: https://shriddleshreds.com
2. **UCR Undergraduate Education IT - Senior Tech Assistant II** (`February 2023 - October 2024`)
   - Built and maintained pages for 20+ campus organizations and served 50+ staff/faculty.
   - Also diagnosed hardware, network, application, and configuration issues.
3. **Shrocken Inc. - Software Engineering Intern** (`June 2022 - September 2022`)
   - Led a three-engineer team in daily scrums to build a Mendix messaging demo and evaluate a website migration.

## Approved featured projects

All five projects must be visible in the projects bento grid and open a detail modal. ShriddleShreds is the dominant flagship card. Do not add per-project GitHub/source links. Use live-site links where available.

1. **ShriddleShreds** - flagship founder/product case study.
   - Live: https://shriddleshreds.com
   - Emphasize booking reliability, payments, REST API design, LLM workflow, 100+ monthly appointments, zero conflicts, and 20% conversion improvement.
2. **UCR Undergraduate Education R'Vision** - Front End Engineer.
   - Live: https://ue.ucr.edu/rvision-v3
   - Interactive discovery and action-planning experience for 20+ student-success programs and 10,000+ students.
   - Resume metrics: 10% year-over-year retention increase and contribution to a 2% decrease in undergraduate dropout rates.
3. **CamJam** - Full Stack Engineer.
   - Status: `In production`; no live link is currently available.
   - React Native photo/video sharing app.
   - Client-side thumbnails and caching reduced gallery load time by 40% and support 100+ media items per session.
   - Firestore atomic updates, real-time listeners, offline-first sync, retry-safe writes, and under-200ms latency.
   - Use a restrained cobalt typographic/device-frame placeholder for v1. The user will replace it with 2-4 real screenshots later; the component and modal must accept that replacement as a data-only change.
4. **Tindergram** - Full Stack Engineer.
   - Live: https://www.tindergram.dev
   - Privacy-first social-media management tool with recursive JSON parsing, validation, deduplication, and action automation.
   - Resume metrics: 35% faster large-dataset processing and 80% less manual effort.
5. **Theta Tau, Sigma Delta Website** - Front End Engineer.
   - Live: https://www.thetatauucr.com
   - Responsive redesign, modern components, and improved navigation.
   - Resume metrics: 30% increase in new-member interest, positive feedback from 50+ members, and leadership of a five-engineer Agile team.

## Approved skills

- Languages: JavaScript, TypeScript, Python, SQL, HTML, CSS, C++, Bash, LaTeX.
- Frameworks/libraries: React, Node.js, Express, Next.js, React Native, Flask, Django, Tailwind CSS.
- Data/platforms: PostgreSQL, Supabase, Firebase, Google Cloud, Render, Vercel, Expo.
- Methods/tools: REST APIs, Git, Docker, CI/CD, Agile, Cursor, Claude Code.
- Display these in a compact, categorized section. Avoid a visually noisy logo cloud.

## Reference-portfolio research

### Wache

- Reference: https://www.wache.dev
- Useful: playful exploration, monospace metadata, concise About/contact content.
- Do not copy: literal file-explorer navigation as the primary structure.

### Benson Lee

- Reference: https://www.bensonlee.dev
- Useful: dark recruiter-focused resume layout, persistent identity rail, outcome-heavy About copy, compact experience/skills, visual project cards.
- Do not copy: overly dense fixed desktop shell or tab transition that temporarily obscures content.

### Sunny Patel

- Reference: https://www.sunnypatel.net/projects
- Useful: project-first headline, strong typographic hierarchy, proof metrics, live/source/docs actions, and detailed case-study storytelling.
- Adaptation: retain case-study depth inside accessible modals rather than separate routes.

## 21st.dev and interaction-source research

Use 21st.dev as a component source, then simplify and restyle copied code to match the approved design rather than accepting demo styling unchanged.

- Bento structure: adapt Ravi Katiyar's Bento Grid: https://21st.dev/community/components/ravikatiyar162/bento-grid
  - Registry command: `npx shadcn@latest add https://21st.dev/r/ravikatiyar162/bento-grid`
- Glass CTA primitive: adapt Ali Imam's Liquid Glass Button: https://21st.dev/community/components/aliimam/liquid-glass-button/default
  - CLI command: `npx @21st-dev/cli add designali-in/liquid-glass-button`
- Optional card-lighting behavior should be based on the dark Spotlight Card pattern at https://21st.dev/community/components/berkcangumusisik/spotlight-card/default, but keep the effect cobalt, subtle, pointer-capability-aware, and disabled with reduced motion.
- Review installed source and remove unused demo code, dependencies, fixed dimensions, and Next.js-only assumptions. The final components must work in Vite React.
- The user explicitly chose not to install a third-party UI/UX agent skill. Use the built-in design/browser workflow plus these component sources.

## External implementation references

- Motion for React installation and Vite support: https://motion.dev/docs/react-installation
- Motion presence transitions: https://motion.dev/docs/react-animate-presence
- 21st.dev agent/CLI documentation: https://docs.21st.dev/mcp
- 21st.dev component catalog: https://docs.21st.dev/
- Vite GitHub Pages deployment: https://vite.dev/guide/static-deploy.html
- GitHub Pages custom workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
