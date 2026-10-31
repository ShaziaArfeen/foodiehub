import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react'
import { useCart, money } from '../context/CartContext.jsx'
import Img from './Img.jsx'

export default function CartDrawer() {
  const c = useCart()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    if (!c.open) return
    const k = (e) => e.key === 'Escape' && c.closeCart()
    document.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [c.open])

  useEffect(() => { if (!c.open) setOrder(null) }, [c.open])

  const checkout = () => {
    setOrder({ id: Math.floor(100000 + Math.random() * 900000), total: c.total })
    c.clear()
  }

  return (
    <div className={`overlay right ${c.open ? 'show' : ''}`} onClick={c.closeCart} aria-hidden={!c.open}>
      <aside className="drawer" role="dialog" aria-label="Your cart" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <h3><ShoppingCart size={22} /> Your Cart</h3>
          <button className="icon-btn round ghost" onClick={c.closeCart} aria-label="Close cart"><X size={18} /></button>
        </div>

        {order ? (
          <div className="empty">
            <CheckCircle2 size={56} className="ok" />
            <h4>Order confirmed</h4>
            <p className="muted">Order #{order.id} for {money(order.total)} is being prepared. Thank you for ordering with FoodieHub.</p>
            <button className="btn btn-primary" onClick={c.closeCart}>Keep browsing</button>
          </div>
        ) : c.items.length === 0 ? (
          <div className="empty">
            <ShoppingCart size={56} />
            <h4>Your cart is empty</h4>
            <p className="muted">Add a dish from the menu and it will show up here.</p>
            <a href="#menu" className="btn btn-primary" onClick={c.closeCart}>Browse menu</a>
          </div>
        ) : (
          <>
            <ul className="lines">
              {c.items.map((i) => (
                <li key={i.id}>
                  <Img src={i.img} fb={i.fb} alt={i.name} />
                  <div className="line-info">
                    <strong>{i.name}</strong>
                    <span>{money(i.price)}</span>
                    <div className="qty">
                      <button onClick={() => c.dec(i.id)} aria-label={`Decrease ${i.name}`}><Minus size={14} /></button>
                      <b aria-live="polite">{i.qty}</b>
                      <button onClick={() => c.inc(i.id)} aria-label={`Increase ${i.name}`}><Plus size={14} /></button>
                    </div>
                  </div>
                  <button className="trash" onClick={() => c.remove(i.id)} aria-label={`Remove ${i.name}`}><Trash2 size={18} /></button>
                </li>
              ))}
            </ul>
            <div className="totals">
              <div><span>Subtotal</span><span>{money(c.subtotal)}</span></div>
              <div><span>Tax (10%)</span><span>{money(c.tax)}</span></div>
              <div className="grand"><span>Total</span><span>{money(c.total)}</span></div>
              <button className="btn btn-primary block" onClick={checkout}>Proceed to Checkout <ArrowRight size={16} /></button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
