/* ==========================================================================
   NINGARAJ R UKKALI — CINEMATIC INTERACTIVE ENGINE
   Combines Three.js Particle Universe, GSAP 3D Motion, Real Projects & Resume
   ========================================================================== */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) document.documentElement.classList.add('no-motion');

/* ==========================================================================
   1. REAL PROJECTS DATABASE (8 REAL PROJECTS)
   ========================================================================== */
const projects = [
  {
    id: 1,
    key: 'craftcycle',
    cat: 'fullstack',
    title: 'CraftCycle — AI Circular Economy Marketplace',
    badge: 'Featured AI Project',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=900&auto=format&fit=crop',
    tags: ['Python', 'Flask', 'Supabase', 'Gemini Vision AI', 'JavaScript'],
    desc: 'Full-stack marketplace connecting creators, recyclers, and buyers with Google Gemini Vision AI for waste classification and description generation.',
    long: 'CraftCycle is an end-to-end circular economy platform that bridges scrap suppliers, artisanal upcyclers, and eco-conscious consumers. Built with a Python (Flask) backend and Supabase PostgreSQL database, it features Google Gemini Vision integration to scan uploaded scrap photos, suggest upcycling ideas, and craft optimized product descriptions automatically.',
    features: [
      'Role-based authentication (Recyclers, Creators, Buyers) via secure JWT',
      'Integrated Google Gemini Vision API for automatic waste image analysis',
      'Dynamic product catalog with multi-facet category and price filtering',
      'Real-time order processing, seller analytics dashboard, and chat communication'
    ],
    demo: 'https://craftcycle.pages.dev',
    code: 'https://github.com/ningarajukkali/CraftCycle',
    stats: { stack: 'Flask + AI' }
  },
  {
    id: 2,
    key: 'pulsesim',
    cat: 'backend',
    title: 'PulseSim — Real-Time Medical Simulation Platform',
    badge: 'Real-Time Backend',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop',
    tags: ['FastAPI', 'WebSockets', 'Redis Pub/Sub', 'Docker', 'PostgreSQL'],
    desc: 'Backend-driven medical simulation platform with bidirectional real-time patient telemetry and clinical intervention workflows.',
    long: 'PulseSim is an event-driven medical simulation platform engineered for high-throughput, low-latency telemetry streaming. Using FastAPI, WebSockets, and Redis Pub/Sub, it broadcasts dynamic patient physiological responses to simulated clinical drug administrations and shocks in real time.',
    features: [
      'Bidirectional WebSockets streaming with Redis Pub/Sub broadcast architecture',
      'Dynamic physiological state evaluation engine adapting patient vitals in real time',
      'Chronological session event recording in PostgreSQL for medical debriefing and analytics',
      'Fully containerized microservices deployment with Docker on Linux'
    ],
    demo: '#',
    code: 'https://github.com/ningarajukkali/PulseSimulator',
    stats: { stack: 'FastAPI' }
  },
  {
    id: 3,
    key: 'restrocafe',
    cat: 'client',
    title: 'RestroCafe — Restaurant & Cafe Management Suite',
    badge: 'Client Project',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop',
    tags: ['PHP 8', 'MySQL', 'Bootstrap 5', 'jQuery', 'XAMPP'],
    desc: 'Commercial cafe and restaurant operations software managing table reservations, live kitchen order tickets (KOT), billing, and inventory.',
    long: 'Developed as a custom turnkey client engagement, RestroCafe eliminates restaurant floor bottlenecks. It features waiter tablet ordering, automatic kitchen display routing, split-bill invoicing with GST computation, and real-time inventory deductions on every dish served.',
    features: [
      'Touch-friendly Point of Sale (POS) interface with instant thermal printing support',
      'Live Kitchen Order Ticket (KOT) workflow with order status color indicators',
      'Dynamic ingredient-level inventory tracking with low-stock alerts',
      'Role-based staff permissions (Cashier, Waiter, Kitchen Manager, Administrator)'
    ],
    demo: 'https://restrocafe.onrender.com',
    code: 'https://github.com/ningarajukkali/RestroCafe',
    stats: { stack: 'PHP & MySQL' }
  },
  {
    id: 4,
    key: 'community-help',
    cat: 'client',
    title: 'Community-Help — Assistance & Volunteer Dispatch',
    badge: 'Client Project',
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=900&auto=format&fit=crop',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    desc: 'Peer-to-peer assistance network connecting citizens in urgent need with local volunteers and relief resources in real time.',
    long: 'Built as a community welfare client platform, Community-Help coordinates emergency relief, elderly citizen errands, blood donor requests, and volunteer tasks. Built on the MERN stack with Vite, it features a mobile-first responsive layout ensuring accessibility even in low-bandwidth scenarios.',
    features: [
      'Real-time help request broadcasting with geolocation pin matching',
      'Automated volunteer notifications based on skill profile and proximity',
      'Interactive community feed with verified identity badges and resolution tracking',
      'Admin moderation panel for vetting emergency requests and safety compliance'
    ],
    demo: 'https://community-help-alpha.vercel.app/',
    code: 'https://github.com/ningarajukkali/Community-Help',
    stats: { stack: 'MERN Stack' }
  },
  {
    id: 5,
    key: 'brahmx-ai',
    cat: 'ai',
    title: 'BrahmX AI — Intelligent Automation & Workflow Platform',
    badge: 'AI & Automation',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop',
    tags: ['React.js', 'Vite', 'Node.js', 'Express', 'OpenAI API'],
    desc: 'Next-generation AI workflow platform orchestrating prompt chains and machine learning models for corporate data intelligence.',
    long: 'BrahmX AI empowers businesses to automate complex repetitive office workflows, analyze dense document corpuses, and execute semantic queries over private company knowledge bases with blazing fast responses.',
    features: [
      'Interactive canvas for visual prompt chain building and reasoning trees',
      'High-throughput document ingestion with semantic search and summarization',
      'Live telemetry dashboard monitoring token usage, latency, and cost per query',
      'Instant export of structured data to CSV, JSON, and Google Sheets'
    ],
    demo: '#',
    code: 'https://github.com/ningarajukkali/BrahmX-AI',
    stats: { stack: 'React + AI' }
  },
  {
    id: 6,
    key: 'careerforge-ai',
    cat: 'ai',
    title: 'CareerForge AI — Adaptive Career Pathing System',
    badge: 'Startup AI Project',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop',
    tags: ['MongoDB', 'Express', 'React.js', 'Node.js', 'AI APIs'],
    desc: 'AI-driven career accelerator offering personalized skill-gap analysis, learning milestone roadmaps, and resume recommendations.',
    long: 'CareerForge AI is a full-stack career guidance engine. Users supply their current skills, portfolio, and target dream roles; the AI evaluates thousands of live job descriptions to prescribe a personalized step-by-step roadmap with curated course recommendations.',
    features: [
      'AI-powered skill gap analyzer providing match percentage scores for target roles',
      'Curated learning track generation with weekly milestone checklists',
      'Resume critique engine with actionable bullet point rewrites and keyword suggestions',
      'Secure user accounts with JWT authentication and persistent progress history'
    ],
    demo: '#',
    code: 'https://github.com/ningarajukkali/CareerForge-AI',
    stats: { stack: 'MERN + AI' }
  },
  {
    id: 7,
    key: 'e-agri',
    cat: 'fullstack',
    title: 'E-agri-Digitaly — Digital Agriculture Management',
    badge: 'AgriTech Platform',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop',
    tags: ['PHP 8', 'MySQL', 'Bootstrap 5', 'HTML5', 'CSS3'],
    desc: 'Digital agricultural platform designed for Karnataka farmers to monitor crop growth cycles, manage water/fertilizer, and check mandi pricing.',
    long: 'Designed specifically with regional farming needs in mind, E-agri-Digitaly equips farmers with unified tools to plan seed planting timelines, calculate exact fertilizer ratios, monitor rainfall alerts, and view live market prices across Karnataka mandis.',
    features: [
      'Comprehensive crop timeline planner from sowing to harvest stage',
      'Water management and scheduled soil nutrition recommendations',
      'Direct buyer-to-farmer price transparency module reducing middleman deductions',
      'Optimized lightweight interface that loads quickly on 2G/3G mobile networks'
    ],
    demo: '#',
    code: 'https://github.com/ningarajukkali/E-agri-Digitaly',
    stats: { stack: 'PHP & MySQL' }
  },
  {
    id: 8,
    key: 'nexus-assistant',
    cat: 'ai',
    title: 'Nexus Assistant — Voice-Activated AI Personal Agent',
    badge: 'Desktop AI Agent',
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=900&auto=format&fit=crop',
    tags: ['Python 3', 'SQLite', 'SpeechRecognition', 'pyttsx3', 'Docker'],
    desc: 'Voice-controlled personal assistant with persistent SQLite memory, speech recognition, offline TTS, and system automation.',
    long: 'Nexus Assistant is an autonomous personal AI assistant crafted in Python. It captures voice input via SpeechRecognition, handles queries with natural text-to-speech feedback via pyttsx3, remembers user preferences across sessions in SQLite, and automates OS actions.',
    features: [
      'Offline-capable text-to-speech and dynamic audio voice recognition',
      'Persistent SQLite conversation context and customizable quick tasks',
      'System automation: program launchers, web lookups, calendar notifications, and email sending',
      'Containerized for quick setup with Docker across Windows and Linux'
    ],
    demo: '#',
    code: 'https://github.com/ningarajukkali/Nexus-Assistant',
    stats: { stack: 'Python' }
  }
];

