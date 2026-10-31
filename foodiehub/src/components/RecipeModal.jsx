import { useEffect } from 'react'
import { Clock, Flame, Users, X } from 'lucide-react'
import Img from './Img.jsx'

export default function RecipeModal({ recipe, onClose }) {
  useEffect(() => {
    if (!recipe) return
    const k = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [recipe, onClose])

  if (!recipe) return null
  return (
    <div className="overlay center" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={recipe.name} onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn round close" onClick={onClose} aria-label="Close recipe"><X size={18} /></button>
        <div className="modal-img"><Img src={recipe.img} fb={recipe.fb} alt={recipe.name} loading="eager" /></div>
        <div className="modal-body">
          <h3>{recipe.name}</h3>
          <p className="muted">{recipe.about}</p>
          <div className="meta">
            <span><Clock size={15} /> {recipe.time} mins</span>
            <span><Flame size={15} /> {recipe.level}</span>
            <span><Users size={15} /> Serves {recipe.serves}</span>
          </div>
          <div className="cols">
            <div>
              <h4>Ingredients</h4>
              <ul>{recipe.ingredients.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <h4>Method</h4>
              <ol>{recipe.steps.map((x) => <li key={x}>{x}</li>)}</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
