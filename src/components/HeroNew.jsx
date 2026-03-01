import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dumbbellImage from '../assets/dumbbells.png'

gsap.registerPlugin(ScrollTrigger)

const HeroNew = () => {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const bgRef = useRef(null)
  const floatingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATES
      gsap.set([imageRef.current, textRef.current], {
        x: 0,
        y: 0,
        willChange: 'transform, opacity'
      })

      gsap.set(textRef.current, {
        opacity: 0,
        scale: 0.9,
      })

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
      })

      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out'
      })

      gsap.to(imageRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      const elements = floatingRef.current.children
      Array.from(elements).forEach((el, i) => {
        gsap.to(el, {
          x: 'random(-30, 30)',
          y: 'random(-30, 30)',
          duration: `random(6, 12)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.4
        })
      })

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      })

      masterTl.to(imageRef.current, {
        x: -300,
        scale: 0.85,
        ease: 'power2.inOut',
      }, 0)

      masterTl.to(textRef.current, {
        opacity: 1,
        x: 350,
        scale: 1,
        ease: 'power2.inOut',
      }, 0)

      masterTl.to(bgRef.current, {
        y: 100,
        ease: 'none',
      }, 0)

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center bg-parchment-500"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-parchment-500 via-silver-900 to-powder_blush-900/10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-60" />
      </div>

      <div ref={floatingRef} className="absolute inset-0 overflow-hidden pointer-events-none z-5 opacity-40">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-powder_blush-200 rounded-full blur-[40px] will-change-transform" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-silver-500/20 rounded-full blur-[50px] will-change-transform" />
        <div className="absolute top-[40%] right-[10%] w-48 h-48 bg-taupe-500/5 rounded-full blur-[30px] will-change-transform" />
        <div className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-grey_olive-500/10 rounded-full blur-[45px] will-change-transform" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none p-6">
        <div
          ref={textRef}
          className="flex flex-col items-center text-center md:items-start md:text-left space-y-6 max-w-lg"
        >
          <h2 className="text-5xl md:text-8xl font-black text-taupe-500 uppercase tracking-tighter drop-shadow-sm">
            Welcome
          </h2>

          <div className="h-2 w-32 bg-powder_blush-500 rounded-full shadow-sm" />

          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-taupe-500 to-grey_olive-500">
            IRON FORGE
          </h1>

          <p className="text-lg md:text-2xl text-grey_olive-500 font-bold leading-relaxed opacity-90">
            Transform your fitness journey with premium equipment and elite guidance.
          </p>
        </div>
      </div>
      
      <div
        ref={imageRef}
        className="relative z-20 pointer-events-none flex justify-center items-center p-6"
      >
        <div className="relative bg-parchment-500 rounded-3xl p-8">
          <img
            src={dumbbellImage}
            alt="Premium Dumbbells"
            className="w-full max-w-[450px] md:max-w-[650px] h-auto drop-shadow-[0_45px_100px_rgba(70,63,58,0.15)] rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroNew