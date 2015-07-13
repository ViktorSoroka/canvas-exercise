(function ($, undefined) {
    "use strict";

        var canvas = document.getElementById("canvas"),
            context = canvas.getContext("2d"),
            canvas_w = canvas.width,
            canvas_h = canvas.height;

        function renderGrid(gridPixelSize, color) {

            var d_canvas_w = canvas_w / gridPixelSize,
                d_canvas_h = canvas_w / gridPixelSize;
            context.save();
            context.lineWidth = 0.5;
            context.strokeStyle = color;

            // horizontal grid lines
            for (var i = 0; i <= canvas_h; i = i + d_canvas_h) {
                context.beginPath();
                context.moveTo(0, i);
                context.lineTo(canvas_w, i);
                context.closePath();
                context.stroke();
            }

            // vertical grid lines
            for(var j = 0; j <= canvas_w; j = j + d_canvas_w) {
                context.beginPath();
                context.moveTo(j, 0);
                context.lineTo(j, canvas_h);
                context.closePath();
                context.stroke();
            }

            context.restore();
        }

    function renderContent() {
            //context.fillStyle = "rgba(255, 255, 255, 0.5)";
            //context.fillRect(0, 0, canvas.width, canvas.height);
            //context.lineCap = "round";
            //context.lineJoin = "round";
            //var text = "Hello, Canvas!";
            //context.fillStyle = "#FF0000";
            //context.strokeStyle = "#0000FF";
            //context.font = "36px sans-serif";
            //context.strokeText(text, 10, 50);
            //context.fillText(text, 10, 50);
            context.lineWidth = 5;
            context.lineCap = "round";
            context.lineJoin = "round";
            context.moveTo(50, 50);
            context.bezierCurveTo(60, 10, 100, 50, 150, 150);
            //context.lineTo(150, 150);
            context.lineTo(150, 50);
            context.lineTo(50, 50);
            context.stroke();
            context.fillStyle = "#F00";
            context.fill();

        context.lineWidth = 1;
        context.strokeText("Hello, Canvas!", 50, 150);
         }
    renderContent();
        //renderGrid(10, "red");


})(jQuery);