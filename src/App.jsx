import { useState, useEffect, useRef } from 'react'
import {
  ClipboardList, Link2, Wallet, TrendingUp, LayoutDashboard, Target,
  MessageCircle, ShoppingBag, Sparkles, Copy, ArrowUp,
  Droplet, Dumbbell, Shirt, HeartPulse, Camera, UtensilsCrossed,
  Plane, Gamepad2, Music2,
} from 'lucide-react'
import './App.css'

function useScrollVisible() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

function FadeIn({ children, className = '' }) {
  const ref = useScrollVisible()
  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="nav-logo">26ritual</a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#how-it-works" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a></li>
          <li><a href="#automation" onClick={() => setMenuOpen(false)}>Automation</a></li>
          <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
          <li><a href="#join" className="nav-cta" onClick={() => setMenuOpen(false)}>Join Waitlist</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual-card">
      <div className="hv-topbar">
        <div className="hv-dots"><span /><span /><span /></div>
        <div className="hv-tab">Your Dashboard</div>
      </div>
      <div className="hv-body">
        <div className="hv-stat-row">
          <div className="hv-stat">
            <div className="hv-stat-label">Total Earnings</div>
            <div className="hv-stat-value">$12,480</div>
            <div className="hv-stat-delta"><ArrowUp size={12} /> 24%</div>
          </div>
          <div className="hv-stat">
            <div className="hv-stat-label">Active Referrals</div>
            <div className="hv-stat-value">312</div>
            <div className="hv-stat-delta"><ArrowUp size={12} /> 12%</div>
          </div>
        </div>
        <div className="hv-chart">
          {[35, 55, 42, 68, 50, 80, 64, 92].map((h, i) => (
            <div key={i} className="hv-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="hv-link-row">
          <Link2 size={13} />
          <span>26ritual.com/r/you</span>
          <Copy size={13} />
        </div>
      </div>
      <div className="hv-float hv-float-1">
        <TrendingUp size={14} />
        <span>+$450 today</span>
      </div>
      <div className="hv-float hv-float-2">
        90% <span className="hv-float-sub">you keep</span>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <FadeIn className="hero-content">
          <div className="hero-badge">KEEP UP TO 90% OF EVERYTHING YOU EARN</div>
          <h1>
            Where Creators<br />Come to <span>Earn.</span>
          </h1>
          <p className="hero-subtitle">
            You've already built an audience. Now turn it into income — join 26ritual's
            affiliate program and earn real commissions sharing what you love.
          </p>
          <div className="hero-actions">
            <a href="#join" className="btn-primary">Start Earning Today →</a>
            <a href="#how-it-works" className="btn-secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">10,000+</div>
              <div className="hero-stat-label">Creators Joined</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">$2M+</div>
              <div className="hero-stat-label">Paid to Creators</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">Up to 90%</div>
              <div className="hero-stat-label">Revenue Share</div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="hero-visual-wrap">
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  )
}

function NicheStrip() {
  const niches = [
    { name: 'Beauty', Icon: Sparkles },
    { name: 'Skincare', Icon: Droplet },
    { name: 'Fitness', Icon: Dumbbell },
    { name: 'Fashion', Icon: Shirt },
    { name: 'Wellness', Icon: HeartPulse },
    { name: 'Lifestyle', Icon: Camera },
    { name: 'Food', Icon: UtensilsCrossed },
    { name: 'Finance', Icon: TrendingUp },
    { name: 'Travel', Icon: Plane },
    { name: 'Gaming', Icon: Gamepad2 },
    { name: 'Music', Icon: Music2 },
    { name: 'Photography', Icon: Camera },
  ]

  return (
    <section className="niche-strip">
      <FadeIn>
        <div className="niche-header">
          <h2>Every Niche.<br /><span>One Program.</span></h2>
          <p>Whatever you create content about, there's a place for you here.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="niche-grid">
          {niches.map((n, i) => (
            <div className="niche-card" key={i}>
              <n.Icon size={22} strokeWidth={1.75} />
              <span>{n.name}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-it-works">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2>Start Earning in 3 Simple Steps</h2>
          <p>Our streamlined process gets you from sign-up to earning commissions quickly and easily.</p>
        </div>
      </FadeIn>
      <div className="steps-grid">
        <div className="flow-dot" />
        {[
          { Icon: ClipboardList, label: 'Step 1', title: 'Sign Up & Get Approved', desc: 'Fill out our simple application form. Our team reviews and approves your profile within 48 hours.' },
          { Icon: Link2, label: 'Step 2', title: 'Share Your Links', desc: 'Grab your unique tracking link and share it with your audience on any platform.' },
          { Icon: Wallet, label: 'Step 3', title: 'Earn Commissions', desc: 'Earn commissions on every sale made through your links. Track your performance in real-time.' },
        ].map((step, i) => (
          <FadeIn key={i}>
            <div className="step-card">
              <div className="step-number">
                <step.Icon className="step-icon" strokeWidth={1.75} />
              </div>
              <div className="step-label">{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function Benefits() {
  const benefits = [
    { Icon: TrendingUp, title: 'Industry-Leading Payouts', desc: 'Keep up to 90% of everything you earn, with boosted rates during special campaigns and for top performers.' },
    { Icon: Target, title: 'Exclusive Campaigns', desc: 'Get invited to campaigns with higher commission rates, early access, and dedicated support.' },
    { Icon: ShoppingBag, title: 'Multi-Product Bundles', desc: 'Promote multiple products with a single link. Perfect for roundups and haul-style content.' },
    { Icon: Sparkles, title: 'Ready-Made Creatives', desc: 'Grab branded banners and creatives for trending offers so you always have fresh content to share.' },
  ]

  return (
    <section id="benefits" className="section">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">Why Join</span>
          <h2>Everything You Need to <span>Succeed</span></h2>
          <p>We provide the tools and support to help you monetise your content.</p>
        </div>
      </FadeIn>
      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <FadeIn key={i}>
            <div className="benefit-card">
              <div className="benefit-icon">
                <b.Icon size={26} strokeWidth={1.75} />
              </div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function DashboardMockup() {
  const bars = [40, 62, 50, 78, 58, 92, 70]
  return (
    <div className="dashboard-mockup">
      <div className="dashboard-topbar">
        <div className="dashboard-dots">
          <span /><span /><span />
        </div>
        <div className="dashboard-tab">Your Affiliate Dashboard</div>
      </div>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <div className="dashboard-stat-label">Clicks</div>
          <div className="dashboard-stat-value">1,284</div>
          <div className="dashboard-stat-delta"><ArrowUp size={11} /> 12%</div>
        </div>
        <div className="dashboard-stat">
          <div className="dashboard-stat-label">Orders</div>
          <div className="dashboard-stat-value">86</div>
          <div className="dashboard-stat-delta"><ArrowUp size={11} /> 8%</div>
        </div>
        <div className="dashboard-stat dashboard-stat-highlight">
          <div className="dashboard-stat-label">Commission Earned</div>
          <div className="dashboard-stat-value">$1,865</div>
          <div className="dashboard-stat-delta">+$45 today</div>
        </div>
      </div>
      <div className="dashboard-chart">
        {bars.map((h, i) => (
          <div key={i} className="dashboard-bar" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

function WhatYouGet() {
  const features = [
    { Icon: LayoutDashboard, title: 'See Your Earnings in Real Time', desc: 'Log in anytime to see your clicks, orders, and commissions — no waiting on anyone to send you a report.' },
    {
      Icon: Link2,
      title: 'One Link, Multiple Products',
      desc: 'Tag several products in a single link, perfect for roundups or haul-style content.',
      chip: '26ritual.com/s/my-picks',
    },
    { Icon: Sparkles, title: 'Your Own Branded Page', desc: 'Followers who click your link land on a beautiful branded page showcasing everything you recommended.' },
    { Icon: MessageCircle, title: 'Turn Comments Into Sales', desc: 'Set a keyword on your post and we\'ll automatically DM your link to anyone who comments it.' },
  ]

  return (
    <section className="section">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">Your Creator Toolkit</span>
          <h2>Everything You Need, Right in <span>Your Dashboard</span></h2>
          <p>Simple tools that help you share smarter and earn more — no extra apps, no hassle.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <DashboardMockup />
      </FadeIn>
      <div className="features-grid">
        {features.map((f, i) => (
          <FadeIn key={i}>
            <div className="feature-card">
              <div className="feature-card-icon">
                <f.Icon size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                {f.chip && (
                  <div className="link-chip">
                    <Link2 size={12} />
                    <span>{f.chip}</span>
                    <Copy size={12} />
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function CommentAutomation() {
  return (
    <section id="automation" className="section automation-section">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">DM Automation</span>
          <h2>Turn Comments Into <span>Conversions</span></h2>
          <p>Set a keyword on your post — we handle the rest, automatically.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="automation-card">
          <div className="automation-post">
            <div className="automation-post-header">
              <div className="automation-avatar" />
              <div>
                <div className="automation-username">yourhandle</div>
                <div className="automation-caption">Comment "SHOP" to get my link 👇</div>
              </div>
            </div>
            <div className="automation-comment">
              <div className="automation-avatar automation-avatar-sm" />
              <div className="automation-comment-body">
                <strong>fan_account</strong> SHOP 🔥
              </div>
            </div>
          </div>

          <div className="automation-arrow">
            <MessageCircle size={20} />
          </div>

          <div className="automation-dm">
            <div className="automation-dm-header">
              <div className="automation-avatar automation-avatar-sm" />
              <div className="automation-username">yourhandle</div>
              <span className="automation-dm-tag">Auto-DM</span>
            </div>
            <div className="automation-dm-bubble">
              Hey! Thanks for the comment 💌 here's the link:
              <div className="automation-dm-link">
                <Link2 size={12} />
                <span>26ritual.com/r/you</span>
                <Copy size={12} />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

const PLATFORM_OPTIONS = ['Instagram', 'YouTube', 'TikTok', 'Facebook', 'Blog / Website', 'Other']

function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [form, setForm] = useState({
    name: '', email: '', instagramLink: '', additionalInfo: ''
  })
  const [platforms, setPlatforms] = useState([{ platform: '', details: '' }])
  const [socialLinks, setSocialLinks] = useState([''])
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const updatePlatform = (i, field, value) => {
    const next = [...platforms]
    next[i] = { ...next[i], [field]: value }
    setPlatforms(next)
  }

  const addPlatform = () => {
    setPlatforms([...platforms, { platform: '', details: '' }])
  }

  const updateSocialLink = (i, value) => {
    const next = [...socialLinks]
    next[i] = value
    setSocialLinks(next)
  }

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, ''])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL
    const payload = {
      name: form.name,
      email: form.email,
      instagramLink: form.instagramLink,
      platforms: platforms
        .filter((p) => p.platform)
        .map((p) => `${p.platform}${p.details ? ` (${p.details})` : ''}`)
        .join('; '),
      socialLinks: socialLinks.filter(Boolean).join(', '),
      additionalInfo: form.additionalInfo,
    }

    try {
      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(payload),
      })
      setSubmitted(true)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="join" className="section form-section">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">Join the Waitlist</span>
          <h2>Be the First to Know</h2>
          <p>Our upgraded affiliate platform is launching soon. Sign up now to get early access and priority approval.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="form-wrapper">
          {submitted ? (
            <div className="form-success">
              <div className="form-success-icon">🎉</div>
              <h3>You're on the list!</h3>
              <p>Thank you for your interest in the 26ritual Affiliate Program. We'll reach out to you as soon as we launch with early access details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-block">
                <label>Full Name <span>*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-block">
                <label>Email Address <span>*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-block">
                <label>Instagram Account Link <span>*</span></label>
                <span className="form-hint">Your Instagram profile URL (required)</span>
                <input
                  type="url"
                  name="instagramLink"
                  placeholder="https://instagram.com/yourprofile"
                  required
                  value={form.instagramLink}
                  onChange={handleChange}
                />
              </div>

              <div className="form-block">
                <label>How will you promote 26ritual? <span>*</span></label>
                {platforms.map((p, i) => (
                  <div className="platform-row" key={i}>
                    <select
                      value={p.platform}
                      required={i === 0}
                      onChange={(e) => updatePlatform(i, 'platform', e.target.value)}
                    >
                      <option value="">Select platform</option>
                      {PLATFORM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Details (e.g. follower count, niche)"
                      value={p.details}
                      onChange={(e) => updatePlatform(i, 'details', e.target.value)}
                    />
                  </div>
                ))}
                <button type="button" className="add-link-btn" onClick={addPlatform}>
                  + Add another platform
                </button>
              </div>

              <div className="form-block">
                <label>Social Media Links <span className="optional">(Optional)</span></label>
                {socialLinks.map((link, i) => (
                  <input
                    key={i}
                    type="url"
                    className="social-link-input"
                    placeholder="https://..."
                    value={link}
                    onChange={(e) => updateSocialLink(i, e.target.value)}
                  />
                ))}
                <button type="button" className="add-link-btn" onClick={addSocialLink}>
                  + Add social media link
                </button>
              </div>

              <div className="form-block">
                <label>Additional Information</label>
                <span className="form-hint">Any additional details that might help us review your application</span>
                <textarea
                  name="additionalInfo"
                  placeholder="Tell us more about yourself and how you plan to promote 26ritual..."
                  value={form.additionalInfo}
                  onChange={handleChange}
                />
              </div>

              <label className="checkbox-row">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                I agree to the <a href="#faq" onClick={(e) => e.stopPropagation()}>Affiliate Program Terms &amp; Conditions</a>
              </label>

              <div className="form-submit">
                <button type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
              {error && (
                <p className="form-error">Something went wrong submitting your details. Please try again.</p>
              )}
              <p className="form-note">We'll review your application and get back to you within 48 hours of launch.</p>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'Who can join the 26ritual Affiliate Program?',
      a: 'Anyone with an active social media presence who creates content in any niche can apply. We welcome creators of all sizes — from micro-influencers to established content creators.'
    },
    {
      q: 'How much can I earn?',
      a: 'You keep up to 90% of everything you earn, with rates going even higher during special campaigns. Top-performing and VIP creators can negotiate custom rates for even higher earnings.'
    },
    {
      q: 'How do I track my performance?',
      a: 'Once approved, you\'ll get access to a dedicated dashboard where you can track clicks, orders, commissions, and campaign performance in real-time.'
    },
    {
      q: 'What is the multi-product bundle link?',
      a: 'You can select multiple products and generate a single link that leads to a branded landing page showing all your recommendations. Perfect for roundup or "haul" content.'
    },
    {
      q: 'What is the Comment-to-DM feature?',
      a: 'It\'s an automation tool that automatically sends your affiliate link via DM when a follower comments a specific keyword on your post. It makes converting engagement into sales effortless.'
    },
    {
      q: 'When is the upgraded platform launching?',
      a: 'We\'re actively building the upgraded platform. Join the waitlist to be notified as soon as we launch and get priority access to the new features.'
    },
  ]

  return (
    <section id="faq" className="section">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got answers.</p>
        </div>
      </FadeIn>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <FadeIn key={i}>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {faq.q}
                <span className={`faq-toggle ${openIndex === i ? 'open' : ''}`}>+</span>
              </button>
              {openIndex === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>26ritual</h3>
          <p>A platform for creators to grow their audience and turn it into real, recurring income.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#automation">Automation</a></li>
            <li><a href="#join">Join Waitlist</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} 26ritual. All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NicheStrip />
      <HowItWorks />
      <Benefits />
      <WhatYouGet />
      <CommentAutomation />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
