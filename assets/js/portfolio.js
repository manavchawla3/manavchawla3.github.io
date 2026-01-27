// Data from resume - keeping content synchronized
const data = {
    personal: {
        name: "Manav Chawla",
        role: "Senior Software Engineer, Backend",
        email: "manavchawla3@gmail.com",
        phone: "919711308935",
        website: "https://manavchawla3.github.io",
        linkedin: "https://www.linkedin.com/in/manav-chawla-4955489b/",
        github: "https://github.com/manavchawla3"
    },
    summary: "Senior Backend Engineer with 9+ years building and scaling distributed systems for fintech and e-commerce. Deep expertise in Go (Golang), Temporal.io workflow orchestration, and GitOps on AWS (Terraform, CI/CD). Proven record of cutting cloud spend by 40% and delivering 99.99% reliable, mission-critical platforms through RFC-driven design, high-throughput APIs, and event-driven architectures. Trusted technical leader who ships secure, scalable services and mentors teams.",
    experience: [
        {
            company: "Grab",
            location: "Bengaluru",
            role: "Senior Software Engineer, Backend",
            period: "November 2020 – Present",
            tags: ["Golang", "Terraform", "Temporal", "AWS", "Kubernetes"],
            highlights: [
                "Architected and implemented a centralized Graph Orchestration Platform using Temporal.io",
                "Improved reliability of mission-critical distributed workflows achieving 99.99% uptime",
                "Designed and delivered a scalable Configuration Management Service with GitOps",
                "Re-engineered high-throughput deductions logic, cutting batch processing runtime by 50%+",
                "Co-led the end-to-end launch of the in-house PCA ID Taralite loan product"
            ]
        },
        {
            company: "Zetwerk",
            location: "Bengaluru",
            role: "Senior Software Engineer, Fullstack",
            period: "July 2019 – November 2020",
            tags: ["Node.js", "Terraform", "MongoDB", "React.js", "AWS"],
            highlights: [
                "Spearheaded the re-architecture of AWS infrastructure using Terraform, achieving 40% cost reduction",
                "Designed and implemented a reusable boilerplate in Node.js and Express.js",
                "Led the end-to-end design and development of key microservices",
                "Promoted to Senior Engineer within nine months for consistently exceeding project goals"
            ]
        },
        {
            company: "Dockabl",
            location: "",
            role: "Software Developer",
            period: "July 2017 – April 2019",
            tags: ["Laravel", "PHP", "Node.js", "AngularJS", "PostgreSQL"],
            highlights: [
                "Transitioned from frontend to full-stack development within 6–7 months",
                "Delivered a complete feature module for Flipkart in 15 days",
                "Played a key role in establishing the infrastructure from scratch",
                "Contributed to the first lines of code for Dockabl's employee performance management platform"
            ]
        }
    ],
    projects: [
        {
            title: "OwneyMail",
            tech: "NodeJs • ReactJs • Docker • AWS SQS/SNS",
            description: "High-throughput, multi-tenant email marketing engine built with Go and queue-backed delivery for reliable, low-latency sends",
            features: [
                "Dynamic template rendering, audience segmentation, and rate-limited dispatch with retries, DLQs, and idempotent APIs",
                "Event pipeline for bounces, complaints, opens/clicks, and suppression lists with GDPR-compliant unsubscribe flows",
                "Infrastructure-as-Code (Terraform), containerized deployment, and observability via Prometheus/Grafana"
            ]
        },
        {
            title: "BuildSeeker",
            tech: "Laravel • PostgreSQL • Redis • GraphQL • Next.js",
            description: "Real-time aggregator that normalizes PC component SKUs, prices, and stock across global vendors with currency/region handling",
            features: [
                "Resilient crawler pipeline with rotating proxies, exponential backoff, and vendor-specific parsers",
                "User features: watchlists, price-drop alerts, vendor scorecards, and search/filtering over a normalized catalog",
                "Stack: Go/Node.js, PostgreSQL/Redis, GraphQL API, Next.js, queues on AWS, and Terraform-based provisioning"
            ]
        }
    ],
    skills: {
        "Core Stack": ["Golang", "Node.js", "JavaScript (ES6+)", "React.js"],
        "Infrastructure": ["GitLab CI/CD", "Docker", "Terraform", "Temporal"],
        "Data": ["MySQL", "PostgreSQL", "GraphQL"],
        "Cloud": ["AWS", "Kubernetes"]
    }
};

// Typing animation
function typeText() {
    const fullText = "Building scalable systems_";
    const element = document.getElementById('typed-text');
    let index = 0;

    const interval = setInterval(() => {
        element.textContent = fullText.slice(0, index);
        index++;
        if (index > fullText.length) clearInterval(interval);
    }, 100);
}

// Render experience
function renderExperience() {
    const container = document.getElementById('experience-list');

    data.experience.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'relative pl-8 group';
        jobElement.innerHTML = `
            <div class="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors border border-slate-950"></div>

            <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 class="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    ${job.company}
                </h3>
                <span class="font-mono text-sm text-slate-500">${job.period}</span>
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

// Render skills
function renderSkills() {
    const container = document.getElementById('skills-grid');

    Object.entries(data.skills).forEach(([category, items]) => {
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

// Render projects
function renderProjects() {
    const container = document.getElementById('projects-grid');

    data.projects.forEach(project => {
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
                ${project.tech}
            </div>
        `;
        container.appendChild(projectElement);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    renderExperience();
    renderSkills();
    renderProjects();

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
