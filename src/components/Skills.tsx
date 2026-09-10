import { useState } from 'react'
import { hardSkills, profile, softSkills } from '../data/portfolio'

function Check() {
  return (
    <span className="c3-check">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  )
}

export default function Skills() {
  const [soft, setSoft] = useState(false)
  const groups = soft ? softSkills : hardSkills

  return (
    <section id="skills" className="c3-pricing-section">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">{profile.name}.</span>
          <span className="c3-watermark-line-2">{profile.role}</span>
        </div>
      </div>

      <div className="c3-grid">
        {groups.map((group, i) => (
          <div key={group.tier} className={`c3-card${i === 2 ? ' c3-card-pro' : ''}`}>
            <span className="c3-tier-small">{group.tier}</span>
            <span className="c3-tier-large">{group.main}</span>
            <p className="c3-desc">{group.desc}</p>
            <ul className="c3-list">
              {group.items.map((item) => (
                <li key={item}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a className="c3-btn" href="#projetos">
              Ver projetos
            </a>
          </div>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span className="text-sm text-white/60">Soft skills</span>
        <button
          type="button"
          aria-pressed={soft}
          aria-label="Alternar entre hard skills e soft skills"
          className={`c3-toggle${soft ? ' active' : ''}`}
          onClick={() => setSoft((v) => !v)}
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  )
}
