import { motion } from 'motion/react'
import { principles } from '../data/portfolio'

export default function Principles() {
  return (
    <section id="sobre" className="site-container py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-6">
        {principles.map((item, i) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
            className="liquid-glass rounded-2xl p-6 flex flex-col"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6] mb-6">“{item.quote}”</blockquote>
            <figcaption className="mt-auto pt-5 border-t border-white/10">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-white/50 min-h-[2.5em]">{item.role}</p>
              <p className="mt-2 text-xs text-white font-semibold tracking-wide uppercase">{item.company}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
