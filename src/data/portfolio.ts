export const profile = {
  name: 'Carlos Israel',
  fullName: 'Carlos Israel Mesquita Alvares',
  role: 'Backend Engineer',
  headline: 'TypeScript, Node.js e Python',
  email: 'carlosisrael08@hotmail.com',
  github: 'https://github.com/Cr-Israel',
  githubUser: 'Cr-Israel',
  linkedin: 'https://www.linkedin.com/in/carlos-israel/',
  cv: 'https://drive.google.com/file/d/16AqJFHHBhbM1gdXvWAbEU7U__ACGkc_a/view?usp=sharing',
  intro:
    'Construo APIs e sistemas backend que aguentam crescer. Node.js e TypeScript com DDD e Clean Architecture, do domínio bem modelado até o deploy conteinerizado.',
}

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Arquitetura', href: '#arquitetura' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
]

export type Project = {
  id: string
  name: string
  subject: string
  preview: string
  meta: string
  unread?: boolean
  summary: string
  problem: string
  highlights: { title: string; body: string }[]
  paragraphs: string[]
  stack: string[]
  label: { name: string; color: string }
  repo: string
  initial: string
}

export const projects: Project[] = [
  {
    id: 'cleantalks',
    name: 'CleanTalks',
    subject: 'Fórum com DDD & Clean Architecture',
    preview: 'Separação total entre regras de negócio e infraestrutura...',
    meta: 'NestJS',
    unread: true,
    summary:
      'Fórum modular com domínio isolado da infraestrutura, comunicação por eventos (Pub/Sub) e suíte de testes unitários em banco in-memory — sem tocar no Postgres.',
    problem:
      'Sistemas complexos costumam sofrer com código acoplado e difícil de testar. O CleanTalks resolve isso ao aplicar arquitetura de software de alto nível para garantir que a plataforma seja escalável e fácil de manter a longo prazo.',
    highlights: [
      {
        title: 'DDD & Clean Architecture',
        body: 'Separação total entre regras de negócio e infraestrutura.',
      },
      {
        title: 'Pub/Sub Pattern',
        body: 'Comunicação entre módulos via eventos, garantindo desacoplamento e performance.',
      },
      {
        title: 'In-Memory Database',
        body: 'Estratégia para testes unitários ultrarrápidos e desacoplamento do banco de dados.',
      },
    ],
    paragraphs: [
      'O domínio não conhece o framework. Entidades, value objects e casos de uso vivem numa camada que compila sozinha, e o NestJS entra apenas como detalhe de entrega.',
      'Cada caso de uso publica eventos de domínio; os assinantes reagem sem que o emissor saiba quem escuta. Notificações, contadores e integrações entram e saem sem tocar na regra.',
    ],
    stack: ['NestJS', 'TypeScript', 'DDD', 'Clean Architecture', 'Prisma', 'Docker', 'Vitest'],
    label: { name: 'Arquitetura', color: '#00d2ff' },
    repo: 'https://github.com/Cr-Israel/CleanTalks',
    initial: 'C',
  },
  {
    id: 'shortener',
    name: 'Shortener URL',
    subject: 'Encurtador de alta performance',
    preview: 'Redirecionamentos com baixíssima latência via Fastify...',
    meta: 'Fastify',
    unread: true,
    summary:
      'Encurtador full stack: Fastify na borda para redirecionar com latência mínima, MongoDB via Prisma para persistência e Zod garantindo que nenhuma URL inválida entre.',
    problem:
      'Links longos dificultam o compartilhamento e a memorização. O Shortener-URL resolve isso oferecendo um serviço de encurtamento rápido e seguro, focado em alta performance e uma experiência de usuário fluida e minimalista.',
    highlights: [
      {
        title: 'Fastify & Performance',
        body: 'Backend otimizado para oferecer redirecionamentos com baixíssima latência.',
      },
      {
        title: 'Prisma & MongoDB',
        body: 'Persistência flexível e eficiente utilizando um dos bancos NoSQL mais populares do mercado.',
      },
      {
        title: 'Zod Validation',
        body: 'Tipagem e validação rigorosa de dados para garantir a integridade de cada URL gerada.',
      },
    ],
    paragraphs: [
      'O caminho de redirect é o mais curto possível: resolve o slug, responde 302 e sai da frente. Todo o resto — criação, listagem, métricas — fica fora dessa rota.',
      'O front em React + Vite consome a mesma tipagem do backend, então o contrato quebra em tempo de compilação e não em produção.',
    ],
    stack: ['TypeScript', 'Fastify', 'Prisma', 'MongoDB', 'React', 'Vite', 'Tailwind CSS'],
    label: { name: 'Full Stack', color: '#A4F4FD' },
    repo: 'https://github.com/Cr-Israel/Shortener-URL',
    initial: 'S',
  },
  {
    id: 'vuttr',
    name: 'VUTTR',
    subject: 'API RESTful de gestão de ferramentas',
    preview: 'JWT, Swagger e cobertura de testes unitários e E2E...',
    meta: 'PostgreSQL',
    summary:
      'API completa para catalogar utilitários por tags, com autenticação JWT, documentação interativa em Swagger e ambiente 100% conteinerizado.',
    problem:
      'Desenvolvedores utilizam diversas ferramentas diariamente, mas centralizá-las e categorizá-las de forma eficiente é um desafio. O VUTTR resolve isso ao oferecer uma API RESTful completa para gerenciar um repositório pessoal de utilitários, permitindo busca rápida por tags e gestão segura de ferramentas.',
    highlights: [
      {
        title: 'Arquitetura e Testes',
        body: 'Clean Architecture e DDD com confiabilidade garantida por testes unitários e E2E via Vitest.',
      },
      {
        title: 'Segurança e Documentação',
        body: 'Autenticação via JWT para proteção de dados e documentação interativa gerada com Swagger/OpenAPI.',
      },
      {
        title: 'Docker & Infraestrutura',
        body: 'Ambiente totalmente conteinerizado com Docker e Docker Compose para facilitar deploy e escalabilidade.',
      },
    ],
    paragraphs: [
      'A busca por tags roda direto no Postgres com índice dedicado, e cada endpoint nasce documentado: o schema Zod alimenta o Swagger, então a doc nunca diverge do código.',
      'Os testes E2E sobem o ambiente real via Docker Compose, isolam o banco por execução e derrubam tudo ao final.',
    ],
    stack: ['Fastify', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT', 'Swagger', 'Docker'],
    label: { name: 'API', color: '#f59e0b' },
    repo: 'https://github.com/Cr-Israel/VUTTR',
    initial: 'V',
  },
]

export const stackCloud = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'Fastify',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Docker',
]

