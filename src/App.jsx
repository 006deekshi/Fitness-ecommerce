import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from './components/Navigation'
import HeroNew from './components/HeroNew'
import CategoriesNew from './components/CategoriesNew'
import FeaturedProducts from './components/FeaturedProducts'
import Stats from './components/Stats'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // GLOBAL PERFORMANCE & SMOOTHING SETTINGS
    ScrollTrigger.normalizeScroll(true)
    ScrollTrigger.config({ limitCallbacks: true })

    // Force a refresh after layout settles to prevent "jumpy" starts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-parchment-500 selection:bg-powder_blush-200 selection:text-taupe-500">
      <Navigation />
      <HeroNew />
      <CategoriesNew />
      <FeaturedProducts />
      <Stats />
      <Footer />
    </div>
  )
}

export default App
