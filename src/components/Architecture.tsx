import { motion } from 'motion/react'
import { SectionEyebrow } from './primitives'
import { architectureLayers, triageChips } from '../data/portfolio'

export default function Architecture() {
  return (
    <section id="arquitetura" className="site-container py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionEyebrow label="Arquitetura" tag="DDD-first" />
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Domínio no centro,
            <br />
            framework na borda.
          </h2>
          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Modelo o problema antes de escolher a ferramenta. As regras de negócio ficam isoladas em uma camada
            que compila sozinha; banco, HTTP e filas entram depois, como detalhes que podem ser trocados sem
            reescrever o que importa.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {triageChips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="liquid-glass rounded-2xl p-5"
        >
          <p className="text-xs text-white/40">Fluxo de dependência · de fora para dentro</p>

          <div className="mt-4 space-y-2.5">
            {architectureLayers.map((layer) => (
              <div key={layer.title} className="liquid-glass rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: layer.color }} />
                  <span className="text-xs font-semibold text-white">{layer.title}</span>
                  <span className="ml-auto text-[10px] text-white/35">{layer.count}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {layer.items.map((item) => (
                    <li key={item} className="text-[11px] text-white/50 leading-[1.5]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
