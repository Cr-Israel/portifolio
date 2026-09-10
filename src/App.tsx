import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Workspace from './components/Workspace'
import Architecture from './components/Architecture'
import StackCloud from './components/StackCloud'
import Principles from './components/Principles'
import Skills from './components/Skills'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      {/* Vídeo de fundo fixo, atrás de tudo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover pointer-events-none scale-105 blur-[1px]"
        >
          {/* Cópia local otimizada (1.9 MB); o CDN original fica como fallback. */}
          <source src="/bg-aura.mp4" type="video/mp4" />
          <source src={BG_VIDEO} type="video/mp4" />
        </video>
        {/* Véu que mantém o contraste do texto sobre as partes claras do vídeo. */}
        <div className="absolute inset-0 bg-[#0c0c0c]/80" />
      </div>

      {/* Guias verticais nas bordas do container de 36rem */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* Filtro de ruído usado pelo headline com gradiente */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      <MotionConfig reducedMotion="user">
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Workspace />
        <Architecture />
        <StackCloud />
        <Principles />
        <Skills />
        <FinalCTA />
        <Footer />
      </main>
      </MotionConfig>
    </div>
  )
}
