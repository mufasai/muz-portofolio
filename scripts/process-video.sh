#!/bin/bash

echo "🎬 Processing video..."

INPUT="public/gradient_bg.mp4"
OUTPUT="public/gradient_bg_processed.mp4"

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null
then
    echo "❌ ffmpeg is not installed. Installing via Homebrew..."
    brew install ffmpeg
fi

echo "✂️  Cropping video and removing audio..."

# Crop video (remove watermark) and remove audio
# Adjust crop values based on watermark position:
# - crop=width:height:x:y
# - For bottom watermark: crop=in_w:in_h-100:0:0
# - For top watermark: crop=in_w:in_h-100:0:100
# - For bottom-right: crop=in_w-200:in_h-100:0:0

ffmpeg -i "$INPUT" \
  -vf "crop=in_w:in_h-150:0:0" \
  -an \
  -c:v libx264 \
  -preset fast \
  -crf 23 \
  -y \
  "$OUTPUT"

if [ $? -eq 0 ]; then
    echo "✅ Video processed successfully: $OUTPUT"
    echo "📊 Original size: $(du -h "$INPUT" | cut -f1)"
    echo "📊 Processed size: $(du -h "$OUTPUT" | cut -f1)"
else
    echo "❌ Failed to process video"
    exit 1
fi
