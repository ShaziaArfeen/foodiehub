import { ChefHat } from 'lucide-react'

export default function Logo({ onClick }) {
  return (
    <a href="#home" className="logo" onClick={onClick} aria-label="FoodieHub home">
      <span className="logo-mark"><ChefHat size={24} strokeWidth={1.8} /></span>
      <span className="logo-text">Foodie<b>Hub</b></span>
    </a>
  )
}
