/* ============================================================
   HYPATIA — script.js (Versão Expandida)
   ============================================================ */

/* ── 1. TRADUÇÕES ── */
const i18n = {
  pt: {
    onboarding_title: "Bem-vindo à Hypatia",
    onboarding_subtitle: "Sua mentora de IA para programação. Vamos personalizar sua experiência.",
    onboarding_name: "Seu nome",
    onboarding_email: "Seu e-mail",
    onboarding_cta: "Começar agora →",
    nav_dashboard: "Dashboard",
    nav_learn: "Aprender",
    nav_projects: "Projetos",
    nav_chat: "Chat IA",
    nav_hackathons: "Hackathons",
    nav_settings: "Configurações",
    nav_support: "Suporte",
    user_role: "Desenvolvedor",
    dashboard_hello: "Olá,",
    dashboard_subtitle: "Pronto para evoluir hoje? Sua jornada de aprendizado continua.",
    streak_days: "dias seguidos",
    stat_lessons: "Aulas concluídas",
    stat_progress: "Progresso geral",
    stat_projects: "Projetos ativos",
    section_explore: "Explorar",
    section_recent: "Atividade Recente",
    card_learn_title: "Aprender",
    card_learn_desc: "Trilhas de aprendizado personalizadas com IA adaptativa para seu nível.",
    card_projects_title: "Projetos",
    card_projects_desc: "Construa projetos reais guiados pela Hypatia com feedback em tempo real.",
    card_chat_title: "Chat com IA",
    card_chat_desc: "Converse com a Hypatia sobre qualquer dúvida de programação, 24/7.",
    card_hackathons_title: "Hackathons",
    card_hackathons_desc: "Participe de desafios reais e acelere sua carreira como dev.",
    chat_online: "Online agora",
    learn_subtitle: "Trilhas completas de Front-end e Back-end com IA adaptativa.",
    filter_all: "Todos",
    filter_frontend: "Front-end",
    filter_backend: "Back-end",
    btn_continue: "▶ Continuar Aprendendo",
    btn_continue_course: "Continuar →",
    btn_completed: "✓ Concluído",
    btn_new_project: "+ Novo Projeto",
    projects_subtitle: "Seus projetos reais com código, estrutura e preview.",
    chat_welcome_msg: "Olá! Sou a Hypatia, sua mentora de programação. Como posso te ajudar hoje? Pode me perguntar sobre código, arquitetura, carreira ou qualquer dúvida técnica. 🚀",
    chat_placeholder: "Pergunte algo para a Hypatia...",
    chat_disclaimer: "Hypatia pode cometer erros. Verifique informações importantes.",
    settings_profile: "Perfil",
    settings_preferences: "Preferências",
    settings_account: "Conta",
    settings_theme: "Tema",
    settings_theme_desc: "Claro ou escuro",
    settings_lang: "Idioma",
    settings_lang_desc: "PT-BR ou EN",
    settings_notifications: "Notificações",
    settings_notifications_desc: "Alertas de progresso",
    settings_plan: "Plano atual",
    settings_member_since: "Membro desde",
    settings_saved: "Salvo com sucesso!",
    btn_save: "Salvar alterações",
    btn_manage: "Gerenciar",
    theme_light: "Claro",
    theme_dark: "Escuro",
    nav_support: "Suporte",
    support_subtitle: "Estamos aqui para ajudar. Descreva sua dúvida ou problema.",
    support_send_msg: "Enviar mensagem",
    support_subject: "Assunto",
    support_message: "Mensagem",
    btn_send_support: "Enviar mensagem",
    support_success_title: "Mensagem enviada!",
    support_success_desc: "Nossa equipe responderá em até 24 horas.",
    support_faq: "Perguntas frequentes",
    faq_1_q: "Como cancelar minha assinatura?",
    faq_1_a: "Acesse Configurações → Conta → Gerenciar plano e clique em \"Cancelar assinatura\".",
    faq_2_q: "Posso usar offline?",
    faq_2_a: "Algumas aulas ficam disponíveis offline após download. O chat com IA requer conexão.",
    faq_3_q: "Como redefinir minha senha?",
    faq_3_a: "Na tela de login, clique em \"Esqueci minha senha\" e siga as instruções por e-mail.",
    btn_participate: "Participar",
    btn_register: "Inscrever-se",
    btn_view_results: "Ver resultados",
    badge_live: "🔴 Ao Vivo",
    badge_upcoming: "📅 Em breve",
    badge_done: "✅ Encerrado",
    nav_community: "Comunidade",
    comm_ranking: "Ranking Global",
    comm_levels: "Sua Liga",
    comm_feed: "Feed da Comunidade",
    comm_active_members: "Membros Ativos",
  },
  en: {
    onboarding_title: "Welcome to Hypatia",
    onboarding_subtitle: "Your AI programming mentor. Let's personalize your experience.",
    onboarding_name: "Your name",
    onboarding_email: "Your e-mail",
    onboarding_cta: "Get started →",
    nav_dashboard: "Dashboard",
    nav_learn: "Learn",
    nav_projects: "Projects",
    nav_chat: "AI Chat",
    nav_hackathons: "Hackathons",
    nav_settings: "Settings",
    nav_support: "Support",
    user_role: "Developer",
    dashboard_hello: "Hello,",
    dashboard_subtitle: "Ready to grow today? Your learning journey continues.",
    streak_days: "days in a row",
    stat_lessons: "Lessons completed",
    stat_progress: "Overall progress",
    stat_projects: "Active projects",
    section_explore: "Explore",
    section_recent: "Recent Activity",
    card_learn_title: "Learn",
    card_learn_desc: "Personalized learning paths with adaptive AI for your level.",
    card_projects_title: "Projects",
    card_projects_desc: "Build real projects guided by Hypatia with real-time feedback.",
    card_chat_title: "AI Chat",
    card_chat_desc: "Talk to Hypatia about any programming question, 24/7.",
    card_hackathons_title: "Hackathons",
    card_hackathons_desc: "Join real challenges and accelerate your dev career.",
    chat_online: "Online now",
    learn_subtitle: "Complete Front-end and Back-end tracks with adaptive AI.",
    filter_all: "All",
    filter_frontend: "Front-end",
    filter_backend: "Back-end",
    btn_continue: "▶ Continue Learning",
    btn_continue_course: "Continue →",
    btn_completed: "✓ Completed",
    btn_new_project: "+ New Project",
    projects_subtitle: "Your real projects with code, structure and preview.",
    chat_welcome_msg: "Hello! I'm Hypatia, your programming mentor. How can I help you today? Ask me about code, architecture, career or any technical question. 🚀",
    chat_placeholder: "Ask Hypatia something...",
    chat_disclaimer: "Hypatia can make mistakes. Verify important information.",
    settings_profile: "Profile",
    settings_preferences: "Preferences",
    settings_account: "Account",
    settings_theme: "Theme",
    settings_theme_desc: "Light or dark",
    settings_lang: "Language",
    settings_lang_desc: "PT-BR or EN",
    settings_notifications: "Notifications",
    settings_notifications_desc: "Progress alerts",
    settings_plan: "Current plan",
    settings_member_since: "Member since",
    settings_saved: "Saved successfully!",
    btn_save: "Save changes",
    btn_manage: "Manage",
    theme_light: "Light",
    theme_dark: "Dark",
    nav_support: "Support",
    support_subtitle: "We're here to help. Describe your question or problem.",
    support_send_msg: "Send message",
    support_subject: "Subject",
    support_message: "Message",
    btn_send_support: "Send message",
    support_success_title: "Message sent!",
    support_success_desc: "Our team will respond within 24 hours.",
    support_faq: "Frequently asked questions",
    faq_1_q: "How to cancel my subscription?",
    faq_1_a: "Go to Settings → Account → Manage plan and click \"Cancel subscription\".",
    faq_2_q: "Can I use offline?",
    faq_2_a: "Some lessons are available offline after download. AI chat requires connection.",
    faq_3_q: "How to reset my password?",
    faq_3_a: "On the login screen, click \"Forgot password\" and follow the email instructions.",
    btn_participate: "Participate",
    btn_register: "Register",
    btn_view_results: "View results",
    badge_live: "🔴 Live",
    badge_upcoming: "📅 Upcoming",
    badge_done: "✅ Ended",
    nav_community: "Community",
    comm_ranking: "Global Ranking",
    comm_levels: "Your League",
    comm_feed: "Community Feed",
    comm_active_members: "Active Members",
  }
};

