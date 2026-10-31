import SectionHead from './SectionHead.jsx'
import DishCard from './DishCard.jsx'
import { menu } from '../data/menu.js'

export default function Featured() {
  return (
    <section className="section" id="featured">
      <div className="container">
        <SectionHead kicker="Our Menu" title="Featured Dishes" href="#menu" cta="View All" />
        <div className="grid dishes">
          {menu.filter((m) => m.featured).map((d) => <DishCard key={d.id} dish={d} />)}
        </div>
      </div>
    </section>
  )
}
