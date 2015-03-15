# tween

js tween library

### example

[here](./example)

### USAGE

```js
new Tween(element)
    .animate({
        style: 'top',
        from: 0,
        to: 200
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
    .start();
```