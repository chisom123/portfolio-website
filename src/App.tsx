import { Mail, FileDown, ArrowRight, Code2, Layers, Server, Wrench } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import './App.css'

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function ImgWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`img-frame ${className ?? ''}`}>
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}

const projects = [
  {
    name: 'Photo Competition iOS App',
    description:
      'iOS app for daily photo competitions with friends. Share photos, rate them 1-5 stars, and climb weekly leaderboards for real-money prizes. Features a prediction parlay system where users predict their friends\' ratings to earn coins.',
    stack: ['Swift', 'Firebase', 'Firestore', 'Cloud Functions', 'StoreKit'],
    github: 'https://github.com/chisom123/photo-competition-ios',
    image: '/images/projects/photo-competition.jpg',
  },
  {
    name: 'Affiliate Marketing Platform',
    description:
      'Full-stack affiliate marketing platform with a complete conversion funnel: partners share links, viewers rate stories, enter phone numbers to unlock bonus content, and sign up as recruits. Includes admin dashboard for performance tracking and payout management via Wise/PayPal.',
    stack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Cloud Functions'],
    github: 'https://github.com/chisom123/affiliate-marketing-platform',
    image: '/images/projects/affiliate-platform.jpg',
  },
  {
    name: 'Competition Admin Dashboard',
    description:
      'React admin dashboard for the photo competition platform. Manage prediction parlay settings (accuracy rates, house edge), monitor user activity, and process withdrawal requests.',
    stack: ['React', 'Firebase', 'Firestore', 'Cloud Functions'],
    github: 'https://github.com/chisom123/competition-admin-dashboard',
    image: '/images/projects/admin-dashboard.jpg',
  },
  {
    name: 'Affiliate Partner iOS App',
    description:
      'iOS app for affiliates to manage their referral campaigns, track earnings, and withdraw payouts. Affiliates can create custom links, share them on Instagram Stories, and track earnings in real-time.',
    stack: ['Swift', 'Firebase', 'Firestore', 'Cloud Storage'],
    github: 'https://github.com/chisom123/affiliate-partner-ios',
    image: '/images/projects/affiliate-partner-ios.jpg',
  },
  {
    name: 'Live Streaming iOS App',
    description:
      "iOS app for social live streaming with paid viewer requests, CallKit integration, and a real-time engagement system. Streamers invite friends via Apple's CallKit API and receive paid requests from viewers during the stream.",
    stack: ['Swift', 'Firebase', 'Firestore', 'Cloud Functions', 'CallKit', 'LiveKit', 'Stripe'],
    github: 'https://github.com/chisom123/live-streaming-ios',
    image: '/images/projects/live-streaming.jpg',
  },
  {
    name: 'Streamer Menu Web',
    description:
      'Web-based order form for live streamers to share with viewers ahead of a stream. Viewers can browse and pay for request items before the stream starts, reducing friction and increasing engagement.',
    stack: ['React', 'Firebase', 'Firestore', 'Stripe', 'Cloud Functions'],
    github: 'https://github.com/chisom123/streamer-menu-web',
    image: '/images/projects/streamer-menu.jpg',
  },
]

const skillGroups = [
  { title: 'Languages', icon: Code2, skills: ['Swift', 'TypeScript', 'JavaScript'] },
  { title: 'Frameworks', icon: Layers, skills: ['React', 'SwiftUI', 'UIKit'] },
  { title: 'Backend & Infra', icon: Server, skills: ['Firebase', 'Firestore', 'Cloud Functions', 'Cloud Storage'] },
  { title: 'Payments & Tools', icon: Wrench, skills: ['Stripe', 'StoreKit', 'Git', 'PostHog'] },
]

function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main>
        <header className="hero">
          <p className="eyebrow">React & Swift Developer</p>
          <h1>Chisom Agu</h1>
          <p className="hero-sub">
            I build full-stack web applications and iOS apps with Firebase, from
            live-streaming platforms to payment-driven mobile products.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('work')}>
              View My Work <ArrowRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>
          <p className="mono-line">swift · react · typescript · firebase</p>
        </header>

        <section id="work" className="section">
          <p className="eyebrow eyebrow-section">Selected Work</p>
          <h2>Things I've built</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <a
                className="project-card"
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgWithFallback src={p.image} alt={p.name} className="project-img" />
                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{p.name}</h3>
                    <SiGithub size={18} className="project-gh-icon" />
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.stack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow eyebrow-section">Toolkit</p>
          <h2>What I work with</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-title">
                  <group.icon size={18} />
                  <span>{group.title}</span>
                </div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow eyebrow-section">Get in Touch</p>
          <h2>Let's build something</h2>
          <div className="contact-layout">
            <ImgWithFallback src="/images/profile.jpg" alt="Chisom Agu" className="profile-img" />
            <div>
              <p className="contact-bio">
                I'm a developer from Harpenden, UK, with a passion for building
                products that people actually use, from prediction-driven photo
                competitions to live-streaming platforms with real payments on
                the line.
              </p>
              <div className="contact-links">
                <a href="mailto:chisom.christopher.agu@gmail.com" className="contact-link">
                  <Mail size={18} /> Email
                </a>
                <a
                  href="https://github.com/chisom123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <SiGithub size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/chisom-agu-794573171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FileDown size={18} /> Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App