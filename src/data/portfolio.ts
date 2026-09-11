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
    id: 'microservices',
    name: 'Microservices',
    subject: 'Microsserviços com RabbitMQ, Kong e Jaeger',
    preview: 'Orders e Invoices se falam por eventos; tracing distribuído via OTLP...',
    meta: 'RabbitMQ',
    unread: true,
    summary:
      'Dois serviços em TypeScript (Orders e Invoices) que se comunicam de forma assíncrona via RabbitMQ, atrás de um Kong API Gateway declarativo, com tracing distribuído no Jaeger via OpenTelemetry e infra na AWS provisionada com Pulumi.',
    problem:
      'Quando um pedido é criado, a fatura precisa ser gerada sem que o serviço de pedidos dependa do de faturas estar no ar. O projeto resolve isso com mensageria: Orders publica um evento e segue; Invoices consome quando puder, e cada requisição pode ser rastreada de ponta a ponta.',
    highlights: [
      {
        title: 'Comunicação assíncrona',
        body: 'RabbitMQ desacopla os serviços; contratos de mensagem compartilhados em um pacote comum garantem o mesmo tipo dos dois lados.',
      },
      {
        title: 'Kong API Gateway (DB-less)',
        body: 'Ponto de entrada único com roteamento declarativo em YAML, sem banco de dados para o gateway.',
      },
      {
        title: 'Observabilidade com OpenTelemetry',
        body: 'Auto-instrumentação Node exporta spans via OTLP para o Jaeger; atributos como order.id acompanham a requisição.',
      },
    ],
    paragraphs: [
      'Cada serviço tem seu próprio Postgres com Drizzle ORM e migrações versionadas; nada é compartilhado além do contrato de mensagens. As rotas Fastify usam Zod como type provider, então o schema valida em runtime e tipa em compile time.',
      'A pasta infra sobe cluster ECS, load balancer e o broker na AWS com Pulumi, e o build das imagens Docker faz parte do mesmo programa TypeScript.',
    ],
    stack: ['TypeScript', 'Fastify', 'RabbitMQ', 'Kong', 'OpenTelemetry', 'Jaeger', 'Drizzle', 'PostgreSQL', 'Pulumi', 'Docker'],
    label: { name: 'Microsserviços', color: '#a78bfa' },
    repo: 'https://github.com/Cr-Israel/microservices',
    initial: 'M',
  },
  {
    id: 'email-classifier',
    name: 'Email Classifier',
    subject: 'Triagem de e-mails com LLM',
    preview: 'FastAPI + LangChain: classifica como produtivo/improdutivo e sugere resposta...',
    meta: 'Python',
    summary:
      'API em FastAPI que recebe um e-mail (texto, .txt ou .pdf), pré-processa com NLTK e usa um LLM via LangChain para classificar como Produtivo ou Improdutivo, devolvendo junto uma sugestão de resposta.',
    problem:
      'Times com alto volume de e-mails gastam tempo só triando o que precisa de resposta. Mensagens operacionais ficam misturadas com agradecimentos e confirmações automáticas. O Email Classifier automatiza essa triagem e já entrega um rascunho de resposta compatível com a categoria.',
    highlights: [
      {
        title: 'Pré-processamento antes da inferência',
        body: 'Normalização, remoção de stop words em português e stemming com NLTK reduzem ruído antes do prompt chegar ao modelo.',
      },
      {
        title: 'LangChain + Hugging Face',
        body: 'Inferência via HuggingFaceEndpoint (Mixtral 8x7B Instruct), com o provedor isolado em um módulo trocável.',
      },
      {
        title: 'Resposta condicionada à categoria',
        body: 'A sugestão não é gerada livremente: o prompt amarra o tom e o tamanho da resposta à classificação decidida.',
      },
    ],
    paragraphs: [
      'O endpoint aceita texto puro ou upload multipart; PDFs passam pelo PyPDF2 e arquivos são validados por extensão antes de qualquer leitura.',
      'O backend fica separado do front (deploy estático no Netlify), então trocar o modelo ou plugar outro cliente (extensão, integração com caixa de entrada) não exige reescrever a interface.',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'Hugging Face', 'NLTK', 'PyPDF2', 'Uvicorn'],
    label: { name: 'IA', color: '#10b981' },
    repo: 'https://github.com/Cr-Israel/email-classifier-back',
    initial: 'E',
  },
  {
    id: 'cleantalks',
    name: 'CleanTalks',
    subject: 'Fórum com DDD & Clean Architecture',
    preview: 'Separação total entre regras de negócio e infraestrutura...',
    meta: 'NestJS',
    unread: true,
    summary:
      'Fórum modular com domínio isolado da infraestrutura, comunicação por eventos (Pub/Sub) e suíte de testes unitários em banco in-memory, sem tocar no Postgres.',
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
  {
    id: 'gympass',
    name: 'GymPass API',
    subject: 'Check-in em academias por geolocalização',
    preview: 'Raio de 100 m, RBAC por JWT e refresh token em cookie httpOnly...',
    meta: 'Fastify',
    unread: true,
    summary:
      'API de check-in estilo GymPass: valida distância até a academia, bloqueia dois check-ins no mesmo dia e restringe validação a administradores, tudo testado sem tocar no banco.',
    problem:
      'Um check-in só faz sentido se o usuário estiver de fato na academia. A GymPass API resolve isso com regras de negócio explícitas: raio máximo de 100 m, um check-in por dia, validação apenas por ADMIN e dentro de 20 minutos após a criação.',
    highlights: [
      {
        title: 'SOLID & inversão de dependência',
        body: 'Use cases recebem repositórios por construtor e dependem de interfaces; o Prisma é detalhe de infraestrutura.',
      },
      {
        title: 'RBAC via middleware',
        body: 'Cadastro de academia e validação de check-in exigem o papel ADMIN, verificado direto no JWT.',
      },
      {
        title: 'Refresh token em cookie httpOnly',
        body: 'Access token de vida curta em memória; o refresh fica em cookie, fora do alcance de JavaScript.',
      },
    ],
    paragraphs: [
      'A busca de academias próximas (até 10 km) roda em query geográfica no Postgres, e a checagem dos 100 m fica no domínio, coberta por testes unitários com repositórios in-memory.',
      'Os E2E usam um ambiente Vitest customizado que cria um schema isolado no Postgres por execução e o derruba ao final, então as suítes rodam em paralelo sem interferência.',
    ],
    stack: ['Fastify', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT', 'Zod', 'Vitest', 'Docker'],
    label: { name: 'API', color: '#f59e0b' },
    repo: 'https://github.com/Cr-Israel/gympass-api',
    initial: 'G',
  },
]

export const stackCloud = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'Fastify',
  'PostgreSQL',
  'Prisma',
  'RabbitMQ',
  'Docker',
  'AWS',
  'Python',
  'FastAPI',
  'MongoDB',
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
    company: 'Microservices',
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
    desc: 'Frameworks backend e persistência: do módulo bem separado até a query bem indexada.',
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
    desc: 'Entender o problema antes de escolher a ferramenta, porque a maior parte da complexidade é acidental.',
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
