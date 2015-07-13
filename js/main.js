(function ($, undefined) {
    "use strict";

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        canvas_w = canvas.width,
        canvas_h = canvas.height,
        i,
        j;

    function renderGrid(gridPixelSize, color) {

        var d_canvas_w = canvas_w / gridPixelSize,
            d_canvas_h = canvas_w / gridPixelSize;
        context.save();
        context.lineWidth = 0.5;
        context.strokeStyle = color;

        // horizontal grid lines
        for (i = 0; i <= canvas_h; i = i + d_canvas_h) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(canvas_w, i);
            context.closePath();
            context.stroke();
        }

        // vertical grid lines
        for (j = 0; j <= canvas_w; j = j + d_canvas_w) {
            context.beginPath();
            context.moveTo(j, 0);
            context.lineTo(j, canvas_h);
            context.closePath();
            context.stroke();
        }
        context.restore();
    }

    function render() {
        context.save();
        renderGrid(30, '#f00');
        context.translate(100, 75);
        context.scale(2, 2);
        //context.rotate(45 * Math.PI / 180);
        context.transform(1, 0, -45 * Math.PI / 180, 45 * Math.PI / 180, 0, 0);
        context.translate(-100, -75);
        context.beginPath();
        context.fillStyle = "#ff0";
        context.strokeStyle = "#ff0";
        context.moveTo(100, 75);
        context.arc(100, 75, 50, 0.25 * Math.PI, 1.75 * Math.PI);
        context.lineTo(100, 75);
        context.stroke();
        context.fill();

        context.beginPath();
        context.fillStyle = "#000";
        context.strokeStyle = "#000";
        context.arc(85, 45, 7, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
        context.restore();
    }
    render();


}(jQuery));