/* ── 2. DADOS DOS PROJETOS ── */
const PROJECTS_DATA = [
  { id: 1, icon: "📊", title: "Dashboard Analytics", desc: "Painel de métricas em tempo real com gráficos interativos.", status: "active", statusLabel: "Ativo", tech: ["React", "TypeScript", "Chart.js"], date: "Hoje", color: "#3B82F6" },
  { id: 2, icon: "💳", title: "API Financeira", desc: "API REST para transações, carteiras e relatórios financeiros.", status: "progress", statusLabel: "Em progresso", tech: ["Node.js", "PostgreSQL", "JWT"], date: "Ontem", color: "#8B5CF6" },
  { id: 3, icon: "🛒", title: "E-commerce Full Stack", desc: "Loja virtual completa com carrinho, pagamento e admin.", status: "progress", statusLabel: "Em progresso", tech: ["Next.js", "Stripe", "MongoDB"], date: "3 dias atrás", color: "#10B981" },
  { id: 4, icon: "🔐", title: "Sistema de Login", desc: "Autenticação completa com OAuth, 2FA e gerenciamento de sessões.", status: "done", statusLabel: "Concluído", tech: ["Node.js", "JWT", "Redis"], date: "1 semana atrás", color: "#F59E0B" },
  { id: 5, icon: "🎨", title: "Portfólio Dev", desc: "Portfólio pessoal moderno com animações e modo escuro.", status: "done", statusLabel: "Concluído", tech: ["React", "Tailwind", "Framer"], date: "2 semanas atrás", color: "#EF4444" },
  { id: 6, icon: "💬", title: "Chat App em Tempo Real", desc: "Mensagens instantâneas com WebSockets e salas privadas.", status: "active", statusLabel: "Ativo", tech: ["Socket.io", "React", "Node.js"], date: "Hoje", color: "#06B6D4" },
  { id: 7, icon: "🚀", title: "Plataforma SaaS", desc: "Dashboard de gestão de assinaturas e métricas de usuários.", status: "progress", statusLabel: "Em progresso", tech: ["Next.js", "Prisma", "Stripe"], date: "4 dias atrás", color: "#8B5CF6" },
  { id: 8, icon: "🎵", title: "Clone Spotify", desc: "Player de música com playlists, busca e reprodução contínua.", status: "done", statusLabel: "Concluído", tech: ["React", "Spotify API", "CSS"], date: "3 semanas atrás", color: "#10B981" },
  { id: 9, icon: "✅", title: "Gerenciador de Tarefas", desc: "Kanban board com drag-and-drop, tags e filtros avançados.", status: "active", statusLabel: "Ativo", tech: ["React", "DnD Kit", "Zustand"], date: "2 dias atrás", color: "#F59E0B" },
  { id: 10, icon: "🔌", title: "API Node.js Avançada", desc: "API com rate limiting, cache Redis e documentação Swagger.", status: "done", statusLabel: "Concluído", tech: ["Node.js", "Redis", "Swagger"], date: "1 mês atrás", color: "#3B82F6" },
];

