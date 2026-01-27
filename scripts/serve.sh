#!/bin/bash

# Start local development server
# Tries ports 8000-8010 until it finds an available one

COLORS_GREEN='\033[0;32m'
COLORS_RED='\033[0;31m'
COLORS_CYAN='\033[0;36m'
COLORS_RESET='\033[0m'

print_success() {
    echo -e "${COLORS_GREEN}$1${COLORS_RESET}"
}

print_error() {
    echo -e "${COLORS_RED}$1${COLORS_RESET}"
}

print_info() {
    echo -e "${COLORS_CYAN}$1${COLORS_RESET}"
}

# Function to check if port is available
is_port_available() {
    ! lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>&1
}

# Try to find an available port
PORT=8000
MAX_PORT=8010

while [ $PORT -le $MAX_PORT ]; do
    if is_port_available $PORT; then
        print_success "✓ Starting server on port $PORT..."
        print_info "\n📂 Serving files from: $(pwd)"
        print_info "🌐 Portfolio: http://localhost:$PORT"
        print_info "📄 Resume: http://localhost:$PORT/resume.html"
        print_info "\n⚡ Press Ctrl+C to stop the server\n"

        # Start the server
        python3 -m http.server $PORT
        exit 0
    fi
    PORT=$((PORT + 1))
done

print_error "✗ Error: No available ports found between 8000-8010"
print_info "Try closing other applications or servers and run again."
exit 1