export const principles = [
  {
    quote:
      'O domínio não deve saber que o banco existe. Quando a regra de negócio compila sozinha, trocar de infraestrutura vira detalhe de implementação.',
    name: 'Clean Architecture',
    role: 'Camadas isoladas, dependências apontando para dentro',
    company: 'CleanTalks',
  },
  {
    quote:
      'Teste rápido é teste que roda. Repositórios in-memory deixam a suíte inteira executar em segundos, então ninguém pula a verificação para entregar mais cedo.',
    name: 'Testes primeiro',
    role: 'Unitários com in-memory, E2E com Docker Compose',
    company: 'VUTTR',
  },
  {
    quote:
      'Validação na borda é o que separa um bug em produção de um 400 bem explicado. Zod na entrada, tipos derivados dela em todo o resto.',
    name: 'Type safety de ponta a ponta',
    role: 'Contratos que quebram em build, não em runtime',
    company: 'Shortener-URL',
  },
]

export const hardSkills = [
  {
    tier: 'Linguagens & Runtime',
    main: 'TypeScript',
    desc: 'A base de tudo que escrevo: tipagem estrita no backend, no front e nos scripts de dados.',
    items: ['JavaScript', 'TypeScript', 'Node.js', 'Python', 'Pandas'],
  },
  {
    tier: 'Frameworks & Dados',
    main: 'NestJS',
    desc: 'Frameworks backend e persistência — do módulo bem separado até a query bem indexada.',
    items: ['NestJS', 'Fastify', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    tier: 'Ferramentas & DevOps',
    main: 'Docker',
    desc: 'Ambiente reproduzível, pipeline automatizado e API documentada por padrão.',
    items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Swagger', 'Vitest'],
  },
]

export const softSkills = [
  {
    tier: 'Como eu penso',
    main: 'Análise',
    desc: 'Entender o problema antes de escolher a ferramenta — a maior parte da complexidade é acidental.',
    items: ['Resolução de Problemas', 'Pensamento Analítico', 'Atenção aos Detalhes', 'Aprendizado Contínuo'],
  },
  {
    tier: 'Como eu trabalho',
    main: 'Time',
    desc: 'Código é comunicação assíncrona. Vale para o PR, para a doc e para a conversa no daily.',
    items: ['Trabalho em Equipe', 'Comunicação Efetiva', 'Code Review', 'Documentação'],
  },
  {
    tier: 'Como eu entrego',
    main: 'Ritmo',
    desc: 'Escopo claro, entrega incremental e disponibilidade para mudar de rota quando o contexto muda.',
    items: ['Gestão de Tempo', 'Adaptabilidade', 'Entrega Incremental', 'Autonomia'],
  },
]

export const triageChips = [
  'Domain-Driven Design',
  'Clean Architecture',
  'Pub/Sub & eventos',
  'Testes unitários e E2E',
]

export const architectureLayers = [
  {
    title: 'Domain',
    count: 'entities · value objects',
    color: '#ffffff',
    items: ['Regras de negócio puras, sem dependência externa', 'Eventos de domínio disparados pelo agregado'],
  },
  {
    title: 'Application',
    count: 'use cases',
    color: '#e5e5e5',
    items: ['Um caso de uso por intenção do usuário', 'Orquestra o domínio via interfaces de repositório'],
  },
  {
    title: 'Infrastructure',
    count: 'prisma · http',
    color: '#a3a3a3',
    items: ['Prisma, controllers e filas como detalhe substituível', 'Adapters implementam contratos do domínio'],
  },
  {
    title: 'Tests',
    count: 'vitest',
    color: '#525252',
    items: ['In-memory nos unitários · Docker Compose nos E2E'],
  },
]
