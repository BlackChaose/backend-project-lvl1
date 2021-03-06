# Makefile
install:
	npm install @babel/core @babel/cli @babel/node @babel/preset-env
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
tst:
	make publish
	npm link
