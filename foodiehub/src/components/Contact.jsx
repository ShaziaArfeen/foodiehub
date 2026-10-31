import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset() }
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead kicker="Get in touch" title="Contact Us" />
        <div className="contact">
          <ul className="info card">
            <li><MapPin size={20} /><div><strong>Visit us</strong><span>12 Food Street, Islamabad</span></div></li>
            <li><Phone size={20} /><div><strong>Call</strong><span>+92 300 0000000</span></div></li>
            <li><Mail size={20} /><div><strong>Email</strong><span>hello@foodiehub.com</span></div></li>
            <li><Clock size={20} /><div><strong>Open daily</strong><span>11:00 am to 11:00 pm</span></div></li>
          </ul>
          <form className="form card" onSubmit={submit}>
            <label>Name<input required name="name" placeholder="Your name" /></label>
            <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
            <label>Message<textarea required name="msg" rows="4" placeholder="How can we help?" /></label>
            <button className="btn btn-primary" type="submit">Send message</button>
            {sent && <p className="ok-msg" role="status">Message sent. We will reply within a day.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
