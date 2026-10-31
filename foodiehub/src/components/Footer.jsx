import { useState } from 'react'
import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const subscribe = (e) => {
    e.preventDefault()
    setMsg(/^\S+@\S+\.\S+$/.test(email) ? 'You are subscribed. Check your inbox for a welcome offer.' : 'Enter a valid email address.')
    if (/^\S+@\S+\.\S+$/.test(email)) setEmail('')
  }
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <Logo />
          <p className="muted">Eat Good. Feel Good.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>{['Home', 'Menu', 'Recipes', 'About', 'Contact'].map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            {[[Facebook, 'Facebook'], [Twitter, 'Twitter'], [Instagram, 'Instagram'], [Youtube, 'YouTube']].map(([I, n]) => (
              <a key={n} href="#home" aria-label={n}><I size={17} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4>Subscribe</h4>
          <p className="muted">Get delicious updates</p>
          <form className="sub" onSubmit={subscribe}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" aria-label="Email address" />
            <button className="icon-btn" aria-label="Subscribe"><ArrowRight size={18} /></button>
          </form>
          {msg && <p className="muted sub-msg" role="status">{msg}</p>}
        </div>
      </div>
      <div className="container foot-bar">
        <span>&copy; {new Date().getFullYear()} FoodieHub. All rights reserved.</span>
        <span><a href="#home">Privacy Policy</a> | <a href="#home">Terms of Service</a></span>
      </div>
    </footer>
  )
}
