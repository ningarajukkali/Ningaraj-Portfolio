/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Professional Motion Animations — Ningaraj Ukkali Portfolio
 *  Powered by Motion One (vanilla JS) via CDN
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { animate, scroll, stagger, inView } from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';

/* ── 1. Page Load Entrance ──────────────────────────────────────────────────── */
(function pageLoadEntrance() {
    // Hero tag ( <DEVELOPER /> )
    const heroTag = document.querySelector('.hero-tag');
    if (heroTag) {
        animate(heroTag,
            { opacity: [0, 1], y: [-20, 0] },
            { duration: 0.7, delay: 0.2, easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        animate(heroTitle,
            { opacity: [0, 1], y: [40, 0] },
            { duration: 0.9, delay: 0.35, easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        animate(heroSubtitle,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.8, delay: 0.5, easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Hero stats — staggered
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length) {
        animate(statItems,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: stagger(0.12, { start: 0.65 }), easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Hero buttons
    const heroBtns = document.querySelectorAll('.hero-buttons .btn');
    if (heroBtns.length) {
        animate(heroBtns,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: stagger(0.12, { start: 0.85 }), easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Profile card entrance from right
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        animate(profileCard,
            { opacity: [0, 1], x: [80, 0] },
            { duration: 1.0, delay: 0.4, easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Navbar entrance from top
    const navbar = document.getElementById('navbar');
    if (navbar) {
        animate(navbar,
            { opacity: [0, 1], y: [-40, 0] },
            { duration: 0.7, delay: 0.1, easing: [0.22, 1, 0.36, 1] }
        );
    }

    // Nav links stagger
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length) {
        animate(navLinks,
            { opacity: [0, 1], y: [-10, 0] },
            { duration: 0.4, delay: stagger(0.07, { start: 0.4 }), easing: 'ease-out' }
        );
    }
})();

/* ── 2. Scroll-driven Progress Bar ─────────────────────────────────────────── */
(function scrollProgressBar() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    // Use native scroll event for safety — Motion scroll() API varies across versions
    window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max > 0) {
            bar.style.width = ((window.scrollY / max) * 100) + '%';
        }
    }, { passive: true });
})();

/* ── 3. Navbar Dynamic Blur on Scroll ───────────────────────────────────────── */
(function navbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        const p = Math.min(window.scrollY / 200, 1);
        navbar.style.backdropFilter = `blur(${8 + p * 12}px)`;
        navbar.style.webkitBackdropFilter = `blur(${8 + p * 12}px)`;
        navbar.style.background = `rgba(2, 6, 23, ${0.3 + p * 0.5})`;
    }, { passive: true });
})();

/* ── 4. Section Headers — fade + slide in view ──────────────────────────────── */
(function sectionHeaders() {
    document.querySelectorAll('.section-header').forEach(header => {
        inView(header, ({ target }) => {
            animate(target,
                { opacity: [0, 1], y: [40, 0] },
                { duration: 0.7, easing: [0.22, 1, 0.36, 1] }
            );
            const underline = target.querySelector('.title-underline');
            if (underline) {
                animate(underline,
                    { scaleX: [0, 1], opacity: [0, 1] },
                    { duration: 0.6, delay: 0.3, easing: [0.22, 1, 0.36, 1] }
                );
            }
            const subtitle = target.querySelector('.section-subtitle');
            if (subtitle) {
                animate(subtitle,
                    { opacity: [0, 1], y: [15, 0] },
                    { duration: 0.6, delay: 0.4, easing: 'ease-out' }
                );
            }
        }, { margin: '0px 0px -80px 0px' });
    });
})();

/* ── 5. About Section ───────────────────────────────────────────────────────── */
(function aboutSection() {
    const glassCard = document.querySelector('#about .glass-card');
    if (!glassCard) return;

    inView(glassCard, ({ target }) => {
        const img = target.querySelector('.about-image');
        if (img) {
            animate(img,
                { opacity: [0, 1], x: [-60, 0] },
                { duration: 0.9, easing: [0.22, 1, 0.36, 1] }
            );
        }
        const text = target.querySelector('.about-text');
        if (text) {
            animate(text,
                { opacity: [0, 1], x: [60, 0] },
                { duration: 0.9, delay: 0.15, easing: [0.22, 1, 0.36, 1] }
            );
        }
        const featureCards = target.querySelectorAll('.feature-card');
        if (featureCards.length) {
            animate(featureCards,
                { opacity: [0, 1], y: [40, 0] },
                { duration: 0.6, delay: stagger(0.12, { start: 0.35 }), easing: [0.22, 1, 0.36, 1] }
            );
        }
    }, { margin: '0px 0px -60px 0px' });
})();

/* ── 6. Skill Cards + Progress Bars ────────────────────────────────────────── */
(function skillCards() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const cards = skillsSection.querySelectorAll('.skill-card');
    if (cards.length) {
        inView(skillsSection, () => {
            animate(cards,
                { opacity: [0, 1], y: [50, 0] },
                { duration: 0.65, delay: stagger(0.08), easing: [0.22, 1, 0.36, 1] }
            );

            // Animate progress bars after cards appear
            setTimeout(() => {
                cards.forEach(card => {
                    const fill = card.querySelector('.progress-fill');
                    if (!fill) return;
                    const targetWidth = fill.style.width || '0%';
                    fill.style.width = '0%';
                    animate(fill,
                        { width: targetWidth },
                        { duration: 1.2, delay: 0.2, easing: [0.22, 1, 0.36, 1] }
                    );
                });
            }, 400);
        }, { margin: '0px 0px -80px 0px' });
    }

    // Skill badges stagger
    const additionalSkills = skillsSection.querySelector('.additional-skills');
    const badges = skillsSection.querySelectorAll('.skill-badge');
    if (badges.length && additionalSkills) {
        inView(additionalSkills, () => {
            animate(badges,
                { opacity: [0, 1], scale: [0.7, 1] },
                { duration: 0.4, delay: stagger(0.04, { start: 0.2 }), easing: [0.34, 1.56, 0.64, 1] }
            );
        });
    }
})();

/* ── 7. Project Cards ───────────────────────────────────────────────────────── */
(function projectCards() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    projectsSection.querySelectorAll('.project-card').forEach(card => {
        inView(card, ({ target }) => {
            animate(target,
                { opacity: [0, 1], y: [60, 0] },
                { duration: 0.75, easing: [0.22, 1, 0.36, 1] }
            );
        }, { margin: '0px 0px -40px 0px' });

        // Hover lift
        card.addEventListener('mouseenter', () => {
            animate(card, { y: -8 }, { duration: 0.3, easing: [0.22, 1, 0.36, 1] });
            const num = card.querySelector('.project-number');
            if (num) animate(num, { scale: 1.15, opacity: 0.7 }, { duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            animate(card, { y: 0 }, { duration: 0.4, easing: [0.22, 1, 0.36, 1] });
            const num = card.querySelector('.project-number');
            if (num) animate(num, { scale: 1, opacity: 0.3 }, { duration: 0.3 });
        });
    });

    // Category titles
    projectsSection.querySelectorAll('.project-category-title').forEach(t => {
        inView(t, ({ target }) => {
            animate(target,
                { opacity: [0, 1], x: [-30, 0] },
                { duration: 0.7, easing: [0.22, 1, 0.36, 1] }
            );
        });
    });
})();

/* ── 8. Education Timeline ──────────────────────────────────────────────────── */
(function educationTimeline() {
    document.querySelectorAll('.timeline-item').forEach(item => {
        const isLeft = !!item.querySelector('.timeline-left');
        inView(item, ({ target }) => {
            const content = target.querySelector('.timeline-content');
            const icon = target.querySelector('.timeline-icon');
            if (content) {
                animate(content,
                    { opacity: [0, 1], x: [isLeft ? -70 : 70, 0] },
                    { duration: 0.8, easing: [0.22, 1, 0.36, 1] }
                );
            }
            if (icon) {
                animate(icon,
                    { opacity: [0, 1], scale: [0.4, 1] },
                    { duration: 0.7, delay: 0.2, easing: [0.34, 1.56, 0.64, 1] }
                );
            }
        }, { margin: '0px 0px -40px 0px' });
    });

    // Timeline line draw
    const timelineLine = document.querySelector('.timeline-line');
    const educationSection = document.getElementById('education');
    if (timelineLine && educationSection) {
        inView(educationSection, () => {
            animate(timelineLine,
                { scaleY: [0, 1], opacity: [0, 1] },
                { duration: 1.5, easing: [0.22, 1, 0.36, 1] }
            );
        });
    }
})();

/* ── 9. Stats Cards ─────────────────────────────────────────────────────────── */
(function statsCards() {
    document.querySelectorAll('.stat-card').forEach((card, i) => {
        inView(card, ({ target }) => {
            animate(target,
                { opacity: [0, 1], y: [30, 0] },
                { duration: 0.6, delay: i * 0.08, easing: [0.34, 1.56, 0.64, 1] }
            );
        }, { margin: '0px 0px -20px 0px' });

        card.addEventListener('mouseenter', () => {
            animate(card, { scale: 1.05, y: -5 }, { duration: 0.25, easing: [0.22, 1, 0.36, 1] });
        });
        card.addEventListener('mouseleave', () => {
            animate(card, { scale: 1, y: 0 }, { duration: 0.3, easing: [0.22, 1, 0.36, 1] });
        });
    });
})();

/* ── 10. Contact Section ────────────────────────────────────────────────────── */
(function contactSection() {
    document.querySelectorAll('.contact-card').forEach((card, i) => {
        inView(card, ({ target }) => {
            animate(target,
                { opacity: [0, 1], x: [-50, 0] },
                { duration: 0.65, delay: i * 0.12, easing: [0.22, 1, 0.36, 1] }
            );
        }, { margin: '0px 0px -20px 0px' });

        card.addEventListener('mouseenter', () => {
            animate(card, { x: 6 }, { duration: 0.25, easing: [0.22, 1, 0.36, 1] });
            const icon = card.querySelector('.contact-icon');
            if (icon) animate(icon, { scale: 1.2, rotate: 10 }, { duration: 0.25 });
        });
        card.addEventListener('mouseleave', () => {
            animate(card, { x: 0 }, { duration: 0.3, easing: [0.22, 1, 0.36, 1] });
            const icon = card.querySelector('.contact-icon');
            if (icon) animate(icon, { scale: 1, rotate: 0 }, { duration: 0.3 });
        });
    });

    // Social links stagger
    const socialContainer = document.querySelector('.social-container');
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length && socialContainer) {
        inView(socialContainer, () => {
            animate(socialLinks,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.5, delay: stagger(0.09, { start: 0.2 }), easing: [0.34, 1.56, 0.64, 1] }
            );
        });
    }

    // Contact form wrapper
    const formWrapper = document.querySelector('.contact-form-wrapper');
    if (formWrapper) {
        inView(formWrapper, ({ target }) => {
            animate(target,
                { opacity: [0, 1], x: [60, 0] },
                { duration: 0.85, delay: 0.15, easing: [0.22, 1, 0.36, 1] }
            );
            const formGroups = target.querySelectorAll('.form-group');
            if (formGroups.length) {
                animate(formGroups,
                    { opacity: [0, 1], y: [15, 0] },
                    { duration: 0.45, delay: stagger(0.1, { start: 0.35 }), easing: 'ease-out' }
                );
            }
        }, { margin: '0px 0px -40px 0px' });
    }
})();

/* ── 11. Magnetic Buttons ───────────────────────────────────────────────────── */
(function magneticButtons() {
    document.querySelectorAll('.btn, .btn-project-view, .social-link').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
            const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
            animate(btn, { x: dx, y: dy }, { duration: 0.2, easing: 'ease-out' });
        });
        btn.addEventListener('mouseleave', () => {
            animate(btn, { x: 0, y: 0 }, { duration: 0.45, easing: [0.34, 1.56, 0.64, 1] });
        });
    });
})();

