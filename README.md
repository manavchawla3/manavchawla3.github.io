# Portfolio & Resume System

A configurable portfolio and resume system with manifest-based data architecture. Both sites share the same data source, making it easy to maintain consistency.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ (for validation scripts)
- Git
- Python 3 (for local server)

### Setup
```bash
# Install git hooks
npm run setup-hooks

# Start local development server
npm run serve
# Visit http://localhost:8000
```

## 📁 Project Structure

```
.
├── index.html              # Portfolio landing page (terminal theme)
├── resume.html             # Professional resume with PDF download
├── assets/
│   ├── css/
│   │   └── portfolio.css
│   └── js/
│       ├── data-loader.js  # Central data loading utility
│       ├── portfolio.js    # Portfolio renderer
│       └── resume.js       # Resume renderer
├── data/                   # All content manifests
│   ├── personal/
│   │   ├── manifest.json
│   │   └── info.json
│   ├── experience/
│   │   ├── manifest.json
│   │   ├── grab.json
│   │   ├── zetwerk.json
│   │   └── dockabl.json
│   ├── projects/
│   │   ├── manifest.json
│   │   ├── owneymail.json
│   │   └── buildseeker.json
│   ├── education/
│   │   ├── manifest.json
│   │   ├── btech.json
│   │   └── higher-secondary.json
│   ├── skills/
│   │   ├── manifest.json
│   │   └── categories.json
│   └── testimonials/
│       ├── manifest.json
│       └── list.json
└── scripts/
    ├── validate.js         # Validation script
    └── refresh.sh          # Refresh & publish script
```

## 🛠️ Commands

### `/validate` - Validate Content
Validates all manifest files for correctness and consistency.

```bash
npm run validate
```

**What it checks:**
- ✓ JSON syntax validity
- ✓ Required fields presence
- ✓ Data type correctness
- ✓ Date format validation
- ✓ Duplicate ID detection
- ✓ URL format validation
- ✓ Email format validation
- ✓ Manifest consistency

### `/refresh` - Refresh & Publish
Validates content and optionally commits and publishes to GitHub.

```bash
# Validate only
npm run refresh

# Validate and commit
npm run refresh -- -c -m "Update experience"

# Validate, commit, and push to GitHub
npm run refresh -- -p -m "Add new project"
```

**Options:**
- `-c, --commit` - Commit changes after validation
- `-p, --push` - Commit and push changes to GitHub
- `-m, --message <msg>` - Commit message (required with --commit or --push)
- `-h, --help` - Show help message

**Examples:**
```bash
# Just validate
npm run refresh

# Commit changes
npm run refresh -- -c -m "Update skills section"

# Publish to GitHub
npm run refresh -- -p -m "Add testimonial from Jane"
```

### Git Pre-Commit Hook
Automatically validates manifests before every commit. If validation fails, the commit is blocked.

```bash
# To bypass validation (not recommended)
git commit --no-verify
```

## 📝 Adding Content

### Add New Experience
1. Create new JSON file in `data/experience/` (e.g., `newcompany.json`)
   ```json
   {
     "id": "newcompany",
     "company": "Company Name",
     "role": "Your Role",
     "period": {
       "start": "2024-01",
       "end": "present",
       "display": "January 2024 – Present"
     },
     "tags": ["Tech1", "Tech2"],
     "highlights": [
       "Achievement 1",
       "Achievement 2"
     ],
     "order": 1,
     "featured": true
   }
   ```

2. Update `data/experience/manifest.json` files array:
   ```json
   {
     "files": ["grab.json", "zetwerk.json", "dockabl.json", "newcompany.json"]
   }
   ```

3. Update `assets/js/data-loader.js` loadExperience() method:
   ```javascript
   async loadExperience() {
       const files = ['grab.json', 'zetwerk.json', 'dockabl.json', 'newcompany.json'];
       // ...
   }
   ```

4. Validate and publish:
   ```bash
   npm run refresh -- -p -m "Add new experience at Company Name"
   ```

### Add New Project
1. Create new JSON file in `data/projects/` (e.g., `myproject.json`)
   ```json
   {
     "id": "myproject",
     "title": "Project Name",
     "description": "Project description",
     "tags": ["Tech1", "Tech2"],
     "features": [
       "Feature 1",
       "Feature 2"
     ],
     "link": "",
     "github": "",
     "order": 3,
     "featured": true
   }
   ```

2. Update manifest and data-loader.js similarly to experience

3. Validate and publish

### Update Personal Info
Edit `data/personal/info.json` and run:
```bash
npm run refresh -- -p -m "Update personal information"
```

### Add Testimonial
Edit `data/testimonials/list.json`:
```json
{
  "testimonials": [
    {
      "id": "testimonial-3",
      "name": "Person Name",
      "title": "Their Title",
      "company": "Their Company",
      "avatar": "",
      "quote": "The testimonial quote here...",
      "order": 3,
      "featured": true
    }
  ]
}
```

Then publish:
```bash
npm run refresh -- -p -m "Add testimonial from Person Name"
```

## 🔧 System Architecture

### Data Flow
1. User opens index.html or resume.html
2. DataLoader class instantiated
3. Data loaded from JSON manifests
4. Renderer functions populate DOM dynamically
5. CSS styles applied for display/print

### Validation Flow
1. Pre-commit hook triggers on `git commit`
2. Validation script checks all manifests
3. If validation passes, commit proceeds
4. If validation fails, commit is blocked

### Publishing Flow
1. Run `/refresh` with `-p` flag
2. Validates all manifests
3. Stages all changes
4. Creates commit with message
5. Pushes to GitHub master branch
6. GitHub Pages automatically deploys

## 🌐 Live Sites

- **Portfolio**: https://manavchawla3.github.io
- **Resume**: https://manavchawla3.github.io/resume.html

## 🐛 Troubleshooting

### Validation Errors
If you encounter validation errors:

1. Read the error messages carefully
2. Fix the issues in the relevant JSON files
3. Run `npm run validate` to verify fixes
4. If stuck, check existing files for reference

### Commit Blocked
If your commit is blocked by the pre-commit hook:

1. Run `npm run validate` to see errors
2. Fix the validation errors
3. Try committing again
4. If you need to bypass (emergency only): `git commit --no-verify`

### Refresh Command Not Working
Make sure scripts are executable:
```bash
chmod +x scripts/refresh.sh scripts/validate.js
chmod +x .git/hooks/pre-commit
```

## 📚 Additional Documentation

See [IMPLEMENTATION.md](IMPLEMENTATION.md) for detailed implementation notes.

## 📄 License

MIT License - feel free to use this for your own portfolio!
