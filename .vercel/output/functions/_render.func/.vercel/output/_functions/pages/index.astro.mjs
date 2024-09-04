<<<<<<< Updated upstream
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as createAstro, f as renderHead, a as addAttribute } from '../chunks/astro/server_oJjc8OyC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_By3ADVnU.mjs';
=======
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as createAstro, f as renderHead, a as addAttribute } from '../chunks/astro/server_BlG17DOU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_Clx8S_Kq.mjs';
>>>>>>> Stashed changes
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <h1 id="inicio">Portafolio</h1> <nav class="nav"> <ul class="ul-nav"> <a href="#inicio"> <li class="li-nav">Inicio</li> </a> <a href="#proyectos"> <li class="li-nav">Proyectos</li> </a> <a href="#skills"> <li class="li-nav">Habilidades</li> </a> <a href="#estudios"> <li class="li-nav">Estudios</li> </a> <a href="#sobremi"> <li class="li-nav">Sobre mi</li> </a> <a href="#contacto"> <li class="li-nav">Contacto</li> </a> </ul> </nav> <div class="container-bnt-menu"> <div class="btn-menu"> <span class="linea-menu" id="linea1"></span> <span class="linea-menu" id="linea2"></span> <span class="linea-menu" id="linea3"></span> </div> </div> <div class="menu-drop"></div>  </header> `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/header/Header.astro", void 0);

const studies = [
  {
    title: "Instituto Polictenico Angeles Custodios",
    corporation: "Tecnico Informatica",
    date: "2016 – 2019",
  },
  {
    title: "Diseño Web Profesional",
    corporation: "Udemy - Remoto",
    date: "04/2023 – 09/2023",
  },
  
  {
    title: "Técnico Superior en desarrollo de software",
    corporation: "Instituto Tecnologico de las Americas (ITLA)",
    date: "2020 – 2022",
  },
  {
    title: "Selenium Webdriver con python -Intro a pruebas automatizadas",
    corporation: "Udemy - Remoto",
    date: "2022",
  },
  {
    title: "Scrum Foundation Professional Certificate - SFPC™",
    corporation: "CertiProf",
    date: "2022",
  },
  {
    title: "Accredited Software Testing Fundamentals Certification (AICS® ASTFC)",
    corporation: "AICS® - Asociación Internacional de Calidad de Software",
    date: "2022",
  },
    
  ];
  
  const IconKeys = {
    html: "html",
    css: "css",
    javaScript: "javaScript",
    react: "react",
    astro: "astro",
    materialUi: "materialUi",
    nextjs: "nextjs",
    redux: "redux",
    styled: "styled",
    tailwind: "tailwind",
    radix: "radix",
    reactQuery: "reactQuery",
    typeScript: "typeScript",
    git: "git",
    github: "github",
    nodejs: "nodejs",
    mongodb: "mongodb",
    python: "python",
    selenium: "selenium",
    postman: "postman",
    mysql: "mysql",
    docker:"docker",
    devops:"devops"

    
  
  };
  
  const skills = [
    {
      title: "Html",
      icon: IconKeys.html,
    },
    {
      title: "Css",
      icon: IconKeys.css,
    },
    {
      title: "JavaScript",
      icon: IconKeys.javaScript,
    },
    {
      title: "Astro",
      icon: IconKeys.astro,
    },
    {
      title: "Tailwindcss",
      icon: IconKeys.tailwind,
    },
    {
      title: "React Js",
      icon: IconKeys.react,
    },
    {
      title: "Next Js",
      icon: IconKeys.nextjs,
    },
    {
      title: "Git",
      icon: IconKeys.git,
    },
  
    {
      title: "Github",
      icon: IconKeys.github,
    },
  
    {
      title: "Node Js",
      icon: IconKeys.nodejs,
    },
    
    {
      title: "Mongo Db",
      icon: IconKeys.mongodb,
    },
    {
      title: "Python",
      icon: IconKeys.python,
    },
    {
      title: "Selenium",
      icon: IconKeys.selenium,
    },
    {
      title: "devops",
      icon: IconKeys.devops,
    },
    
    {
      title: "postman",
      icon: IconKeys.postman,
    },
    {
      title: "Mysql",
      icon: IconKeys.mysql,
    },
  ];
<<<<<<< Updated upstream
=======
  
  const projects = [
    {
      img: "../../../img/tasks-manager.webp",
      title: "Tasks Manager",
      link: "https://task-manager-ecru-chi.vercel.app/dashboard",
      description: `Administrador de tareas con drag and drop autenticación con Clerk , shadcn.  "En Desarrollo "`,
      technologies: [
        {
          icon: IconKeys.typeScript,
        },
        {
          icon: IconKeys.nextjs,
        },
        {
          icon: IconKeys.tailwind,
        },
        {
          icon: IconKeys.zustand,
        },
        {
          icon: IconKeys.shadcn,
        },
      ],
    },
    {
      img: "../../../img/ecommerce-stripe-2.webp",
      title: "Ecommerce Stripe",
      link: "https://ecommerce-stripe-763m.vercel.app/",
      description: `Proyecto FullStack de un ecommerce con pasarela de pagos stripe integrada, destalles de el product etc.  `,
      technologies: [
        {
          icon: IconKeys.typeScript,
        },
        {
          icon: IconKeys.nextjs,
        },
        {
          icon: IconKeys.tailwind,
        },
        {
          icon: IconKeys.mongodb,
        },
        {
          icon: IconKeys.stripe,
        },
      ],
    },
    {
      img: "../../../img/nexanime.webp",
      title: "NexAnime",
      link: "https://nexanime.vercel.app",
      description: `plataforma de anime para ver los animes en tendencia , más valorados , estadísticas.`,
      technologies: [
        {
          icon: IconKeys.typeScript,
        },
        {
          icon: IconKeys.nextjs,
        },
        {
          icon: IconKeys.tailwind,
        },
      ],
    },
    {
      img: "../../../img/store-games.webp",
      title: "Store games",
      link: "https://store-games-site.netlify.app/",
      description: `Simulando una página de juegos , consumiendo la API de rawg api
        donde los usuarios pueden buscar videojuegos, ver sus detalles como
        creadores , calificaciones,tiendas donde comprar.....`,
      technologies: [
        {
          icon: IconKeys.react,
        },
        {
          icon: IconKeys.css,
        },
        {
          icon: IconKeys.javaScript,
        },
        {
          icon: IconKeys.tailwind,
        },
        {
          icon: IconKeys.reactQuery,
        },
      ],
    },
    {
      img: "../../../img/movie.webp",
      title: "Movie Tv",
      link: "https://movietvsite.netlify.app/",
      description: `simulando una página de películas , consumiendo la API de themovietv
                donde los usuarios pueden buscar películas y ver trailer.....`,
      technologies: [
        {
          icon: IconKeys.react,
        },
        {
          icon: IconKeys.css,
        },
        {
          icon: IconKeys.javaScript,
        },
        {
          icon: IconKeys.tailwind,
        },
      ],
    },
    {
      img: "../../../img/cyberpunk.webp",
      title: "cyberpunk",
      link: "https://preeminent-liger-266356.netlify.app/",
      description: `este proyecto se trata de un clon de la pagína de cyberpunk , donde
        el ususario puede ver los tailer de él juegos y también los
        episodios de la serie....`,
      technologies: [
        {
          icon: IconKeys.html,
        },
        {
          icon: IconKeys.css,
        },
        {
          icon: IconKeys.javaScript,
        },
      ],
    },
  
    {
      img: "../../../img/fit-nation.webp",
      title: "gym",
      link: "https://fitnation.netlify.app/",
      description: `landing page de una gym por ahora es una landing todavia está en
                desarrollo la idea es que los usuarios puedan comprar productos de
                el gym`,
      technologies: [
        {
          icon: IconKeys.react,
        },
        {
          icon: IconKeys.css,
        },
        {
          icon: IconKeys.javaScript,
        },
        {
          icon: IconKeys.tailwind,
        },
      ],
    },
    {
      img: "../../../img/spotify.webp",
      title: "Spotify-Clone",
      link: "https://www.linkedin.com/posts/osnaider-mart%C3%ADnez_clon-de-la-p%C3%A1gina-de-spotify-echo-con-react-activity-7119712602342965248-upgL?utm_source=share&utm_medium=member_desktop",
      description: `Clon de la página de Spotify con autenticación de usuario, reproductor de canciones, etc `,
      technologies: [
        {
          icon: IconKeys.react,
        },
        {
          icon: IconKeys.javaScript,
        },
        {
          icon: IconKeys.tailwind,
        },
        {
          icon: IconKeys.redux,
        },
        {
          icon: IconKeys.reactQuery,
        },
      ],
    },
  
    {
      img: "../../../img/landing.webp",
      title: "Landing Realidad Virtual",
      link: "https://realityvirtual.netlify.app/",
      description: `landing page de gafas de realidad virtual donde se muestra el
                producto y como funciona`,
      technologies: [
        {
          icon: IconKeys.astro,
        },
        {
          icon: IconKeys.css,
        },
        {
          icon: IconKeys.javaScript,
        },
        {
          icon: IconKeys.tailwind,
        },
      ],
    },
  ];

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/projects/Project.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-projects" data-astro-cid-pmnxldje> <div class="linear-grandient-1" data-astro-cid-pmnxldje></div> <div class="container-projects" data-astro-cid-pmnxldje> <h2 class="title-projects" id="proyectos" data-astro-cid-pmnxldje>Proyectos</h2> <div data-astro-cid-pmnxldje> <ul class="ul-projects" data-astro-cid-pmnxldje> ${projects.map(({ description, img, link, technologies, title }) => renderTemplate`${renderComponent($$result, "Project", $$Project, { "img": img, "description": description, "link": link, "title": title, "technologies": technologies, "data-astro-cid-pmnxldje": true })}`)} </ul> </div> </div> </section> `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/projects/Projects.astro", void 0);
>>>>>>> Stashed changes

