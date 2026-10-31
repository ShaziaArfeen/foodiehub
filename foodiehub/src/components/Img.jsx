import { useState } from 'react'

export const local = (name) => `${import.meta.env.BASE_URL}img/${name}.jpg`

// Loads the HD web image first and falls back to the bundled local image if it cannot load.
export default function Img({ src, fb, alt, className, ...rest }) {
  const [s, setS] = useState(src)
  const fallback = local(fb)
  return (
    <img
      src={s}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => s !== fallback && setS(fallback)}
      {...rest}
    />
  )
}
