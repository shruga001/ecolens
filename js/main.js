// Main - shared: nav, theme toggle, init, scroll reveal, label directory

// Theme toggle - localStorage + class on <html> - ElevenLabs light default
(function initTheme() {
    const STORAGE_KEY = 'eco-theme';
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
    }

    // Expose toggle function
    window.toggleTheme = function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    };

    function updateThemeIcon(isDark) {
        const icons = document.querySelectorAll('[data-theme-icon]');
        icons.forEach(function (el) {
            el.textContent = isDark ? '☀️' : '🌙';
        });
        const labels = document.querySelectorAll('[data-theme-label]');
        labels.forEach(function (el) {
            el.textContent = isDark ? 'Light mode' : 'Dark mode';
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const isDark = document.documentElement.classList.contains('dark');
        updateThemeIcon(isDark);
    });
})();

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('[data-nav-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');

    if (toggle && mobileNav) {
        toggle.addEventListener('click', function () {
            const isOpen = mobileNav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Theme buttons
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            window.toggleTheme();
        });
    });

    // Mark active nav link based on current path
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        const href = link.getAttribute('href') || '';
        const file = href.split('/').pop();
        if (file === current || (current === '' && file === 'index.html')) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealEls.forEach(function (el) { observer.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // Lifecycle diagram interaction
    const stageDetail = document.getElementById('stage-detail');
    document.querySelectorAll('[data-lifecycle-stage]').forEach(function (stage) {
        stage.addEventListener('click', function () {
            document.querySelectorAll('[data-lifecycle-stage]').forEach(function (s) {
                s.classList.remove('is-active');
            });
            stage.classList.add('is-active');
            const title = stage.getAttribute('data-title') || '';
            const desc = stage.getAttribute('data-desc') || '';
            const tip = stage.getAttribute('data-tip') || '';
            if (stageDetail) {
                stageDetail.innerHTML = `
                    <h4 style="font-family:var(--font-body); font-weight:600; color:var(--color-ink); margin-bottom:8px;">${title}</h4>
                    <p style="font-size:15px; line-height:1.6; color:var(--color-body); margin-bottom:8px;">${desc}</p>
                    <p style="font-size:14px; color:var(--color-muted); background:var(--color-canvas-soft); padding:10px 12px; border-radius:8px; border:1px solid var(--color-hairline);"><strong style="color:var(--color-ink);">Eco tip:</strong> ${tip}</p>
                `;
            }
        });
    });

    // Label directory rendering if on eco-labels page
    const directory = document.getElementById('label-directory');
    if (directory && typeof ecoLabels !== 'undefined') {
        renderLabelDirectory(directory);
        setupLabelFilters();
        setupLabelSearch();
    }
});

/**
 * Render label directory cards
 * @param {HTMLElement} container
 * @param {Array} labels - optional filtered list
 */
function renderLabelDirectory(container, labels) {
    const list = labels || ecoLabels;
    if (!list.length) {
        container.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:var(--color-muted); padding:32px;">No labels match your search.</p>';
        return;
    }
    container.innerHTML = list.map(function (label) {
        const trustClass = label.trust === 'high' ? 'label-trust-high' : label.trust === 'medium' ? 'label-trust-medium' : 'label-trust-low';
        const trustText = label.trust === 'high' ? 'Third-party certified' : label.trust === 'medium' ? 'Company-level audit' : 'Self-declared';
        return `
            <article class="label-card">
                <div class="label-card-header">
                    <div class="label-card-icon" aria-hidden="true">${label.icon}</div>
                    <span class="label-trust ${trustClass}">${trustText}</span>
                </div>
                <div>
                    <h3 class="label-card-title">${label.name}</h3>
                    <p class="label-card-org">${label.organization} · ${label.founded} · ${label.scope}</p>
                </div>
                <p class="label-card-desc">${label.description}</p>
                <div class="label-card-footer">
                    <span class="badge-pill" style="font-size:11px;">${label.category}</span>
                    <a href="${label.verifyUrl}" target="_blank" rel="noopener noreferrer" style="font-size:14px; font-weight:500; color:var(--color-ink); text-decoration:underline; text-underline-offset:3px;">Verify →</a>
                </div>
            </article>
        `;
    }).join('');
}

/**
 * Setup filter pills
 */
function setupLabelFilters() {
    const pills = document.querySelectorAll('[data-filter]');
    const directory = document.getElementById('label-directory');
    const searchInput = document.getElementById('label-search');
    let activeCategory = 'all';

    pills.forEach(function (pill) {
        pill.addEventListener('click', function () {
            pills.forEach(function (p) { p.classList.remove('is-active'); });
            pill.classList.add('is-active');
            activeCategory = pill.getAttribute('data-filter');
            applyFilters(directory, searchInput, activeCategory);
        });
    });
}

/**
 * Setup search input
 */
function setupLabelSearch() {
    const searchInput = document.getElementById('label-search');
    const directory = document.getElementById('label-directory');
    if (!searchInput) return;

    function getActiveCategory() {
        const active = document.querySelector('[data-filter].is-active');
        return active ? active.getAttribute('data-filter') : 'all';
    }

    searchInput.addEventListener('input', function () {
        applyFilters(directory, searchInput, getActiveCategory());
    });
}

/**
 * Apply combined category + search filters
 */
function applyFilters(directory, searchInput, category) {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let filtered = ecoLabels;

    if (category && category !== 'all') {
        // Map category ids to label categories - allow broad match
        filtered = filtered.filter(function (l) {
            if (category === 'food' && l.category === 'agriculture') return true;
            return l.category === category;
        });
    }

    if (query) {
        filtered = filtered.filter(function (l) {
            return l.name.toLowerCase().includes(query) ||
                l.organization.toLowerCase().includes(query) ||
                l.description.toLowerCase().includes(query) ||
                l.category.toLowerCase().includes(query);
        });
    }

    renderLabelDirectory(directory, filtered);
}

// Footer year
document.addEventListener('DOMContentLoaded', function () {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