const $$Studies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section_studies" data-astro-cid-iiherd3g> <div class="linear-grandient-1" data-astro-cid-iiherd3g></div> <div class="content_studies" data-astro-cid-iiherd3g> <h3 class="title-studies" id="studies" data-astro-cid-iiherd3g>Estudios</h3> <ul class="ul-studies" data-astro-cid-iiherd3g> ${studies.map(({ date, title, corporation }) => renderTemplate`<li class="li-studies" data-astro-cid-iiherd3g> <span class="circle" data-astro-cid-iiherd3g></span> <div data-astro-cid-iiherd3g> <h3 data-astro-cid-iiherd3g>${title}</h3> <p data-astro-cid-iiherd3g>${corporation}</p> <span data-astro-cid-iiherd3g>${date}</span> </div> </li>`)} </ul> </div> </section> `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/studies/Studies.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-about" data-astro-cid-s7v3hz27> <div class="linear-grandient-1" data-astro-cid-s7v3hz27></div> <div class="container-about" data-astro-cid-s7v3hz27> <div class="container-text-about" data-astro-cid-s7v3hz27> <h2 class="title-about" id="sobremi" data-astro-cid-s7v3hz27>Sobre mi</h2> <p data-astro-cid-s7v3hz27>
Soy un profesional del desarrollo de software, especializado en el
          desarrollo web front-end. Desde que comencé mis estudios en
          programación, descubrí mi interés por crear interfaces web intuitivas y
          atractivas. Cada día me dedico a aprender y practicar nuevas tecnologías
          para seguir mejorando mis habilidades. Me considero una persona
          responsable, dinámica y creativa, con una gran capacidad de adaptación y
          un constante deseo de trabajar y aprender. Tengo iniciativa para
          resolver problemas y disfruto enfrentando nuevos desafíos en el campo de
          la tecnología. En el futuro, planeo expandir mis conocimientos y dominar
          una variedad aún mayor de herramientas y técnicas en el desarrollo web.
</p> </div> <div class="container-svg-about" data-astro-cid-s7v3hz27> <div class="container-svg" data-astro-cid-s7v3hz27> ${renderComponent($$result, "lottie-player", "lottie-player", { "src": "https://assets8.lottiefiles.com/packages/lf20_sg18igu8.json", "background": "transparent", "speed": "1", "style": "width: 380px; height: 380px; position:relative;", "loop": true, "autoplay": true, "data-astro-cid-s7v3hz27": true })} </div> </div> </div> </section>  `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/about/About.astro", void 0);

const $$IconAstro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconAstro.astro", void 0);

const $$IconMaterialUi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <!--?xml version="1.0" encoding="UTF-8"?--> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <svg width="45px" height="45px" viewBox="0 -26 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"> <g> <polygon fill="#00B0FF" points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"></polygon> <polygon fill="#0081CB" points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"></polygon> <polygon fill="#00B0FF" points="96 129.322667 96 166.272 160 203.221333 160 166.272"></polygon> <path d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z" fill="#0081CB"></path> </g> </svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconMaterialUi.astro", void 0);

const $$IconNextjs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg width="45" height="45" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"> <circle cx="90" cy="90" r="90" fill="black"></circle> </mask> <g mask="url(#mask0_408_139)"> <circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"></circle> <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"></path> <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"></rect> </g> <defs> <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconNextjs.astro", void 0);

const $$IconRedux = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg width="45px" height="45px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.7868 21.556C22.8939 21.4433 23.7338 20.505 23.6956 19.3789C23.6575 18.253 22.703 17.3522 21.5577 17.3522H21.4814C20.2978 17.3897 19.3817 18.3656 19.4199 19.5291C19.4581 20.0921 19.6871 20.58 20.0307 20.9178C18.7327 23.4326 16.7475 25.2717 13.7698 26.8106C11.7464 27.8615 9.6468 28.2369 7.54715 27.9742C5.82918 27.749 4.49301 26.9984 3.65301 25.7596C2.43144 23.9205 2.31695 21.9312 3.34773 19.942C4.07312 18.5157 5.21828 17.4647 5.94367 16.9392C5.79098 16.4513 5.56187 15.6256 5.44738 15.0251C-0.0882044 18.9661 0.484491 24.2959 2.16426 26.8106C3.42402 28.6873 5.98187 29.8509 8.80691 29.8509C9.57039 29.8509 10.3339 29.7757 11.0975 29.5882C15.9841 28.6498 19.6872 25.7972 21.7868 21.556ZM28.5059 16.9018C25.6045 13.5613 21.3287 11.7222 16.4421 11.7222H15.8314C15.4878 11.0466 14.7624 10.5961 13.9607 10.5961H13.8843C12.7009 10.6337 11.7848 11.6095 11.8229 12.7731C11.8611 13.8991 12.8154 14.7999 13.9607 14.7999H14.037C14.8769 14.7624 15.6023 14.2369 15.9077 13.5237H16.5948C19.4963 13.5237 22.2449 14.3494 24.7265 15.9634C26.6352 17.202 28.0096 18.816 28.7731 20.7677C29.4221 22.3441 29.3839 23.883 28.6967 25.1967C27.6278 27.1859 25.8336 28.2744 23.4666 28.2744C21.9395 28.2744 20.4889 27.824 19.7253 27.4862C19.3054 27.8615 18.5418 28.462 18.0073 28.8375C19.649 29.5881 21.3287 30.001 22.9321 30.001C26.597 30.001 29.3076 28.0116 30.3384 26.0224C31.4454 23.8454 31.369 20.0921 28.5059 16.9018ZM9.1123 22.1939C9.15051 23.3199 10.1049 24.2206 11.2502 24.2206H11.3266C12.51 24.1832 13.4262 23.2073 13.388 22.0438C13.3499 20.9177 12.3954 20.017 11.2502 20.017H11.1739C11.0975 20.017 10.9829 20.017 10.9067 20.0544C9.3414 17.5022 8.69242 14.7248 8.92152 11.7221C9.0741 9.47006 9.83769 7.51828 11.1739 5.9043C12.2809 4.51555 14.4188 3.83996 15.8696 3.80252C19.9162 3.7274 21.634 8.68179 21.7486 10.6711C22.2449 10.7837 23.0848 11.0465 23.6575 11.2342C23.1993 5.15382 19.3817 2.00098 15.7169 2.00098C12.2809 2.00098 9.1123 4.44067 7.85242 8.04387C6.09637 12.8481 7.24164 17.4647 9.37949 21.1055C9.18871 21.3682 9.0741 21.7811 9.1123 22.194V22.1939Z" fill="#764ABC"></path> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconRedux.astro", void 0);

const $$IconTailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 154" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconTailwind.astro", void 0);

const $$IconReactQuery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 256 230"><path fill="#00435B" d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"></path><path fill="#002B3B" d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"></path><path fill="#FF4154" d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"></path><path fill="#FFD94C" d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"></path></svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconReactQuery.astro", void 0);

const $$IconHtml = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconHtml.astro", void 0);

const $$IconCss = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconCss.astro", void 0);

const $$IconReact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 228" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconReact.astro", void 0);

const $$IconGit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="45px" height="45px"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconGit.astro", void 0);

const $$IconGtiHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 250" width="45" height="45" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconGtiHub.astro", void 0);

const $$IconStripe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 214"><path fill="#635BFF" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138c-33.85 0-54.33 28.73-54.33 64.854c0 42.808 24.179 64.426 58.88 64.426c16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823c-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756c8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537l.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96c25.458 0 48.64-20.48 48.64-65.564c-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968c12.942 0 21.902 14.506 21.902 33.137c0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386l-34.702 7.395l-.142 113.92c0 21.05 15.787 36.551 36.836 36.551c11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68c10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92c0 6.541-5.688 8.675-13.653 8.675c-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106c29.582 0 49.92-14.648 49.92-40.106c-.142-42.382-54.329-34.845-54.329-50.774"></path></svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconStripe.astro", void 0);

const $$IconJavaScritp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconJavaScritp.astro", void 0);

const $$IconShadcn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="45px" height="45px"><path fill="#000" d="M0 0h256v256H0z"></path><path fill="none" stroke="#fff" d="M208 128l-80 80M192 40L40 192"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconShadcn.astro", void 0);

const $$IconMongodb = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="45" height="45" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconMongodb.astro", void 0);

const $$IconNodeJs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg> </i>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconNodeJs.astro", void 0);

const $$IconPython = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="70" viewBox="0 0 48 48"> <linearGradient id="goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1" x1="10.458" x2="26.314" y1="12.972" y2="26.277" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#26abe7"></stop><stop offset="1" stop-color="#086dbf"></stop></linearGradient><path fill="url(#goqfu1ZNmEnUrQDJEQ1bUa_l75OEUJkPAk4_gr1)" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><linearGradient id="goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2" x1="35.334" x2="23.517" y1="37.911" y2="21.034" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feb705"></stop><stop offset="1" stop-color="#ffda1c"></stop></linearGradient><path fill="url(#goqfu1ZNmEnUrQDJEQ1bUb_l75OEUJkPAk4_gr2)" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconPython.astro", void 0);

const $$IconDevOps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="70" viewBox="0 0 48 48"> <path fill="#ffe0b2" d="M15.2,33.5c-0.5,0.3-8.2,5.2-8.2,5.5c0,0.4,0,0.4,0,0.4L8.4,43h31.2c0,0,1.5-4.8,1.4-6 c0-0.6-5-3.9-5-3.9s3.9-3.9,4-12.4c0-0.8,0-1.6-0.1-2.4C39.2,8.7,33.1,5.3,26.7,5c-6.5-0.2-10.1,2.8-10.1,2.8s-4.1,1.4-4.5,4.7 c0,0-3.2,0.6-1.5,7.1C9.3,20.6,9,22,9,23c0,1.3,0.4,2.8,1.2,3.7c1.7,1.8,3.1,1.4,3.1,1.4S13.9,31.3,15.2,33.5z"></path><path fill="#f44336" d="M36.8,36.9C36.6,35.6,36,35,34.7,35h-0.1l-0.1,0c-0.4,0.1-1,0.3-2.7,1.5l-1,0.7 C30.6,37.1,30.3,37,30,37c-0.5,0-0.9,0.2-1.3,0.5l-1-0.5L26,36.1c-0.9-0.4-1.8-0.7-2.5-0.7c-0.5,0-0.9,0.1-1.3,0.3 c-0.5,0.4-0.7,1-0.6,1.8c0,0.4,0.1,0.9,0.1,1.3c0.2,2.1,0.3,3.6,2.3,3.7c0.1,0,0.2,0,0.3,0c1.1,0,2.4-0.4,3.6-1.3l0.9-0.6 c0.3,0.2,0.7,0.4,1.1,0.4c0.5,0,0.9-0.2,1.2-0.4l1.4,0.3c0.6,0.1,1.1,0.2,1.6,0.2l0.4,0c0.5,0,1,0,1.5-0.3c0.6-0.3,0.9-1,0.9-2.1 c0-0.5-0.1-1-0.1-1.4L36.8,36.9z"></path><path fill="#fff" d="M21.7,38.9c0-0.4-0.1-0.8-0.1-1.3c-0.1-0.6,0-1,0.2-1.4c-5-0.1-6.6-2.7-6.6-2.7s-0.3,1.6,1.1,3.4 c2.1,2.5,5.3,2.8,5.3,2.8h0.2C21.8,39.5,21.8,39.2,21.7,38.9z"></path><path fill="#546e7a" d="M22.9,43l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7 c-0.5-0.6-0.8-1.3-1-2L15,33.7l-1.1,0.7c-2,1.3-5.3,3.4-6.4,4.3l-0.6,0.5L8.4,43L22.9,43L22.9,43z"></path><path fill="#455a64" d="M12.2,43h10.7l-0.7-1.4c-0.1-0.3-0.2-0.6-0.3-1.1l-0.1-0.7l-0.7-0.1c-0.9-0.2-3.1-0.8-4.7-2.7 c-0.1-0.1-0.2-0.3-0.3-0.4L11,40L12.2,43z"></path><path fill="#546e7a" d="M40.7,36.5c-0.6-0.6-2.4-1.9-3.1-2.4l-0.7-0.5c-0.2,0.2-0.6,0.7-1.3,1.2l0.7,0.7 c0.3,0.3,0.5,0.8,0.6,1.3l0,0.3c0.1,0.4,0.1,0.9,0.1,1.4c0,1.7-0.6,2-0.9,2.1c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2h4.1l0.2-0.7 c0.5-1.6,1.1-3.9,1.2-4.9l0-0.5L40.7,36.5z"></path><path fill="#455a64" d="M39.6,43l0.2-0.7c0.3-0.8,0.5-1.9,0.8-2.8l-3.7-2c0,0.3,0.1,0.7,0.1,1.1c0,1.7-0.6,2-0.9,2.1 c-0.2,0.1-0.5,0.2-0.8,0.2l0.1,2L39.6,43L39.6,43z"></path><path fill="#616161" d="M10.3,19.8C10.3,19.8,10.4,19.7,10.3,19.8L10.3,19.8l0.1-0.1c0.5-0.4,1.2-0.7,1.8-0.7 c0.6,0,0.9,0.2,1.2,0.3c1.3,0.7,1.6,2,1.7,2.9l0,0l0,0.1l0,0.1c0.6-0.2,1.2-0.4,1.4-0.5c0-0.1,0-0.3-0.1-0.6 c-0.1-0.4-0.2-0.9-0.4-1.4c-0.4-1.1-0.3-2.5,0.3-4.3l0.1-0.2c0.1-0.4,0.3-0.8,0.3-1.1c0-0.3,0.1-0.6,0.1-0.7c0-0.3-0.1-0.5-0.2-0.8 l-0.2-0.5l0.3-0.5c0.9-1.5,4.2-6.5,10.9-6.5c0.2,0,0.4,0,0.7,0l-0.2,0C27.7,5.1,27.2,5,26.7,5c-0.2,0-0.5,0-0.7,0l0,0 c-5.4,0-8.7,2.3-9.3,2.7l-0.1,0.1l-0.1,0.1c-0.6,0.2-3.7,1.5-4.3,4.2L12,12.4l-0.4,0.2c-0.4,0.2-0.7,0.5-0.9,0.9 c-0.7,1.2-0.8,3-0.3,5.5l0.1,0.5L10.1,20c0,0-0.1,0.1-0.1,0.1C10.1,20,10.2,19.9,10.3,19.8z"></path><path fill="#263238" d="M28 41H34V43H28zM14.2 22.4c-.1-.9-.4-1.7-1.1-2.1-.3-.1-.5-.2-.8-.2-.5 0-1.1.2-1.6.9l-.7-2c.9-.5 1.7-.8 2.5-.8.5 0 1 .1 1.5.3.4.2.8.5 1.1.8-.2-1.4.1-2.9.5-4.1.2-.5.3-1 .4-1.3.1-.6 0-.7-.2-1-1.9.2-3.5.7-3.5.7l-.5-1.9c.1 0 2.1-.6 4.4-.8l.7-.1.3.6c0 0 .1.1.1.2.3.3.7.9.8 1.9 0 .2 0 .6-.1.9-.1.5-.3.9-.4 1.5-.4 1.2-.7 2.6-.3 3.6.2.6.3 1.2.4 1.6.1.4.2 1.3-.2 1.6-.4.3-2.7 1-2.7 1S14.3 23.3 14.2 22.4z"></path><path fill="#263238" d="M17.5,12.6l-1.8-0.8c0-0.1,3.7-8.2,13-7.6l-0.1,2C20.6,5.8,17.5,12.6,17.5,12.6z"></path><path fill="#fff" d="M22,36.2c-5.1,0-6.8-2.7-6.8-2.7s-0.3,1.6,1.1,3.4c2.1,2.5,5.3,2.8,5.3,2.8"></path><path fill="#263238" d="M21.5 40.7c-.1 0-3.6-.4-5.9-3.2-1.7-2.2-1.4-4-1.3-4.2l.5-2.6 1.4 2.3c.1.1 1.5 2.2 5.9 2.2v2c-2.1 0-3.7-.4-4.9-1 0 0 0 0 0 .1 1.8 2.1 4.5 2.4 4.6 2.4L21.5 40.7zM34.7 42c-.1 0-.2 0-.3 0-1.8 0-3.5-.6-3.6-.6l.7-1.9c0 0 1.4.5 2.8.5l.1 0c.5 0 1 0 1.3-.1C36 39.7 36 39 36 38.6c0-.4-.1-.9-.1-1.3l0-.3c-.1-.8-.4-1.1-1.2-1.1-.6.1-2.5 1.5-3.2 2L31 38.3l-1.2-1.6.4-.3c1.9-1.4 3.4-2.4 4.4-2.4 1.8 0 2.9 1 3.2 2.8l0 .3c.1.4.1 1 .2 1.5 0 1.5-.4 2.6-1.4 3C35.9 42 35.3 42 34.7 42z"></path><path fill="#263238" d="M24.3 43.6c-.1 0-.2 0-.3 0-2.9-.2-3.1-2.5-3.2-4.6 0-.4-.1-.8-.1-1.2-.2-1.6.5-2.4 1-2.8 1.3-.9 3.3-.5 4.8.2l3 1.6-.9 1.8-3-1.6c-1.2-.6-2.4-.7-2.7-.4-.2.2-.2.6-.2.9.1.4.1.9.1 1.3.2 2.4.4 2.7 1.4 2.8 2.1.2 4.2-1.8 4.2-1.9l1.4 1.4C29.6 41.3 27.2 43.6 24.3 43.6zM21 15.4c0 0-.2.6-.6.6-.2 0-.4-.4-.4-.8 0-1.2.8-2.7 1.6-3.4.6-.5 1.4-.8 2.3-.8.4 0 .9 0 1.3.2.5.2.8.6.8 1.4 0 0 0 .4-1.3.4-.8 0-1.8.1-2.2.5C22.1 13.9 21.5 14.3 21 15.4zM26.4 21c-.5 0-1.1-.1-1.6-.2-.6-.1-.9-.7-.7-1.2l.2-.3c.1-.2.3-.3.5-.3.1 0 .2 0 .3 0 .8.2 2 .2 2.4.2-.5-1.9-.4-3.3-.1-3.3s1.1 2.3 1.5 2.8c.4.5.3 1.1-.1 1.5C28.1 20.8 27.3 21 26.4 21zM36.4 21c-.2 0-.3 0-.5 0-.6-.1-.9-.5-.9-1.1 0 0 .1-.9.6-.9.4 0 .9.2 1.1.2C36.5 18 36.2 16 36.5 16c.3 0 1 2.4 2.4 3.3.4.3.4.9-.2 1.3C37.9 20.9 37.2 21 36.4 21zM38.3 14.5c-.2-.8-1.1-1.5-2.1-1.8C34.9 12.4 34 13 34 13c0-.9.7-1.6 1-1.7.4-.2.6-.3 1-.3 2.1 0 2.9 1.3 3.6 2.6L38.3 14.5z"></path><path fill="#263238" d="M31.9 27c-.1 0-.3 0-.4 0 0 0 0 0 0 0-.7 0-1.3-.2-1.7-.7-.8-.9-.9-2.1-.6-2.3.3-.2.5.5 1.5.8 0 0 .7.1.9.1.2 0 .3 0 .5 0 1.3 0 2.4-.3 2.8-.6C35 24.2 35 24 35 24c0 0 0-.3-1.3-1.5-1.3-1.2-1.7-2.7-1.7-4 0-1.5.2-2.5.4-2.5.3 0 .6 3.2 2.7 5 1.5 1.3 1.9 2.2 1.9 3.1 0 .9-.5 1.4-.8 1.7C35.1 26.8 33.3 27 31.9 27zM31.4 30c-3.1-.1-4.7-2-4.7-2s3.5.3 5.8.3V30H31.4zM33.6 30v-.9-.9c.2-.1 1.8.1 3.6-.6C36.8 29.7 33.7 30 33.6 30zM29.1 33c-2.2 0-3.3-.6-4.1-3.2 0 0-.1-.2.2-.3s.4.1.4.1c.4 1.1 2.1 1.4 4.2 1.4.1 0 .2 0 .3 0 1 0 3 0 3 0s-.4 2-2.5 2C30.3 33 29.3 33 29.1 33z"></path><path fill="#263238" d="M29 37c-3.2 0-5.7-1-8.4-3.9-1.5-1.6-1.5-3.7-1.3-3.9s.5 1.2 1.7 2.5c2.4 2.6 5.8 3.4 8.7 3.2 3.8-.3 5.4-2.5 5.7-2.7l1.7 1.2c-.1.1-2.4 3.1-7.2 3.5C29.5 37 29.3 37 29 37zM13.4 29l-.1-1-.1-1c0 0 .2-.1.6-.4.3-.2.6-.2.9 0l.5.4c.3.3.3.8 0 1.1C14.3 28.9 13.5 29 13.4 29zM13 23l1.6.6c-.1-.4-.6-2.2-2-2.6-.4-.1-1.1.2-1.2.9 0 0 0 .2 0 .3 0 0 0 .1 0 .1C11.5 24 13 25 13 25V23z"></path><path fill="#263238" d="M30,42c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S31.7,42,30,42z M30,38c-0.5,0-1,0.4-1,1s0.4,1,1,1 s1-0.4,1-1S30.6,38,30,38z"></path><path fill="#263238" d="M39.6,44H8.4c-0.4,0-0.8-0.2-0.9-0.6l-1.4-3.5C6,39.6,6,39.5,6,39.3l0-0.4c0.1-1,5.7-4.5,7.9-5.8 c-0.7-1.5-1.2-3.1-1.4-4.1c-0.8-0.1-1.8-0.5-3-1.7C8.4,26.2,8,24.3,8,23c0-0.9,0.2-2.4,1.4-3.7c-0.6-2.7-0.5-4.8,0.4-6.2 c0.4-0.7,0.9-1,1.3-1.3c0.8-3.1,4.1-4.5,4.9-4.9c0.8-0.6,4.5-3.1,10.7-2.9c8.4,0.3,13.6,5.5,14.2,14.2C41,19,41,19.8,41,20.6 c0,6.5-2.3,10.5-3.5,12.1c4.5,3.1,4.5,3.6,4.5,4.1c0.1,1.3-1.1,5.2-1.5,6.4C40.4,43.7,40,44,39.6,44z M9.1,42h29.7 c0.6-1.9,1.1-3.9,1.2-4.7c-0.6-0.6-2.7-2.2-4.6-3.4c-0.2-0.2-0.4-0.4-0.4-0.7s0.1-0.6,0.3-0.8c0,0,3.6-3.7,3.7-11.7 c0-0.7,0-1.5-0.1-2.3C38.2,8,30.9,6.2,26.6,6c-6-0.2-9.4,2.5-9.5,2.6c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-3.5,1.2-3.8,3.9 c-0.1,0.4-0.4,0.8-0.8,0.9c-0.7,0.2-1.8,1.7-0.7,5.9c0.1,0.4,0,0.8-0.3,1c-1,0.8-1.1,2-1.1,2.6c0,1.2,0.4,2.4,1,3 c1.2,1.3,2.1,1.1,2.1,1.1c0.3-0.1,0.6,0,0.8,0.1c0.2,0.2,0.4,0.4,0.4,0.7c0,0,0.5,3.1,1.8,5.1c0.1,0.2,0.2,0.5,0.1,0.8 c-0.1,0.3-0.2,0.5-0.5,0.6c-0.7,0.4-6.3,4-7.7,5L9.1,42z M40.1,37.4L40.1,37.4L40.1,37.4z"></path> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconDevOps.astro", void 0);

const $$IconDocker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#03A9F4" d="M40,20c0.391-1.735-0.092-3.78-2.5-6c-3.914,3.543-2.795,7.227-1.5,9c0,0-0.166,1-4,1S2,24,2,24S0.167,40,18,40c15.593,0,19.973-12.003,20.828-15.076C39.182,24.972,39.579,25.003,40,25c2.147-0.017,4.93-1.171,6-5.484C43.162,18.533,41.339,18.978,40,20z"></path><path fill="#0288D1" d="M2.165,28C2.9,32.739,5.983,40,18,40c12.185,0,17.523-7.33,19.682-12H2.165z"></path><path fill="#81D4FA" d="M19.812,39.938C18.892,39.616,14.74,38.848,14,33c-4.209,1.863-7.938,1.375-9.579,1.008C6.583,37.237,10.591,40,18,40C18.623,40,19.224,39.976,19.812,39.938z"></path><path fill="#FFF" d="M18 30A2 2 0 1 0 18 34A2 2 0 1 0 18 30Z"></path><path fill="#37474F" d="M14.914,33.597c0.224,0.505,0.02,1.162-0.51,1.318c-3.301,0.973-6.146,1.102-8.297,1.102c-0.644-0.619-1.194-1.279-1.656-1.963c2.585,0,6.71-0.12,9.144-0.966C14.117,32.906,14.69,33.09,14.914,33.597z M2,27c0,0,1.875,0.125,3-1c1.875,1.688,5.94,1.088,7,0c1.063,1.688,6.938,1.375,8,0c1.25,1.438,6.625,1.75,8,0c0.479,1.461,6.819,1.874,8,0c1.061,1.088,5.063,1.938,7.311,0C43.875,27.188,46,27,46,27v1H2 M17,32c0,0.552,0.448,1,1,1s1-0.448,1-1s-0.448-1-1-1S17,31.448,17,32z"></path><path fill="#01579B" d="M11,24H6v-5h5V24z M21,19h-5v5h5V19z M31,19h-5v5h5V19z M16,14h-5v5h5V14z M26,14h-5v5h5V14z"></path><path fill="#0288D1" d="M16,24h-5v-5h5V24z M26,19h-5v5h5V19z M26,9h-5v5h5V9z M21,14h-5v5h5V14z"></path> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconDocker.astro", void 0);

const $$IconSelenium = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="70" viewBox="0 0 50 50"> <path d="M 43.582031 2 L 29.535156 17.201172 L 22.226562 10.402344 L 19 13.802734 L 29.724609 24 L 47 5.2109375 L 43.582031 2 z M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 18.25 L 46 9.25 L 44 11.419922 L 44 18.25 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 L 30.875 6 C 30.877007 6.0000116 30.878849 6 30.880859 6 L 37.160156 6 L 39.009766 4 L 30.880859 4 A 1.0001 1.0001 0 0 0 30.875 4 L 9 4 z M 14.636719 22 C 10.909719 22 8.453125 24.010391 8.453125 27.025391 C 8.453125 29.492391 9.9082031 31.044391 12.908203 31.775391 L 15.091797 32.324219 C 17.364797 32.872219 18.273437 33.603609 18.273438 34.974609 C 18.273438 36.527609 16.727719 37.623047 14.636719 37.623047 C 12.363719 37.623047 10.819875 36.644 10.546875 35 L 8 35 C 8.182 38.015 10.727078 40 14.455078 40 C 18.455078 40 21 37.990172 21 34.701172 C 21 32.143172 19.545797 30.680422 16.091797 29.857422 L 14.181641 29.400391 C 11.999641 28.852391 11.091797 28.212594 11.091797 26.933594 C 11.091797 25.380594 12.455875 24.376953 14.546875 24.376953 C 16.546875 24.376953 17.909641 25.380594 18.181641 26.933594 L 20.726562 26.933594 C 20.635562 24.009594 18.091719 22 14.636719 22 z M 30.089844 27 C 26.339844 27 24 29.559062 24 33.539062 C 24 37.519062 26.339844 40 30.089844 40 C 33.089844 40 35.250547 38.670906 35.810547 36.378906 L 33.279297 36.378906 C 32.809297 37.351906 31.689453 37.876953 30.189453 37.876953 C 28.119453 37.876953 26.719141 36.249 26.619141 34.125 L 26.619141 33.945312 L 36 33.945312 L 36 33.28125 C 36 29.39125 33.749844 27 30.089844 27 z M 30.089844 29.050781 C 31.949844 29.050781 33.139844 30.16 33.339844 32 L 26.75 32 C 26.97 30.23 28.239844 29.050781 30.089844 29.050781 z"></path> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconSelenium.astro", void 0);

const $$IconPostman = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="70" viewBox="0 0 64 64"> <path fill="#f7a1c8" d="M5.559,22.837C0.505,37.441,8.247,53.378,22.852,58.432s30.542-2.687,35.596-17.292	S55.76,10.599,41.156,5.545S10.614,8.232,5.559,22.837z"></path><path fill="#ed7899" d="M48.246,48.245c-8.978,8.975-23.532,8.973-32.507-0.005s-8.972-23.532,0.006-32.507	s23.532-8.973,32.507,0.005c1.807,1.808,3.301,3.905,4.418,6.205C56.953,30.757,55.177,41.317,48.246,48.245z"></path><path fill="#8d6c9f" d="M58.064,19.323C51.069,4.926,33.728-1.074,19.33,5.92C12.416,9.279,7.12,15.247,4.607,22.511	C-0.637,37.637,7.374,54.15,22.501,59.393s31.639-2.768,36.883-17.894C61.928,34.229,61.453,26.241,58.064,19.323z M57.495,40.81	C52.614,54.89,37.243,62.348,23.162,57.468S1.623,37.217,6.503,23.136S26.755,1.597,40.836,6.478	c6.761,2.344,12.315,7.277,15.439,13.715C59.4,26.631,59.838,34.048,57.495,40.81z"></path><path fill="#8d6c9f" d="M46.126,46.125c-0.39,0.39-0.39,1.023,0,1.413l1.413,1.413c0.39,0.39,1.023,0.39,1.413,0	c0.39-0.39,0.39-1.023,0-1.413l-1.413-1.413C47.149,45.735,46.517,45.735,46.126,46.125z"></path><path fill="#8d6c9f" d="M50.423,41.941c-0.488-0.259-1.093-0.073-1.351,0.414c-0.246,0.464-0.091,1.04,0.355,1.317	l1.731,0.996c0.482,0.275,1.096,0.107,1.371-0.375s0.107-1.096-0.375-1.371L50.423,41.941z"></path><path fill="#8d6c9f" d="M37.837,50.909c-0.533,0.142-0.851,0.69-0.708,1.223c0.001,0.002,0.001,0.004,0.002,0.007	l0.516,1.929c0.165,0.527,0.726,0.82,1.252,0.655c0.496-0.155,0.79-0.664,0.677-1.171l-0.516-1.929	c-0.139-0.534-0.685-0.854-1.219-0.715C37.839,50.909,37.838,50.909,37.837,50.909z"></path><path fill="#8d6c9f" d="M52.14,37.129c-0.539-0.12-1.073,0.219-1.193,0.758c-0.113,0.507,0.181,1.016,0.677,1.171	l1.929,0.516c0.539,0.12,1.073-0.219,1.193-0.758c0.113-0.507-0.181-1.016-0.677-1.171L52.14,37.129z"></path><path fill="#8d6c9f" d="M42.296,49.065c-0.475,0.278-0.636,0.888-0.36,1.364l0.989,1.724	c0.259,0.488,0.864,0.673,1.351,0.414c0.488-0.259,0.673-0.864,0.414-1.351c-0.011-0.02-0.022-0.04-0.034-0.059l-0.996-1.731	C43.382,48.95,42.772,48.789,42.296,49.065z"></path><path fill="#8d6c9f" d="M31.59,10.29c0.547-0.076,0.928-0.581,0.852-1.127c-0.059-0.424-0.382-0.764-0.803-0.844	c-0.835-0.012-1.67,0.021-2.502,0.099c-0.552,0.018-0.984,0.481-0.965,1.032c0.018,0.552,0.481,0.984,1.032,0.965	c0.041-0.001,0.083-0.005,0.124-0.012C30.08,10.325,30.835,10.287,31.59,10.29z"></path><path fill="#8d6c9f" d="M11.45,24.423c2.215-6.358,7.337-11.275,13.78-13.229c0.529-0.158,0.829-0.715,0.671-1.244	c-0.158-0.529-0.715-0.829-1.244-0.671c-7.037,2.141-12.631,7.509-15.059,14.452c-0.196,0.516,0.063,1.093,0.579,1.289	c0.516,0.196,1.093-0.063,1.289-0.579c0.007-0.017,0.013-0.035,0.018-0.053L11.45,24.423z"></path><path fill="#fff8ee" d="M42.009,23.207c-0.083-0.317-0.218-0.591-0.408-0.81L30.334,33.781l1.455,1.431l8.461-8.582 C40.275,26.606,42.099,24.806,42.009,23.207z"></path><polygon fill="#fff8ee" points="31.084,35.499 29.721,34.159 27.963,35.979"></polygon><path fill="#fff8ee" d="M31.706,36.111L27.16,36.81l-8.332,8.624l3.497,3.438l0.175,0.003l-0.875-3.625 c0,0,4.82-2.189,11.267-7.974L31.706,36.111z"></path><polygon fill="#fff8ee" points="18.342,45.937 15.625,48.75 21.309,48.853"></polygon><path fill="#fff8ee" d="M40.743,27.126l-8.455,8.576l1.123,1.104c0.114-0.104,0.224-0.2,0.338-0.306 c6.093-5.65,7.374-8.06,8.022-10.623C41.285,26.59,40.786,27.085,40.743,27.126z"></path><path fill="#fff8ee" d="M29.835,33.29l11.21-11.328c-0.875-0.462-2.224-0.403-3.795,0.163 c-3.125,1.125-6.875,5.25-6.875,5.25l-3.008,3.489L29.835,33.29z"></path><polygon fill="#fff8ee" points="26.909,31.395 24.125,34.625 29.229,33.675"></polygon><g><path fill="#fff8ee" d="M43.499,19.743c-0.066-0.068-0.102-0.161-0.098-0.256c0.003-0.095,0.045-0.185,0.116-0.248 l4.018-3.599c-0.724-0.551-1.617-0.89-2.597-0.89c-2.382,0-4.313,1.931-4.313,4.313s1.931,4.313,4.313,4.313 c0.614,0,1.195-0.132,1.724-0.364L43.499,19.743z"></path><path fill="#fff8ee" d="M44.254,19.518l3.045,3.147c1.173-0.771,1.95-2.094,1.95-3.603c0-1.148-0.456-2.184-1.187-2.957 L44.254,19.518z M48.188,20.407c-0.061,0.123-0.185,0.193-0.313,0.193c-0.052,0-0.106-0.012-0.156-0.037 c-0.173-0.086-0.243-0.296-0.156-0.47c0.409-0.817,0.135-1.415,0.124-1.44c-0.082-0.173-0.01-0.382,0.162-0.466 c0.172-0.083,0.379-0.016,0.465,0.156C48.332,18.38,48.76,19.263,48.188,20.407z"></path></g> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconPostman.astro", void 0);

const $$IconMysql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="80" viewBox="0 0 50 50"> <path d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z"></path> </svg>`;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconMysql.astro", void 0);

const $$Astro$2 = createAstro();
const ICONS = {
  html: $$IconHtml,
  css: $$IconCss,
  javaScript: $$IconJavaScritp,
  react: $$IconReact,
  astro: $$IconAstro,
  materialUi: $$IconMaterialUi,
  nextjs: $$IconNextjs,
  redux: $$IconRedux,
  tailwind: $$IconTailwind,
  reactQuery: $$IconReactQuery,
  git: $$IconGit,
  github: $$IconGtiHub,
  stripe: $$IconStripe,
  shadcn: $$IconShadcn,
  nodejs: $$IconNodeJs,
  selenium: $$IconSelenium,
  python: $$IconPython,
  devops: $$IconDevOps,
  docker: $$IconDocker,
  mongodb: $$IconMongodb,
  postman: $$IconPostman,
  mysql: $$IconMysql
  // add new icons here <--
  // Make sure that when calling the icon the key is the same
  // "optional" in the IconKeys const file adds the icon key for when you call IconKeys.nameIcon
};
function getIconComponent(iconName) {
  return ICONS[iconName] || null;
}
const $$IconAll = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$IconAll;
  return renderTemplate``;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/icons/IconAll.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-skill" data-astro-cid-y3b77nrg> <div class="linear-grandient-1" data-astro-cid-y3b77nrg></div> <div class="container-skill" data-astro-cid-y3b77nrg> <h2 class="title-skills" id="skills" data-astro-cid-y3b77nrg>Habilidades</h2> <ul class="ul-skill" data-astro-cid-y3b77nrg> ${skills.map(({ icon, title }) => {
    const IconComponent = getIconComponent(icon);
    return renderTemplate`<li class="li-skills" data-astro-cid-y3b77nrg> ${IconComponent && renderTemplate`${renderComponent($$result, "IconComponent", IconComponent, { "data-astro-cid-y3b77nrg": true })}`} <p class="p-skill" data-astro-cid-y3b77nrg>${title}</p> </li>`;
  })} </ul> </div> </section> `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/skills/Skills.astro", void 0);

const photoperfil = new Proxy({"src":"/_astro/photo-perfil.BbjcI8T-.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/chici/Documents/Proyects/portafolio/public/img/photo-perfil.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Home;
<<<<<<< Updated upstream
  return renderTemplate`${maybeRenderHead()}<div class="content-presentation" data-astro-cid-q5kz5pjk> <div class="linear-gradient-2" data-astro-cid-q5kz5pjk></div> <div class="linear-gradient-1" data-astro-cid-q5kz5pjk></div> <dir class="container-persentation" data-astro-cid-q5kz5pjk> <div class="container-text" data-astro-cid-q5kz5pjk> <h2 class="text-name" data-astro-cid-q5kz5pjk>Carlos Villavizar</h2> <div class="container-profession" data-astro-cid-q5kz5pjk> <div data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>D</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>s</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>d</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> </div> <div class="" data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>F</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>n</span> <span class="p-profession" data-astro-cid-q5kz5pjk>t</span> <span class="p-profession" data-astro-cid-q5kz5pjk>-</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>n</span> <span class="p-profession" data-astro-cid-q5kz5pjk>d</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>J</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>/</span> <span class="p-profession" data-astro-cid-q5kz5pjk>Q</span> <span class="p-profession" data-astro-cid-q5kz5pjk>A</span> <span class="p-profession" data-astro-cid-q5kz5pjk>-</span> <span class="p-profession" data-astro-cid-q5kz5pjk>A</span> <span class="p-profession" data-astro-cid-q5kz5pjk>U</span> <span class="p-profession" data-astro-cid-q5kz5pjk>T</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>m</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>t</span> <span class="p-profession" data-astro-cid-q5kz5pjk>i</span> <span class="p-profession" data-astro-cid-q5kz5pjk>z</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>d</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> </div> </div> <p class="p-presentation" data-astro-cid-q5kz5pjk>
