import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      className={`theme-toggle ${dark ? 'is-dark' : ''}`}
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun size={15} className="tt-sun" />
      <Moon size={15} className="tt-moon" />
      <span className="tt-thumb" />
    </button>
  )
}
