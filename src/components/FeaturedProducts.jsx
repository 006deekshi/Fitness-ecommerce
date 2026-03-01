import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import clothesImage from '../assets/clothes1.webp'
import dumbbellImage from '../assets/equipment.jpg'
import supplementsImage from '../assets/suppliments.jpg'

gsap.registerPlugin(ScrollTrigger)

const FeaturedProducts = () => {
  const containerRef = useRef(null)
  const slide1Ref = useRef(null)
  const slide2Ref = useRef(null)
  const slide3Ref = useRef(null)
  const floatingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = [slide1Ref.current, slide2Ref.current, slide3Ref.current]

      // Timeline to sequence slides
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%',   
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          fastScrollEnd: true,
          overwrite: 'auto',
          snap: {
            snapTo: [0, 0.4, 0.7, 1],
            duration: { min: 0.2, max: 0.5 },
            ease: 'power1.inOut'
          }
        }
      })

      slides.forEach(slide => {
        gsap.set(slide, { willChange: 'transform' })
      })

      tl.fromTo(slides[1],
        { yPercent: 100 },
        { yPercent: 0, ease: 'power2.inOut', duration: 1 },
        0.3
      )

      tl.fromTo(slides[2],
        { yPercent: 100 },
        { yPercent: 0, ease: 'power2.inOut', duration: 1 },

      )

      // BACKGROUND FLOATING ELEMENTS
      if (floatingRef.current) {
        const elements = floatingRef.current.children
        Array.from(elements).forEach((el, i) => {
          gsap.set(el, { willChange: 'transform' })
          gsap.to(el, {
            y: i % 2 === 0 ? -100 : 100,
            x: i % 3 === 0 ? -30 : 30,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            }
          })
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const featuredSections = [
    {
      ref: slide1Ref,
      title: 'ELITE ATHLETIC WEAR',
      subtitle: 'Engineered for Performance',
      description: 'Our premium clothing line uses advanced moisture-wicking fabrics and ergonomic designs to push your limits.',
      image: clothesImage,
      category: 'Clothes',
      accent: 'powder_blush'
    },
    {
      ref: slide2Ref,
      title: 'PRECISION EQUIPMENT',
      subtitle: 'Built for Strength',
      description: 'Forged from industrial-grade steel and finished with high-grip matte coating for the ultimate training experience.',
      image: dumbbellImage,
      category: 'Equipment',
      accent: 'grey_olive'
    },
    {
      ref: slide3Ref,
      title: 'ELITE SUPPLEMENTS',
      subtitle: 'Fuel Your Ambition',
      description: 'Pure, science-backed nutrition to accelerate recovery and maximize gains. Clean ingredients, real results.',
      image: supplementsImage,
      category: 'Supplements',
      accent: 'parchment'
    }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-parchment-500">
      {/* FLOATING DECORATIVE BACKGROUND */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none z-5 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 border-2 border-taupe-500/20 rounded-full" />
        <div className="absolute top-[60%] right-[8%] w-48 h-48 border-2 border-powder_blush-500/30 rounded-full" />
        <div className="absolute bottom-[15%] left-[12%] w-24 h-24 bg-grey_olive-500/10 rounded-full blur-xl" />
        <div className="absolute top-[30%] right-[25%] w-16 h-16 bg-taupe-500/5 rounded-full" />
      </div>

      {featuredSections.map((section, index) => (
        <div
          key={index}
          ref={section.ref}
          className="absolute inset-0 h-screen w-full flex items-center justify-center p-6 md:p-24 bg-parchment-500"
          style={{ zIndex: (index + 1) * 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-parchment-500 via-parchment-600 to-powder_blush-900/10" />

          <div className="relative z-20 max-w-7xl mx-auto w-full pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="space-y-4">
                <span className="text-taupe-500 font-black tracking-[0.3em] uppercase mb-2 block text-sm opacity-60">
                  {section.category}
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-taupe-500 leading-tight mb-4 drop-shadow-sm">
                  {section.title}
                </h2>
                <h3 className="text-2xl md:text-3xl font-medium text-grey_olive-500 italic">
                  {section.subtitle}
                </h3>
              </div>

              <p className="text-lg md:text-xl text-grey_olive-600/90 leading-relaxed max-w-lg font-medium">
                {section.description}
              </p>

              <button className="group relative px-8 py-4 bg-transparent border-2 border-taupe-500 text-taupe-500 font-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:text-parchment-500">
                <span className="relative z-10">Discover Collection</span>
                <div className="absolute inset-0 bg-taupe-500 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute w-[120%] h-[120%] bg-powder_blush/10 rounded-full blur-[100px]" />
              <img
                src={section.image}
                alt={section.title}
                className="relative w-full max-w-xl h-auto drop-shadow-[0_20px_50px_rgba(70,63,58,0.2)] rounded-3xl"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default FeaturedProducts