/* ── 3. DADOS DOS HACKATHONS ── */
const HACKATHONS_DATA = [
  {
    id: 1, type: "presencial", category: "ia",
    badge: "🔴 Ao Vivo", badgeClass: "badge-live-red",
    title: "Hack Salvador IA 2025",
    location: "📍 SENAI CIMATEC — Salvador, BA",
    date: "⏱ 36h restantes",
    participants: "👥 312 participantes",
    prize: "🏆 R$ 15.000",
    level: "Intermediário",
    desc: "Construa soluções de IA para problemas reais de Salvador. Foco em saúde, mobilidade e educação.",
    fullDesc: "O maior hackathon de IA da Bahia reúne desenvolvedores, designers e empreendedores para criar soluções inovadoras usando Inteligência Artificial. Os projetos devem abordar desafios reais da cidade de Salvador nas áreas de saúde pública, mobilidade urbana ou educação tecnológica.",
    schedule: [
      { time: "Dia 1 — 09:00", event: "Abertura e formação de equipes" },
      { time: "Dia 1 — 11:00", event: "Início do desenvolvimento" },
      { time: "Dia 2 — 18:00", event: "Entrega dos projetos" },
      { time: "Dia 2 — 20:00", event: "Apresentações finais" },
      { time: "Dia 2 — 22:00", event: "Premiação e networking" },
    ],
    prizes: ["🥇 1º lugar — R$ 8.000", "🥈 2º lugar — R$ 4.000", "🥉 3º lugar — R$ 2.000", "🏅 Melhor UX — R$ 1.000"],
    rules: ["Equipes de 2 a 5 pessoas", "Código deve ser aberto no GitHub", "Uso de APIs de IA é obrigatório", "Projetos devem ser originais", "Apresentação de 5 minutos"],
    mentors: [{ name: "Carlos Lima", role: "ML Engineer" }, { name: "Ana Souza", role: "Product Manager" }, { name: "Pedro Alves", role: "Full Stack Dev" }, { name: "Julia Costa", role: "UX Designer" }],
    locationFull: "SENAI CIMATEC, Av. Orlando Gomes, 1845 — Lauro de Freitas, Salvador, BA",
    bannerColor: "linear-gradient(135deg, #1E293B 0%, #3B82F6 50%, #8B5CF6 100%)",
  },
  {
    id: 2, type: "online", category: "webdev",
    badge: "📅 Em breve", badgeClass: "badge-upcoming",
    title: "Frontend Masters Cup",
    location: "🌐 Online — Discord",
    date: "📅 Começa em 5 dias",
    participants: "👥 89 inscritos",
    prize: "🏆 R$ 5.000",
    level: "Iniciante / Intermediário",
    desc: "Desafio de UI/UX com React. Foco em acessibilidade, performance e design system.",
    fullDesc: "O Frontend Masters Cup é um hackathon online focado exclusivamente em desenvolvimento front-end. Os participantes devem criar uma interface completa usando React, com ênfase em acessibilidade (WCAG 2.1), performance (Lighthouse 90+) e um design system coeso. Ideal para devs que querem mostrar suas habilidades de UI/UX.",
    schedule: [
      { time: "Dia 1 — 10:00", event: "Kickoff e briefing do desafio" },
      { time: "Dia 1 — 12:00", event: "Início do desenvolvimento" },
      { time: "Dia 2 — 22:00", event: "Submissão dos projetos" },
      { time: "Dia 3 — 18:00", event: "Anúncio dos vencedores" },
    ],
    prizes: ["🥇 1º lugar — R$ 2.500", "🥈 2º lugar — R$ 1.500", "🥉 3º lugar — R$ 1.000"],
    rules: ["Individual ou dupla", "Usar React obrigatoriamente", "Lighthouse score mínimo 85", "Responsivo para mobile", "Código no GitHub público"],
    mentors: [{ name: "Fernanda Rocha", role: "Senior Frontend" }, { name: "Diego Mendes", role: "UX Designer" }],
    locationFull: "100% online via Discord. Link enviado após inscrição.",
    bannerColor: "linear-gradient(135deg, #0F172A 0%, #06B6D4 50%, #3B82F6 100%)",
  },
  {
    id: 3, type: "presencial", category: "startup",
    badge: "📅 Em breve", badgeClass: "badge-upcoming",
    title: "Startup Weekend Salvador",
    location: "📍 UFBA — Campus Ondina, Salvador, BA",
    date: "📅 Começa em 12 dias",
    participants: "👥 156 inscritos",
    prize: "🏆 R$ 10.000 + Aceleração",
    level: "Todos os níveis",
    desc: "54 horas para criar uma startup do zero. Pitch para investidores reais ao final.",
    fullDesc: "O Startup Weekend Salvador é o evento mais aguardado do ecossistema de inovação baiano. Em 54 horas intensas, equipes multidisciplinares criam startups do zero — da ideia ao MVP. Ao final, as equipes fazem pitch para uma banca de investidores reais, com prêmios em dinheiro e oportunidade de aceleração.",
    schedule: [
      { time: "Sex — 18:00", event: "Abertura e pitches de ideias" },
      { time: "Sex — 21:00", event: "Formação de equipes" },
      { time: "Sáb — 09:00", event: "Desenvolvimento do MVP" },
      { time: "Dom — 14:00", event: "Ensaio dos pitches" },
      { time: "Dom — 17:00", event: "Pitches finais para investidores" },
      { time: "Dom — 20:00", event: "Premiação e networking" },
    ],
    prizes: ["🥇 1º lugar — R$ 5.000 + Aceleração 3 meses", "🥈 2º lugar — R$ 3.000", "🥉 3º lugar — R$ 2.000", "🏅 Melhor MVP Técnico — Mentoria exclusiva"],
    rules: ["Equipes de 3 a 7 pessoas", "MVP funcional obrigatório", "Pitch de 5 minutos + 3 de perguntas", "Ideia deve ser original", "Presença obrigatória nos 3 dias"],
    mentors: [{ name: "Roberto Nunes", role: "Investidor Anjo" }, { name: "Camila Ferreira", role: "CEO Startup" }, { name: "Thiago Brito", role: "CTO" }, { name: "Mariana Lima", role: "Growth Hacker" }],
    locationFull: "UFBA — Instituto de Computação, Campus Ondina, Salvador, BA",
    bannerColor: "linear-gradient(135deg, #064E3B 0%, #10B981 50%, #34D399 100%)",
  },
  {
    id: 4, type: "online", category: "cybersecurity",
    badge: "📅 Em breve", badgeClass: "badge-upcoming",
    title: "CyberSec Challenge BR",
    location: "🌐 Online — CTF Platform",
    date: "📅 Começa em 20 dias",
    participants: "👥 445 inscritos",
    prize: "🏆 R$ 8.000",
    level: "Avançado",
    desc: "Capture The Flag focado em segurança web, criptografia e engenharia reversa.",
    fullDesc: "O CyberSec Challenge BR é uma competição de Capture The Flag (CTF) com foco em segurança cibernética. Os participantes enfrentam desafios de segurança web, criptografia, forense digital, engenharia reversa e exploração de vulnerabilidades. Uma das competições mais técnicas do Brasil.",
    schedule: [
      { time: "Dia 1 — 00:00", event: "Início do CTF — plataforma abre" },
      { time: "Dia 2 — 23:59", event: "Encerramento e contagem de pontos" },
      { time: "Dia 3 — 18:00", event: "Anúncio dos vencedores" },
    ],
    prizes: ["🥇 1º lugar — R$ 4.000", "🥈 2º lugar — R$ 2.500", "🥉 3º lugar — R$ 1.500"],
    rules: ["Individual ou dupla", "Sem compartilhamento de flags", "Uso de ferramentas automatizadas proibido", "Ataques à infraestrutura proibidos", "Writeups obrigatórios para top 3"],
    mentors: [{ name: "Hélio Santos", role: "Pentester Sênior" }, { name: "Lara Vieira", role: "Security Researcher" }],
    locationFull: "100% online via plataforma CTFd. Acesso liberado no início do evento.",
    bannerColor: "linear-gradient(135deg, #0F172A 0%, #EF4444 50%, #DC2626 100%)",
  },
  {
    id: 5, type: "presencial", category: "webdev",
    badge: "✅ Encerrado", badgeClass: "badge-done",
    title: "API Builders Sprint #3",
    location: "📍 Accenture — Salvador, BA",
    date: "✅ Encerrado há 2 semanas",
    participants: "👥 156 participantes",
    prize: "🏆 R$ 3.000 (você ganhou!)",
    level: "Intermediário",
    desc: "Você ficou em 2º lugar! Construção de APIs robustas com Node.js e documentação Swagger.",
    fullDesc: "O API Builders Sprint é um hackathon focado exclusivamente em desenvolvimento de APIs. Os participantes devem criar APIs REST completas, bem documentadas, com autenticação, rate limiting e testes automatizados. Você ficou em 2º lugar com sua API Financeira!",
    schedule: [],
    prizes: ["🥇 1º lugar — R$ 1.500", "🥈 2º lugar — R$ 1.000 (seu prêmio!)", "🥉 3º lugar — R$ 500"],
    rules: [],
    mentors: [],
    locationFull: "Accenture Brasil, Av. Tancredo Neves, 1632 — Salvador, BA",
    bannerColor: "linear-gradient(135deg, #064E3B 0%, #10B981 50%, #059669 100%)",
  },
];

