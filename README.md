# Carlos Israel — Portfolio

Portfólio de Carlos Israel, Backend Engineer especializado em Node.js, TypeScript e arquiteturas escaláveis.

Interface dark e cinematográfica: vídeo de fundo em loop, headline com gradiente animado, cards em "liquid glass" e um mockup interativo de workspace com os projetos.

## 🛠 Stack

- **React 18** + **TypeScript**
- **Vite 5** (build e dev server)
- **Tailwind CSS 3** (`brand: #3D81E3`, fonte Inter)
- **motion** v12 (`motion/react`) para as animações de entrada
- **lucide-react** para os ícones

## 🚦 Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
```

Outros scripts:

```bash
npm run build      # gera dist/
npm run preview    # serve o build de produção
npm run typecheck  # tsc --noEmit
```

## 📁 Estrutura

```
├── index.html                 # shell do Vite
├── public/
│   ├── bg-aura.mp4            # vídeo de fundo (versão local otimizada, 1.9 MB)
│   ├── hero-poster.jpg        # primeiro frame, exibido enquanto o vídeo carrega
│   └── logo.svg               # favicon
├── src/
│   ├── App.tsx                # composição das seções + vídeo de fundo e filtro de ruído
│   ├── index.css              # Inter, utilitários .liquid-glass / .animate-shiny / .c3-*
│   ├── data/portfolio.ts      # TODO o conteúdo (perfil, projetos, skills, princípios)
│   └── components/
│       ├── primitives.tsx     # LogoMark, AppleLogo, PillButton, SectionEyebrow, gradientStyle
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── MenuBar.tsx        # barra estilo macOS
│       ├── Workspace.tsx      # mockup interativo dos projetos
│       ├── Architecture.tsx   # camadas DDD / Clean Architecture
│       ├── StackCloud.tsx
│       ├── Principles.tsx     # princípios de engenharia
│       ├── Skills.tsx         # cards cinematográficos + toggle hard/soft skills
│       ├── FinalCTA.tsx
│       └── Footer.tsx
└── legacy/                    # versão anterior em HTML/CSS/JS puro
```

## ✏️ Como editar o conteúdo

Quase tudo vive em **`src/data/portfolio.ts`**: dados de contato, link do CV, projetos (com
destaques técnicos e stack), tecnologias, princípios e as listas de hard/soft skills.
Adicionar um projeto novo é acrescentar um objeto ao array `projects` — o mockup e a
navegação se ajustam sozinhos.

## 🎨 Detalhes de design

- **Vídeo de fundo**: `public/bg-aura.mp4` com fallback para o CDN original em `App.tsx`.
  Um véu `bg-[#0c0c0c]/80` garante contraste AA do texto sobre as partes claras do vídeo.
- **`.liquid-glass`**: borda em gradiente feita com `mask-composite`, usada nos cards.
- **`.animate-shiny`**: gradiente de 200% deslizando em 6s sobre o headline.
- **`.c3-*`**: seção de skills com watermark gigante, cards de 44px de raio e carrossel
  com scroll-snap abaixo de 1024px.
- `prefers-reduced-motion` desativa as animações contínuas e as transições de hover.

## 🌐 Deploy

Build estático — publique a pasta `dist/` em GitHub Pages, Netlify, Vercel ou Cloudflare Pages.

## 📧 Contato

- **Email**: carlosisrael08@hotmail.com
- **GitHub**: [Cr-Israel](https://github.com/Cr-Israel)
- **LinkedIn**: [Carlos Israel](https://www.linkedin.com/in/carlos-israel/)

---

© 2026 Carlos Israel Mesquita Alvares.
