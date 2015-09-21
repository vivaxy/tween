# tween

js tween library

## demo

see [here](http://vivaxy.github.io/tween/demo/)

## USAGE

```js
new Tween(element)
    .animate({
        style: 'top',
        from: 0,
        to: 200,
        value: function (v) {
            return v + 'px';
        },
        duration: 1000
    })
    .on('end', function () {
        console.log('end');
    })
    .on('frame', function (v) {
        console.log('top: ' + v + 'px;');
    })
    .start()
    .pause();
```

## develop

1. npm i

2. `git submodule update --init` (`git submodule update --remote`)

3. make
