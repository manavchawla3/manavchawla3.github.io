#!/bin/bash

# Refresh and Publish Script
# Validates content and optionally commits and publishes to GitHub

set -e

COLORS_RED='\033[0;31m'
COLORS_GREEN='\033[0;32m'
COLORS_YELLOW='\033[1;33m'
COLORS_BLUE='\033[0;34m'
COLORS_CYAN='\033[0;36m'
COLORS_RESET='\033[0m'

print_header() {
    echo -e "${COLORS_CYAN}"
    echo "=========================================="
    echo "$1"
    echo "=========================================="
    echo -e "${COLORS_RESET}"
}

print_success() {
    echo -e "${COLORS_GREEN}✓ $1${COLORS_RESET}"
}

print_error() {
    echo -e "${COLORS_RED}✗ $1${COLORS_RESET}"
}

print_info() {
    echo -e "${COLORS_BLUE}ℹ $1${COLORS_RESET}"
}

print_warning() {
    echo -e "${COLORS_YELLOW}⚠ $1${COLORS_RESET}"
}

# Parse arguments
COMMIT=false
PUSH=false
MESSAGE=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --commit|-c)
            COMMIT=true
            shift
            ;;
        --push|-p)
            PUSH=true
            COMMIT=true
            shift
            ;;
        --message|-m)
            MESSAGE="$2"
            shift 2
            ;;
        --help|-h)
            echo "Usage: npm run refresh [options]"
            echo ""
            echo "Options:"
            echo "  -c, --commit          Commit changes after validation"
            echo "  -p, --push            Commit and push changes to GitHub"
            echo "  -m, --message <msg>   Commit message (required with --commit or --push)"
            echo "  -h, --help            Show this help message"
            echo ""
            echo "Examples:"
            echo "  npm run refresh                    # Validate only"
            echo "  npm run refresh -- -c -m \"Update experience\"  # Validate and commit"
            echo "  npm run refresh -- -p -m \"Add new project\"    # Validate, commit, and push"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
done

print_header "🔄 Refresh & Publish"

# Step 1: Validate
print_info "Step 1: Validating manifests..."
if node scripts/validate.js; then
    print_success "Validation passed"
else
    print_error "Validation failed"
    exit 1
fi

# Step 2: Check git status
print_info "\nStep 2: Checking for changes..."
if git diff --quiet && git diff --cached --quiet; then
    print_success "No changes detected"
    if [ "$COMMIT" = true ]; then
        print_warning "Nothing to commit"
        exit 0
    fi
else
    print_success "Changes detected"
    echo ""
    git status --short
fi

# Step 3: Commit (if requested)
if [ "$COMMIT" = true ]; then
    if [ -z "$MESSAGE" ]; then
        print_error "Commit message required. Use -m or --message"
        exit 1
    fi

    print_info "\nStep 3: Committing changes..."

    # Stage all changes
    git add -A

    # Create commit
    git commit -m "$MESSAGE" -m "Co-Authored-By: Claude <noreply@anthropic.com>"

    print_success "Changes committed"
fi

# Step 4: Push (if requested)
if [ "$PUSH" = true ]; then
    print_info "\nStep 4: Pushing to GitHub..."

    BRANCH=$(git rev-parse --abbrev-ref HEAD)

    if git push origin "$BRANCH"; then
        print_success "Pushed to GitHub ($BRANCH)"
        echo ""
        print_info "Your portfolio is now live at:"
        echo -e "  ${COLORS_CYAN}https://manavchawla3.github.io${COLORS_RESET}"
        echo -e "  ${COLORS_CYAN}https://manavchawla3.github.io/resume.html${COLORS_RESET}"
    else
        print_error "Failed to push to GitHub"
        exit 1
    fi
fi

echo ""
print_header "✓ Refresh Complete"

if [ "$COMMIT" = false ] && [ "$PUSH" = false ]; then
    echo ""
    print_info "To commit and push changes, run:"
    echo "  npm run refresh -- -p -m \"Your commit message\""
fi