/* ── 4. DADOS DAS AULAS ── */
const LESSON_DATA = {
  css: {
    title: "CSS Avançado & Design",
    modules: [
      { id: 1, title: "Flexbox Completo", done: true },
      { id: 2, title: "CSS Grid Layout", done: true },
      { id: 3, title: "Variáveis CSS", done: true },
      { id: 4, title: "Animações & Transições", done: false, active: true },
      { id: 5, title: "Design Responsivo", done: false },
      { id: 6, title: "Glassmorphism", done: false },
    ],
    currentModule: 4,
    lesson: {
      title: "Animações & Transições CSS",
      description: "Nesta aula você vai aprender a criar animações fluidas e profissionais usando CSS puro. Vamos explorar @keyframes, transition, transform e as melhores práticas para performance.",
      code: `/* Animação com @keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicando a animação */
.card {
  animation: fadeInUp 0.4s ease forwards;
}

/* Transição suave no hover */
.btn {
  transition: transform 0.2s ease,
              box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}`,
      lang: "css",
      checklist: [
        "Entender a diferença entre animation e transition",
        "Criar keyframes personalizados",
        "Aplicar easing functions (ease, ease-in-out, cubic-bezier)",
        "Otimizar performance com will-change",
        "Criar hover effects profissionais",
      ],
      exercise: {
        title: "Exercício Prático",
        desc: "Crie uma animação de entrada para um card de produto. O card deve aparecer com fade + slide-up ao carregar a página. Use @keyframes e aplique um hover com scale(1.03).",
      }
    }
  },
  js: {
    title: "JavaScript Moderno",
    modules: [
      { id: 1, title: "ES6+ Fundamentos", done: true },
      { id: 2, title: "Arrow Functions", done: true },
      { id: 3, title: "Destructuring", done: false, active: true },
      { id: 4, title: "Promises & Async/Await", done: false },
      { id: 5, title: "Fetch API", done: false },
      { id: 6, title: "Módulos ES6", done: false },
    ],
    currentModule: 3,
    lesson: {
      title: "Destructuring & Spread Operator",
      description: "Destructuring é uma das features mais poderosas do ES6. Permite extrair valores de arrays e objetos de forma elegante e concisa. Combinado com o spread operator, transforma a forma como você escreve JavaScript.",
      code: `// Destructuring de objetos
const user = { name: 'Ana', age: 25, role: 'dev' };
const { name, role } = user;
console.log(name); // "Ana"

// Destructuring com renomeação
const { name: userName, age: userAge } = user;

// Destructuring de arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread em objetos
const config = { theme: 'dark', lang: 'pt' };
const newConfig = { ...config, lang: 'en' };`,
      lang: "javascript",
      checklist: [
        "Usar destructuring em objetos e arrays",
        "Renomear variáveis no destructuring",
        "Usar valores padrão no destructuring",
        "Aplicar spread em arrays e objetos",
        "Combinar rest e spread em funções",
      ],
      exercise: {
        title: "Exercício Prático",
        desc: "Crie uma função que recebe um objeto de usuário e retorna apenas nome e email usando destructuring. Depois, crie uma função que mescla dois objetos de configuração usando spread.",
      }
    }
  },
  react: {
    title: "React & Hooks",
    modules: [
      { id: 1, title: "Componentes Funcionais", done: true },
      { id: 2, title: "useState & useEffect", done: false, active: true },
      { id: 3, title: "useContext", done: false },
      { id: 4, title: "Custom Hooks", done: false },
      { id: 5, title: "React.memo & useMemo", done: false },
    ],
    currentModule: 2,
    lesson: {
      title: "useState & useEffect na Prática",
      description: "Os hooks useState e useEffect são os mais utilizados no React. Juntos, permitem gerenciar estado local e efeitos colaterais de forma declarativa e elegante.",
      code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca dados quando userId muda
    async function fetchUser() {
      setLoading(true);
      const res = await fetch(\`/api/users/\${userId}\`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();

    // Cleanup function
    return () => {
      console.log('Componente desmontado');
    };
  }, [userId]); // Dependência: re-executa quando userId muda

  if (loading) return <div>Carregando...</div>;
  return <div>{user?.name}</div>;
}`,
      lang: "jsx",
      checklist: [
        "Entender o ciclo de vida com useEffect",
        "Gerenciar estado com useState",
        "Usar o array de dependências corretamente",
        "Implementar cleanup functions",
        "Evitar re-renders desnecessários",
      ],
      exercise: {
        title: "Exercício Prático",
        desc: "Crie um componente de contador com useState que também salva o valor no localStorage usando useEffect. O valor deve persistir ao recarregar a página.",
      }
    }
  },
  nodejs: {
    title: "Node.js & Express",
    modules: [
      { id: 1, title: "Introdução ao Node.js", done: true },
      { id: 2, title: "Express Framework", done: false, active: true },
      { id: 3, title: "Middlewares", done: false },
      { id: 4, title: "Autenticação JWT", done: false },
      { id: 5, title: "Deploy na Nuvem", done: false },
    ],
    currentModule: 2,
    lesson: {
      title: "Express Framework — Rotas e Middlewares",
      description: "Express é o framework web mais popular para Node.js. Nesta aula, você vai criar uma API REST completa com rotas, middlewares e tratamento de erros.",
      code: `const express = require('express');
const app = express();

// Middleware global
app.use(express.json());
app.use(cors());

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Não autorizado' });
  // verificar token...
  next();
};

// Rotas
app.get('/api/users', authMiddleware, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users, total: users.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
});

app.listen(3000, () => console.log('API rodando na porta 3000'));`,
      lang: "javascript",
      checklist: [
        "Configurar Express e middlewares globais",
        "Criar rotas GET, POST, PUT, DELETE",
        "Implementar middleware de autenticação",
        "Tratar erros de forma centralizada",
        "Estruturar o projeto em camadas (routes, controllers, services)",
      ],
      exercise: {
        title: "Exercício Prático",
        desc: "Crie uma API REST para gerenciar uma lista de tarefas (TODO). Implemente as 4 operações CRUD com Express, usando um array em memória como banco de dados.",
      }
    }
  },
};

/* ── 5. RESPOSTAS DA IA ── */
const AI_RESPONSES = {
  react: "O **useEffect** é um hook do React que permite executar efeitos colaterais em componentes funcionais. Ele substitui os métodos de ciclo de vida `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`.\n\n**Sintaxe básica:**\n```js\nuseEffect(() => {\n  // código do efeito\n  return () => { /* cleanup */ };\n}, [dependências]);\n```\n\n**Casos de uso principais:**\n- Buscar dados de uma API\n- Assinar eventos (addEventListener)\n- Manipular o DOM diretamente\n- Timers e intervalos\n\nO array de dependências controla quando o efeito re-executa. Array vazio `[]` = executa apenas uma vez (mount).",
  api: "Uma **API REST** (Representational State Transfer) é uma interface que permite comunicação entre sistemas via HTTP. Os princípios fundamentais são:\n\n**Verbos HTTP:**\n- `GET` — Buscar dados\n- `POST` — Criar recurso\n- `PUT/PATCH` — Atualizar recurso\n- `DELETE` — Remover recurso\n\n**Boas práticas:**\n- Use substantivos no plural: `/api/users`, `/api/products`\n- Retorne status codes corretos (200, 201, 400, 401, 404, 500)\n- Versione sua API: `/api/v1/users`\n- Use autenticação JWT ou OAuth\n- Documente com Swagger/OpenAPI\n\nQuer que eu mostre um exemplo completo com Node.js + Express?",
  sql: "**SQL vs NoSQL** — A escolha depende do seu caso de uso:\n\n**SQL (Relacional):**\n- Dados estruturados com esquema fixo\n- Relacionamentos complexos entre tabelas\n- Transações ACID (consistência garantida)\n- Exemplos: PostgreSQL, MySQL, SQLite\n- Ideal para: e-commerce, sistemas financeiros, ERPs\n\n**NoSQL:**\n- Esquema flexível (schema-less)\n- Escala horizontal facilmente\n- Alta performance para leitura/escrita massiva\n- Exemplos: MongoDB (documentos), Redis (chave-valor), Cassandra\n- Ideal para: redes sociais, IoT, cache, logs\n\n**Regra geral:** Se seus dados têm relacionamentos complexos → SQL. Se precisam de flexibilidade e escala → NoSQL.",
  carreira: "Para se destacar em entrevistas de dev, foque em:\n\n**Técnico:**\n- Domine estruturas de dados e algoritmos (LeetCode Easy/Medium)\n- Conheça os fundamentos da linguagem (não só frameworks)\n- Saiba explicar suas decisões de arquitetura\n- Tenha projetos reais no GitHub\n\n**Comportamental:**\n- Use o método STAR (Situação, Tarefa, Ação, Resultado)\n- Prepare histórias sobre desafios técnicos que resolveu\n- Mostre curiosidade e vontade de aprender\n\n**Portfólio:**\n- 2-3 projetos completos e bem documentados\n- README detalhado com screenshots\n- Deploy funcionando (Vercel, Railway, Render)\n\nQual área você está focando? Front-end, Back-end ou Full Stack?",
  default: "Ótima pergunta! Como sua mentora de programação, posso te ajudar com:\n\n**Front-end:** HTML, CSS, JavaScript, React, Next.js, Tailwind\n**Back-end:** Node.js, Express, APIs REST, autenticação, bancos de dados\n**DevOps:** Git, Docker, CI/CD, deploy\n**Carreira:** portfólio, entrevistas, crescimento profissional\n\nPode me fazer perguntas específicas sobre código, arquitetura de sistemas, boas práticas ou qualquer dúvida técnica. Estou aqui 24/7! 🚀\n\nO que você gostaria de aprender hoje?"
};

/* ── 6. ESTADO DA APLICAÇÃO ── */
let state = {
  user: { name: '', email: '', xp: 1250, level: 3, streak: 7, lessons: 24, joinDate: '' },
  theme: 'light',
  lang: 'pt',
  currentPage: 'dashboard',
  projects: [...PROJECTS_DATA],
  selectedTags: [],
};

/* ── 7. INICIALIZAÇÃO ── */
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  setupOnboarding();
  setupNavigation();
  setupSidebar();
  setupTheme();
  setupLang();
  setupDashboard();
  setupLearn();
  setupProjects();
  setupChat();
  setupHackathons();
  setupCommunity();
  setupSettings();
  setupSupport();
  setupFAQ();
  setupMobileMenu();
  applyTranslations();
});

