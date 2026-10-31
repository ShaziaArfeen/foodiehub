import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, Plus, Clock } from 'lucide-react'
import { menu } from '../data/menu.js'
import { recipes } from '../data/recipes.js'
import { useCart, money } from '../context/CartContext.jsx'
import Img from './Img.jsx'

export default function SearchBox({ onOpenRecipe, onDone }) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const box = useRef(null)
  const { add } = useCart()

  useEffect(() => {
    const h = (e) => box.current && !box.current.contains(e.target) && setOpen(false)
    document.addEventListener('pointerdown', h)
    return () => document.removeEventListener('pointerdown', h)
  }, [])

  const term = q.trim().toLowerCase()
  const dishes = useMemo(() => (term ? menu.filter((m) => (m.name + m.cat).toLowerCase().includes(term)).slice(0, 4) : []), [term])
  const recs = useMemo(() => (term ? recipes.filter((r) => r.name.toLowerCase().includes(term)).slice(0, 3) : []), [term])

  return (
    <div className="search" ref={box}>
      <input
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        placeholder="Search delicious food..."
        aria-label="Search dishes and recipes"
      />
      <span className="search-btn"><Search size={18} /></span>
      {open && term && (
        <div className="search-pop">
          {!dishes.length && !recs.length && <p className="muted pad">No matches for "{q}". Try burger, pizza or pasta.</p>}
          {dishes.map((d) => (
            <div className="s-row" key={d.id}>
              <Img src={d.img} fb={d.fb} alt="" />
              <div><strong>{d.name}</strong><small>{d.cat}</small></div>
              <span className="s-price">{money(d.price)}</span>
              <button className="icon-btn sm" onClick={() => add(d)} aria-label={`Add ${d.name}`}><Plus size={14} /></button>
            </div>
          ))}
          {recs.map((r) => (
            <button className="s-row s-rec" key={r.id} onClick={() => { onOpenRecipe(r); setOpen(false); setQ(''); onDone?.() }}>
              <Img src={r.img} fb={r.fb} alt="" />
              <div><strong>{r.name}</strong><small>Recipe</small></div>
              <span className="s-price"><Clock size={13} /> {r.time} mins</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
