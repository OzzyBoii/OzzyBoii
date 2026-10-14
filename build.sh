#!/bin/sh
# Joins src/parts into dist/ozzy-os.html, the file published as the Claude artifact.
set -e
cd "$(dirname "$0")"
mkdir -p dist
python3 -c "import json; print('\n'.join('src/parts/' + n for n in json.load(open('src/parts/parts.json'))))" | xargs cat > dist/ozzy-os.html
