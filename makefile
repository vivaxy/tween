./dest/tween.js: ./build/event-emitter.js ./build/tween.js
	cat ./build/event-emitter.js ./build/tween.js > ./dest/tween.js
	rm -rf ./build

./build/tween.js: ./src/tween.js ./build
	./node_modules/.bin/babel ./src/tween.js -o ./build/tween.js --modules umd --module-id Tween
	
./build/event-emitter.js: ./event-emitter/src/event-emitter.js ./build
	./node_modules/.bin/babel ./event-emitter/src/event-emitter.js -o ./build/event-emitter.js --modules umd --module-id EventEmitter

./dest:
	mkdir ./dest

./build:
	mkdir ./build
