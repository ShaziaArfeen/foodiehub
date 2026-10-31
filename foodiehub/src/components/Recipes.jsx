import { Clock } from 'lucide-react'
import SectionHead from './SectionHead.jsx'
import Tilt from './Tilt.jsx'
import Img from './Img.jsx'
import { recipes } from '../data/recipes.js'

export default function Recipes({ onOpen }) {
  return (
    <section className="section" id="recipes">
      <div className="container">
        <SectionHead kicker="Our Recipes" title="Delicious Recipes" href="#recipes" cta="View All Recipes" />
        <div className="grid recipes">
          {recipes.map((r) => (
            <Tilt key={r.id} className="card recipe" as="article" max={7}>
              <Img src={r.img} fb={r.fb} alt={r.name} />
              <div className="recipe-shade" />
              <div className="recipe-body z2">
                <h3>{r.name}</h3>
                <div className="recipe-foot">
                  <span><Clock size={15} /> {r.time} mins</span>
                  <button className="btn btn-glass sm" onClick={() => onOpen(r)}>Read More</button>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  )
}
