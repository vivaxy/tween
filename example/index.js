/**
 * @since 150315 11:30
 * @author vivaxy
 */

var ele = document.querySelector('.test'),
    topFrom = 90, topTo = 0, leftFrom = 90, leftTo = 0;

var toggleTop = function () {
    var temp = topTo;
    topTo = topFrom;
    topFrom = temp;
    new Tween(ele)
        .animate({
            style: 'top',
            from: topFrom,
            to: topTo,
            duration: 1000,
            value: function (v) {
                return v + '%';
            }
        })
        .on('end', toggleTop)
        .start();

};

var toggleLeft = function () {
    var temp = leftTo;
    leftTo = leftFrom;
    leftFrom = temp;
    new Tween(ele)
        .animate({
            style: 'left',
            from: leftFrom,
            to: leftTo,
            duration: 1357,
            value: function (v) {
                return v + '%';
            }
        })
        .on('end', toggleLeft)
        .start();
};

toggleTop();
toggleLeft();
