/**
 * @since 150315 11:30
 * @author vivaxy
 */

var ele = document.querySelector('.test'),
    from = 90, to = 0;

var toggleStyle = function () {
    var temp = to;
    to = from;
    from = temp;
    new Tween(ele)
        .animate({
            style: 'top',
            from: from,
            to: to,
            duration: 2000,
            value: function (v) {
                return v + '%';
            }
        })
        .on('frame', function (v) {
            console.log(v);
        })
        .on('end', toggleStyle)
        .start();
    new Tween(ele)
        .animate({
            style: 'left',
            from: from,
            to: to,
            duration: 2000,
            value: function (v) {
                return v + '%';
            }
        })
        .start();
};

toggleStyle();