/* ── 8. LOCALSTORAGE ── */
function loadFromStorage() {
  const saved = localStorage.getItem('hypatia_user');
  if (saved) {
    const data = JSON.parse(saved);
    state.user = { ...state.user, ...data };
  }
  const theme = localStorage.getItem('hypatia_theme');
  if (theme) { state.theme = theme; document.documentElement.setAttribute('data-theme', theme); }
  const lang = localStorage.getItem('hypatia_lang');
  if (lang) { state.lang = lang; document.documentElement.setAttribute('data-lang', lang); }
}

function saveToStorage() {
  localStorage.setItem('hypatia_user', JSON.stringify(state.user));
  localStorage.setItem('hypatia_theme', state.theme);
  localStorage.setItem('hypatia_lang', state.lang);
}

/* ── 9. ONBOARDING ── */
function setupOnboarding() {
  const overlay = document.getElementById('onboarding-overlay');
  const app = document.getElementById('app');
  const btn = document.getElementById('btn-onboarding-start');

  if (state.user.name) {
    overlay.classList.add('hidden');
    app.classList.remove('hidden');
    updateUserUI();
    return;
  }

  btn.addEventListener('click', () => {
    const name = document.getElementById('input-name').value.trim();
    const email = document.getElementById('input-email').value.trim();
    if (!name) { document.getElementById('input-name').focus(); return; }

    state.user.name = name;
    state.user.email = email || 'usuario@hypatia.dev';
    state.user.joinDate = new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    saveToStorage();

    overlay.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => {
      overlay.classList.add('hidden');
      app.classList.remove('hidden');
      updateUserUI();
      showXPToast('+50 XP — Bem-vindo à Hypatia!');
    }, 300);
  });

  document.getElementById('input-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('input-email').focus();
  });
  document.getElementById('input-email').addEventListener('keydown', e => {
    if (e.key === 'Enter') btn.click();
  });
}

/* ── 10. UI DO USUÁRIO ── */
function updateUserUI() {
  const { name, email, xp, level, streak, lessons } = state.user;
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?';

  // Header
  document.getElementById('avatar-initials').textContent = initials;
  document.getElementById('header-user-name').textContent = name.split(' ')[0];
  document.getElementById('welcome-name').textContent = name.split(' ')[0];

  // Sidebar progress card
  document.getElementById('spc-avatar').textContent = initials;
  document.getElementById('spc-name').textContent = name.split(' ')[0];
  document.getElementById('spc-level').textContent = `Nível ${level}`;
  const xpForLevel = level * 500;
  const xpProgress = Math.min((xp / xpForLevel) * 100, 100);
  document.getElementById('spc-xp').textContent = `${xp} / ${xpForLevel}`;
  document.getElementById('spc-xp-fill').style.width = xpProgress + '%';
  document.getElementById('spc-streak-text').textContent = `${streak} dias seguidos`;
  document.getElementById('spc-lessons').textContent = lessons;
  document.getElementById('spc-projects-count').textContent = state.projects.length;

  // Dashboard XP bar
  document.getElementById('stat-xp').textContent = xp;
  document.getElementById('xp-current-display').textContent = xp + ' XP';
  document.getElementById('xp-bar-fill').style.width = xpProgress + '%';
  document.getElementById('xp-level-badge').textContent = `Nível ${level}`;

  // Settings
  document.getElementById('settings-avatar').textContent = initials;
  document.getElementById('settings-display-name').textContent = name;
  document.getElementById('settings-display-email').textContent = email;
  document.getElementById('settings-name').value = name;
  document.getElementById('settings-email').value = email;
  document.getElementById('settings-xp-badge').textContent = `⚡ ${xp} XP · Nível ${level}`;
  if (state.user.joinDate) document.getElementById('member-since').textContent = state.user.joinDate;
}

/* ── 11. XP SYSTEM ── */
function addXP(amount, label) {
  state.user.xp += amount;
  const newLevel = Math.floor(state.user.xp / 500) + 1;
  const leveledUp = newLevel > state.user.level;
  state.user.level = newLevel;
  saveToStorage();
  updateUserUI();
  showXPToast(`+${amount} XP${label ? ' — ' + label : ''}`);
  if (leveledUp) setTimeout(() => showXPToast(`🎉 Nível ${newLevel} desbloqueado!`), 1500);
}

function showXPToast(text) {
  const toast = document.getElementById('xp-toast');
  document.getElementById('xp-toast-text').textContent = text;
  toast.classList.remove('hidden');
  toast.style.animation = 'toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2500);
}

/* ── 12. NAVEGAÇÃO ── */
function setupNavigation() {
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.page));
  });
  document.querySelectorAll('[data-page-target]').forEach(card => {
    card.addEventListener('click', () => navigateTo(card.dataset.pageTarget));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') navigateTo(card.dataset.pageTarget); });
  });
}

function navigateTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const target = document.getElementById(`page-${page}`);
  if (target) { target.classList.remove('hidden'); target.style.animation = 'none'; requestAnimationFrame(() => { target.style.animation = 'fadeInUp 0.3s ease'; }); }

  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  const titles = {
    dashboard: i18n[state.lang].nav_dashboard,
    learn: i18n[state.lang].nav_learn,
    projects: i18n[state.lang].nav_projects,
    chat: i18n[state.lang].nav_chat,
    hackathons: i18n[state.lang].nav_hackathons,
    settings: i18n[state.lang].nav_settings,
    support: i18n[state.lang].nav_support,
  };
  document.getElementById('page-title').textContent = titles[page] || page;

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('mobile-open');

  if (page === 'chat') addXP(10, 'Chat IA aberto');
}

/* ── 13. SIDEBAR ── */
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const collapseBtn = document.getElementById('sidebar-collapse-btn');
  collapseBtn.addEventListener('click', () => sidebar.classList.toggle('collapsed'));

  document.getElementById('btn-continue-learning').addEventListener('click', () => navigateTo('learn'));
}

