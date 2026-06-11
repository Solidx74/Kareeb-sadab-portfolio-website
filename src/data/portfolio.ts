export type ProjectCategory = 'security' | 'agents' | 'ml' | 'analytics' | 'web3'

export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  category: ProjectCategory
  href?: string
  liveHref?: string
  featured?: boolean
  span?: 'sm' | 'md' | 'lg' | 'xl'
  accent?: 'violet' | 'cyan' | 'green' | 'amber'
}

export interface SocialLink {
  label: string
  href: string
  status: string
  note: string
}

export const profile = {
  name: 'KAREEB SADAB',
  handle: 'Solidx74',
  title: 'Chief Information Security Officer',
  tagline: 'Just trying to do better',
  bio: 'BSc CSE at CUET — building at the intersection of cybersecurity, AI, and decentralized systems. Turning complex threat landscapes into automated, scalable defenses.',
  email: 'kareebsadab@gmail.com',
  photo: '/profile.png',
  links: {
    dataScience: 'https://solidx74.github.io/ksds.github.io/',
    dataAnalysis: 'https://solidx74.github.io/ksda.github.io/',
    github: 'https://github.com/Solidx74',
    linkedin: 'https://www.linkedin.com/in/karib-sadab-43666a407/',
    medium: 'https://medium.com/@kareebsadab',
  },
}

export const kpis = [
  { value: '120+', label: 'PicoCTF Solved', accent: 'green' as const },
  { value: 'W3D', label: 'CISO Status Active', accent: 'cyan' as const },
  { value: 'SECURE', label: 'Security Posture', accent: 'violet' as const },
]

export const techStack = [
  'Python', 'C++', 'Solidity', 'React', 'FastAPI', 'TensorFlow',
  'PyTorch', 'Docker', 'Linux', 'Burp Suite', 'MongoDB', 'SQL',
]

