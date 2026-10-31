import { useRef } from 'react'

// 3D hover card: perspective tilt plus a moving glare highlight.
export default function Tilt({ children, max = 9, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${((0.5 - y) * max).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((x - 0.5) * max).toFixed(2)}deg`)
    el.style.setProperty('--gx', `${(x * 100).toFixed(0)}%`)
    el.style.setProperty('--gy', `${(y * 100).toFixed(0)}%`)
  }
  const leave = () => {
    const el = ref.current
    ;['--rx', '--ry'].forEach((p) => el.style.setProperty(p, '0deg'))
  }
  return (
    <Tag ref={ref} className={`tilt ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </Tag>
  )
}