/* ── 12. Cursor Glow ────────────────────────────────────────────────────────── */
(function cursorGlow() {
    if (window.innerWidth <= 768) return;

    const glow = document.createElement('div');
    glow.id = 'cursorGlow';
    Object.assign(glow.style, {
        position: 'fixed',
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)',
        transform: 'translate(-50%,-50%)',
        mixBlendMode: 'screen',
        left: '-999px',
        top: '-999px',
        transition: 'width 0.3s ease, height 0.3s ease',
    });
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }, { passive: true });

    document.querySelectorAll('button, a, .skill-card, .project-card, .contact-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            glow.style.width = '520px';
            glow.style.height = '520px';
        });
        el.addEventListener('mouseleave', () => {
            glow.style.width = '380px';
            glow.style.height = '380px';
        });
    });
})();

/* ── 13. Feature Card 3D Tilt ───────────────────────────────────────────────── */
(function featureCardTilt() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            animate(card,
                { rotateX: -y * 12, rotateY: x * 12, scale: 1.04 },
                { duration: 0.2, easing: 'ease-out' }
            );
        });
        card.addEventListener('mouseleave', () => {
            animate(card,
                { rotateX: 0, rotateY: 0, scale: 1 },
                { duration: 0.4, easing: [0.22, 1, 0.36, 1] }
            );
        });
    });
})();

