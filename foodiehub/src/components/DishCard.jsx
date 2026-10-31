import { Plus } from 'lucide-react'
import Tilt from './Tilt.jsx'
import Img from './Img.jsx'
import { useCart, money } from '../context/CartContext.jsx'

export default function DishCard({ dish }) {
  const { add, qtyOf } = useCart()
  const q = qtyOf(dish.id)
  return (
    <Tilt className="card dish" as="article">
      <div className="dish-img z1">
        <Img src={dish.img} fb={dish.fb} alt={dish.name} />
        {q > 0 && <span className="in-cart">{q} in cart</span>}
      </div>
      <div className="dish-body">
        <h3 className="z2">{dish.name}</h3>
        <p>{dish.desc}</p>
        <div className="dish-foot z2">
          <strong>{money(dish.price)}</strong>
          <button className="icon-btn" onClick={() => add(dish)} aria-label={`Add ${dish.name} to cart`}><Plus size={18} /></button>
        </div>
      </div>
    </Tilt>
  )
}
