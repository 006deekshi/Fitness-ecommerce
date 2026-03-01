import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dumbbellImage from '../assets/eqipment.jpg'
import clothesImage from '../assets/clothes.jpg'
import supplementsImage from '../assets/suppliments1.jpg'

gsap.registerPlugin(ScrollTrigger)

const CategoriesNew = () => {
  const sectionRef = useRef(null)
  const equipmentCardRef = useRef(null)
  const apparelCardRef = useRef(null)
  const supplementsCardRef = useRef(null)
  const dumbbellRef = useRef(null)
  const clothesRef = useRef(null)
  const supplementsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([equipmentCardRef.current, apparelCardRef.current, supplementsCardRef.current],
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      )
      gsap.from(dumbbellRef.current, {
        x: -300,
        y: -400,
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(clothesRef.current, {
        x: 300,
        y: -400,
        scale: 0.5,
        rotation: 20,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
      gsap.from(supplementsRef.current, {
        x: 0,
        y: -500,
        scale: 0.7,
        rotation: -15,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const categories = [
    {
      ref: apparelCardRef,
      imageRef: clothesRef,
      image: clothesImage,
      title: 'Clothes',
      description: 'Premium athletic wear designed for peak performance',
      icon: '👕',
    },
    {
      ref: equipmentCardRef,
      imageRef: dumbbellRef,
      image: dumbbellImage,
      title: 'Equipment',
      description: 'Professional-grade equipment for serious athletes',
      icon: '🏋️',
    },
    {
      ref: supplementsCardRef,
      imageRef: supplementsRef,
      image: supplementsImage,
      title: 'Supplements',
      description: 'Science-backed nutrition to fuel your gains',
      icon: '💊',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative py-24 px-6 bg-gradient-to-br from-taupe-500 to-taupe-400"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-parchment-500 mb-4 uppercase tracking-tighter">
            SHOP BY CATEGORY
          </h2>
          <div className="mx-auto h-2 w-32 bg-powder_blush-500 rounded-full shadow-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              ref={category.ref}
              className="group relative bg-taupe-300/80 backdrop-blur-md border-2 border-powder_blush-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_45px_100px_rgba(224,175,160,0.3)] cursor-pointer"
            >

              {category.image && (
                <div className="relative h-72 bg-gradient-to-br from-taupe-200/30 to-taupe-300/50 flex items-center justify-center overflow-hidden rounded-t-2xl">
                  <img
                    ref={category.imageRef}
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110 rounded-3xl"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(224, 175, 160, 0.4)) brightness(1.1) contrast(1.1)',
                      mixBlendMode: 'normal',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-taupe-500/20 to-transparent pointer-events-none rounded-t-2xl" />
                </div>
              )}

              {!category.image && (
                <div className="relative h-72 bg-gradient-to-br from-taupe-200/30 to-taupe-300/50 flex items-center justify-center">
                  <div className="text-9xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 filter drop-shadow-[0_10px_30px_rgba(224,175,160,0.5)]">
                    {category.icon}
                  </div>
                </div>
              )}

              <div className="relative p-8 space-y-4 bg-gradient-to-b from-taupe-600/60 to-taupe-500/80 backdrop-blur-sm">
                <div className="relative z-10">

                  <h3 className="text-3xl font-black text-parchment-500 mb-3 uppercase tracking-tight drop-shadow-lg">
                    {category.title}
                  </h3>


                  <p className="text-silver-500 text-sm font-semibold leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="flex items-center space-x-2 text-powder_blush-400 font-black text-sm uppercase tracking-widest transition-all duration-300 group-hover:translate-x-2 group-hover:text-powder_blush-300">
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-powder_blush-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-powder_blush-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesNew
