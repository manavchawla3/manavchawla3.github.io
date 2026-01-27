# Quick Reference Guide

## Common Commands

### Validate content
```bash
npm run validate
```

### Validate and publish to GitHub
```bash
npm run refresh -- -p -m "Your commit message here"
```

## Quick Workflows

### Adding New Experience
1. Create `data/experience/newcompany.json`
2. Update `data/experience/manifest.json` files array
3. Update `assets/js/data-loader.js` loadExperience() method
4. Run: `npm run refresh -- -p -m "Add experience at NewCompany"`

### Updating Personal Info
1. Edit `data/personal/info.json`
2. Run: `npm run refresh -- -p -m "Update personal information"`

### Adding Testimonial
1. Edit `data/testimonials/list.json`
2. Run: `npm run refresh -- -p -m "Add testimonial from Person Name"`

## Git Hook Behavior

The pre-commit hook automatically validates:
- JSON syntax
- Required fields
- Data types
- Date formats
- Email/URL formats
- Duplicate IDs

If validation fails, commit is blocked. Fix errors and try again.

## Emergency Bypass
```bash
# Only in emergencies - skips validation
git commit --no-verify
```

## URLs
- Portfolio: https://manavchawla3.github.io
- Resume: https://manavchawla3.github.io/resume.html
