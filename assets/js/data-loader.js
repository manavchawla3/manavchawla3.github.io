/**
 * Data Loader Utility
 * Loads and manages all data manifests for both portfolio and resume
 */

class DataLoader {
    constructor() {
        this.cache = {};
        this.basePath = 'data';
    }

    /**
     * Load a single JSON file
     */
    async loadJSON(path) {
        if (this.cache[path]) {
            return this.cache[path];
        }

        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to load ${path}: ${response.status}`);
            }
            const data = await response.json();
            this.cache[path] = data;
            return data;
        } catch (error) {
            console.error(`Error loading ${path}:`, error);
            return null;
        }
    }

    /**
     * Load all files from a directory
     */
    async loadDirectory(directory, files) {
        const promises = files.map(file =>
            this.loadJSON(`${this.basePath}/${directory}/${file}`)
        );
        const results = await Promise.all(promises);
        return results.filter(item => item !== null);
    }

    /**
     * Load personal information
     */
    async loadPersonal() {
        return await this.loadJSON(`${this.basePath}/personal/info.json`);
    }

    /**
     * Load all experience entries
     */
    async loadExperience() {
        const files = ['grab.json', 'zetwerk.json', 'dockabl.json'];
        const experiences = await this.loadDirectory('experience', files);
        return experiences.sort((a, b) => a.order - b.order);
    }

    /**
     * Load all projects
     */
    async loadProjects() {
        const files = ['owneymail.json', 'buildseeker.json'];
        const projects = await this.loadDirectory('projects', files);
        return projects.sort((a, b) => a.order - b.order);
    }

    /**
     * Load all education entries
     */
    async loadEducation() {
        const files = ['btech.json', 'higher-secondary.json'];
        const education = await this.loadDirectory('education', files);
        return education.sort((a, b) => a.order - b.order);
    }

    /**
     * Load skills
     */
    async loadSkills() {
        return await this.loadJSON(`${this.basePath}/skills/categories.json`);
    }

    /**
     * Load testimonials (portfolio only)
     */
    async loadTestimonials() {
        const data = await this.loadJSON(`${this.basePath}/testimonials/list.json`);
        if (data && data.testimonials) {
            return data.testimonials
                .filter(t => t.featured)
                .sort((a, b) => a.order - b.order);
        }
        return [];
    }

    /**
     * Load all data at once
     */
    async loadAll() {
        try {
            const [personal, experience, projects, education, skills, testimonials] = await Promise.all([
                this.loadPersonal(),
                this.loadExperience(),
                this.loadProjects(),
                this.loadEducation(),
                this.loadSkills(),
                this.loadTestimonials()
            ]);

            return {
                personal,
                experience,
                projects,
                education,
                skills,
                testimonials
            };
        } catch (error) {
            console.error('Error loading all data:', error);
            throw error;
        }
    }

    /**
     * Clear cache
     */
    clearCache() {
        this.cache = {};
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataLoader;
}
