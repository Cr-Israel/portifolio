import { useId } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { ChevronRight, Download } from 'lucide-react'

export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  // Um id por instância: o mesmo <mask> renderiza no header e no rodapé.
  const maskId = `cr-mark-${useId()}`
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <mask id={maskId}>
        <rect width="256" height="256" rx="60" fill="#fff" />
        <text
          x="128"
          y="134"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="700"
          fontSize="118"
          letterSpacing="-6"
          fill="#000"
        >
          CR
        </text>
      </mask>
      <rect width="256" height="256" rx="60" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  )
}

type PillButtonProps = {
  label?: string
  href?: string
  full?: boolean
  icon?: ReactNode
}

/** Pílula branca com ícone + label + chevron que desliza no hover. */
export function PillButton({
  label = 'Baixar CV',
  href,
  full = false,
  icon = <Download className="w-4 h-4" />,
}: PillButtonProps) {
  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      }`}
    >
      {icon}
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </a>
  )
}

export function SectionEyebrow({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-white/70">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="font-medium">{label}</span>
      {tag && (
        <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-xs">{tag}</span>
      )}
    </div>
  )
}

/** Gradiente "shiny" aplicado à palavra de destaque do headline. */
export const gradientStyle: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
}
