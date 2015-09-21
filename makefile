./demo/index.js: ./demo/index.jsx
	./node_modules/.bin/browserify ./demo/index.jsx -t babelify --outfile ./demo/index.js
