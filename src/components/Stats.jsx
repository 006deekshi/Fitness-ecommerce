import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Stats = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef([])
  const countsRef = useRef([])

  const stats = [
    { value: 50, suffix: 'K+', label: 'Happy Athletes' },
    { value: 4.9, suffix: '', label: 'Average Rating', decimals: 1 },
    { value: 200, suffix: '+', label: 'Premium Products' },
    { value: 24, suffix: '/7', label: 'Support' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state to visible
      gsap.set(statsRef.current, {
        opacity: 1,
        y: 0
      })

      // 1. ANIMATE STAT CARDS ON SCROLL (SCRUBBED)
      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'top 30%',
          scrub: 1,
        }
      })

      cardsTl.fromTo(statsRef.current, 
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )

      // 2. COUNT UP ANIMATION (SCRUBBED)
      stats.forEach((stat, index) => {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
          onUpdate: () => {
            if (countsRef.current[index]) {
              countsRef.current[index].innerText = obj.val.toFixed(stat.decimals || 0) + stat.suffix
            }
          }
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-br from-taupe-500 to-taupe-400"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-parchment-500 mb-4 uppercase tracking-tighter">
            TRUSTED BY ATHLETES WORLDWIDE
          </h2>
          <div className="mx-auto h-2 w-32 bg-powder_blush-500 rounded-full shadow-sm" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center p-10 bg-taupe-300/80 backdrop-blur-md border-2 border-powder_blush-500/30 rounded-2xl transition-all duration-500 hover:scale-105 hover:bg-taupe-300 shadow-xl"
            >
              <div
                ref={(el) => (countsRef.current[index] = el)}
                className="text-5xl md:text-6xl font-black text-powder_blush-400 mb-2 drop-shadow-lg"
              >
                0{stat.suffix}
              </div>
              <div className="text-sm md:text-base font-black text-parchment-500 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
