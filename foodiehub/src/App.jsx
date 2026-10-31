import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import Menu from './components/Menu.jsx'
import Recipes from './components/Recipes.jsx'
import RecipeModal from './components/RecipeModal.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const [recipe, setRecipe] = useState(null)
  return (
    <>
      <Navbar onOpenRecipe={setRecipe} />
      <main>
        <Hero />
        <Featured />
        <Menu />
        <Recipes onOpen={setRecipe} />
        <About />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <RecipeModal recipe={recipe} onClose={() => setRecipe(null)} />
      <Toast />
    </>
  )
}
