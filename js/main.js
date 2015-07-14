(function ($, undefined) {
    "use strict";

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        canvas_w = canvas.width,
        canvas_h = canvas.height,
        up = 90,
        right = 0,
        down = 270,
        left = 180,
        i,
        j;

    function PacMan(size, direction, speed, posX, posY, color) {
        this.startAngle = 0.25;
        this.endAngle = 1.75;
        this.gapClosing = true;
        this.size = size;
        this.direction = direction;
        this.speed = speed;
        this.posX = posX;
        this.posY = posY;
        this.color = color;
    }

    var PacMans = [];

    PacMans.push(new PacMan(50, right, 10, 25, 25, '#f00'));
    PacMans.push(new PacMan(25, up, 5, 250, 25));
    PacMans.push(new PacMan(75, left, 15, 25, 250));

    function renderGrid(gridPixelSize, color) {

        var d_canvas_w = canvas_w / gridPixelSize,
            d_canvas_h = canvas_h / gridPixelSize;
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

    function render(pacman) {
        context.save();
        renderGrid(30, '#f00');
        context.save();
        context.translate(pacman.posX, pacman.posY);
        context.rotate(-pacman.direction * Math.PI / 180);
        //context.scale(2, 2);
        //context.rotate(45 * Math.PI / 180);
        //context.transform(1, 0, -45 * Math.PI / 180, 45 * Math.PI / 180, 0, 0);
        context.translate(-pacman.posX, -pacman.posY);
        context.beginPath();
        context.fillStyle = pacman.color || "#ff0";
        context.strokeStyle = "#ff0";
        context.moveTo(pacman.posX, pacman.posY);
        context.arc(pacman.posX, pacman.posY, pacman.size, pacman.startAngle * Math.PI, pacman.endAngle * Math.PI);
        context.lineTo(pacman.posX, pacman.posY);
        context.stroke();
        context.fill();

        //context.beginPath();
        //context.fillStyle = "#000";
        //context.strokeStyle = "#000";
        //context.arc(posX, posY - 30, 7, 0, 2 * Math.PI);
        //context.stroke();
        //context.fill();
        context.restore();
        context.restore();
    }

    function setAngles(pacman) {
        if (pacman.startAngle <= 0) pacman.gapClosing = true;
        else if (pacman.startAngle > 0.25) pacman.gapClosing = false;

        if (pacman.gapClosing) {
            pacman.startAngle = pacman.startAngle + 0.05;
            pacman.endAngle = pacman.endAngle - 0.05;
        }
        else {
            pacman.startAngle = pacman.startAngle - 0.05;
            pacman.endAngle = pacman.endAngle + 0.05;
        }
    }

    function animationLoop() {
        canvas.width = canvas.width;
        renderGrid(30, "red");

        for (var i = 0; i < PacMans.length; i++) {
            var pacman = PacMans[i];
            render(pacman);
            setAngles(pacman);
            switch (pacman.direction) {
                case up:
                    pacman.posY -= pacman.speed;
                    if (pacman.posY <= 0) pacman.direction = down;
                    break;
                case down:
                    pacman.posY += pacman.speed;
                    if (pacman.posY > canvas_h) pacman.direction = up;
                    break;
                case left:
                    pacman.posX -= pacman.speed;
                    if (pacman.posX < 0) pacman.direction = right;
                    break;
                case right:
                    pacman.posX += pacman.speed;
                    if (pacman.posX > canvas_w) pacman.direction = left;
                    break;
            }
        }

        setTimeout(animationLoop, 33);
    }

    $("#up").click(function () {
        PacMans[0].direction = up;
    });

    $("#down").click(function () {
        PacMans[0].direction = down;
    });
    $("#left").click(function () {
        PacMans[0].direction = left;
    });
    $("#right").click(function () {
        PacMans[0].direction = right;
    });

    animationLoop();

}(jQuery));