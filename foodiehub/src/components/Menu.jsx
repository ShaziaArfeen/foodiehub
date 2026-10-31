import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import DishCard from './DishCard.jsx'
import { menu, categories } from '../data/menu.js'

export default function Menu() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? menu : menu.filter((m) => m.cat === cat)
  return (
    <section className="section" id="menu">
      <div className="container">
        <SectionHead kicker="Order Online" title="Full Menu" />
        <div className="chips" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={`chip ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="grid dishes" key={cat}>
          {list.map((d) => <DishCard key={d.id} dish={d} />)}
        </div>
      </div>
    </section>
  )
}