/* ── 14. MOBILE MENU ── */
function setupMobileMenu() {
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-open');
  });
}

/* ── 15. TEMA ── */
function setupTheme() {
  const applyTheme = (theme) => {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const label = theme === 'dark' ? i18n[state.lang].theme_dark : i18n[state.lang].theme_light;
    const settingsLabel = document.getElementById('settings-theme-label');
    if (settingsLabel) settingsLabel.textContent = label;
    saveToStorage();
  };

  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  });
  document.getElementById('settings-theme-toggle').addEventListener('click', () => {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  });
}

/* ── 16. IDIOMA ── */
function setupLang() {
  const applyLang = (lang) => {
    state.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.getElementById('lang-flag').textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
    document.getElementById('lang-text').textContent = lang === 'pt' ? 'PT' : 'EN';
    const settingsLabel = document.getElementById('settings-lang-label');
    if (settingsLabel) settingsLabel.textContent = lang === 'pt' ? 'PT-BR' : 'EN';
    applyTranslations();
    saveToStorage();
  };

  document.getElementById('lang-toggle').addEventListener('click', () => applyLang(state.lang === 'pt' ? 'en' : 'pt'));
  document.getElementById('settings-lang-toggle').addEventListener('click', () => applyLang(state.lang === 'pt' ? 'en' : 'pt'));
}

function applyTranslations() {
  const t = i18n[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
}

/* ── 17. DASHBOARD ── */
function setupDashboard() {
  // Animação das stat cards
  document.querySelectorAll('.stat-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.08}s`;
  });
}

/* ── 18. APRENDER ── */
function setupLearn() {
  // Filtros
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.course-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });

  // Botões de continuar/começar
  document.querySelectorAll('.btn-continue, .btn-start').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const courseId = btn.dataset.courseId;
      if (courseId && LESSON_DATA[courseId]) openLesson(courseId);
      else openLesson('js');
    });
  });
}

function openLesson(courseId) {
  const data = LESSON_DATA[courseId] || LESSON_DATA['js'];
  const modal = document.getElementById('lesson-modal');
  modal.classList.remove('hidden');

  // Módulos
  const modulesEl = document.getElementById('lesson-modules');
  modulesEl.innerHTML = data.modules.map(m => `
    <div class="lesson-module-item ${m.done ? 'done' : ''} ${m.active ? 'active' : ''}">
      ${m.done ? '' : `<span style="width:16px;height:16px;border-radius:50%;border:2px solid var(--color-border);display:inline-block;flex-shrink:0"></span>`}
      ${m.title}
    </div>
  `).join('');

  // Breadcrumb e progresso
  const doneCount = data.modules.filter(m => m.done).length;
  const progress = Math.round((doneCount / data.modules.length) * 100);
  document.getElementById('lesson-breadcrumb').textContent = `${data.title} / Módulo ${data.currentModule}`;
  document.getElementById('lesson-progress-fill').style.width = progress + '%';
  document.getElementById('lesson-progress-text').textContent = progress + '%';

  // Conteúdo
  const lesson = data.lesson;
  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-description').textContent = lesson.description;
  document.getElementById('lesson-code').textContent = lesson.code;
  document.getElementById('code-lang').textContent = lesson.lang;

  // Checklist
  document.getElementById('lesson-checklist').innerHTML = lesson.checklist.map(item => `
    <div class="checklist-item">
      <input type="checkbox" />
      <span>${item}</span>
    </div>
  `).join('');

  // Exercício
  document.getElementById('lesson-exercise').innerHTML = `
    <h4>🎯 ${lesson.exercise.title}</h4>
    <p>${lesson.exercise.desc}</p>
  `;

  // Player animation
  let playing = false;
  const playBtn = document.getElementById('player-play-btn');
  const barFill = document.getElementById('player-bar-fill');
  const label = document.getElementById('player-label');
  playBtn.onclick = () => {
    playing = !playing;
    playBtn.textContent = playing ? '⏸' : '▶';
    label.textContent = playing ? 'Assistindo...' : 'Assistir Aula';
    if (playing) {
      let w = 0;
      const interval = setInterval(() => {
        w += 0.5;
        barFill.style.width = w + '%';
        if (w >= 100 || !playing) clearInterval(interval);
      }, 100);
    }
  };
}

document.getElementById('lesson-close-btn').addEventListener('click', () => {
  document.getElementById('lesson-modal').classList.add('hidden');
});
document.getElementById('btn-complete-lesson').addEventListener('click', () => {
  document.getElementById('lesson-modal').classList.add('hidden');
  addXP(25, 'Aula concluída');
  state.user.lessons++;
  saveToStorage();
  updateUserUI();
});
document.getElementById('code-copy-btn').addEventListener('click', () => {
  const code = document.getElementById('lesson-code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    document.getElementById('code-copy-btn').textContent = 'Copiado!';
    setTimeout(() => document.getElementById('code-copy-btn').textContent = 'Copiar', 2000);
  });
});
document.getElementById('lesson-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lesson-modal')) document.getElementById('lesson-modal').classList.add('hidden');
});

/* ── 19. PROJETOS ── */
function setupProjects() {
  renderProjects();
  document.getElementById('btn-new-project').addEventListener('click', () => {
    document.getElementById('new-project-modal').classList.remove('hidden');
  });
  document.getElementById('close-new-project-modal').addEventListener('click', closeNewProjectModal);
  document.getElementById('cancel-new-project').addEventListener('click', closeNewProjectModal);
  document.getElementById('new-project-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('new-project-modal')) closeNewProjectModal();
  });

  // Tags selector
  document.querySelectorAll('.tag-option').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('selected');
      const t = tag.dataset.tag;
      if (tag.classList.contains('selected')) state.selectedTags.push(t);
      else state.selectedTags = state.selectedTags.filter(x => x !== t);
    });
  });

  document.getElementById('confirm-new-project').addEventListener('click', createProject);
  document.getElementById('close-view-project-modal').addEventListener('click', () => {
    document.getElementById('view-project-modal').classList.add('hidden');
  });
  document.getElementById('view-project-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('view-project-modal')) document.getElementById('view-project-modal').classList.add('hidden');
  });
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = state.projects.map(p => `
    <div class="project-card" data-project-id="${p.id}">
      <div class="project-card-header">
        <div class="project-icon" style="background: ${p.color}22">${p.icon}</div>
        <span class="project-status-badge status-${p.status}">${p.statusLabel}</span>
      </div>
      <h4 class="project-title">${p.title}</h4>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <div class="project-footer">
        <span class="project-date">📅 ${p.date}</span>
        <button class="project-open-btn" data-project-id="${p.id}">Abrir →</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.project-open-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProjectView(parseInt(btn.dataset.projectId));
    });
  });
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectView(parseInt(card.dataset.projectId)));
  });
}

function openProjectView(id) {
  const project = state.projects.find(p => p.id === id);
  if (!project) return;

  document.getElementById('view-project-modal').classList.remove('hidden');
  document.getElementById('vp-title').textContent = project.title;

  const fileMap = {
    1: { files: ['src/', 'components/', 'App.jsx', 'Dashboard.jsx', 'Chart.js', 'package.json', 'README.md'], code: `// Dashboard Analytics — App.jsx\nimport React, { useState, useEffect } from 'react';\nimport { LineChart, BarChart } from './components/Chart';\n\nexport default function Dashboard() {\n  const [metrics, setMetrics] = useState(null);\n\n  useEffect(() => {\n    fetchMetrics().then(setMetrics);\n  }, []);\n\n  return (\n    <div className="dashboard">\n      <h1>Analytics Dashboard</h1>\n      <div className="metrics-grid">\n        <MetricCard title="Usuários" value={metrics?.users} />\n        <MetricCard title="Receita" value={metrics?.revenue} />\n        <LineChart data={metrics?.timeline} />\n      </div>\n    </div>\n  );\n}`, lang: 'jsx' },
    2: { files: ['src/', 'routes/', 'controllers/', 'models/', 'middleware/', 'server.js', '.env.example'], code: `// API Financeira — server.js\nconst express = require('express');\nconst app = express();\n\napp.use(express.json());\napp.use('/api/transactions', require('./routes/transactions'));\napp.use('/api/wallets', require('./routes/wallets'));\napp.use('/api/reports', require('./routes/reports'));\n\n// Error handler\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: 'Internal Server Error' });\n});\n\napp.listen(3000, () => console.log('API running on :3000'));`, lang: 'javascript' },
  };

  const fileData = fileMap[id] || { files: ['src/', 'index.js', 'package.json', 'README.md'], code: `// ${project.title}\n// Projeto em desenvolvimento...\n\nconsole.log('Hypatia — ${project.title}');`, lang: 'javascript' };
  document.getElementById('vp-code-lang').textContent = fileData.lang;
  document.getElementById('vp-code').textContent = fileData.code;

  document.getElementById('project-file-tree').innerHTML = fileData.files.map(f => `
    <div class="file-tree-item ${f.endsWith('/') ? 'file-tree-folder' : ''}">
      ${f.endsWith('/') ? '📁' : '📄'} ${f}
    </div>
  `).join('');

  document.getElementById('project-info-panel').innerHTML = `
    <div class="pip-section">
      <h5>Projeto</h5>
      <p>${project.title}</p>
    </div>
    <div class="pip-section">
      <h5>Status</h5>
      <p>${project.statusLabel}</p>
    </div>
    <div class="pip-section">
      <h5>Stack</h5>
      <p>${project.tech.join(', ')}</p>
    </div>
    <div class="pip-section">
      <h5>Última edição</h5>
      <p>${project.date}</p>
    </div>
    <div class="pip-section">
      <h5>Descrição</h5>
      <p>${project.desc}</p>
    </div>
  `;

  addXP(10, 'Projeto aberto');
}

