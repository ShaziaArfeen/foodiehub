import { useEffect, useState } from 'react'
import { Menu as MenuIcon, ShoppingCart, X } from 'lucide-react'
import Logo from './Logo.jsx'
import SearchBox from './SearchBox.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import useScrollSpy from '../hooks/useScrollSpy.js'
import { useCart } from '../context/CartContext.jsx'

const links = [
  ['home', 'Home'], ['menu', 'Menu'], ['recipes', 'Recipes'], ['about', 'About'], ['contact', 'Contact'],
]
const ids = links.map((l) => l[0])

export default function Navbar({ onOpenRecipe }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(ids)
  const { count, openCart } = useCart()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-in">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="nav-search-mobile"><SearchBox onOpenRecipe={onOpenRecipe} onDone={() => setOpen(false)} /></div>
        </nav>
        <div className="nav-search-desktop"><SearchBox onOpenRecipe={onOpenRecipe} /></div>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="icon-btn round cart-btn" onClick={openCart} aria-label={`Open cart, ${count} items`}>
            <ShoppingCart size={20} />
            {count > 0 && <span className="badge" key={count}>{count}</span>}
          </button>
          <button className="icon-btn round burger-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
