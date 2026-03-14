install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

publich: 
	npm publish --dry-run