function closeNewProjectModal() {
  document.getElementById('new-project-modal').classList.add('hidden');
  state.selectedTags = [];
  document.querySelectorAll('.tag-option').forEach(t => t.classList.remove('selected'));
  ['proj-title', 'proj-objective', 'proj-description', 'proj-idea'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

function createProject() {
  const title = document.getElementById('proj-title').value.trim();
  if (!title) { document.getElementById('proj-title').focus(); return; }

  const icons = ['🚀', '⚡', '🔮', '🎯', '🌟', '💡', '🔥', '🛠️'];
  const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'];
  const newProject = {
    id: Date.now(),
    icon: icons[Math.floor(Math.random() * icons.length)],
    title,
    desc: document.getElementById('proj-description').value || 'Projeto criado na Hypatia.',
    status: 'active',
    statusLabel: 'Ativo',
    tech: state.selectedTags.length ? state.selectedTags : ['JavaScript'],
    date: 'Agora',
    color: colors[Math.floor(Math.random() * colors.length)],
  };

  state.projects.unshift(newProject);
  closeNewProjectModal();
  renderProjects();
  addXP(50, 'Novo projeto criado');
}

/* ── 20. CHAT IA ── */
function setupChat() {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('btn-send-chat');

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  });

  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.dataset.prompt;
      sendMessage();
    });
  });

  document.getElementById('btn-new-chat').addEventListener('click', () => {
    document.getElementById('chat-messages').innerHTML = `
      <div class="chat-message ai-message">
        <div class="message-avatar"><img src="logo.jpeg" alt="Hypatia" /></div>
        <div class="message-bubble">
          <p>${i18n[state.lang].chat_welcome_msg}</p>
          <span class="message-time">Agora</span>
        </div>
      </div>`;
    document.getElementById('chat-suggestions').style.display = '';
  });
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const messages = document.getElementById('chat-messages');
  const suggestions = document.getElementById('chat-suggestions');
  suggestions.style.display = 'none';

  // User message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user-message';
  userMsg.innerHTML = `
    <div class="message-avatar" style="background:linear-gradient(135deg,#3B82F6,#8B5CF6);color:white;font-weight:700;font-size:0.75rem">
      ${(state.user.name || 'U')[0].toUpperCase()}
    </div>
    <div class="message-bubble"><p>${escapeHtml(text)}</p><span class="message-time">Agora</span></div>`;
  messages.appendChild(userMsg);
  input.value = '';
  input.style.height = 'auto';
  messages.scrollTop = messages.scrollHeight;

  // Typing indicator
  const typing = document.getElementById('typing-indicator');
  typing.classList.remove('hidden');
  messages.scrollTop = messages.scrollHeight;

  const delay = 1200 + Math.random() * 800;
  setTimeout(() => {
    typing.classList.add('hidden');
    const response = getAIResponse(text);
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai-message';
    aiMsg.innerHTML = `
      <div class="message-avatar"><img src="logo.jpeg" alt="Hypatia" /></div>
      <div class="message-bubble"><p>${formatAIResponse(response)}</p><span class="message-time">Agora</span></div>`;
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
    addXP(10, 'Chat com Hypatia');
  }, delay);
}

function getAIResponse(text) {
  const lower = text.toLowerCase();
  if (lower.includes('useeffect') || lower.includes('react') || lower.includes('hook')) return AI_RESPONSES.react;
  if (lower.includes('api') || lower.includes('rest') || lower.includes('endpoint')) return AI_RESPONSES.api;
  if (lower.includes('sql') || lower.includes('nosql') || lower.includes('banco')) return AI_RESPONSES.sql;
  if (lower.includes('carreira') || lower.includes('entrevista') || lower.includes('emprego') || lower.includes('vaga')) return AI_RESPONSES.carreira;
  return AI_RESPONSES.default;
}

function formatAIResponse(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="background:var(--color-bg-tertiary);padding:1px 5px;border-radius:4px;font-size:0.85em">$1</code>')
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre style="background:#0F172A;color:#E2E8F0;padding:0.75rem;border-radius:8px;font-size:0.78rem;overflow-x:auto;margin:0.5rem 0">$1</pre>')
    .replace(/\n/g, '<br>');
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── 21. HACKATHONS ── */
function setupHackathons() {
  renderHackathons('all');

  document.querySelectorAll('.filter-btn[data-hfilter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn[data-hfilter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderHackathons(btn.dataset.hfilter);
    });
  });

  document.getElementById('close-hackathon-modal').addEventListener('click', () => {
    document.getElementById('hackathon-modal').classList.add('hidden');
  });
  document.getElementById('hackathon-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('hackathon-modal')) document.getElementById('hackathon-modal').classList.add('hidden');
  });
}

/* ── 21. COMUNIDADE ── */
function setupCommunity() {
  renderRanking();
  renderFeed();
  renderActiveMembers();
}

