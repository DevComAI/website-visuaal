#!/bin/bash

# Script to convert PNG/JPG images to WebP format
# Requires: cwebp (install via: brew install webp)

echo "🖼️  Converting images to WebP format..."

# Function to convert a single image
convert_image() {
    local file="$1"
    local webp_file="${file%.*}.webp"

    # Skip if WebP already exists
    if [ -f "$webp_file" ]; then
        echo "⏭️  Skipping $file (WebP exists)"
        return
    fi

    # Convert to WebP with quality 85
    cwebp -q 85 "$file" -o "$webp_file" 2>/dev/null

    if [ $? -eq 0 ]; then
        local original_size=$(wc -c < "$file" | tr -d ' ')
        local webp_size=$(wc -c < "$webp_file" | tr -d ' ')
        local saved=$((original_size - webp_size))
        local percent=$((saved * 100 / original_size))

        echo "✅ Converted: $file → $webp_file (saved ${percent}%)"
    else
        echo "❌ Failed: $file"
    fi
}

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ Error: cwebp not found"
    echo "Install it with: brew install webp"
    exit 1
fi

# Convert all PNG and JPG files in public directory
find public -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read file; do
    convert_image "$file"
done

echo "✨ Conversion complete!"
