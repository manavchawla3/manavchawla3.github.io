/**
 * Portfolio Renderer
 * Renders portfolio content using data from manifests
 */

const dataLoader = new DataLoader();
let portfolioData = null;

// Typing animation
function typeText(text, elementId) {
    const element = document.getElementById(elementId);
    let index = 0;

    const interval = setInterval(() => {
        element.textContent = text.slice(0, index);
        index++;
        if (index > text.length) clearInterval(interval);
    }, 100);
}

// Render experience section
function renderExperience(experiences) {
    const container = document.getElementById('experience-list');
    container.innerHTML = '';

    experiences.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'relative pl-8 group';
        jobElement.innerHTML = `
            <div class="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors border border-slate-950"></div>

            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 class="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    ${job.company}
                </h3>
                <span class="font-mono text-sm text-slate-500">${job.period.display}</span>
            </div>

            <div class="text-slate-400 mb-4 font-medium">${job.role}</div>
            <p class="text-slate-400 leading-relaxed mb-4 max-w-2xl">
                ${job.highlights[0]}
            </p>

            <div class="flex flex-wrap gap-2">
                ${job.tags.map(tag => `
                    <span class="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 rounded border border-cyan-900/30">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        `;
        container.appendChild(jobElement);
    });
}

// Render skills section
function renderSkills(skills) {
    const container = document.getElementById('skills-grid');
    container.innerHTML = '';

    Object.entries(skills.categories).forEach(([category, items]) => {
        const skillElement = document.createElement('div');
        skillElement.className = 'p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors';
        skillElement.innerHTML = `
            <h3 class="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                ${category}
            </h3>
            <div class="flex flex-wrap gap-2">
                ${items.map(item => `
                    <div class="flex items-center gap-2 text-slate-400 bg-slate-950 px-3 py-1.5 rounded text-sm">
                        <span class="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
                        ${item}
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(skillElement);
    });
}

// Render projects section
function renderProjects(projects) {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'group relative p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all hover:-translate-y-1';
        projectElement.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div class="p-3 rounded-lg bg-slate-950 text-emerald-400 group-hover:text-emerald-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
                        <line x1="6" x2="6.01" y1="6" y2="6"/>
                        <line x1="6" x2="6.01" y1="18" y2="18"/>
                    </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-slate-600 group-hover:text-emerald-400 transition-colors">
                    <path d="m7 7 10 10-5 5V2l5 5L7 17"/>
                </svg>
            </div>

            <h3 class="text-lg font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
                ${project.title}
            </h3>

            <p class="text-slate-400 text-sm mb-6 leading-relaxed">
                ${project.description}
            </p>

            <div class="text-xs font-mono text-emerald-500/80 pt-4 border-t border-slate-800">
                ${project.tags.join(' • ')}
            </div>
        `;
        container.appendChild(projectElement);
    });
}

// Render testimonials section
function renderTestimonials(testimonials) {
    const container = document.getElementById('testimonials-grid');
    if (!container || !testimonials || testimonials.length === 0) return;

    container.innerHTML = '';

    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all';
        testimonialElement.innerHTML = `
            <div class="flex items-start gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    ${testimonial.name.charAt(0)}
                </div>
                <div class="flex-1">
                    <h4 class="font-bold text-slate-200">${testimonial.name}</h4>
                    <p class="text-sm text-slate-400">${testimonial.title}</p>
                    <p class="text-xs text-slate-500">${testimonial.company}</p>
                </div>
            </div>
            <p class="text-slate-400 italic leading-relaxed">
                "${testimonial.quote}"
            </p>
        `;
        container.appendChild(testimonialElement);
    });
}

// Initialize portfolio
async function initializePortfolio() {
    try {
        // Show loading state
        document.body.classList.add('loading');

        // Load all data
        portfolioData = await dataLoader.loadAll();
        console.log('Portfolio data loaded:', portfolioData);

        // Render sections
        if (portfolioData.personal) {
            typeText(portfolioData.personal.tagline, 'typed-text');
        }

        if (portfolioData.experience) {
            renderExperience(portfolioData.experience);
        }

        if (portfolioData.skills) {
            renderSkills(portfolioData.skills);
        }

        if (portfolioData.projects) {
            renderProjects(portfolioData.projects);
        }

        if (portfolioData.testimonials && portfolioData.testimonials.length > 0) {
            renderTestimonials(portfolioData.testimonials);
        }

        // Remove loading state
        document.body.classList.remove('loading');

    } catch (error) {
        console.error('Failed to initialize portfolio:', error);
        document.body.innerHTML = '<div class="flex items-center justify-center min-h-screen text-red-500">Failed to load portfolio data. Please check console for errors.</div>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
