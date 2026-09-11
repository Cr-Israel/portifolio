import { motion } from 'motion/react'
import { ChevronRight, Mail } from 'lucide-react'
import { PillButton } from './primitives'
import { profile } from '../data/portfolio'

export default function FinalCTA() {
  return (
    <section id="contato" className="site-container py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)',
            opacity: 0.3,
          }}
        />

        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Backend que não
            <br />
            vira dívida técnica amanhã.
          </h2>
          <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6]">
            Construo APIs bem modeladas, com arquitetura pensada para evoluir e código que continua 
            fazendo sentido conforme o produto cresce.
            <br />
            <strong>Tem um desafio de backend? Vamos conversar.</strong>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PillButton
              label="Enviar email"
              href={`mailto:${profile.email}`}
              icon={<Mail className="w-4 h-4" />}
            />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors"
            >
              LinkedIn
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
