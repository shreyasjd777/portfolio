// Approved portfolio content sourced from RESEARCH.md. Keep unknown fields
// explicit so they can be replaced without inventing personal details.

export const profile = {
  name: 'Shreyas Deshpande',
  initials: 'SD',
  role: 'Product-minded full-stack engineer',
  tagline: 'I ship reliable web and mobile products, applying AI where it is useful and owning the work end to end.',
  location: 'San Francisco, CA',
  availability: 'Open to full-time and internship engineering roles',
  bio: [
    'I am a product-minded full-stack engineer who builds dependable web and mobile products from idea to launch. I enjoy connecting thoughtful interfaces with reliable APIs, data, and workflows.',
    'My work spans booking platforms, student-success experiences, social tools, and mobile media products. Recruiters may reach out with relevant opportunities.',
  ],
  email: 'shreyasjd777@gmail.com',
  resumeUrl: '/Shreyas_Deshpande_Resume.pdf',
  social: [
    { label: 'GitHub', href: 'https://github.com/shreyasjd777', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyasjd/', icon: 'linkedin' },
  ],
};

// Named technical skills from the résumé, grouped for the hero overview.
export const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS', 'C++', 'Bash', 'LaTeX'],
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Native', 'Tailwind', 'Expo'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'Django', 'REST API'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    label: 'Tools & Infrastructure',
    skills: ['Git', 'Docker', 'CI/CD', 'Google Cloud', 'Render', 'Vercel', 'Cursor', 'Claude Code', 'Agile'],
  },
];

export const experience = [
  {
    company: 'ShriddleShreds Barbershop',
    role: 'Founder',
    start: 'May 2020',
    end: 'Present',
    location: 'Location not provided',
    summary: 'Built and operate a reliable booking and payments platform for a barbershop.',
    highlights: [
      'Built a Next.js, Flask, and Stripe booking platform with real-time availability and webhook-driven payment reconciliation.',
      'Supports 100+ monthly appointments with 10+ REST endpoints, idempotency, and database constraints for zero booking conflicts.',
      'Built an LLM-driven booking assistant that increased conversion by 20%.',
    ],
    tags: ['Next.js', 'Flask', 'Stripe', 'REST APIs', 'LLM'],
  },
  {
    company: 'UCR Undergraduate Education IT',
    role: 'Senior Tech Assistant II',
    start: 'February 2023',
    end: 'October 2024',
    location: 'Location not provided',
    summary: 'Built and maintained web pages for campus organizations while supporting staff and faculty technology needs.',
    highlights: [
      'Built and maintained pages for 20+ campus organizations and served 50+ staff and faculty.',
      'Diagnosed hardware, network, application, and configuration issues.',
    ],
    tags: ['Web development', 'Technical support'],
  },
  {
    company: 'Shrocken Inc.',
    role: 'Software Engineering Intern',
    start: 'June 2022',
    end: 'September 2022',
    location: 'Location not provided',
    summary: 'Led a three-engineer team evaluating a website migration and building a Mendix messaging demo.',
    highlights: [
      'Led a three-engineer team in daily scrums to build a Mendix messaging demo and evaluate a website migration.',
    ],
    tags: ['Mendix', 'Agile'],
  },
];

export const education = [
  {
    school: 'University of Illinois Urbana-Champaign',
    credential: 'M.S. Computer Science',
    detail: 'Timeline not provided',
    location: 'Location not provided',
  },
  {
    school: 'University of California, Riverside',
    credential: 'B.S. Computer Science',
    detail: 'Timeline not provided',
    location: 'Location not provided',
  },
];

export const projects = [
  {
    name: 'ShriddleShreds',
    tagline: 'A dependable booking and payments platform for a barbershop.',
    description: 'Founder-built product with real-time availability, webhook-driven Stripe reconciliation, 10+ REST endpoints, zero booking conflicts, and an LLM booking assistant that improved conversion by 20%. Supports 100+ monthly appointments.',
    tags: ['Next.js', 'Flask', 'Stripe', 'REST APIs', 'LLM'],
    links: { live: 'https://shriddleshreds.com' },
    featured: true,
    art: 'shriddleshreds',
  },
  {
    name: "UCR Undergraduate Education R'Vision",
    tagline: 'Interactive discovery and action planning for student success.',
    description: 'Front-end experience for 20+ student-success programs and 10,000+ students; contributed to a 10% year-over-year retention increase and a 2% decrease in undergraduate dropout rates.',
    tags: ['Front End', 'Student success'],
    links: { live: 'https://ue.ucr.edu/rvision-v3' },
    art: 'rvision',
  },
  {
    name: 'CamJam',
    tagline: 'React Native photo and video sharing app.',
    description: 'In-production mobile app with client-side thumbnails and caching that reduced gallery load time by 40% while supporting 100+ media items per session. Firestore atomic updates, real-time listeners, offline-first sync, retry-safe writes, and under-200ms latency.',
    tags: ['React Native', 'Firestore', 'Offline-first'],
    links: {},
    art: 'camjam',
  },
  {
    name: 'Tindergram',
    tagline: 'Privacy-first social-media management tool.',
    description: 'Automates social-media actions with recursive JSON parsing, validation, and deduplication—processing large datasets 35% faster and reducing manual effort by 80%.',
    tags: ['Full Stack', 'Automation', 'Data processing'],
    links: { live: 'https://www.tindergram.dev' },
    art: 'tindergram',
  },
  {
    name: 'Theta Tau, Sigma Delta Website',
    tagline: 'Responsive chapter website redesign.',
    description: 'Front-end redesign with modern components and improved navigation; increased new-member interest by 30%, earned positive feedback from 50+ members, and supported a five-engineer Agile team.',
    tags: ['Front End', 'Responsive design', 'Agile'],
    links: { live: 'https://www.thetatauucr.com' },
    art: 'theta-tau',
  },
];
