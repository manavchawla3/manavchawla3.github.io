/**
 * Resume Renderer
 * Renders resume content using data from manifests
 */

const dataLoader = new DataLoader();
let resumeData = null;

// Render personal info section
function renderPersonal(personal) {
    if (!personal) return;

    document.getElementById('name').textContent = personal.name;
    document.getElementById('title').textContent = personal.title;
    document.getElementById('email').textContent = personal.email;
    document.getElementById('phone').textContent = personal.phone;
    document.getElementById('location').textContent = personal.location;
    document.getElementById('linkedin-link').href = personal.links.linkedin;
    document.getElementById('github-link').href = personal.links.github;
    document.getElementById('summary').textContent = personal.summary;
}

// Render skills section
function renderSkills(skills) {
    if (!skills || !skills.categories) return;

    const container = document.getElementById('skills-list');
    container.innerHTML = '';

    Object.entries(skills.categories).forEach(([category, items]) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <strong>${category}:</strong>
            <span>${items.join(', ')}</span>
        `;
        container.appendChild(skillItem);
    });
}

// Render experience section
function renderExperience(experiences) {
    if (!experiences || experiences.length === 0) return;

    const container = document.getElementById('experience-list');
    container.innerHTML = '';

    experiences.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'experience-item';

        // Create header HTML
        const headerHTML = `
            <div class="job-header">
                <div class="job-title-container">
                    <div class="job-title">${job.role}</div>
                    <div class="company">${job.company}</div>
                </div>
                <div class="job-dates">${job.period.display}</div>
            </div>
        `;

        // Create responsibilities HTML
        const responsibilitiesHTML = job.highlights && job.highlights.length > 0 ? `
            <ul class="responsibilities">
                ${job.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
        ` : '';

        // Create tech stack HTML
        const techStackHTML = job.tags && job.tags.length > 0 ? `
            <div class="tech-stack"><strong>Technology Stack:</strong> ${job.tags.join(', ')}</div>
        ` : '';

        jobElement.innerHTML = headerHTML + responsibilitiesHTML + techStackHTML;
        container.appendChild(jobElement);
    });
}

// Render projects section
function renderProjects(projects) {
    if (!projects || projects.length === 0) return;

    const container = document.getElementById('projects-list');
    container.innerHTML = '';

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';

        const projectHTML = `
            <div class="project-header">
                <strong>${project.title}</strong>
            </div>
            <p>${project.description}</p>
            ${project.features && project.features.length > 0 ? `
                <ul class="project-features">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            ` : ''}
            <div class="project-tags">
                <strong>Technologies:</strong> ${project.tags.join(', ')}
            </div>
        `;

        projectElement.innerHTML = projectHTML;
        container.appendChild(projectElement);
    });
}

// Render education section
function renderEducation(education) {
    if (!education || education.length === 0) return;

    const container = document.getElementById('education-list');
    container.innerHTML = '';

    education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';

        const eduHTML = `
            <div class="education-header">
                <div>
                    <div class="education-degree">${edu.degree}</div>
                    <div class="education-institution">${edu.institution}</div>
                </div>
                <div class="education-dates">${edu.period.display}</div>
            </div>
            ${edu.gpa ? `<div class="education-gpa">GPA: ${edu.gpa}</div>` : ''}
        `;

        eduElement.innerHTML = eduHTML;
        container.appendChild(eduElement);
    });
}

// Initialize resume
async function initializeResume() {
    try {
        // Show loading state
        document.body.classList.add('loading');

        // Load all data
        resumeData = await dataLoader.loadAll();
        console.log('Resume data loaded:', resumeData);

        // Render sections
        if (resumeData.personal) {
            renderPersonal(resumeData.personal);
        }

        if (resumeData.skills) {
            renderSkills(resumeData.skills);
        }

        if (resumeData.experience) {
            renderExperience(resumeData.experience);
        }

        if (resumeData.projects) {
            renderProjects(resumeData.projects);
        }

        if (resumeData.education) {
            renderEducation(resumeData.education);
        }

        // Remove loading state
        document.body.classList.remove('loading');

    } catch (error) {
        console.error('Failed to initialize resume:', error);
        alert('Failed to load resume data. Please check console for errors.');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeResume();
});
