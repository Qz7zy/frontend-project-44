install:
	npm ci

brain-games:
	node bin/brain-games.js

publich: 
	npm publish --dry-run