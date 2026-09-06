// Scroll Progress Bar
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// window.addEventListener('scroll', updateScrollProgress); // Removed - handled by debounce below

// Navbar Scroll Effect + Scroll-to-Top Button
function updateNavbar() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    if (scrollTopBtn) {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
}

// window.addEventListener('scroll', updateNavbar); // Removed - handled by debounce below

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
}

// ─── Premium Smooth Scroll ───────────────────────────────────────────────────
function easedScrollTo(targetY, duration = 900) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start = null;

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + diff * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
        const targetY = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
        easedScrollTo(targetY, 900);
    }
    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    }
}

function scrollToTop() {
    easedScrollTo(0, 800);
}

// Create Floating Particles
function createParticles(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(6, 182, 212, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `floatParticle ${3 + Math.random() * 2}s infinite ${Math.random() * 2}s`;
        container.appendChild(particle);
    }
}

// Add particle animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
        }
        50% {
            transform: translateY(-30px);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles('heroParticles', 50);
createParticles('footerParticles', 20);

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Animate skill progress bars
            if (entry.target.classList.contains('skill-card')) {
                const progressFill = entry.target.querySelector('.progress-fill');
                if (progressFill) {
                    const width = progressFill.style.width;
                    progressFill.style.width = '0';
                    setTimeout(() => {
                        progressFill.style.width = width;
                    }, 100);
                }
            }

            // Animate stats
            if (entry.target.classList.contains('stat-item') || entry.target.classList.contains('stat-card')) {
                animateValue(entry.target.querySelector('.stat-value, .stat-card-value'));
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .fade-in-up, .skill-card, .project-card, .timeline-item, .stat-item, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Animate Number Values
function animateValue(element) {
    if (!element || element.dataset.animated) return;

    const text = element.textContent;
    const matches = text.match(/\d+/);
    if (!matches) return;

    const endValue = parseInt(matches[0]);
    const hasPlus = text.includes('+');
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    element.dataset.animated = 'true';

    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.round(endValue * progress);
        element.textContent = currentValue + (hasPlus ? '+' : '');

        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = text;
        }
    }, frameDuration);
}

// Skill Card Hover Effects
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotateY(0)';
    });
});

// Project Card Hover Effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        // Create floating particles on hover
        createHoverParticles(this);
    });
});

function createHoverParticles(card) {
    const particleCount = 6;
    const gradient = card.dataset.gradient;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.left = (20 + Math.random() * 60) + '%';
        particle.style.top = (20 + Math.random() * 60) + '%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '100';

        // Set gradient based on card
        if (gradient === 'cyan-blue') {
            particle.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6)';
        } else if (gradient === 'violet-purple') {
            particle.style.background = 'linear-gradient(135deg, #8b5cf6, #a855f7)';
        } else if (gradient === 'pink-rose') {
            particle.style.background = 'linear-gradient(135deg, #ec4899, #f43f5e)';
        } else if (gradient === 'emerald-teal') {
            particle.style.background = 'linear-gradient(135deg, #10b981, #14b8a6)';
        } else if (gradient === 'orange-amber') {
            particle.style.background = 'linear-gradient(135deg, #f97316, #f59e0b)';
        } else if (gradient === 'indigo-blue') {
            particle.style.background = 'linear-gradient(135deg, #6366f1, #3b82f6)';
        }

        particle.style.animation = `floatUp 1.5s ease-out ${i * 0.15}s`;

        card.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

// Add float up animation
const floatUpStyle = document.createElement('style');
floatUpStyle.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 0;
            transform: scale(0) translateY(0);
        }
        50% {
            opacity: 1;
            transform: scale(1) translateY(-20px);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-40px);
        }
    }
