# tween

JavaScript Tween Library

## Demo

See [here](http://vivaxy.github.io/tween/demo/).

## Usage

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

## Contributing

- `npm install`
- `npm run build`
