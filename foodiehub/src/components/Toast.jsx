import { CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function Toast() {
  const { toast } = useCart()
  return (
    <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
      <CheckCircle2 size={18} /> {toast}
    </div>
  )
}
