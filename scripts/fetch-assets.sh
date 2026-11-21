#!/usr/bin/env bash
# Downloads the original media from the live Squarespace site into this repo.
set -euo pipefail
cd "$(dirname "$0")/.."
CDN="https://images.squarespace-cdn.com/content/v1/63f48446a407756fef8b92f7"
dl() { curl -fsSL "$1" -o "$2" && echo "  ✓ $2"; }
mkdir -p assets/img s
dl "$CDN/a460051f-dde7-4434-aaaa-e2641e96e634/Untitled-1-01.png?format=1500w" assets/img/logo.png
dl "$CDN/4d7cf1ea-729f-40dc-88ed-af294ff29c46/20220505_154453.jpg?format=2500w" assets/img/hero.jpg
dl "$CDN/2b348ad2-bf9f-4fcc-b6ea-50daf16a80bd/20220505_154310.jpg?format=2500w" assets/img/gallery-1.jpg
dl "$CDN/ba4fa277-0efe-41fe-a61e-bf700999ae9a/20220504_110537.jpg?format=2500w" assets/img/gallery-2.jpg
dl "$CDN/10834afe-4ced-4f96-bdd9-dcaf1a10b59e/20220505_154243.jpg?format=2500w" assets/img/contact.jpg
dl "https://www.goldensheafbread.com/s/Brochure_123013.pdf" s/Brochure_123013.pdf
dl "https://assets.squarespace.com/universal/default-favicon.ico" assets/img/favicon.ico || true
