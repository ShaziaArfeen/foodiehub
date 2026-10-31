import { ArrowRight } from 'lucide-react'

export default function SectionHead({ kicker, title, href, cta }) {
  return (
    <div className="sec-head">
      <div>
        <span className="kicker"><i />{kicker}</span>
        <h2>{title}</h2>
      </div>
      {cta && <a href={href} className="btn btn-ghost sm">{cta} <ArrowRight size={14} /></a>}
    </div>
  )
}