function renderRanking() {
  const rankingData = [
    { name: "Lucas Rocha", xp: 4850, level: 9, pos: 1 },
    { name: "Beatriz Lima", xp: 4200, level: 8, pos: 2 },
    { name: "Carlos Edu", xp: 3900, level: 7, pos: 3 },
    { name: state.user.name || "Você", xp: state.user.xp, level: state.user.level, pos: 4, me: true },
    { name: "Mariana Paz", xp: 1100, level: 2, pos: 5 },
  ];

  const list = document.getElementById('ranking-list');
  if (!list) return;
  list.innerHTML = rankingData.map(u => `
    <div class="ranking-item ${u.me ? 'me' : ''}">
      <span class="ranking-pos ranking-pos-${u.pos}">${u.pos}º</span>
      <div class="ranking-avatar">${u.name[0].toUpperCase()}</div>
      <div class="ranking-info">
        <span class="ranking-name">${u.name}</span>
        <span class="ranking-level">Nível ${u.level}</span>
      </div>
      <span class="ranking-xp">${u.xp} XP</span>
    </div>
  `).join('');
}

function renderFeed() {
  const feedData = [
    { user: "Lucas Rocha", action: "concluiu o curso", target: "React & Hooks", time: "Há 5 min", icon: "🎓" },
    { user: "Beatriz Lima", action: "ganhou a badge", target: "Mestre do CSS", time: "Há 12 min", icon: "🏆" },
    { user: "Carlos Edu", action: "iniciou um novo projeto", target: "E-commerce App", time: "Há 30 min", icon: "🚀" },
    { user: "Mariana Paz", action: "concluiu uma aula de", target: "JavaScript Moderno", time: "Há 1h", icon: "⚡" },
  ];

  const feed = document.getElementById('community-feed');
  if (!feed) return;
  feed.innerHTML = feedData.map(i => `
    <div class="feed-item">
      <div class="ranking-avatar">${i.user[0].toUpperCase()}</div>
      <div class="feed-content">
        <div class="feed-header">
          <span class="feed-user">${i.user}</span>
          <span class="feed-action">${i.action}</span>
          <strong class="feed-user">${i.target}</strong>
        </div>
        <div class="feed-time">${i.icon} ${i.time}</div>
      </div>
    </div>
  `).join('');
}

function renderActiveMembers() {
  const members = [
    { name: "Julia M.", initials: "JM", status: "Online" },
    { name: "Rafael K.", initials: "RK", status: "Online" },
    { name: "Sofia T.", initials: "ST", status: "Codando" },
    { name: "Vitor G.", initials: "VG", status: "Online" },
    { name: "Lara B.", initials: "LB", status: "Online" },
    { name: "Igor S.", initials: "IS", status: "Online" },
  ];

  const grid = document.getElementById('active-members-grid');
  if (!grid) return;
  grid.innerHTML = members.map(m => `
    <div class="member-card">
      <div class="member-avatar">${m.initials}</div>
      <span class="member-name">${m.name}</span>
      <span class="member-status"><span class="status-dot"></span> ${m.status}</span>
    </div>
  `).join('');
}

function renderHackathons(filter) {
  const list = document.getElementById('hackathons-list');
  const filtered = filter === 'all' ? HACKATHONS_DATA : HACKATHONS_DATA.filter(h => h.type === filter || h.category === filter);
  list.innerHTML = filtered.map(h => `
    <div class="hackathon-card ${h.badgeClass === 'badge-live-red' ? 'hackathon-live' : ''} ${h.badgeClass === 'badge-done' ? 'hackathon-done' : ''}">
      <span class="hackathon-badge ${h.badgeClass}">${h.badge}</span>
      <div class="hackathon-info">
        <h4>${h.title}</h4>
        <p>${h.desc}</p>
        <div class="hackathon-meta">
          <span>${h.location}</span>
          <span>${h.date}</span>
          <span>${h.participants}</span>
          <span>${h.prize}</span>
        </div>
      </div>
      <div class="hackathon-actions">
        <button class="btn-outline btn-sm" onclick="openHackathonModal(${h.id})">Ver Evento</button>
        <button class="btn-primary btn-sm" onclick="participateHackathon(${h.id})">${h.badgeClass === 'badge-done' ? 'Ver resultado' : 'Participar'}</button>
      </div>
    </div>
  `).join('');
}

window.openHackathonModal = function(id) {
  const h = HACKATHONS_DATA.find(x => x.id === id);
  if (!h) return;
  const modal = document.getElementById('hackathon-modal');
  modal.classList.remove('hidden');

  document.getElementById('hm-banner').style.background = h.bannerColor;
  document.getElementById('hm-title').textContent = h.title;
  document.getElementById('hm-meta').innerHTML = `
    <span>${h.location}</span>
    <span>${h.date}</span>
    <span>${h.participants}</span>
    <span>${h.prize}</span>
    <span>Nível: ${h.level}</span>`;
  document.getElementById('hm-description').textContent = h.fullDesc;

  document.getElementById('hm-schedule').innerHTML = h.schedule.length
    ? h.schedule.map(s => `<div class="hm-schedule-item"><span class="hm-schedule-time">${s.time}</span><span>${s.event}</span></div>`).join('')
    : '<p style="font-size:0.82rem;color:var(--color-text-muted)">Cronograma não disponível.</p>';

  document.getElementById('hm-prizes').innerHTML = h.prizes.map(p => `<div class="hm-prize-item">${p}</div>`).join('');
  document.getElementById('hm-rules').innerHTML = h.rules.map(r => `<li>${r}</li>`).join('');
  document.getElementById('hm-location').textContent = h.locationFull;
  document.getElementById('hm-mentors').innerHTML = h.mentors.map(m => `
    <div class="hm-mentor">
      <div class="hm-mentor-avatar">${m.name[0]}</div>
      <div><div style="font-size:0.78rem;font-weight:600">${m.name}</div><div style="font-size:0.68rem;color:var(--color-text-muted)">${m.role}</div></div>
    </div>`).join('');

  document.getElementById('hm-participate-btn').textContent = h.badgeClass === 'badge-done' ? 'Ver Resultados' : 'Participar';
};

window.participateHackathon = function(id) {
  addXP(100, 'Hackathon inscrito');
  showXPToast('+100 XP — Hackathon inscrito!');
};

document.getElementById('hm-participate-btn').addEventListener('click', () => {
  addXP(100, 'Hackathon inscrito');
  document.getElementById('hackathon-modal').classList.add('hidden');
});

/* ── 22. CONFIGURAÇÕES ── */
function setupSettings() {
  document.getElementById('btn-save-settings').addEventListener('click', () => {
    const name = document.getElementById('settings-name').value.trim();
    const email = document.getElementById('settings-email').value.trim();
    if (name) state.user.name = name;
    if (email) state.user.email = email;
    saveToStorage();
    updateUserUI();
    const feedback = document.getElementById('settings-save-feedback');
    feedback.classList.remove('hidden');
    setTimeout(() => feedback.classList.add('hidden'), 3000);
  });
}

/* ── 23. SUPORTE ── */
function setupSupport() {
  document.getElementById('btn-send-support').addEventListener('click', () => {
    const subject = document.getElementById('support-subject').value.trim();
    const message = document.getElementById('support-message').value.trim();
    if (!subject || !message) return;
    document.getElementById('support-feedback').classList.remove('hidden');
    document.getElementById('support-subject').value = '';
    document.getElementById('support-message').value = '';
    setTimeout(() => document.getElementById('support-feedback').classList.add('hidden'), 5000);
  });
}

/* ── 24. FAQ ── */
function setupFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('hidden');
  };

  if (btn && sidebar && overlay) {
    btn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // Fechar ao clicar em item do menu no mobile
    sidebar.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) toggleSidebar();
      });
    });
  }
}
