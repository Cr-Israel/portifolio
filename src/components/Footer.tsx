import { Github, Linkedin, Mail } from 'lucide-react'
import { LogoMark } from './primitives'
import { profile } from '../data/portfolio'

const SOCIALS = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="site-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <LogoMark className="w-5 h-5 text-white/70" />
          <p className="text-xs text-white/40">
            © 2026 {profile.fullName}. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.07] transition-colors"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
