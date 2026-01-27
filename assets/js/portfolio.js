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
            <ul class="text-slate-400 leading-relaxed mb-4 max-w-2xl space-y-2 list-disc list-inside">
                ${job.highlights.map(highlight => `
                    <li>${highlight}</li>
                `).join('')}
            </ul>

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
    const dotsContainer = document.getElementById('testimonial-dots');
    if (!container || !testimonials || testimonials.length === 0) return;

    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial-card p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all';

        // Profile section - make clickable if LinkedIn URL exists
        const profileContent = `
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                ${testimonial.name.charAt(0)}
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-slate-200 flex items-center gap-2">
                    ${testimonial.name}
                    ${testimonial.linkedinUrl ? `
                        <svg class="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    ` : ''}
                </h4>
                <p class="text-sm text-slate-400">${testimonial.title}</p>
                <p class="text-xs text-slate-500">${testimonial.company}</p>
            </div>
        `;

        const profileHTML = testimonial.linkedinUrl
            ? `<a href="${testimonial.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="flex items-start gap-4 mb-4 group/profile hover:opacity-80 transition-opacity">
                ${profileContent}
               </a>`
            : `<div class="flex items-start gap-4 mb-4">
                ${profileContent}
               </div>`;

        testimonialElement.innerHTML = `
            ${profileHTML}
            <p class="text-slate-400 italic leading-relaxed">
                "${testimonial.quote}"
            </p>
        `;
        container.appendChild(testimonialElement);

        // Create dot for each testimonial
        const dot = document.createElement('button');
        dot.className = index === 0 ? 'active' : '';
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.onclick = () => scrollToTestimonial(index);
        dotsContainer.appendChild(dot);
    });

    // Initialize scroll controls
    initTestimonialScrollControls();
}

// Scroll controls for testimonials
function initTestimonialScrollControls() {
    const container = document.getElementById('testimonials-grid');
    const leftBtn = document.getElementById('testimonial-scroll-left');
    const rightBtn = document.getElementById('testimonial-scroll-right');
    const dots = document.getElementById('testimonial-dots');

    if (!container || !leftBtn || !rightBtn || !dots) return;

    // Check if scrolling is needed (wait for layout to complete)
    setTimeout(() => {
        const needsScroll = container.scrollWidth > container.clientWidth + 5; // 5px tolerance

        // If no scrolling needed, hide all controls
        if (!needsScroll) {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
            dots.style.display = 'none';
            return;
        }

        // Show controls if hidden
        leftBtn.style.display = '';
        rightBtn.style.display = '';
        dots.style.display = '';

        // Update button visibility and active dot
        function updateScrollControls() {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            // Show/hide buttons
            leftBtn.classList.toggle('visible', scrollLeft > 10);
            rightBtn.classList.toggle('visible', scrollLeft < maxScroll - 10);

            // Update active dot
            const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0;
            const currentIndex = Math.round(scrollLeft / (cardWidth + 24)); // 24 = gap
            dots.querySelectorAll('button').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Scroll left
        leftBtn.onclick = () => {
            const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0;
            container.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        };

        // Scroll right
        rightBtn.onclick = () => {
            const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0;
            container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        };

        // Listen to scroll events
        container.addEventListener('scroll', updateScrollControls);

        // Initial update
        updateScrollControls();
    }, 100); // Small delay to ensure layout is complete
}

// Scroll to specific testimonial
function scrollToTestimonial(index) {
    const container = document.getElementById('testimonials-grid');
    const cardWidth = container.querySelector('.testimonial-card')?.offsetWidth || 0;
    container.scrollTo({ left: index * (cardWidth + 24), behavior: 'smooth' });
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
