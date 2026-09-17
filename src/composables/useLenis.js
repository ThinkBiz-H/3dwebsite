import Lenis from '@studio-freight/lenis'
import { gsap, ScrollTrigger } from './gsapSetup'

let lenis = null
let started = false

export function useLenis() {
  function start() {
    if (started) return lenis
    started = true

    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return lenis
  }

  function scrollTo(target, opts = {}) {
    lenis?.scrollTo(target, { offset: -80, duration: 1.4, ...opts })
  }

  function stop() {
    lenis?.stop()
  }

  function resume() {
    lenis?.start()
  }

  return { start, scrollTo, stop, resume, instance: () => lenis }
}