export const projects: Project[] = [
  {
    id: 'siem',
    title: 'SIEM Log Pipeline + AI Anomaly Detection',
    description: 'Real-time SIEM ML engine with log parsing, feature extraction, and Isolation Forest / One-Class SVM anomaly detection under heavy load.',
    stack: ['Python', 'Pandas', 'Isolation Forest', 'One-Class SVM'],
    category: 'security',
    href: 'https://github.com/Solidx74/SIEM-Log-Pipeline-with-AI-Based-Anomaly-Detection',
    featured: true,
    span: 'xl',
    accent: 'green',
  },
  {
    id: 'cyber-mini',
    title: 'Cybersecurity Mini Projects',
    description: 'Tactical Python toolkit: password auditor, port scanner, DNS lookup, JWT inspector, hex dumper, Windows event log parser.',
    stack: ['Python', 'CLI', 'Encryption'],
    category: 'security',
    href: 'https://github.com/Solidx74/Cybersecurity-mini-projects',
    featured: true,
    span: 'lg',
    accent: 'cyan',
  },
  {
    id: 'picoctf',
    title: 'picoCTF Solutions',
    description: '120+ challenge writeups with custom exploit scripts, reverse-engineering tools, and payload documentation.',
    stack: ['Reverse Engineering', 'Web Exploits', 'Forensics'],
    category: 'security',
    href: 'https://github.com/Solidx74/picoCTF-Solution',
    span: 'md',
    accent: 'violet',
  },
  {
    id: 'bette-resume',
    title: 'BetteResume-ai',
    description: 'Full-stack AI career platform analyzing skill gaps and generating ATS-optimized LaTeX resumes.',
    stack: ['React', 'FastAPI', 'MongoDB', 'AI Agents'],
    category: 'agents',
    href: 'https://github.com/Solidx74/BetteResume-ai',
    liveHref: 'https://bette-resume-ai.vercel.app',
    span: 'lg',
    accent: 'green',
  },
  {
    id: 'news-bot',
    title: 'Daily News Briefing Bot',
    description: 'Autonomous AI agent synthesizing RSS news streams across Tech and Blockchain ecosystems via Telegram.',
    stack: ['Python', 'Flask', 'Render'],
    category: 'agents',
    href: 'https://github.com/Solidx74/Daily-News-Briefing-Telegram-Bot',
    liveHref: 'https://t.me/solid_news_briefing_bot',
    span: 'md',
    accent: 'cyan',
  },
  {
    id: 'job-intel',
    title: 'Job Intel Engine Bot',
    description: 'High-efficiency Python intelligence bot tracking operational automation markers.',
    stack: ['Python', 'Telegram API'],
    category: 'agents',
    href: 'https://github.com/Solidx74/Job-Intel-Engine-Telegram-Bot',
    liveHref: 'https://t.me/solid_job_intel_engine_bot',
    span: 'sm',
    accent: 'violet',
  },
  {
    id: 'discord-bot',
    title: 'Discord BombParty Bot',
    description: 'Word game bot with O(1) set-based dictionary loops and Render Express keep-alive cycles.',
    stack: ['Node.js', 'Discord.js v14'],
    category: 'agents',
    href: 'https://github.com/Solidx74/Discord-BombParty-Game-Bot',
    span: 'sm',
    accent: 'green',
  },
  {
    id: 'credchain',
    title: 'Credchain-Nexus',
    description: 'Academic credential verification infrastructure for Bangladesh ecosystems.',
    stack: ['Blockchain', 'Web3', 'Solidity'],
    category: 'ml',
    href: 'https://github.com/Solidx74/Credchain-Nexus',
    span: 'md',
    accent: 'violet',
  },
  {
    id: 'rnn',
    title: 'RNN Name Classifier',
    description: 'PyTorch character-level RNN name classifier built from scratch with custom training vectors.',
    stack: ['PyTorch', 'NLP'],
    category: 'ml',
    href: 'https://github.com/Solidx74/Name-Classification-App-RNNproject',
    span: 'sm',
    accent: 'cyan',
  },
  {
    id: 'cnn',
    title: 'CNN Image Classifier',
    description: 'TensorFlow CNN implementation for advanced feature map extractions.',
    stack: ['TensorFlow', 'Jupyter'],
    category: 'ml',
    href: 'https://github.com/Solidx74/Image-Classifier-App-Tensorflow',
    span: 'sm',
    accent: 'green',
  },
  {
    id: 'churn',
    title: 'Customer Churn Prediction',
    description: 'ML engine utilizing telecom data patterns and Random Forest modeling.',
    stack: ['scikit-learn', 'Pandas'],
    category: 'ml',
    href: 'https://github.com/Solidx74/Customer-Churn-Analysis-and-Prediction-System',
    span: 'md',
    accent: 'amber',
  },
  {
    id: 'crypto-tracker',
    title: 'Automated Crypto Tracker',
    description: 'CoinGecko API connector parsing global market histories into automated database pipelines.',
    stack: ['Python', 'API', 'SQL'],
    category: 'analytics',
    href: 'https://github.com/Solidx74/Automated-Crypto-Tracker',
    span: 'sm',
    accent: 'cyan',
  },
  {
    id: 'powerbi',
    title: 'Power BI Salary Suite',
    description: 'Interactive compensation survey model profiling global data engineering roles.',
    stack: ['Power BI', 'SQL', 'Analytics'],
    category: 'analytics',
    href: 'https://github.com/Solidx74/Data-Professional-Survey-Analysis-Power-BI',
    span: 'md',
    accent: 'violet',
  },
  {
    id: 'w3d',
    title: 'W3D CISO Command Framework',
    description: 'Security governance mapping multi-signature command paths, risk evaluations, and server directory configurations.',
    stack: ['Web3', 'Governance', 'Security'],
    category: 'web3',
    span: 'lg',
    accent: 'violet',
  },
  {
    id: 'harold',
    title: 'Harold Health Audit',
    description: 'Critical Broken Access Control remediation — enforced 2FA, dictionary attack prevention, auth patch deployed.',
    stack: ['Solidity', 'Audit', 'Access Control'],
    category: 'web3',
    href: 'https://medium.com/@kareebsadab/w3d-security-report-c79cc07ca721',
    span: 'lg',
    accent: 'amber',
  },
]

export const auditMatrix = [
  { vector: 'Reentrancy Attacks', mitigation: 'Checks-Effects-Interactions', status: 'ok' as const },
  { vector: 'Integer Overflow', mitigation: 'Solidity v0.8.0 Math', status: 'ok' as const },
  { vector: 'Gas Optimization', mitigation: 'Uint storage optimization', status: 'warn' as const },
  { vector: 'Timestamp Dependence', mitigation: 'Block Number Offset', status: 'ok' as const },
  { vector: 'Access Controls', mitigation: 'OpenZeppelin Ownable', status: 'ok' as const },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub Portal',
    href: 'https://github.com/Solidx74',
    status: 'SECURE RELAY',
    note: 'Host code repositories and resolved security patches.',
  },
  {
    label: 'LinkedIn Node',
    href: 'https://www.linkedin.com/in/karib-sadab-43666a407/',
    status: 'ONLINE',
    note: 'Professional SOC engineering connections and threat research network.',
  },
  {
    label: 'Medium Case Studies',
    href: 'https://medium.com/@kareebsadab',
    status: 'PUBLIC FEED',
    note: 'Technical articles, blue team research, and incident handling logs.',
  },
  {
    label: 'Secure Direct Mail',
    href: 'mailto:kareebsadab@gmail.com',
    status: 'ENCRYPTED',
    note: 'Direct SMTP gateway to operator primary mailbox.',
  },
]

export const navSections = [
  { id: 'command', label: 'Command' },
  { id: 'projects', label: 'Operations' },
  { id: 'stack', label: 'Stack' },
  { id: 'web3', label: 'Web3' },
  { id: 'contact', label: 'Uplink' },
]
