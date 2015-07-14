(function ($, undefined) {
    "use strict";

    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();

    var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

    for (var i = 0, len = colors.length; i < len; i++) {
        (function (i) {

            var box = new Konva.Rect({
                    x: i * 30 + 50,
                    y: i * 18 + 40,
                    fill: colors[i],
                    stroke: "black",
                    strokeWidth: 4,
                    draggable: true,
                    width: 100,
                    height: 50
                }),
                color;

            box.on("dragstart", function () {
                box.moveToTop();
                layer.draw();
            });

            box.on("dragmove", function () {
                document.body.style.cursor = "pointer";
            });
            /*
             * dblclick to remove box for desktop app
             * and dbltap to remove box for mobile app
             */
            box.on("dblclick dbltap", function () {
                box.destroy();
                layer.draw();
            });

            box.on("mouseover", function () {
                color = this.attrs.fill;
                console.log(this);
                this.setFill('red');
                layer.draw();
            });
            box.on("mouseout", function () {
                this.setFill(color);
                layer.draw();
            });
            layer.add(box);
        }(i));
    }

    // add the layer to the stage
    stage.add(layer);
}(jQuery));