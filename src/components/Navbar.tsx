import { motion } from 'motion/react'
import { Menu } from 'lucide-react'
import { LogoMark, PillButton } from './primitives'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  return (
    <div className="site-container">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center justify-between py-5"
      >
        <a href="#home" aria-label={profile.name} className="text-white">
          <LogoMark />
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block">
          <PillButton href={profile.cv} />
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
          onClick={() => {
            document.querySelector('#projetos')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Menu className="w-4 h-4" />
        </button>
      </motion.nav>
    </div>
  )
}
