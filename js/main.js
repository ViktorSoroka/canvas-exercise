(function ($, undefined) {
    "use strict";

    function draw() {
        var ctx = document.getElementById('canvas').getContext('2d'),
            img = new Image();

        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };

        img.src = "./images/img-01.jpg";

    }

    draw();

})(jQuery);