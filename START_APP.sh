#!/bin/bash
# ============================================================
#  Impressionism Studio — One-click starter
#  Double-click this file (or run it in Terminal) to launch
# ============================================================

echo ""
echo "🎨  Starting Impressionism Studio..."
echo ""

# Check Node.js is installed
if ! command -v node &> /dev/null; then
  echo "❌  Node.js is not installed."
  echo ""
  echo "👉  Please go to https://nodejs.org and download the"
  echo "    LTS version, install it, then run this script again."
  echo ""
  read -p "Press Enter to exit..."
  exit 1
fi

echo "✅  Node.js found: $(node --version)"

# Install all dependencies
echo ""
echo "📦  Installing packages (only needed the first time)..."
npm install --silent

# Start both servers at once
echo ""
echo "🚀  Launching the app..."
echo ""
echo "────────────────────────────────────────"
echo "  Open this in your browser:"
echo "  👉  http://localhost:5173"
echo "────────────────────────────────────────"
echo ""
echo "  Press Ctrl+C to stop the app."
echo ""

npm run dev
