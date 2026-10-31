import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'

const Ctx = createContext(null)
export const useCart = () => useContext(Ctx)
const TAX = 0.1
const KEY = 'fh-cart'

function reducer(state, a) {
  switch (a.type) {
    case 'add': {
      const found = state.find((i) => i.id === a.item.id)
      return found
        ? state.map((i) => (i.id === a.item.id ? { ...i, qty: i.qty + 1 } : i))
        : [...state, { ...a.item, qty: 1 }]
    }
    case 'inc': return state.map((i) => (i.id === a.id ? { ...i, qty: Math.min(i.qty + 1, 20) } : i))
    case 'dec': return state.map((i) => (i.id === a.id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    case 'remove': return state.filter((i) => i.id !== a.id)
    case 'clear': return []
    default: return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
  })
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const timer = useRef()

  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(items)) } catch {} }, [items])

  const add = useCallback((item) => {
    dispatch({ type: 'add', item })
    setToast(`${item.name} added to cart`)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 2200)
  }, [])

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0)
    const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
    const tax = subtotal * TAX
    return {
      items, count, subtotal, tax, total: subtotal + tax, open, toast, add,
      inc: (id) => dispatch({ type: 'inc', id }),
      dec: (id) => dispatch({ type: 'dec', id }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
      qtyOf: (id) => items.find((i) => i.id === id)?.qty || 0,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
    }
  }, [items, open, toast, add])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const money = (n) => `$${n.toFixed(2)}`
