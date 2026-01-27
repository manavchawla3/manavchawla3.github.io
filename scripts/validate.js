#!/usr/bin/env node

/**
 * Validation Script
 * Validates all manifest files for correctness and consistency
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

class Validator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.dataPath = path.join(__dirname, '../data');
    }

    log(message, color = 'reset') {
        console.log(`${COLORS[color]}${message}${COLORS.reset}`);
    }

    error(message) {
        this.errors.push(message);
        this.log(`✗ ${message}`, 'red');
    }

    warning(message) {
        this.warnings.push(message);
        this.log(`⚠ ${message}`, 'yellow');
    }

    success(message) {
        this.log(`✓ ${message}`, 'green');
    }

    info(message) {
        this.log(`ℹ ${message}`, 'cyan');
    }

    // Load and parse JSON file
    loadJSON(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(content);
        } catch (error) {
            if (error instanceof SyntaxError) {
                this.error(`Invalid JSON in ${filePath}: ${error.message}`);
            } else {
                this.error(`Failed to read ${filePath}: ${error.message}`);
            }
            return null;
        }
    }

    // Validate personal info
    validatePersonal() {
        this.info('\nValidating personal information...');
        const manifest = this.loadJSON(path.join(this.dataPath, 'personal/manifest.json'));
        const data = this.loadJSON(path.join(this.dataPath, 'personal/info.json'));

        if (!manifest || !data) return;

        // Check required fields
        const required = ['name', 'title', 'email', 'phone', 'location', 'summary', 'links', 'tagline'];
        required.forEach(field => {
            if (!data[field]) {
                this.error(`Missing required field in personal/info.json: ${field}`);
            }
        });

        // Validate links
        if (data.links) {
            const requiredLinks = ['github', 'linkedin', 'website', 'resume'];
            requiredLinks.forEach(link => {
                if (!data.links[link]) {
                    this.warning(`Missing link in personal/info.json: ${link}`);
                }
            });

            // Check URL format
            Object.entries(data.links).forEach(([key, url]) => {
                if (key !== 'resume' && url && !url.match(/^https?:\/\//)) {
                    this.warning(`Invalid URL format for ${key}: ${url}`);
                }
            });
        }

        // Validate email format
        if (data.email && !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            this.error(`Invalid email format: ${data.email}`);
        }

        this.success('Personal information validated');
    }

    // Validate experience entries
    validateExperience() {
        this.info('\nValidating experience entries...');
        const manifest = this.loadJSON(path.join(this.dataPath, 'experience/manifest.json'));

        if (!manifest || !manifest.files) {
            this.error('Missing or invalid experience manifest');
            return;
        }

        const required = ['id', 'company', 'role', 'period', 'tags', 'highlights', 'order', 'featured'];
        const experiences = [];

        manifest.files.forEach(file => {
            const data = this.loadJSON(path.join(this.dataPath, 'experience', file));
            if (!data) return;

            experiences.push(data);

            // Check required fields
            required.forEach(field => {
                if (data[field] === undefined) {
                    this.error(`Missing required field in experience/${file}: ${field}`);
                }
            });

            // Validate period structure
            if (data.period) {
                if (!data.period.start || !data.period.display) {
                    this.error(`Invalid period structure in experience/${file}`);
                }
                // Check date format (YYYY-MM)
                if (data.period.start && !data.period.start.match(/^\d{4}-\d{2}$/)) {
                    this.warning(`Invalid start date format in experience/${file}: ${data.period.start}`);
                }
                if (data.period.end && data.period.end !== 'present' && !data.period.end.match(/^\d{4}-\d{2}$/)) {
                    this.warning(`Invalid end date format in experience/${file}: ${data.period.end}`);
                }
            }

            // Validate arrays
            if (!Array.isArray(data.tags) || data.tags.length === 0) {
                this.warning(`No tags defined in experience/${file}`);
            }
            if (!Array.isArray(data.highlights) || data.highlights.length === 0) {
                this.warning(`No highlights defined in experience/${file}`);
            }

            // Check for duplicate IDs
            const duplicates = experiences.filter(e => e.id === data.id);
            if (duplicates.length > 1) {
                this.error(`Duplicate experience ID: ${data.id}`);
            }
        });

        // Check order values
        const orders = experiences.map(e => e.order);
        if (orders.length !== new Set(orders).size) {
            this.warning('Duplicate order values in experience entries');
        }

        this.success('Experience entries validated');
    }

    // Validate projects
    validateProjects() {
        this.info('\nValidating projects...');
        const manifest = this.loadJSON(path.join(this.dataPath, 'projects/manifest.json'));

        if (!manifest || !manifest.files) {
            this.error('Missing or invalid projects manifest');
            return;
        }

        const required = ['id', 'title', 'description', 'tags', 'order', 'featured'];
        const projects = [];

        manifest.files.forEach(file => {
            const data = this.loadJSON(path.join(this.dataPath, 'projects', file));
            if (!data) return;

            projects.push(data);

            // Check required fields
            required.forEach(field => {
                if (data[field] === undefined) {
                    this.error(`Missing required field in projects/${file}: ${field}`);
                }
            });

            // Validate arrays
            if (!Array.isArray(data.tags) || data.tags.length === 0) {
                this.warning(`No tags defined in projects/${file}`);
            }

            // Check description length
            if (data.description && data.description.length < 20) {
                this.warning(`Short description in projects/${file}`);
            }

            // Check for duplicate IDs
            const duplicates = projects.filter(p => p.id === data.id);
            if (duplicates.length > 1) {
                this.error(`Duplicate project ID: ${data.id}`);
            }
        });

        this.success('Projects validated');
    }

    // Validate education
    validateEducation() {
        this.info('\nValidating education entries...');
        const manifest = this.loadJSON(path.join(this.dataPath, 'education/manifest.json'));

        if (!manifest || !manifest.files) {
            this.error('Missing or invalid education manifest');
            return;
        }

        const required = ['id', 'degree', 'institution', 'period', 'order'];

        manifest.files.forEach(file => {
            const data = this.loadJSON(path.join(this.dataPath, 'education', file));
            if (!data) return;

            // Check required fields
            required.forEach(field => {
                if (!data[field]) {
                    this.error(`Missing required field in education/${file}: ${field}`);
                }
            });

            // Validate period structure
            if (data.period && (!data.period.start || !data.period.display)) {
                this.error(`Invalid period structure in education/${file}`);
            }
        });

        this.success('Education entries validated');
    }

    // Validate skills
    validateSkills() {
        this.info('\nValidating skills...');
        const manifest = this.loadJSON(path.join(this.dataPath, 'skills/manifest.json'));
        const data = this.loadJSON(path.join(this.dataPath, 'skills/categories.json'));

        if (!manifest || !data) return;

        if (!data.categories || typeof data.categories !== 'object') {
            this.error('Missing or invalid categories in skills/categories.json');
            return;
        }

        // Check each category
        Object.entries(data.categories).forEach(([category, skills]) => {
            if (!Array.isArray(skills) || skills.length === 0) {
                this.warning(`Empty or invalid skills array for category: ${category}`);
            }
        });

        this.success('Skills validated');
    }

    // Validate testimonials
    validateTestimonials() {
        this.info('\nValidating testimonials...');
        const manifest = this.loadJSON(path.join(this.dataPath, 'testimonials/manifest.json'));
        const data = this.loadJSON(path.join(this.dataPath, 'testimonials/list.json'));

        if (!manifest || !data) return;

        if (!data.testimonials || !Array.isArray(data.testimonials)) {
            this.error('Missing or invalid testimonials array');
            return;
        }

        const required = ['id', 'name', 'title', 'company', 'quote', 'order', 'featured'];

        data.testimonials.forEach((testimonial, index) => {
            required.forEach(field => {
                if (testimonial[field] === undefined) {
                    this.error(`Missing required field in testimonial ${index}: ${field}`);
                }
            });

            // Check quote length
            if (testimonial.quote && testimonial.quote.length < 20) {
                this.warning(`Short quote in testimonial ${index}`);
            }
        });

        this.success('Testimonials validated');
    }

    // Validate all manifests have correct structure
    validateManifests() {
        this.info('\nValidating section manifests...');
        const sections = ['personal', 'experience', 'projects', 'education', 'skills', 'testimonials'];

        sections.forEach(section => {
            const manifestPath = path.join(this.dataPath, section, 'manifest.json');
            const manifest = this.loadJSON(manifestPath);

            if (!manifest) return;

            const required = ['section', 'title', 'order'];
            required.forEach(field => {
                if (!manifest[field]) {
                    this.error(`Missing required field in ${section}/manifest.json: ${field}`);
                }
            });

            if (manifest.section !== section) {
                this.error(`Section mismatch in ${section}/manifest.json: expected "${section}", got "${manifest.section}"`);
            }
        });

        this.success('Section manifests validated');
    }

    // Run all validations
    async validate() {
        this.log('\n🔍 Starting validation...\n', 'blue');

        this.validateManifests();
        this.validatePersonal();
        this.validateExperience();
        this.validateProjects();
        this.validateEducation();
        this.validateSkills();
        this.validateTestimonials();

        // Summary
        this.log('\n' + '='.repeat(50), 'cyan');
        this.log('Validation Summary', 'cyan');
        this.log('='.repeat(50), 'cyan');

        if (this.errors.length === 0 && this.warnings.length === 0) {
            this.log('\n✓ All validations passed!', 'green');
            return true;
        }

        if (this.errors.length > 0) {
            this.log(`\n✗ Found ${this.errors.length} error(s)`, 'red');
        }

        if (this.warnings.length > 0) {
            this.log(`⚠ Found ${this.warnings.length} warning(s)`, 'yellow');
        }

        return this.errors.length === 0;
    }
}

// Run validation
if (require.main === module) {
    const validator = new Validator();
    validator.validate().then(success => {
        process.exit(success ? 0 : 1);
    });
}

module.exports = Validator;
