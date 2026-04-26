import React, { useState, useEffect } from 'react';

// Assets
import avatar3D from './assets/3d_developer_avatar.png';
import htmlIcon from './svg/html.svg';
import cssIcon from './svg/css.svg';
import jsIcon from './svg/js.svg';
import reactIcon from './svg/react.svg';
import nodeIcon from './svg/node.svg';
import atlasImg from './assets/atlas-das-baixadas.png';
import vozImg from './assets/voz-da-perifa.PNG';
import despesasImg from './assets/solicitadordedespesas.png';
import conversorImg from './assets/conversordemoedas.png';
import hairDayImg from './assets/HairDay .png';
import reflexImg from './assets/reflex-dev .png';
import curriculoPdf from './public/document/curriculo-thiago.pdf';

function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0c]">
      {/* Premium Dotted Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      {/* Floating Neon Orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-brand-purple/30 blur-[150px] mix-blend-screen rounded-full animate-pulse-glow"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-brand-blue/25 blur-[150px] mix-blend-screen rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[40%] right-[30%] w-[35vw] h-[35vw] bg-[#ff6b00]/10 blur-[150px] mix-blend-screen rounded-full"></div>
    </div>
  );
}

const App = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleTouchOutside = (e) => {
      // Closes tooltip if we tap out of any tooltip trigger
      if (!e.target.closest('.tooltip-trigger')) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener('touchstart', handleTouchOutside);
    document.addEventListener('click', handleTouchOutside);
    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('click', handleTouchOutside);
    };
  }, []);

  const skills = [
    { src: htmlIcon, name: "HTML" },
    { src: cssIcon, name: "CSS" },
    { src: jsIcon, name: "JavaScript" },
    { src: reactIcon, name: "React" },
    { src: nodeIcon, name: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
    { isDevicon: true, className: "devicon-azuresqldatabase-plain text-[#0078d4]", name: "SQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" }
  ];

  const projects = [
    {
      title: "Atlas das Baixadas",
      desc: "O Atlas das Baixadas é uma plataforma web do Observatório das Baixadas, idealizada e desenvolvida por Andrew Leal. Posteriormente, o projeto foi expandido com a implementação de novas funcionalidades, incluindo o armazenamento das contribuições dos usuários por meio de database, camadas de risco de alagamento e módulos de chuva em tempo real. Também foram realizadas mudanças na interface visual da plataforma, além da integração de APIs externas para a exibição de dados no mapa, ampliando as possibilidades de visualização e análise territorial, com foco em justiça climática e no direito à cidade.",
      img: atlasImg,
      repo: null,
      live: "https://atlasdasbaixadas.netlify.app/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Interface interativa e visualização do mapa" },
        { label: "BACKEND", icon: "fa-solid fa-server", iconColor: "text-[#a78bfa]", desc: "Lógica de servidor" },
        { separator: true },
        { label: "NODE.JS", icon: "devicon-nodejs-plain", iconColor: "text-[#83cd29]", desc: "API de recebimento de contribuições" },
        { label: "JAVASCRIPT", icon: "devicon-javascript-plain", iconColor: "text-[#f7df1e]", desc: "Lógica de manipulação de dados espaciais" },
        { label: "MAPBOX", icon: "fa-solid fa-map-location-dot", iconColor: "text-[#3b82f6]", desc: "Renderização do mapa base e camadas" },
        { label: "SUPABASE", icon: "devicon-supabase-plain", iconColor: "text-[#3ecf8e]", desc: "Armazenamento remoto em tempo real" }
      ]
    },
    {
      title: "Solicitador de Despesas",
      desc: "Plataforma web full-stack completa para solicitação e controle eficiente de despesas. O frontend foi desenvolvido com React, TypeScript e Vite, garantindo uma interface ágil, tipagem segura e componentização escalável, com comunicação de dados via Axios. O backend é sustentado por uma API REST robusta construída em Node.js com o framework AdonisJS, operando com um banco de dados SQLite para gerenciar os cadastros e requisições de forma veloz e segura.",
      img: despesasImg,
      repo: "https://github.com/tfelizardo/Solicitador-de-despesas",
      live: "https://refund-project-xi.vercel.app/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Interface dinâmica e reativa" },
        { label: "BACKEND", icon: "fa-solid fa-server", iconColor: "text-[#a78bfa]", desc: "API RESTful estruturada" },
        { separator: true },
        { label: "REACT", icon: "devicon-react-original", iconColor: "text-[#61dafb]", desc: "Componentização e hooks" },
        { label: "TYPESCRIPT", icon: "devicon-typescript-plain", iconColor: "text-[#3178c6]", desc: "Tipagem estática forte" },
        { label: "AXIOS", icon: "fa-solid fa-network-wired", iconColor: "text-white/80", desc: "IntegraçãoHTTP veloz" },
        { label: "ADONISJS", icon: "devicon-adonisjs-original", iconColor: "text-[#5a45ff]", desc: "Framework Node.js MDC" },
        { label: "SQLITE", icon: "devicon-sqlite-plain", iconColor: "text-[#003b57]", desc: "Database leve e rápido" }
      ]
    },
    {
      title: "HairDay",
      desc: "Um sistema de agendamento em formato SPA (Single Page Application) desenvolvido com React e TypeScript para organizar atendimentos de forma simples e intuitiva. Criado com foco na estabilidade proporcionada pela tipagem estática, o sistema estrutura automaticamente os blocos de horário pelo período do dia (manhã, tarde e noite). Ele utiliza recursos de validações ativas de estado no client-side para evitar conflitos na marcação e duplicidade de horários na agenda.",
      img: hairDayImg,
      repo: "https://github.com/tfelizardo/Hairday",
      live: "https://hairday-rocket.vercel.app/",
      objectPosition: "left top",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Interface interativa de agendamentos" },
        { separator: true },
        { label: "REACT", icon: "devicon-react-original", iconColor: "text-[#61dafb]", desc: "Gerenciamento de estado com hooks" },
        { label: "TYPESCRIPT", icon: "devicon-typescript-plain", iconColor: "text-[#3178c6]", desc: "Tipagem estática e segurança no código" },
        { label: "VITE", icon: "devicon-vitejs-plain", iconColor: "text-[#646cff]", desc: "Ambiente de desenvolvimento rápido" },
        { label: "CSS", icon: "devicon-css3-plain", iconColor: "text-[#1572b6]", desc: "Estilização responsiva da interface" },
        { label: "VERCEL", icon: "devicon-vercel-original", iconColor: "text-white", desc: "Plataforma de deploy contínuo" }
      ]
    },
    {
      title: "reflex.game",
      desc: "Muito procurado por jogadores de FPS, o reflex.game é um web game simples, porém desafiador, com foco no treinamento do tempo de reação aos alvos. A dificuldade escala conforme os acertos progridem com intensificação do tempo de spawn do alvo. A aplicação foi elaborada com React, aproveitando conceitos como gerenciamento de estado complexo, o controle de ciclo de vida com Hooks (useRef, useEffect) e controle algorítmico do tempo de loop das animações mediante requestAnimationFrame.",
      img: reflexImg,
      repo: "https://github.com/tfelizardo/reflex-game",
      live: "https://reflex-game-cyan.vercel.app/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Visual do jogo no client-side" },
        { separator: true },
        { label: "REACT", icon: "devicon-react-original", iconColor: "text-[#61dafb]", desc: "Gerenciamento de estado complexo e ciclo de vida" },
        { label: "VITE", icon: "devicon-vitejs-plain", iconColor: "text-[#646cff]", desc: "Ambiente de desenvolvimento rápido" },
        { label: "JAVASCRIPT", icon: "devicon-javascript-plain", iconColor: "text-[#f7df1e]", desc: "Animações lógicas de alvo em canvas/DOM" },
        { label: "CSS", icon: "devicon-css3-plain", iconColor: "text-[#1572b6]", desc: "Estilizações responsivas dos elementos" },
        { label: "VERCEL", icon: "devicon-vercel-original", iconColor: "text-white", desc: "Plataforma de deploy contínuo" }
      ]
    },
    {
      title: "Voz da Perifa",
      desc: "Em parceria oficial com o PerifaConnection, desenvolvi essa robusta landing page focado em alta performance. Mantendo HTML5 semântico, interfaces Flexbox/Grid responsivas e isoladas manipulações DOM via JavaScript Vanilla puro, criamos uma forte apresentação institucional. Os critérios prioritários do app envolviam SEO otimizado no conteúdo base da página usando tags ricas em atributos de metadados, conformidade com exigentes restrições de acessibilidade em redes com WCAG e usabilidade moderna.",
      img: vozImg,
      repo: "https://github.com/tfelizardo/voz-da-perifa",
      live: "https://vozdaperifa.com.br/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Landing page institucional" },
        { separator: true },
        { label: "HTML", icon: "devicon-html5-plain", iconColor: "text-[#e34f26]", desc: "Marcação com validação de acessibilidade" },
        { label: "CSS", icon: "devicon-css3-plain", iconColor: "text-[#1572b6]", desc: "Estilo acessível em layout responsivo" },
        { label: "JAVASCRIPT", icon: "devicon-javascript-plain", iconColor: "text-[#f7df1e]", desc: "Menu mobile e pequenas interatividades" }
      ]
    },
    {
      title: "Conversor de Moedas",
      desc: "Aplicação front-end simples de conversor financeiro e monetário baseada em cotação contínua e em tempo real. O app se conecta a arquitetura de API externa por requisições assíncronas Fetch (AJAX) para parsear os fluxos em JSON, e utilizar tratativas integradas à UI em ES6+. A página executa de forma segura todo carregamento, os fallback de network em caso de falha API e converte o dinheiro atômico de dezenas de nações de forma reponsiva sem page reload.",
      img: conversorImg,
      repo: "https://github.com/tfelizardo/Conversor-de-moedas",
      live: "https://tfelizardo.github.io/Conversor-de-moedas/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Interface do conversor" },
        { separator: true },
        { label: "HTML", icon: "devicon-html5-plain", iconColor: "text-[#e34f26]", desc: "Estrutura dos campos e input" },
        { label: "CSS", icon: "devicon-css3-plain", iconColor: "text-[#1572b6]", desc: "Estilos consistentes entre browsers" },
        { label: "JAVASCRIPT", icon: "devicon-javascript-plain", iconColor: "text-[#f7df1e]", desc: "Lógica de cálculo das cotações da API" },
        { label: "API", icon: "fa-solid fa-network-wired", iconColor: "text-white/80", desc: "Integração via HTTP de taxas globais" }
      ]
    }
  ];

  return (
    <>
      <Background3D />
      <div className="relative z-10 min-h-screen text-white font-sans overflow-x-hidden pt-12">

        <main className="max-w-[1400px] mx-auto w-full flex flex-col gap-32 pb-32">

          {/* SECTION 1: HERO + HABILIDADES */}
          <section className="min-h-[85vh] w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-10 lg:gap-0 relative">

            {/* Left: 3D Character & Info */}
            <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center text-center lg:text-left relative">
              <h2 className="text-brand-blue font-bold tracking-widest text-sm lg:text-base uppercase mb-3 drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]">
                Olá, eu sou Thiago Felizardo
              </h2>
              <h1 className="text-4xl lg:text-6xl font-heading font-extrabold leading-tight mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Desenvolvedor de<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Software</span>
              </h1>
              <p className="text-text-secondary text-sm lg:text-[15px] max-w-lg mb-8 leading-relaxed">
                Trabalho no desenvolvimento de interfaces interativas, com design responsivo, buscando impacto e inovação social por meio da tecnologia, com foco em conectar pessoas, informações e soluções a contextos reais.
              </p>

              {/* Floating Element: 3D Character interaction */}
              <div className="relative w-full max-w-[500px] aspect-[4/3] animate-float mt-4">
                <div className="absolute inset-x-8 top-10 bottom-0 bg-brand-purple/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
                <img
                  src={avatar3D}
                  alt="Avatar 3D do Thiago"
                  className="w-full h-full object-cover relative z-10"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)',
                    maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%)'
                  }}
                />

                {/* Holographic Snippets (Decoration) */}
                <div className="hidden lg:flex absolute top-5 right-0 glass-panel px-4 py-3 rounded-xl animate-float-delayed text-[10px] font-mono text-brand-blue border border-brand-blue/30 shadow-[0_0_20px_rgba(0,212,255,0.2)] z-20">
                  &lt;React.Fragment /&gt;
                </div>
                <div className="hidden lg:flex absolute bottom-10 left-5 glass-panel px-5 py-4 rounded-xl animate-float text-xs font-mono text-brand-purple border border-brand-purple/30 shadow-[0_0_20px_rgba(147,51,234,0.2)] z-20">
                  npm run dev
                </div>
              </div>
            </div>

            {/* Right: Glassmorphism Skills Panels */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
              <div className="glass-card w-full max-w-lg p-8 lg:p-12 rounded-[2rem] relative z-10 border border-white/10 shadow-2xl">
                <h3 className="text-xl font-heading font-bold mb-8 flex items-center gap-3 text-white">
                  <i className="fa-solid fa-layer-group text-brand-blue"></i> Minhas Habilidades
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="group relative flex flex-col items-center gap-3 cursor-pointer">
                      <div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] group-hover:bg-brand-blue/10">
                        {skill.isDevicon ? (
                          <i className={skill.className} style={{ fontSize: '30px' }}></i>
                        ) : (
                          <img src={skill.src} alt={skill.name} className="w-8 h-8 object-contain drop-shadow-md" />
                        )}
                      </div>
                      <span className="text-[11px] lg:text-xs font-medium text-text-secondary group-hover:text-white transition-colors text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative background circle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/5 rounded-full z-0 flex items-center justify-center">
                <div className="w-[200px] h-[200px] border border-brand-purple/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>
            </div>

          </section>

          {/* SECTION 2: TIMELINE (Experiências Recentes) */}
          <section className="px-6 lg:px-20 w-full relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4 drop-shadow-md">
                Experiências <span className="text-brand-purple">Recentes</span>
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">Uma linha do tempo da minha jornada construindo produtos e soluções web.</p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto mt-24">
              {/* Horizontal glowing line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] timeline-line rounded-full z-0 hidden lg:block"></div>

              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8 relative z-10 w-full px-4 lg:px-0">

                {/* Item 1 */}
                <div className="flex-1 w-full lg:w-auto relative group">
                  {/* Dot indicator */}
                  <div className="hidden lg:flex absolute top-[-52px] left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(0,212,255,0.8)] z-20 transition-transform group-hover:scale-150"></div>

                  <div className="glass-card p-6 lg:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="text-brand-blue font-bold text-sm mb-2 flex items-center justify-between">
                      <span>Setembro de 2025</span>
                      <i className="fa-solid fa-briefcase opacity-50 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">Observatório das Baixadas</h3>
                    <p className="text-brand-purple/80 text-xs uppercase tracking-widest font-bold mb-4">Desenvolvedor Front-End</p>
                    <ul className="text-text-secondary text-xs sm:text-sm space-y-3">
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-blue mt-1 text-[10px]"></i> Desenvolvimento do Atlas da Baixada (plataforma de mapeamento colaborativo)</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-blue mt-1 text-[10px]"></i> Interfaces responsivas e melhorias contínuas de UX</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-blue mt-1 text-[10px]"></i> Integração com APIs e banco de dados via Supabase</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-blue mt-1 text-[10px]"></i> Boas práticas de SEO</li>
                    </ul>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex-1 w-full lg:w-auto mt-0 lg:mt-24 relative group">
                  {/* Dot indicator */}
                  <div className="hidden lg:flex absolute top-[-52px] left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-purple rounded-full shadow-[0_0_15px_rgba(147,51,234,0.8)] z-20 transition-transform group-hover:scale-150"></div>

                  <div className="glass-card p-6 lg:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="text-brand-purple font-bold text-sm mb-2 flex items-center justify-between">
                      <span>Dezembro de 2025</span>
                      <i className="fa-solid fa-laptop-code opacity-50 text-xl"></i>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4">PerifaConnection</h3>
                    <p className="text-brand-blue/80 text-xs uppercase tracking-widest font-bold mb-4">Freelancer Web</p>
                    <ul className="text-text-secondary text-xs sm:text-sm space-y-3">
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-purple mt-1 text-[10px]"></i> Criação de páginas para o jornal Voz da Perifa</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-purple mt-1 text-[10px]"></i> Layouts responsivos e adaptáveis</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-purple mt-1 text-[10px]"></i> SEO avançado com tags de acessibilidade</li>
                      <li className="flex gap-2"><i className="fa-solid fa-circle-check text-brand-purple mt-1 text-[10px]"></i> Otimização de performance e usabilidade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: PROJETOS */}
          <section className="px-6 lg:px-20 w-full relative z-20">
            <div className="text-left mb-16">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 drop-shadow-md">
                Projetos Individuais e Colaborativos
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"></div>
            </div>

            {/* 3D Floating Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
              {projects.map((proj, idx) => (
                <div key={idx} className="glass-card rounded-[2rem] p-3 overflow-hidden group transform-3d hover:rotate-x-2 hover:rotate-y-[-2deg] hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 ease-out h-full flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-brand-blue/30">
                  {/* Imagem Placeholder Decorada */}
                  <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 filter brightness-90 group-hover:brightness-110 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: proj.objectPosition || 'center' }} />
                  </div>

                  <div className="px-5 pb-5 flex-1 flex flex-col z-20 relative">
                    <h3 className="text-2xl font-bold font-heading text-white mb-3 tracking-wide">{proj.title}</h3>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">{proj.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {proj.tags && proj.tags.map((tag, tagIdx) => {
                        if (tag.separator) {
                          return <div key={tagIdx} className="w-[1px] h-4 bg-white/10 mx-1 self-center"></div>;
                        }
                        const isActive = activeTooltip === `project-${idx}-${tagIdx}`;
                        return (
                          <div
                            key={tagIdx}
                            className="tooltip-trigger relative group/tag cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setActiveTooltip(isActive ? null : `project-${idx}-${tagIdx}`);
                            }}
                          >
                            <span className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-[9px] sm:text-[10px] font-medium text-white/80 uppercase tracking-wider backdrop-blur-sm transition-all duration-300 group-hover/tag:bg-white/10 group-hover/tag:border-brand-blue/50 group-hover/tag:-translate-y-0.5 group-hover/tag:shadow-[0_0_15px_rgba(0,212,255,0.15)] group-hover/tag:text-white ${isActive ? 'bg-white/10 border-brand-blue/50 -translate-y-0.5 shadow-[0_0_15px_rgba(0,212,255,0.15)] text-white' : ''}`}>
                              {tag.icon && <i className={`${tag.icon} ${tag.iconColor || 'text-white/60'} text-xs relative top-[0.5px] transition-transform duration-300 group-hover/tag:scale-125 ${isActive ? 'scale-125' : ''}`}></i>}
                              {tag.label}
                            </span>

                            {tag.desc && (
                              <div className={`absolute transition-all duration-300 z-50 w-max max-w-[220px] bg-[#1e1e24] border border-white/10 rounded-xl p-3 shadow-2xl bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-none text-center ${isActive ? 'opacity-100 visible -translate-y-2' : 'opacity-0 invisible translate-y-2 group-hover/tag:opacity-100 group-hover/tag:visible group-hover/tag:-translate-y-2'}`}>
                                <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-[0.1em]">{tag.label}</h4>
                                <p className="text-brand-blue/90 text-[11px] leading-snug font-medium normal-case tracking-normal">{tag.desc}</p>
                                <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1e1e24] border-r border-b border-white/10 rotate-45"></div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col xl:flex-row gap-3">
                      {proj.repo && (
                        <a href={proj.repo} target="_blank" rel="noreferrer" className="flex-1 text-center py-3.5 px-4 rounded-xl glass-panel text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                          <i className="fa-brands fa-github text-sm mr-2"></i> GitHub
                        </a>
                      )}
                      {proj.live && (
                        <a href={proj.live} target="_blank" rel="noreferrer" className="flex-1 text-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                          Ver Projeto <i className="fa-solid fa-arrow-right text-xs ml-2"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT FOOTER (Original restored at the bottom) */}
          <section className="px-6 lg:px-20 mx-auto w-full max-w-4xl relative z-20">
            <div className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f15] border border-white/5 rounded-[2.5rem] py-12 px-6 lg:py-16 text-center relative overflow-hidden shadow-2xl glass-panel">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-white tracking-tight drop-shadow-md">Vamos Trabalhar Juntos? 🚀</h2>
              <p className="text-text-secondary/80 mb-10 max-w-xl mx-auto text-[15px] leading-relaxed">
                Estou disponível para novos projetos e oportunidades. Se você tem uma ideia ou precisa de um desenvolvedor dedicado, entre em contato!
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                  <a href="mailto:tfelizardo4@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-[#131317] text-white font-bold text-[15px] rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl border border-white/5">
                    <i className="fa-solid fa-envelope text-lg text-brand-blue"></i> Enviar Email
                  </a>
                  <a href="https://wa.me/" className="w-full sm:w-auto px-8 py-4 bg-[#131317] text-white font-bold text-[15px] rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl border border-white/5">
                    <i className="fa-brands fa-whatsapp text-2xl text-green-500"></i> WhatsApp
                  </a>
                </div>
                <a href={curriculoPdf} download className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-brand-purple font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 mt-2">
                  <i className="fa-solid fa-download text-sm"></i> Download Currículo
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* SMALL COPYRIGHT FOOTER */}
        <footer className="w-full pb-10 relative z-10 text-center flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/tfelizardo" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-brand-purple/20 transition-colors text-text-secondary hover:text-white text-lg">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/thiago-felizardo-835b09213/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-brand-blue/20 transition-colors text-text-secondary hover:text-white text-lg">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/flzthiago/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full glass-panel hover:bg-pink-500/20 transition-colors text-text-secondary hover:text-white text-lg">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p className="text-text-secondary text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">© 2026 dev.thiago</p>
        </footer>
      </div>
    </>
  );
};

export default App;
