import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Archive,
  Braces,
  Code2,
  ExternalLink,
  FileCode2,
  FolderGit2,
  Github,
  Layers,
  Linkedin,
  Mail,
  MoreHorizontal,
  Search,
  Server,
  Sparkles,
  Star,
  Terminal,
} from 'lucide-react'
import { profile, projects } from '../data/portfolio'

const countByStack = (tech: string) =>
  String(projects.filter((p) => p.stack.includes(tech)).length)

const NAV = [
  { icon: FolderGit2, label: 'Projetos', count: String(projects.length), active: true },
  { icon: Layers, label: 'Arquitetura', count: '4' },
  { icon: Server, label: 'Backend' },
  { icon: Braces, label: 'TypeScript', count: countByStack('TypeScript') },
  { icon: FileCode2, label: 'Python', count: countByStack('Python') },
  { icon: Terminal, label: 'DevOps' },
  { icon: Archive, label: 'Arquivados' },
]

// Uma entrada por label distinta, na ordem em que aparece nos projetos.
const LABELS = projects
  .map((p) => p.label)
  .filter((label, i, all) => all.findIndex((l) => l.name === label.name) === i)

const LINKS = [
  { icon: Github, label: 'github.com/' + profile.githubUser, href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
]

export default function Workspace() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const active = projects.find((p) => p.id === activeId)!

  return (
    <section id="projetos" className="site-container py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        {/* Title bar */}
        <div className="relative h-10 flex items-center px-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50">
            Projetos
          </span>
        </div>

        <div className="grid grid-cols-12 h-[520px]">
          {/* Sidebar */}
          <aside className="col-span-3 border-r border-white/10 bg-black/30 p-4 hidden md:flex flex-col overflow-y-auto">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Ver no GitHub
            </a>

            <nav className="mt-5 space-y-0.5">
              {NAV.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs cursor-default transition-colors ${
                    item.active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.count && <span className="text-[10px] text-white/40">{item.count}</span>}
                </div>
              ))}
            </nav>

            <div className="mt-6">
              <h4 className="px-2.5 text-[10px] uppercase tracking-[0.14em] text-white/35 font-semibold">
                Labels
              </h4>
              <div className="mt-2 space-y-0.5">
                {LABELS.map((label) => (
                  <div
                    key={label.name}
                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-xs text-white/60 hover:bg-white/5"
                  >
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: label.color }} />
                    {label.name}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Project list */}
          <div className="col-span-12 md:col-span-4 border-r border-white/10 flex flex-col overflow-hidden">
            <div className="flex items-center gap-2 px-4 h-11 border-b border-white/10 shrink-0">
              <Search className="w-3.5 h-3.5 text-white/40" />
              <span className="text-xs text-white/40">Buscar projetos</span>
            </div>

            <div className="overflow-y-auto">
              {projects.map((project) => {
                const isActive = project.id === activeId
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    className={`w-full text-left px-4 py-3 border-b border-white/5 transition-colors ${
                      isActive ? 'bg-white/[0.07]' : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {project.unread && (
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#00d2ff' }} />
                      )}
                      <span
                        className={`text-xs truncate ${
                          project.unread ? 'text-white font-semibold' : 'text-white/70 font-medium'
                        }`}
                      >
                        {project.name}
                      </span>
                      <span className="ml-auto text-[10px] text-white/35 shrink-0">{project.meta}</span>
                    </div>
                    <p className="mt-1 text-xs text-white/80 truncate">{project.subject}</p>
                    <p className="mt-0.5 text-[11px] text-white/40 truncate">{project.preview}</p>
                  </button>
                )
              })}

              <div className="px-4 pt-5 pb-2">
                <h4 className="text-[10px] uppercase tracking-[0.14em] text-white/35 font-semibold">
                  Contato
                </h4>
              </div>
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-white/55 hover:bg-white/[0.03] hover:text-white transition-colors"
                >
                  <link.icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Reader */}
          <article className="hidden md:flex col-span-5 flex-col overflow-hidden">
            <div className="flex items-center gap-1 px-4 h-11 border-b border-white/10 shrink-0">
              {[Github, ExternalLink, Star, Code2].map((Icon, i) => (
                <a
                  key={i}
                  href={active.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
              <span className="ml-auto w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="overflow-y-auto px-5 py-4">
              <h3 className="text-base font-semibold tracking-tight">{active.subject}</h3>

              <div className="mt-3 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold shrink-0">
                  {active.initial}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-white truncate">{active.name}</p>
                  <p className="text-[11px] text-white/40">
                    {profile.githubUser} · {active.stack.length} tecnologias
                  </p>
                </div>
                <span
                  className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-white/10 shrink-0"
                  style={{ color: active.label.color }}
                >
                  {active.label.name}
                </span>
              </div>

              <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#A4F4FD' }} />
                  <span className="text-[11px] font-semibold text-white/80">Resumo do projeto</span>
                </div>
                <p className="mt-2 text-xs text-white/60 leading-[1.6]">{active.summary}</p>
              </div>

              <div className="mt-4 space-y-3 text-xs leading-[1.7]">
                <p className="text-white/75">{active.problem}</p>
                {active.highlights.map((h) => (
                  <p key={h.title} className="text-white/60">
                    <strong className="text-white/85 font-semibold">{h.title}:</strong> {h.body}
                  </p>
                ))}
                {active.paragraphs.map((p) => (
                  <p key={p} className="text-white/60">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-white/65 px-2 py-1 rounded-md border border-white/10 bg-white/[0.03]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={active.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                {active.repo.replace('https://github.com/', '')}
              </a>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  )
}
