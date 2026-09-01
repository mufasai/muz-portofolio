#!/bin/bash

echo "🚀 Starting portfolio PDF generation..."

# Start dev server in background
echo "📱 Starting dev server..."
npm run dev &
DEV_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to start..."
sleep 8

# Generate PDF
echo "📄 Generating PDF..."
node scripts/generate-pdf.js

# Kill dev server
echo "🛑 Stopping dev server..."
kill $DEV_PID

echo "✅ Done! Check portfolio-musyafa.pdf in the root folder"
