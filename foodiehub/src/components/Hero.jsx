import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Plus, Star } from 'lucide-react'
import Img from './Img.jsx'
import { menu } from '../data/menu.js'
import { useCart, money } from '../context/CartContext.jsx'

const slides = [
  { ...menu[5], img: menu[5].img, fb: 'hero', rating: '4.9' },
  { ...menu[1], rating: '4.8' },
  { ...menu[2], rating: '4.8' },
]

export default function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const stage = useRef(null)
  const { add } = useCart()
  const s = slides[i]

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [paused])

  const move = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = stage.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    stage.current.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`)
    stage.current.style.setProperty('--ry', `${(x * 16).toFixed(2)}deg`)
  }
  const leave = () => { stage.current.style.setProperty('--rx', '0deg'); stage.current.style.setProperty('--ry', '0deg') }

  return (
    <section id="home" className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container hero-in">
        <div className="hero-copy">
          <span className="pill">Delicious Food, Better Mood</span>
          <h1>Good Food<br />Great <em>Vibes</em></h1>
          <p>Discover amazing dishes, fresh ingredients and unforgettable taste.</p>
          <div className="hero-cta">
            <a href="#menu" className="btn btn-primary">Explore Menu <ArrowRight size={16} /></a>
            <a href="#recipes" className="btn btn-ghost">View Recipes</a>
          </div>
          <div className="dots" role="tablist" aria-label="Featured dish">
            {slides.map((sl, n) => (
              <button key={sl.id} role="tab" aria-selected={n === i} aria-label={sl.name} className={n === i ? 'on' : ''} onClick={() => setI(n)} />
            ))}
          </div>
        </div>

        <div className="stage-wrap" onPointerMove={move} onPointerLeave={leave}>
          <div className="stage" ref={stage}>
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="plate" key={s.id}>
              <Img src={s.img.replace('w=900', 'w=1200')} fb={s.fb} alt={s.name} loading="eager" fetchpriority="high" />
            </div>
            <div className="float-card rating">
              <Star size={16} fill="currentColor" /> <b>{s.rating}</b><span>Top rated</span>
            </div>
            <div className="float-card order">
              <div><strong>{s.name}</strong><span>{money(s.price)}</span></div>
              <button className="icon-btn" onClick={() => add(s)} aria-label={`Add ${s.name} to cart`}><Plus size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