=======
  return renderTemplate`${maybeRenderHead()}<div class="content-presentation" data-astro-cid-q5kz5pjk> <div class="linear-gradient-2" data-astro-cid-q5kz5pjk></div> <div class="linear-gradient-1" data-astro-cid-q5kz5pjk></div> <dir class="container-persentation" data-astro-cid-q5kz5pjk> <div class="container-text" data-astro-cid-q5kz5pjk> <h2 class="text-name" data-astro-cid-q5kz5pjk>Carlos Villavizar</h2> <div class="container-profession" data-astro-cid-q5kz5pjk> <div data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>D</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>s</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>d</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> </div> <div class="" data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>F</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>n</span> <span class="p-profession" data-astro-cid-q5kz5pjk>t</span> <span class="p-profession" data-astro-cid-q5kz5pjk>-</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>n</span> <span class="p-profession" data-astro-cid-q5kz5pjk>d</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>J</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>/</span> <span class="p-profession" data-astro-cid-q5kz5pjk>Q</span> <span class="p-profession" data-astro-cid-q5kz5pjk>A</span> <span class="p-profession" data-astro-cid-q5kz5pjk>-</span> <span class="p-profession" data-astro-cid-q5kz5pjk>A</span> <span class="p-profession" data-astro-cid-q5kz5pjk>U</span> <span class="p-profession" data-astro-cid-q5kz5pjk>T</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>m</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>t</span> <span class="p-profession" data-astro-cid-q5kz5pjk>i</span> <span class="p-profession" data-astro-cid-q5kz5pjk>z</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>d</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> </div> </div> <p class="p-presentation" data-astro-cid-q5kz5pjk>
>>>>>>> Stashed changes
Con más de 1 año de experiencia en la creación de experiencias web
        atractivas y funcionales. Experto en tecnologías front-end, incluyendo
        HTML5, CSS3, JavaScript y frameworks como React, Next.js, Astro. Capaz
        de traducir diseños creativos en código interactivo y optimizar la
        velocidad y el rendimiento del sitio web.
<<<<<<< Updated upstream
</p> <div class="container-curriculum" data-astro-cid-q5kz5pjk> <a href="https://wa.me/+8299381913" target="_blank" class="a-action" data-astro-cid-q5kz5pjk>Hablemos</a> <a href="https://drive.google.com/file/d/1tSi0KkqG_7EFhmABnO1hYVt0wNdeSCEm/view?usp=drive_link" class="a-curriculum" target="_blank" data-astro-cid-q5kz5pjk>Ver Currículum</a> </div> <div class="container-social" data-astro-cid-q5kz5pjk> <p class="" data-astro-cid-q5kz5pjk>Echa un vistaso a mi</p> <a href="https://github.com/chicibelito70" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-github" data-astro-cid-q5kz5pjk></i> </li> </a> <a href="https://www.linkedin.com/in/carlos-manuel-villavizar-rosa-505868224/" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-linkedin" data-astro-cid-q5kz5pjk></i> </li> </a> </div> </div> <div class="container-photo-profile" data-astro-cid-q5kz5pjk> <div class="photo-perfil" data-astro-cid-q5kz5pjk> <picture data-astro-cid-q5kz5pjk> ${renderComponent($$result, "Image", $$Image, { "src": photoperfil, "alt": "Carlos Villavizar", "id": "inicio", "data-astro-cid-q5kz5pjk": true })} </picture> </div> </div> </dir> </div>  `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/home/Home.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <div class="container_p"> ${renderComponent($$result, "Home", $$Home, {})} <!--   <Projects /> --> ${renderComponent($$result, "Skills", $$Skills, {})} ${renderComponent($$result, "Studies", $$Studies, {})} ${renderComponent($$result, "About", $$About, {})} </div> </main>`;
=======
</p> <div class="container-curriculum" data-astro-cid-q5kz5pjk> <a href="https://wa.me/+8299381913" target="_blank" class="a-action" data-astro-cid-q5kz5pjk>Hablemos</a> <a href="https://drive.google.com/file/d/1VKgzg5L6JUiRx5d3_kOIjIeQRmthdhM2/view?usp=sharing" class="a-curriculum" target="_blank" data-astro-cid-q5kz5pjk>Ver Currículum</a> </div> <div class="container-social" data-astro-cid-q5kz5pjk> <p class="" data-astro-cid-q5kz5pjk>Echa un vistaso a mi</p> <a href="https://github.com/chicibelito70" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-github" data-astro-cid-q5kz5pjk></i> </li> </a> <a href="https://www.linkedin.com/in/carlos-manuel-villavizar-rosa-505868224/" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-linkedin" data-astro-cid-q5kz5pjk></i> </li> </a> </div> </div> <div class="container-photo-profile" data-astro-cid-q5kz5pjk> <div class="photo-perfil" data-astro-cid-q5kz5pjk> <picture data-astro-cid-q5kz5pjk> ${renderComponent($$result, "Image", $$Image, { "src": photoperfil, "alt": "Carlos Villavizar", "id": "inicio", "data-astro-cid-q5kz5pjk": true })} </picture> </div> </div> </dir> </div>  `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/home/Home.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <div class="container_p"> ${renderComponent($$result, "Home", $$Home, {})} ${renderComponent($$result, "Projects", $$Projects, {})} ${renderComponent($$result, "Skills", $$Skills, {})} ${renderComponent($$result, "Studies", $$Studies, {})} ${renderComponent($$result, "About", $$About, {})} </div> </main>`;
>>>>>>> Stashed changes
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/main/main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-dwl4onjj> <section class="section-footer" data-astro-cid-dwl4onjj> <div class="linear-grandient-1" data-astro-cid-dwl4onjj></div> <div class="container-footer" data-astro-cid-dwl4onjj> <h2 class="title-contact" id="contacto" data-astro-cid-dwl4onjj>Contacto</h2> <div class="container-redes" data-astro-cid-dwl4onjj> <a href="https://wa.me/+8299381913" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-whatsapp icon-whatsapp" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Whatsapp</p> </li> </a> <a href="https://github.com/chicibelito70" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-github" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Github</p> </li> </a> <a href="https://www.instagram.com/villavizar__/" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-instagram" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Instagram</p> </li> </a> <a href="https://www.linkedin.com/in/carlos-manuel-villavizar-rosa-505868224/" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-linkedin" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Linkedin</p> </li> </a> </div> </div> </section> </footer> `;
}, "C:/Users/chici/Documents/Proyects/portafolio/src/components/footer/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description" content="Carlos Villavizar de desarrollador web Frontend React Js , Astro , \n      Next Js Con m\xE1s de 1 a\xF1o de experiencia en la creaci\xF3n de experiencias web\n      atractivas y funcionales."><meta property="og:type" content="website"><meta property="og:url" content="<!--  -->"><meta property="og:site_name" content="Carlos Villavizar"><meta property="og:title" content="Carlos Villavizar Portafolio"><meta property="og:image" content="<!--  -->"><script src="https://kit.fontawesome.com/2898a0ac51.js" crossorigin="anonymous"><\/script><title>Portafolio | Carlos Villavizar</title>', "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Main", $$Main, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/chici/Documents/Proyects/portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/chici/Documents/Proyects/portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