/* ── 14. Footer Entrance ────────────────────────────────────────────────────── */
(function footerEntrance() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    inView(footer, ({ target }) => {
        const items = [
            target.querySelector('.footer-logo'),
            target.querySelector('.footer-copyright'),
            target.querySelector('.footer-tagline'),
        ].filter(Boolean);
        if (items.length) {
            animate(items,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.6, delay: stagger(0.15), easing: [0.22, 1, 0.36, 1] }
            );
        }
    });
})();

/* ── 15. Scroll-to-Top Button ───────────────────────────────────────────────── */
(function scrollTopAnimation() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    btn.addEventListener('mouseenter', () => {
        animate(btn, { scale: 1.15, rotate: -10 }, { duration: 0.2, easing: [0.34, 1.56, 0.64, 1] });
    });
    btn.addEventListener('mouseleave', () => {
        animate(btn, { scale: 1, rotate: 0 }, { duration: 0.3, easing: 'ease-out' });
    });
})();

/* ── 16. Project Modal Animation ────────────────────────────────────────────── */
(function projectModalAnimation() {
    const origOpen = window.openProjectModal;
    const origClose = window.closeProjectModal;

    if (typeof origOpen === 'function') {
        window.openProjectModal = function (btnEl) {
            origOpen.call(window, btnEl);
            const content = document.querySelector('#projectModal .modal-content');
            if (content) {
                animate(content,
                    { opacity: [0, 1], scale: [0.85, 1], y: [40, 0] },
                    { duration: 0.45, easing: [0.22, 1, 0.36, 1] }
                );
            }
        };
    }

    if (typeof origClose === 'function') {
        window.closeProjectModal = function () {
            const content = document.querySelector('#projectModal .modal-content');
            if (content) {
                animate(content,
                    { opacity: [1, 0], scale: [1, 0.88], y: [0, 30] },
                    { duration: 0.3, easing: 'ease-in' }
                ).finished.then(() => origClose.call(window));
            } else {
                origClose.call(window);
            }
        };
    }
})();

console.log('%c✨ Motion One animations loaded!', 'font-size:14px;color:#06b6d4;font-weight:bold;');
