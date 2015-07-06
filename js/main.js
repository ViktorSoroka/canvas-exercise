(function ($, undefined) {

    "use strict";

    var canvas = document.getElementById('canvas'),
        $canvas = $(canvas),
        ctx = canvas.getContext('2d'),
        mainSize = 45,
        img,
        draw = function (ctx) {

            img = new Image();

            img.onload = function () {
                ctx.drawImage(img, 0, 0);
            };

            img.src = "./images/img-01.jpg";

        };

    draw(ctx);

    $canvas.on('click', function (e) {

        img = new Image();

        ctx.drawImage(img, 0, 0);

        //get x, y
        var mouseX = e.pageX - $canvas.offset().left,
            mouseY = e.pageY - $canvas.offset().top,
            size = $('input:radio[name=icon-size]:checked').val(),
            element = $('input:radio[name=icon-type]:checked').val(),
            imgOffset = 0;


        img.onload = function () {
            if (element === '1') { //twitter
                imgOffset = mainSize;
            }
            switch (size) {
            case '0':
                ctx.drawImage(img, imgOffset, 0, mainSize, mainSize, mouseX - 10, mouseY - 10, 20, 20);
                break;
            case '1':
                ctx.drawImage(img, imgOffset, 0, mainSize, mainSize, mouseX - mainSize / 2, mouseY - mainSize / 2, mainSize, mainSize);
                break;
            case '2':
                ctx.drawImage(img, imgOffset, 0, mainSize, mainSize, mouseX - 30, mouseY - 30, 60, 60);
                break;
            default:
                ctx.drawImage(img, imgOffset, 0, mainSize, mainSize, mouseX - mainSize / 2, mouseY - mainSize / 2, mainSize, mainSize);
            }
        };

        img.src = "./images/sprite.png";

    });

})(jQuery);