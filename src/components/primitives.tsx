import type { CSSProperties, ReactNode } from 'react'
import { ChevronRight, Download } from 'lucide-react'

export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  // Monograma "CR" em vetor (mesmo path do favicon): o quadrado e as letras
  // vivem num path só, e o fill-rule evenodd recorta as letras.
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M60 0H196A60 60 0 0 1 256 60V196A60 60 0 0 1 196 256H60A60 60 0 0 1 0 196V60A60 60 0 0 1 60 0ZM93.29 171Q82.16 171 73.36 165.94Q64.57 160.88 59.48 151.27Q54.39 141.66 54.39 128.06Q54.39 114.4 59.51 104.76Q64.62 95.12 73.45 90.06Q82.27 85 93.29 85Q100.43 85 106.58 87Q112.74 88.99 117.52 92.81Q122.29 96.64 125.33 102.17Q128.37 107.71 129.32 114.79H111.95Q111.39 111.31 109.79 108.64Q108.19 105.97 105.8 104.08Q103.41 102.2 100.32 101.22Q97.23 100.23 93.63 100.23Q87.11 100.23 82.19 103.49Q77.27 106.75 74.55 112.96Q71.82 119.18 71.82 128.06Q71.82 137.11 74.57 143.29Q77.33 149.47 82.22 152.62Q87.11 155.77 93.57 155.77Q97.17 155.77 100.23 154.78Q103.3 153.8 105.74 151.92Q108.19 150.03 109.79 147.34Q111.39 144.64 112.01 141.21H129.38Q128.7 147.05 125.92 152.39Q123.14 157.73 118.53 161.95Q113.92 166.17 107.57 168.58Q101.22 171 93.29 171ZM136.01 169.88V86.12H168.67Q178.22 86.12 184.91 89.5Q191.6 92.87 195.11 99Q198.63 105.12 198.63 113.39Q198.63 121.65 195.06 127.63Q191.49 133.62 184.72 136.8Q177.94 139.97 168.27 139.97H146.13V126.09H165.52Q170.8 126.09 174.18 124.66Q177.55 123.22 179.23 120.38Q180.92 117.55 180.92 113.39Q180.92 109.11 179.23 106.22Q177.55 103.32 174.15 101.81Q170.75 100.29 165.46 100.29H153.15V169.88ZM182.61 169.88 162.2 131.77H180.81L201.61 169.88Z"
      />
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