`;
document.head.appendChild(floatUpStyle);

// Timeline Icon Rotation on Hover
document.querySelectorAll('.timeline-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(-50%) scale(1.1) rotate(360deg)';
    });

    icon.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
    });
});

// Terminal Input Focus Effects
document.querySelectorAll('.terminal-input').forEach(input => {
    input.addEventListener('focus', function () {
        this.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
        this.style.borderColor = '#06b6d4';
    });

    input.addEventListener('blur', function () {
        this.style.boxShadow = 'none';
        this.style.borderColor = 'rgba(6, 182, 212, 0.3)';
    });
});

// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };

    console.log('Form submitted:', formData);

    // Show success message
    alert('Message sent successfully! Thank you for reaching out.');

    // Reset form
    this.reset();
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add smooth reveal for elements on scroll
const revealElements = document.querySelectorAll('.glass-card, .feature-card, .contact-card');
revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Button Click Effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 10) + 'px';
        ripple.style.top = (e.clientY - rect.top - 10) + 'px';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Cursor Trail Effect (Optional)
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', function (e) {
    if (window.innerWidth > 768) { // Only on desktop
        cursorTrail.push({ x: e.clientX, y: e.clientY });

        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    }
});

// Loading Animation
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic Year in Footer
const currentYear = new Date().getFullYear();
const copyrightText = document.querySelector('.footer-copyright');
if (copyrightText) {
    copyrightText.innerHTML = copyrightText.innerHTML.replace('2025', currentYear);
}

// Keyboard Navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
        }
    }
});

// Lazy Loading Images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.complete) {
                img.style.opacity = '1';
            } else {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                img.onload = () => {
                    img.style.opacity = '1';
                };
            }

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Console Easter Egg
console.log('%c👋 Hey there, developer!', 'font-size: 20px; font-weight: bold; color: #06b6d4;');
console.log('%cLooks like you\'re checking out the code. Feel free to reach out if you want to collaborate!', 'font-size: 14px; color: #8b5cf6;');
console.log('%c📧 ningaraj.ukkali@example.com', 'font-size: 12px; color: #22d3ee;');

// Performance Optimization - Debounce Scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(updateScrollProgress, 10));
window.addEventListener('scroll', debounce(updateNavbar, 10));

console.log('%c✨ Portfolio loaded successfully!', 'font-size: 16px; font-weight: bold; color: #10b981;');
// Toggle Projects Visibility
function toggleProjects() {
    const extraProjects = document.querySelectorAll('.extra-project');
    const viewAllBtn = document.getElementById('viewAllBtn');

    let isHidden = true;
    if (extraProjects.length > 0) {
        isHidden = extraProjects[0].style.display === 'none';
    }

    if (isHidden) {
        extraProjects.forEach(el => {
            // Revert display to default grid/block or remove display none
            el.style.display = '';

            // If it's a grid container and needs explicit grid, do it
            if (el.classList.contains('projects-grid')) {
                el.style.display = 'grid';
            }
        });
        viewAllBtn.textContent = 'Show Less';
    } else {
        extraProjects.forEach(el => {
            el.style.display = 'none';
        });
        viewAllBtn.textContent = 'View All Projects';

        // Scroll back to top of projects section so the user doesn't lose their place
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
}

// Project Modal Logic
function openProjectModal(btnElement) {
    const card = btnElement.closest('.project-card');
    if (!card) return;

    const title = card.getAttribute('data-title');
    const desc = card.getAttribute('data-description');
    const github = card.getAttribute('data-github');
    const demo = card.getAttribute('data-demo');

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').innerHTML = desc;

    const githubBtn = document.getElementById('modalGithubBtn');
    if (github && github !== '#') {
        githubBtn.href = github;
        githubBtn.style.display = 'flex';
    } else {
        githubBtn.style.display = 'none';
    }

    const demoBtn = document.getElementById('modalDemoBtn');
    if (demo) {
        demoBtn.href = demo;
    }
    demoBtn.style.display = 'flex';

    const modal = document.getElementById('projectModal');
    modal.classList.add('show');

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}


function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');

    // Restore scrolling
    document.body.style.overflow = '';
}

// Attach direct GitHub repository link handler to card buttons
document.querySelectorAll('.btn-project-github').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = this.closest('.project-card');
        const github = card ? card.getAttribute('data-github') : null;
        if (github && github !== '#') {
            window.open(github, '_blank');
        }
    });
});

// Resume Interactive Preview Toggle
function toggleResumePreview() {
    const panel = document.getElementById('resumePreviewPanel');
    const btnText = document.getElementById('resumePreviewText');
    if (!panel) return;

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        if (btnText) btnText.textContent = 'Hide Preview';
    } else {
        panel.classList.add('hidden');
        if (btnText) btnText.textContent = 'Interactive View';
    }
    if (window.lucide) {
        lucide.createIcons();
    }
}


// ─── Advanced 3D Holographic Data Orb ────────────────────────────────────────
(function initHolographicOrb() {
    function loadScript(src, cb) {
        const s = document.createElement('script');
        s.src = src; s.onload = cb;
        document.head.appendChild(s);
    }
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js', build);

    function build() {
        const canvas = document.createElement('canvas');
        canvas.id = 'orbCanvas';
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;';
        document.body.prepend(canvas);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 500);
        camera.position.set(0, 0, 20);

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(innerWidth, innerHeight);
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // ── Glow sprite textures ─────────────────────────────────────────────
        function makeGlow(size, r, g, b) {
            const cv = document.createElement('canvas');
            cv.width = cv.height = size;
            const cx = cv.getContext('2d');
            const grd = cx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            grd.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',1)');
            grd.addColorStop(0.35, 'rgba(' + r + ',' + g + ',' + b + ',0.6)');
            grd.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
            cx.fillStyle = grd; cx.fillRect(0, 0, size, size);
            return new THREE.CanvasTexture(cv);
        }
        const tCyan = makeGlow(64, 6, 182, 212);
        const tViolet = makeGlow(64, 139, 92, 246);
        const tPink = makeGlow(64, 244, 114, 182);
        const tWhite = makeGlow(64, 255, 255, 255);
        const tEm = makeGlow(64, 52, 211, 153);

        // ── Fibonacci particle sphere shell (outer) ──────────────────────────
        const N = 6000;
        const pos = new Float32Array(N * 3);
        const col = new Float32Array(N * 3);
        const c1 = new THREE.Color('#22d3ee'), c2 = new THREE.Color('#8b5cf6'), c3 = new THREE.Color('#f472b6');
        for (let i = 0; i < N; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / N);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            const r = 6.0 + (Math.random() - 0.5) * 0.5;
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.cos(phi);
            pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
            const t = phi / Math.PI;
            const c = t < 0.5 ? c1.clone().lerp(c2, t * 2) : c2.clone().lerp(c3, (t - 0.5) * 2);
            col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
        }
        const shellGeo = new THREE.BufferGeometry();
        shellGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        shellGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
        const shell = new THREE.Points(shellGeo, new THREE.PointsMaterial({
            map: tCyan, size: 0.2, vertexColors: true,
            transparent: true, opacity: 0.8,
            blending: THREE.AdditiveBlending, depthWrite: false, alphaTest: 0.001,
        }));
        scene.add(shell);

        // ── Inner particle cloud ─────────────────────────────────────────────
        const IN = 2500;
        const ip = new Float32Array(IN * 3);
        for (let i = 0; i < IN; i++) {
            const phi = Math.acos(1 - 2 * (i + 0.5) / IN);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            const r = 2.5 + Math.random() * 2.5;
            ip[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            ip[i * 3 + 1] = r * Math.cos(phi);
            ip[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
        }
        const innerGeo = new THREE.BufferGeometry();
        innerGeo.setAttribute('position', new THREE.BufferAttribute(ip, 3));
        const inner = new THREE.Points(innerGeo, new THREE.PointsMaterial({
            map: tWhite, size: 0.1, color: 0x88ccff,
            transparent: true, opacity: 0.45,
            blending: THREE.AdditiveBlending, depthWrite: false, alphaTest: 0.001,
        }));
        scene.add(inner);

        // ── 3 Gyroscope orbital rings ────────────────────────────────────────
        const RING_DEFS = [
            { R: 8.5, col: 0x06b6d4, op: 0.55, rx: 0, rz: 0, sp: 0.0042 },
            { R: 9.2, col: 0xa78bfa, op: 0.45, rx: Math.PI / 2, rz: 0, sp: -0.0055 },
            { R: 9.8, col: 0xf472b6, op: 0.40, rx: Math.PI / 3, rz: Math.PI / 4, sp: 0.0035 },
        ];
        const rings = RING_DEFS.map(d => {
            const m = new THREE.Mesh(
                new THREE.TorusGeometry(d.R, 0.02, 8, 256),
                new THREE.MeshBasicMaterial({
                    color: d.col, transparent: true, opacity: d.op,
                    blending: THREE.AdditiveBlending, depthWrite: false
                })
            );
            m.rotation.x = d.rx; m.rotation.z = d.rz;
            m.userData = { sp: d.sp, baseOp: d.op };
            scene.add(m); return m;
        });

        // ── Orbiting glow sprites on rings ───────────────────────────────────
        const orbs = [];
        const orbTex = [tCyan, tViolet, tPink, tEm];
        RING_DEFS.forEach((d, ri) => {
            for (let k = 0; k < 5; k++) {
                const sp = new THREE.Sprite(new THREE.SpriteMaterial({
                    map: orbTex[k % orbTex.length], transparent: true, opacity: 1,
                    blending: THREE.AdditiveBlending, depthWrite: false,
                }));
                sp.scale.set(0.8, 0.8, 0.8);
                scene.add(sp);
                orbs.push({ sp, ri, R: d.R, offset: (k / 5) * Math.PI * 2, sp_speed: d.sp * 9, rx: d.rx, rz: d.rz });
            }
        });

        // ── Multi-layer core glow (sprites at origin) ────────────────────────
        function coreSprite(tex, s, op) {
            const sp = new THREE.Sprite(new THREE.SpriteMaterial({
                map: tex, transparent: true, opacity: op,
                blending: THREE.AdditiveBlending, depthWrite: false
            }));
            sp.scale.set(s, s, s); scene.add(sp); return sp;
        }
        const cW = coreSprite(tWhite, 3.0, 0.55);
        const cC = coreSprite(tCyan, 6.5, 0.20);
        const cV = coreSprite(tViolet, 11.0, 0.10);

        // ── Background starfield ─────────────────────────────────────────────
        const sPos = new Float32Array(4000 * 3);
        for (let i = 0; i < 4000 * 3; i++) sPos[i] = (Math.random() - 0.5) * 300;
        const starG = new THREE.BufferGeometry();
        starG.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
        scene.add(new THREE.Points(starG, new THREE.PointsMaterial({
            size: 0.07, color: 0x99aaff, transparent: true, opacity: 0.3,
            blending: THREE.AdditiveBlending, depthWrite: false,
        })));

        // ── Mouse ────────────────────────────────────────────────────────────
        let mx = 0, my = 0, tmx = 0, tmy = 0;
        window.addEventListener('mousemove', e => {
            tmx = (e.clientX / innerWidth - 0.5) * 2;
            tmy = -(e.clientY / innerHeight - 0.5) * 2;
        });
        window.addEventListener('resize', () => {
            renderer.setSize(innerWidth, innerHeight);
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
        });

        // ── Animate ──────────────────────────────────────────────────────────
        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            mx += (tmx - mx) * 0.045; my += (tmy - my) * 0.045;

            // Camera parallax + subtle auto-drift
            const cx = mx * 5 + Math.sin(t * 0.11) * 2;
            const cy = my * 3 + Math.cos(t * 0.08) * 1.2;
            camera.position.x += (cx - camera.position.x) * 0.022;
            camera.position.y += (cy - camera.position.y) * 0.022;
            camera.lookAt(0, 0, 0);

            // Particle shells rotate on different axes for 3D depth
            shell.rotation.y = t * 0.055;
            shell.rotation.x = t * 0.022;
            inner.rotation.y = -t * 0.07;
            inner.rotation.z = t * 0.04;

            // Ring spin + opacity pulse
            rings.forEach((r, i) => {
                r.rotation.y += r.userData.sp;
                r.material.opacity = r.userData.baseOp * (0.65 + 0.35 * Math.sin(t * 1.1 + i * 2.1));
            });

            // Orbiting dots travel along ring paths
            orbs.forEach(o => {
                const a = t * o.sp_speed + o.offset;
                const lp = new THREE.Vector3(Math.cos(a) * o.R, Math.sin(a) * o.R, 0);
                lp.applyEuler(new THREE.Euler(o.rx, 0, o.rz));
                const ry = rings[o.ri].rotation.y;
                const x2 = lp.x * Math.cos(ry) - lp.z * Math.sin(ry);
                const z2 = lp.x * Math.sin(ry) + lp.z * Math.cos(ry);
                o.sp.position.set(x2, lp.y, z2);
                const sc = 0.5 + 0.35 * Math.sin(t * 3 + o.offset);
                o.sp.scale.set(sc, sc, sc);
            });

            // Core pulse
            const pulse = 1 + 0.18 * Math.sin(t * 2.0);
            cW.scale.set(3.0 * pulse, 3.0 * pulse, 1);
            cC.scale.set(6.5 * pulse, 6.5 * pulse, 1);
            cC.material.opacity = 0.18 + 0.08 * Math.sin(t * 2.0);
            cV.scale.set(11 * pulse, 11 * pulse, 1);
            cV.material.opacity = 0.08 + 0.04 * Math.sin(t * 2.0);

            renderer.render(scene, camera);
        }
        animate();
    }
})();
