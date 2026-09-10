import { motion } from 'motion/react'
import { PillButton, gradientStyle } from './primitives'
import { profile } from '../data/portfolio'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
      >
        <span className="block text-white">{profile.name}.</span>
        <span className="block animate-shiny descender-safe" style={gradientStyle}>
          {profile.role}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
        className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <PillButton href={profile.cv} />
        <span className="text-xs text-white/40">PDF · atualizado para 2026</span>
      </motion.div>
    </section>
  )
}
