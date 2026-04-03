import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Assets
import fotinha from './assets/fotinha.jpeg';
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

const glowStyle = (color, top, left) => ({
  position: "absolute",
  width: "400px",
  height: "400px",
  top: top,
  left: left,
  background: color,
  borderRadius: "50%",
  filter: "blur(120px)",
  opacity: 0.4,
  animation: "float 10s infinite alternate ease-in-out",
});

function Background3D() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "#0f0f0f",
      }}
    >
      {/* GLOW 1 */}
      <div style={glowStyle("#ff6b00", "20%", "30%")} />

      {/* GLOW 2 */}
      <div style={glowStyle("#00d4ff", "80%", "20%")} />

      {/* GLOW 3 */}
      <div style={glowStyle("#9333ea", "50%", "80%")} />
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
    { src: htmlIcon, name: "HTML5", desc: "Estrutura e semântica" },
    { src: cssIcon, name: "CSS3", desc: "Estilização e design" },
    { src: jsIcon, name: "JavaScript", desc: "Manipulação de DOM e lógica" },
    { src: reactIcon, name: "React", desc: "Interfaces dinâmicas com hooks" },
    { src: nodeIcon, name: "Node.js", desc: "APIs básicas" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", desc: "Controle de versão" },
    { isDevicon: true, className: "devicon-azuresqldatabase-plain text-[#0078d4]", name: "SQL", desc: "Consultas e modelagem simples" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS", desc: "Estilização utilitária rápida" }
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
      title: "reflex.game",
      desc: "Muito usado por jogadores de FPS para treinar a reação, o reflex.game é um jogo simples, porém desafiador. Seu objetivo é clicar nos alvos que aparecem aleatoriamente na tela. Conforme sua pontuação aumenta, o jogo fica mais rápido e mais alvos surgem, testando seus reflexos ao máximo. O projeto foi desenvolvido como forma de praticar conceitos avançados de React, como gerenciamento de estado complexo, animações com requestAnimationFrame e efeitos colaterais com useEffect.",
      img: reflexImg,
      repo: "https://github.com/tfelizardo/reflex-game",
      live: "https://reflex-game-cyan.vercel.app/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Visual do jogo no client-side" },
        { separator: true },
        { label: "REACT", icon: "devicon-react-original", iconColor: "text-[#61dafb]", desc: "Gerenciamento de estado complexo e ciclo de vida" },
        { label: "JAVASCRIPT", icon: "devicon-javascript-plain", iconColor: "text-[#f7df1e]", desc: "Animações lógicas de alvo em canvas/DOM" },
        { label: "CSS", icon: "devicon-css3-plain", iconColor: "text-[#1572b6]", desc: "Estilizações responsivas dos elementos" }
      ]
    },
    {
      title: "HairDay",
      desc: "Um sistema de agendamento desenvolvido para organizar atendimentos de forma simples, rápida e intuitiva. O sistema organiza os agendamentos automaticamente por períodos do dia (manhã, tarde e noite) e impede a duplicidade de horários, garantindo uma experiência profissional e sem conflitos.",
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
      title: "Voz da Perifa",
      desc: "Em parceria com o PerifaConnection, desenvolvi uma landing page responsiva para a divulgação do Jornal Voz da Perifa, projeto de comunicação popular focado em justiça climática e racismo ambiental, com atenção à acessibilidade, usabilidade e apresentação institucional da iniciativa.",
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
      desc: "É uma aplicação web que permite a conversão de valores entre diferentes moedas em tempo real. O projeto consome uma API externa para garantir cotações atualizadas e precisas.",
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
    },
    {
      title: "Solicitador de Despesas",
      desc: "Aplicação web para solicitação e controle de despesas, utilizando HTML, CSS e JavaScript. O projeto permite o cadastro e a visualização dinâmica das despesas, com layout responsivo e funcionamento simples e intuitivo.",
      img: despesasImg,
      repo: "https://github.com/tfelizardo/Solicitador-de-despesas",
      live: "https://tfelizardo.github.io/Solicitador-de-despesas/",
      tags: [
        { label: "FRONTEND", icon: "fa-solid fa-display", iconColor: "text-[#a78bfa]", desc: "Interface de controle local" },
        { separator: true },
        { label: "HTML", icon: "devicon-html5-plain", iconColor: "text-[#e34f26]", desc: "Tabelas e organização em formulários" },
        { label: "CSS", icon: "devicon-css3-plain", iconColor: "text-[#1572b6]", desc: "Cores e temas" },
        { label: "JAVASCRIPT", icon: "devicon-javascript-plain", iconColor: "text-[#f7df1e]", desc: "Adição e remoção dinâmica na listagem" }
      ]
    }
  ];

  return (
    <>
      <Background3D />
      <div className="flex flex-col lg:flex-row min-h-screen animate-fade-in font-sans">

        {/* SIDEBAR (Esquerda - Fixa) */}
        <aside className="w-full lg:w-[35%] h-auto bg-black/30 backdrop-blur-2xl border-r border-gray-800 flex flex-col justify-start items-center p-8 lg:p-10 relative z-10 lg:sticky lg:top-0 lg:h-screen">

          {/* Avatar com Glow */}
          <div className="relative mb-8 group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-pink to-brand-blue rounded-full blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
            <img
              src={fotinha}
              className="relative w-40 h-40 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-2xl transition duration-500"
              alt="Avatar"
            />
          </div>

          <div className="text-center space-y-4 px-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
              Olá, eu sou <span className="text-brand-orange">Thiago Felizardo,</span> Desenvolvedor de Software
            </h1>
            <p className="text-text-secondary leading-relaxed text-sm lg:text-base mt-2">
              Trabalho no desenvolvimento de interfaces interativas, com design responsivo, buscando impacto e inovação social por meio da tecnologia, com foco em conectar pessoas, informações e soluções a contextos reais.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-10">
            {[
              {
                href: "https://github.com/tfelizardo",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )
              },
              {
                href: "https://www.linkedin.com/in/thiago-felizardo-835b09213/",
                svg: (
                  <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                )
              },
              {
                href: "https://www.instagram.com/flzthiago/",
                svg: (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )
              }
            ].map((social, idx) => (
              <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#2d2d32] rounded-xl hover:bg-brand-orange transition-all transform hover:-translate-y-1 border border-white/10 shadow-xl group">
                {social.svg}
              </a>
            ))}
          </div>

          <a href={curriculoPdf} download className="mt-12 px-10 py-3.5 rounded-full bg-brand-main text-white font-bold text-xs tracking-[0.15em] hover:bg-brand-orange transition-all shadow-xl flex items-center gap-2 border border-gray-800 uppercase">
            CURRICULO <i className="fa-solid fa-download text-[10px]"></i>
          </a>

        </aside>

        {/* MAIN CONTENT (Direita - Scroll) */}
        <main className="w-full lg:w-[65%] h-full bg-transparent relative">
          <div className="p-6 lg:px-20 lg:pt-12 lg:pb-20 max-w-5xl mx-auto space-y-12">

            {/* SKILLS MARQUEE */}
            <section className="overflow-hidden">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white flex items-center gap-4 relative z-20">
                Minhas Habilidades <span className="w-16 h-[3px] bg-brand-orange rounded-full mt-1"></span>
              </h2>

              <div className="relative w-full overflow-hidden pt-10 pb-24 -mt-2">

                <div className="flex w-max animate-marquee hover:pause">
                  {[1, 2, 3, 4].map((set) => (
                    <div key={set} className="flex gap-12 items-center px-6">
                      {skills.map((skill, idx) => {
                        const isActive = activeTooltip === `skill-${set}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="tooltip-trigger relative group cursor-pointer flex items-center justify-center"
                            onClick={() => setActiveTooltip(isActive ? null : `skill-${set}-${idx}`)}
                          >
                            {/* Ícone Puro (Scale + Glow) */}
                            <div className={`transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,102,0,0.4)] group-hover:-translate-y-1 relative z-10 flex items-center justify-center ${isActive ? 'scale-125 drop-shadow-[0_0_15px_rgba(255,102,0,0.4)] -translate-y-1' : ''}`}>
                              {skill.isDevicon ? (
                                <i className={skill.className} style={{ fontSize: '44px' }}></i>
                              ) : (
                                <img src={skill.src} alt={skill.name} className="w-11 h-11 object-contain" />
                              )}
                            </div>

                            {/* Tooltip com nome e contexto */}
                            <div className={`absolute transition-all duration-300 z-50 w-max max-w-[180px] bg-[#252528] border border-white/10 rounded-xl p-3 shadow-2xl top-[calc(100%+12px)] left-1/2 -translate-x-1/2 pointer-events-none text-center ${isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'}`}>
                              <h4 className="text-white font-bold text-sm mb-1">{skill.name}</h4>
                              <p className="text-brand-orange/90 text-[11px] leading-snug font-medium">{skill.desc}</p>
                              <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#252528] border-l border-t border-white/10 rotate-45"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS CAROUSEL */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold flex items-center gap-4 text-white">
                  Projetos Individuais e Colaborativos <span className="w-16 h-[3px] bg-brand-orange rounded-full mt-1"></span>
                </h2>
                <div className="flex gap-3">
                  <button className="swiper-prev-btn w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-[#252528] text-white hover:bg-brand-orange hover:border-brand-orange transition-all text-sm">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="swiper-next-btn w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-[#252528] text-white hover:bg-brand-orange hover:border-brand-orange transition-all text-sm">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                grabCursor={true}
                autoHeight={true}
                navigation={{
                  prevEl: '.swiper-prev-btn',
                  nextEl: '.swiper-next-btn',
                }}
                className="mySwiper overflow-hidden"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-brand-card rounded-2xl overflow-hidden p-0 transition-all duration-300 group">
                      <div className="relative w-full aspect-video overflow-hidden">

                        <img
                          src={project.img}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ objectPosition: project.objectPosition || 'center' }}
                          alt={project.title}
                        />
                      </div>
                      <div className="p-6 lg:px-10 lg:pt-10 lg:pb-8 space-y-5">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{project.desc}</p>
                        <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
                          {project.tags && project.tags.map((tag, tagIdx) => {
                            if (tag.separator) {
                              return <div key={tagIdx} className="w-[1px] h-4 bg-white/10 mx-1"></div>;
                            }
                            const isActive = activeTooltip === `project-${index}-${tagIdx}`;
                            return (
                              <div
                                key={tagIdx}
                                className="tooltip-trigger relative group/tag cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  setActiveTooltip(isActive ? null : `project-${index}-${tagIdx}`);
                                }}
                              >
                                <span className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-medium text-white/80 uppercase tracking-wider backdrop-blur-sm transition-all duration-300 group-hover/tag:bg-white/10 group-hover/tag:border-brand-orange/50 group-hover/tag:-translate-y-0.5 group-hover/tag:shadow-[0_0_15px_rgba(255,102,0,0.15)] group-hover/tag:text-white ${isActive ? 'bg-white/10 border-brand-orange/50 -translate-y-0.5 shadow-[0_0_15px_rgba(255,102,0,0.15)] text-white' : ''}`}>
                                  {tag.icon && <i className={`${tag.icon} ${tag.iconColor || 'text-white/60'} text-xs transition-transform duration-300 group-hover/tag:scale-125 ${isActive ? 'scale-125' : ''}`}></i>}
                                  {tag.label}
                                </span>

                                {tag.desc && (
                                  <div className={`absolute transition-all duration-300 z-50 w-max max-w-[220px] bg-[#252528] border border-white/10 rounded-xl p-3 shadow-2xl bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 pointer-events-none text-center ${isActive ? 'opacity-100 visible -translate-y-2' : 'opacity-0 invisible translate-y-2 group-hover/tag:opacity-100 group-hover/tag:visible group-hover/tag:-translate-y-2'}`}>
                                    <h4 className="text-white font-bold text-[10px] mb-1 uppercase tracking-[0.1em]">{tag.label}</h4>
                                    <p className="text-brand-orange/90 text-[11px] leading-snug font-medium normal-case tracking-normal">{tag.desc}</p>
                                    <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#252528] border-r border-b border-white/10 rotate-45"></div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                          {project.repo && (
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-[#252528] text-white hover:bg-[#333338] transition-all duration-300 text-xs font-black uppercase tracking-widest border border-white/5 shadow-xl"
                            >
                              <i className="fa-brands fa-github text-lg"></i> REPOSITÓRIO
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-brand-orange text-white hover:bg-[#e66000] transition-all duration-300 text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-orange/20"
                            >
                              <i className="fa-solid fa-arrow-up-right-from-square text-base"></i> ACESSAR PROJETO
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* CONTACT FOOTER */}
            <section className="bg-[#2a2a2e] rounded-3xl py-6 px-6 lg:py-8 lg:px-20 text-center relative overflow-hidden">
              <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">Vamos Trabalhar Juntos? 🚀</h2>
              <p className="text-text-secondary/80 mb-6 max-w-xl mx-auto text-[15px] leading-relaxed">
                Estou disponível para novos projetos e oportunidades. Se você tem uma ideia ou precisa de um desenvolvedor dedicado, entre em contato!
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="mailto:tfelizardo4@gmail.com" className="px-7 py-4 bg-[#131317] text-white font-bold text-[15px] rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl border border-white/5">
                  <i className="fa-solid fa-envelope text-lg"></i> Enviar Email
                </a>
                <a href="https://wa.me/" className="px-7 py-4 bg-[#131317] text-white font-bold text-[15px] rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl border border-white/5">
                  <i className="fa-brands fa-whatsapp text-2xl"></i> Conversar no WhatsApp
                </a>
              </div>
            </section>

            <footer className="text-center text-text-secondary text-xs pt-10 pb-10 tracking-widest opacity-50 uppercase">
              <p>© 2026 dev.thiago</p>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