/* ==========================================================================
   2. CLIENT TESTIMONIALS & REVIEWS
   ========================================================================== */


/* ==========================================================================
   3. FORMAL PROFESSIONAL PRELOADER
   ========================================================================== */
(function initPreloader(){
  const fill = document.getElementById('loaderFill');
  const pct = document.getElementById('loaderPct');
  const preloader = document.getElementById('preloader');
  if (prefersReduced || !fill || !pct) {
    if (preloader) preloader.style.display = 'none';
    triggerHeroEntrance();
    return;
  }
  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 20 + 7;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      fill.style.width = '100%';
      pct.textContent = '100%';
      setTimeout(() => {
        if (preloader) {
          preloader.classList.add('done');
          setTimeout(() => preloader.style.display = 'none', 700);
        }
        triggerHeroEntrance();
      }, 350);
    } else {
      fill.style.width = Math.floor(p) + '%';
      pct.textContent = Math.floor(p) + '%';
    }
  }, 80);
})();

/* ==========================================================================
   4. THREE.JS 3D SAHYADRI & WESTERN GHATS NATURE ECOSYSTEM (BG CANVAS)
   ========================================================================== */
(function initThreeUniverse(){
  if (prefersReduced) return;
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060607, 0.024);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 12;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const isMobile = window.innerWidth < 768;

  // 1. Bioluminescent Agumbe Fireflies (Western Ghats)
  const fireflyCount = isMobile ? 80 : 200;
  const fireflyGeo = new THREE.BufferGeometry();
  const fireflyPos = new Float32Array(fireflyCount * 3);
  const fireflyCols = new Float32Array(fireflyCount * 3);
  const fireflyOriginalY = new Float32Array(fireflyCount);

  const cAmber = new THREE.Color(0xFDE047);
  const cEmerald = new THREE.Color(0x34D399);

  for (let i = 0; i < fireflyCount; i++) {
    fireflyPos[i * 3] = (Math.random() - 0.5) * 32;
    const y = (Math.random() - 0.5) * 22;
    fireflyPos[i * 3 + 1] = y;
    fireflyOriginalY[i] = y;
    fireflyPos[i * 3 + 2] = (Math.random() - 0.5) * 25;

    const col = Math.random() < 0.65 ? cAmber : cEmerald;
    fireflyCols[i * 3] = col.r;
    fireflyCols[i * 3 + 1] = col.g;
    fireflyCols[i * 3 + 2] = col.b;
  }

  fireflyGeo.setAttribute('position', new THREE.BufferAttribute(fireflyPos, 3));
  fireflyGeo.setAttribute('color', new THREE.BufferAttribute(fireflyCols, 3));

  const fireflyMat = new THREE.PointsMaterial({
    size: isMobile ? 0.16 : 0.22,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const fireflies = new THREE.Points(fireflyGeo, fireflyMat);
  scene.add(fireflies);

  // 2. Rising Sandalwood Embers
  const emberCount = isMobile ? 500 : 1200;
  const emberGeo = new THREE.BufferGeometry();
  const emberPos = new Float32Array(emberCount * 3);
  const emberCols = new Float32Array(emberCount * 3);
  const emberSpeed = new Float32Array(emberCount);

  const cGold = new THREE.Color(0xFACC15);
  const cRuby = new THREE.Color(0xDC2626);
  const cWhite = new THREE.Color(0xFFF8E1);

  for (let i = 0; i < emberCount; i++) {
    emberPos[i * 3] = (Math.random() - 0.5) * 38;
    emberPos[i * 3 + 1] = (Math.random() - 0.5) * 32;
    emberPos[i * 3 + 2] = (Math.random() - 0.5) * 35;

    const r = Math.random();
    const col = r < 0.6 ? cGold : (r < 0.82 ? cRuby : cWhite);
    emberCols[i * 3] = col.r;
    emberCols[i * 3 + 1] = col.g;
    emberCols[i * 3 + 2] = col.b;

    emberSpeed[i] = 0.008 + Math.random() * 0.018;
  }

  emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
  emberGeo.setAttribute('color', new THREE.BufferAttribute(emberCols, 3));

  const emberMat = new THREE.PointsMaterial({
    size: isMobile ? 0.045 : 0.055,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const embers = new THREE.Points(emberGeo, emberMat);
  scene.add(embers);

  // 3. Kaveri Auroral Silk Ring
  const ringGeo = new THREE.TorusGeometry(15, 0.018, 8, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xFACC15, transparent: true, opacity: 0.15 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.z = -8;
  ring.rotation.x = Math.PI / 3.4;
  scene.add(ring);

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  let time = 0;
  function animateUniverse() {
    requestAnimationFrame(animateUniverse);
    time += 0.002;

    // Organic Firefly Flight Paths (Sine wave drifting)
    const fPos = fireflyGeo.attributes.position.array;
    for (let i = 0; i < fireflyCount; i++) {
      fPos[i * 3 + 1] = fireflyOriginalY[i] + Math.sin(time * 3 + i) * 0.8;
      fPos[i * 3] += Math.cos(time * 2 + i) * 0.01;
    }
    fireflyGeo.attributes.position.needsUpdate = true;

    // Rising Sandalwood Embers
    const ePos = emberGeo.attributes.position.array;
    for (let i = 0; i < emberCount; i++) {
      ePos[i * 3 + 1] += emberSpeed[i];
      if (ePos[i * 3 + 1] > 16) {
        ePos[i * 3 + 1] = -16;
      }
    }
    emberGeo.attributes.position.needsUpdate = true;

    embers.rotation.y = time * 8;
    ring.rotation.z = time * 6;

    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    camera.position.x = targetX * 1.6;
    camera.position.y = -targetY * 1.1;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animateUniverse();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();

/* ==========================================================================
   5. RENDER PROJECTS & 3D TILT CARDS
   ========================================================================= */
const projectsGrid = document.getElementById('projectsGrid');

function createProjectCardHtml(p) {
  return `
    <article class="proj-card tilt-card glass glass-gold-top rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300"
             data-cat="${p.cat}" data-id="${p.id}" onclick="openProjectModal(${p.id})">
      <div class="tilt-glare"></div>
      <div class="relative h-[220px] overflow-hidden">
        <img loading="lazy" src="${p.img}" alt="${p.title}" class="project-img w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/30 to-transparent"></div>
        <div class="absolute top-4 left-4 flex gap-2">
          <span class="text-[10px] tracking-[0.2em] uppercase bg-black/70 backdrop-blur border border-gold-500/30 text-gold-300 px-3 py-1 rounded-full font-bold">
            ${p.badge}
          </span>
        </div>
        
        <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div class="flex gap-2 text-[12px] text-white/75">
            <span class="rounded-full border border-gold-500/25 bg-black/55 px-3 py-1"><i class="fas fa-microchip text-gold-500 mr-1.5"></i>${p.stats.stack}</span>
          </div>
          <span class="w-10 h-10 rounded-full btn-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 shadow-lg">
            <i class="fas fa-arrow-up-right-from-square text-xs text-charcoal-950"></i>
          </span>
        </div>
      </div>
      <div class="p-6 tilt-inner">
        <h3 class="font-bold text-[17px] leading-snug group-hover:text-gold-200 transition text-white">
          ${p.title}
        </h3>
        <p class="text-white/50 text-[13.5px] mt-2.5 leading-relaxed line-clamp-2">
          ${p.desc}
        </p>
        <div class="flex flex-wrap gap-1.5 mt-4">
          ${p.tags.map(t => `<span class="chip px-3 py-1 rounded-full text-[11px] text-gold-200/90 font-medium">${t}</span>`).join('')}
        </div>
        <div class="flex items-center justify-between mt-5 pt-4 border-t border-white/5 text-[13px] font-semibold">
          <span class="text-gold-300 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            View Details <i class="fas fa-arrow-right text-[11px]"></i>
          </span>
          <div class="flex items-center gap-3" onclick="event.stopPropagation()">
            ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="text-white/40 hover:text-gold-300 transition text-xs flex items-center gap-1"><i class="fas fa-globe"></i> Live</a>` : ''}
            <a href="${p.code}" target="_blank" class="text-white/40 hover:text-gold-300 transition text-xs flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(filter = 'all') {
  if (!projectsGrid) return;
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);
  projectsGrid.innerHTML = filtered.map(createProjectCardHtml).join('');
  attach3DTilt(projectsGrid.querySelectorAll('.tilt-card'));

  if (!prefersReduced && window.gsap) {
    gsap.fromTo(projectsGrid.children,
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', overwrite: true }
    );
  }
}
renderProjects();

// Project Filter Buttons Listener
const projectFilters = document.getElementById('projectFilters');
if (projectFilters) {
  projectFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    projectFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
}

/* ==========================================================================
   6. 3D PERSPECTIVE TILT WITH SPECULAR LIGHT GLARE
   ========================================================================== */
function attach3DTilt(elements) {
  if (prefersReduced || window.matchMedia('(pointer:coarse)').matches) return;

  elements.forEach((card) => {
    let raf = null;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      card.style.setProperty('--gx', (px * 100) + '%');
      card.style.setProperty('--gy', (py * 100) + '%');

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(1000px) rotateY(${(px - 0.5) * 14}deg) rotateX(${(0.5 - py) * 12}deg) translateY(-6px)`;
        card.style.boxShadow = '0 30px 70px rgba(0,0,0,0.65), 0 0 40px rgba(212,175,55,0.14)';
      });
    });

    card.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
      card.style.boxShadow = '';
    });
  });
}
attach3DTilt(document.querySelectorAll('[data-tilt]'));

/* ==========================================================================
   7. HERO 3D ARTWORK PARALLAX & FLAGGED BADGES
   ========================================================================== */
(function initHeroParallax() {
  if (prefersReduced) return;
  const stage = document.getElementById('artworkStage');
  const layers = document.querySelectorAll('[data-depth]');
  let rx = 0, ry = 0;
  let targetX = 0, targetY = 0;
  let raf = null;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5);
    targetY = (e.clientY / window.innerHeight - 0.5);

    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      ry += ((targetX * 16) - ry) * 0.08;
      rx += ((-targetY * 12) - rx) * 0.08;

      if (stage) {
        stage.style.transform = `rotateY(${ry * 0.55}deg) rotateX(${rx * 0.55}deg)`;
      }

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth) || 0.05;
        const x = targetX * depth * 600;
        const y = targetY * depth * 600;

        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    });
  }, { passive: true });
})();

/* ==========================================================================
   8. DYNAMIC TYPING ROTATOR
   ========================================================================== */
(function initTypingRotator() {
  const roles = [
    'Full Stack Developer',
    'Python & FastAPI Specialist',
    'AI Solutions Engineer',
    'React & Modern UI Craftsman',
    'Proud ಕನ್ನಡಿಗ (Kannadiga)'
  ];
  const el = document.getElementById('typed');
  if (!el) return;

  let roleIdx = 0, charIdx = 0, isDeleting = false;

  function typeTick() {
    const word = roles[roleIdx];
    el.textContent = word.slice(0, charIdx);

    if (!isDeleting) {
      charIdx++;
      if (charIdx > word.length) {
        isDeleting = true;
        setTimeout(typeTick, 1800);
        return;
      }
    } else {
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeTick, isDeleting ? 38 : 74);
  }
  typeTick();
})();

/* Testimonials removed: add only genuine, approved client feedback. */

/* ==========================================================================
   10. SKILL TABS & PROFICIENCY BARS
   ========================================================================== */
const skillTabs = document.getElementById('skillTabs');
if (skillTabs) {
  skillTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-tab]');
    if (!btn) return;
    skillTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    document.querySelectorAll('.skill-card').forEach((card) => {
      const isMatch = tab === 'all' || card.dataset.cat === tab;
      card.style.display = isMatch ? '' : 'none';
      if (isMatch && !prefersReduced && window.gsap) {
        gsap.fromTo(card, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
      }
    });
  });
}

/* ==========================================================================
   11. GSAP SCROLLTRIGGER & ENTRANCE ANIMATIONS
   ========================================================================== */
function triggerHeroEntrance() {
  if (prefersReduced || !window.gsap) {
    document.querySelectorAll('.hero-anim').forEach(e => e.style.opacity = '1');
    const artwork = document.getElementById('artworkPlane');
    if (artwork) artwork.style.opacity = '1';
    return;
  }

  // 1. Navbar Drops Smoothly into View
  gsap.fromTo('#navbar',
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }
  );

  // 2. Hero Left Content Cascades Upward
  gsap.fromTo('.hero-anim',
    { y: 48, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.1, stagger: 0.09, ease: 'power3.out' }
  );

  // 3. Hero Right 3D Framed Artwork Flips into Dimensional Alignment
  gsap.fromTo('#artworkPlane',
    { y: 70, opacity: 0, rotateY: -25, rotateX: 14, scale: 0.88 },
    { y: 0, opacity: 1, rotateY: 0, rotateX: 0, scale: 1, duration: 1.6, ease: 'power4.out', delay: 0.15 }
  );

  // 4. Floating Heritage Badges Pop In with Elastic Bounce
  gsap.fromTo('#artworkStage .glass',
    { opacity: 0, scale: 0.8, y: 15 },
    { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.14, delay: 0.55, ease: 'back.out(1.7)' }
  );

  // 5. Parallax Kannada Background Watermarks
  gsap.fromTo('.hero-kannada',
    { opacity: 0 },
    {
      opacity: (i, el) => el.classList.contains('hk-bottom') ? 0.08 : (el.classList.contains('hk-top') ? 0.22 : 0.15),
      duration: 2,
      delay: 0.35
    }
  );
}

if (window.gsap && window.ScrollTrigger && !prefersReduced) {
  gsap.registerPlugin(ScrollTrigger);

  // Reveal on scroll
  document.querySelectorAll('section .reveal, footer .reveal').forEach((el) => {
    if (el.closest('#projectsGrid')) return;
    gsap.fromTo(el,
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // Animated skill progress bars
  document.querySelectorAll('.skill-fill').forEach((bar) => {
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.to(bar, { width: bar.dataset.width + '%', duration: 1.5, ease: 'power3.out' });
      }
    });
  });

  // Numeric count-up counters
  document.querySelectorAll('.counter').forEach((c) => {
    ScrollTrigger.create({
      trigger: c,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        const target = parseFloat(c.dataset.target);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            c.textContent = Number.isInteger(target) ? Math.floor(obj.val) : obj.val.toFixed(1);
          }
        });
      }
    });
  });

  // Hero subtle parallax scrub
  gsap.to('#heroContent', {
    y: -60,
    opacity: 0.35,
    ease: 'none',
    scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1 }
  });
  gsap.to('#heroArt', {
    y: -90,
    rotateY: 6,
    ease: 'none',
    scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1 }
  });
} else {
  document.querySelectorAll('.reveal').forEach(e => { e.style.opacity = '1'; e.style.transform = 'none'; });
  document.querySelectorAll('.skill-fill').forEach(b => b.style.width = b.dataset.width + '%');
  document.querySelectorAll('.counter').forEach(c => c.textContent = c.dataset.target);
}

/* ==========================================================================
   12. NAVIGATION & SCROLL TRACKING
   ========================================================================== */
const navbar = document.getElementById('navbar');
const backTopBtn = document.getElementById('backTop');
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (navbar) navbar.classList.toggle('scrolled', y > 40);

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollProgress && maxScroll > 0) {
    scrollProgress.style.width = (y / maxScroll * 100) + '%';
  }

  if (backTopBtn) {
    if (y > 500) {
      backTopBtn.classList.remove('hidden');
      backTopBtn.classList.add('flex');
    } else {
      backTopBtn.classList.add('hidden');
      backTopBtn.classList.remove('flex');
    }
  }

  // Active section highlighting
  const sections = ['home', 'about', 'skills', 'projects', 'journey', 'resume', 'contact'];
  let currentSec = 'home';
  sections.forEach((id) => {
    const s = document.getElementById(id);
    if (s && y >= s.offsetTop - 150) currentSec = id;
  });
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentSec);
  });
}, { passive: true });

if (backTopBtn) {
  backTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  });
}

// Mobile Menu Drawer
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.className = mobileMenu.classList.contains('hidden') ? 'fas fa-bars' : 'fas fa-times';
    }
  });

  document.querySelectorAll('.mob-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/* ==========================================================================
   13. CUSTOM MAGNETIC CURSOR
   ========================================================================== */
(function initCursor() {
  if (window.matchMedia('(pointer:coarse)').matches || prefersReduced) return;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  }, { passive: true });

  function cursorLoop() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(cursorLoop);
  }
  cursorLoop();

  document.querySelectorAll('a, button, .tilt-card, input, textarea, .proj-card').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
})();

// Magnetic Button attraction effect
if (!prefersReduced && window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ==========================================================================
   14. PROJECT DETAILS MODAL
   ========================================================================== */
window.openProjectModal = function(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;

  const modalBody = document.getElementById('projectModalBody');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="relative h-[250px] md:h-[300px] overflow-hidden rounded-t-3xl">
      <img src="${p.img}" class="w-full h-full object-cover" alt="${p.title}"/>
      <div class="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/40 to-transparent"></div>
      <div class="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[10px] tracking-widest uppercase bg-gold-500/20 text-gold-300 border border-gold-500/30 px-3 py-1 rounded-full font-bold">
              ${p.badge}
            </span>
            
          </div>
          <h3 class="font-playfair text-2xl md:text-3xl font-bold text-white drop-shadow-md">${p.title}</h3>
        </div>
      </div>
    </div>
    <div class="p-6 md:p-8">
      <div class="flex flex-wrap gap-2 mb-5">
        ${p.tags.map(t => `<span class="chip px-3 py-1 rounded-full text-[12px] text-gold-200">${t}</span>`).join('')}
      </div>
      
      <h4 class="text-sm tracking-wider uppercase text-gold-400 font-bold mb-2">Overview</h4>
      <p class="text-white/70 leading-relaxed text-[15px] mb-6">${p.long}</p>

      <h4 class="text-sm tracking-wider uppercase text-gold-400 font-bold mb-2.5">Key Architecture & Features</h4>
      <ul class="space-y-2 mb-6">
        ${p.features.map(f => `
          <li class="flex items-start gap-2.5 text-white/65 text-[14px]">
            <i class="fas fa-check-circle text-gold-400 mt-1 text-xs"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>

      <div class="rounded-xl bg-white/[0.04] border border-white/10 py-3 px-4 mb-6">
        <div class="font-bold text-gold-300 text-sm">${p.stats.stack}</div>
        <div class="text-[10px] tracking-widest uppercase text-white/40 mt-0.5">Core Technologies</div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
        ${p.demo !== '#' ? `
          <a href="${p.demo}" target="_blank" class="btn-gold flex-1 text-center px-6 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2">
            <i class="fas fa-arrow-up-right-from-square text-xs"></i> Live Demo
          </a>
        ` : `
          <span class="flex-1 text-center px-6 py-3.5 rounded-full text-sm text-white/45 border border-white/10">
            <i class="fas fa-circle-info mr-2"></i> No public demo available
          </span>
        `}
        <a href="${p.code}" target="_blank" class="btn-ghost flex-1 text-center px-6 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2">
          <i class="fab fa-github text-sm"></i> GitHub Repository
        </a>
      </div>
    </div>
  `;

  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   15. INTERACTIVE RESUME MODAL & DOWNLOAD HANDLER
   ========================================================================== */
window.openResumeModal = function() {
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

window.closeResumeModal = function() {
  const modal = document.getElementById('resumeModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

window.downloadResumePdf = function(e) {
  if (e) e.preventDefault();
  // Download real assets/resume.pdf
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';
  link.download = 'Ningaraj_R_Ukkali_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Official Resume PDF downloaded successfully!');
};

// Modal background click & escape listeners
document.addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') window.closeProjectModal();
  if (e.target.id === 'resumeModal') window.closeResumeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeProjectModal();
    window.closeResumeModal();
  }
});

/* ==========================================================================
   17. CONTACT FORM, TOAST & UTILITIES
   ========================================================================== */
let selectedBudget = '';
document.querySelectorAll('.budget-chip-ka, .budget-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.budget-chip-ka, .budget-chip').forEach((c) => {
      c.classList.remove('active');
      c.style.background = '';
      c.style.color = '';
      c.style.borderColor = '';
    });
    chip.classList.add('active');
    selectedBudget = chip.dataset.v;
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fd = new FormData(this);
    const name = fd.get('name');
    const email = fd.get('email');
    const opportunity = fd.get('subject') || '';
    const message = fd.get('message');

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', true);
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showToast('Please enter a valid email address.', true);
      return;
    }

    const sendBtn = document.getElementById('sendBtn');
    const sendLabel = document.getElementById('sendLabel');
    if (sendBtn) sendBtn.disabled = true;
    if (sendLabel) sendLabel.textContent = 'Sending Message...';

    const scope = selectedBudget ? `\nSelected opportunity: ${selectedBudget}` : '';
    const mailSubject = encodeURIComponent(opportunity ? `${opportunity} | ${name}` : `Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOpportunity: ${opportunity || 'Not specified'}\n\n${message}${scope}`);
    const mailto = `mailto:ningarajukkali@gmail.com?subject=${mailSubject}&body=${body}`;
    if (sendBtn) sendBtn.disabled = false;
    if (sendLabel) sendLabel.textContent = 'Send Message';
    showToast('Your email app is opening. Send the message there to complete delivery.');
    window.location.href = mailto;
  });
}

window.showToast = function(msg, isErr = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  const iconWrap = toast.querySelector('.toast-icon-wrap');
  if (iconWrap) {
    iconWrap.className = isErr
      ? 'toast-icon-wrap w-8 h-8 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400'
      : 'toast-icon-wrap w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400';
    iconWrap.innerHTML = isErr ? '<i class="fas fa-exclamation text-xs"></i>' : '<i class="fas fa-check text-xs"></i>';
  }

  toast.style.transform = 'translate(-50%, 0)';
  toast.style.opacity = '1';

  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.style.transform = 'translate(-50%, 5rem)';
    toast.style.opacity = '0';
  }, 3500);
};

window.copyEmail = function() {
  const email = 'ningarajukkali@gmail.com';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email address copied to clipboard!');
    }).catch(() => {
      showToast(`Email: ${email}`);
    });
  } else {
    showToast(`Email: ${email}`);
  }
};
