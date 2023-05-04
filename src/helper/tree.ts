/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-inner-declarations */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function initOciliator() {

    let ctx,
        target = {},
        tendrils = [],
        settings = {};

    settings.debug = false;
    settings.friction = 0.5;
    settings.trails = 30;
    settings.size = 50;
    settings.dampening = 0.25;
    settings.tension = 0.982;

    Math.TWO_PI = Math.PI * 2;


    // ========================================================================================
    // Tendril
    // ----------------------------------------------------------------------------------------

    function Tendril(options) {
        this.init(options || {});
    }

    class Node {
        public x = 0;
        public y = 0;
        public vy = 0;
        public vx = 0;

        constructor() {
            this.x = 0;
            this.y = 0;
            this.vy = 0;
            this.vx = 0;
        }
    }

    Tendril.prototype = (function () {

        return {

            init: function (options) {

                this.spring = options.spring + (Math.random() * 0.1) - 0.05;
                this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
                this.nodes = [];

                for (let i = 0, node; i < settings.size; i++) {

                    node = new Node();
                    node.x = target.x;
                    node.y = target.y;

                    this.nodes.push(node);
                }
            },

            update: function () {

                let spring = this.spring,
                    node = this.nodes[0];

                node.vx += (target.x - node.x) * spring;
                node.vy += (target.y - node.y) * spring;

                for (let prev, i = 0, n = this.nodes.length; i < n; i++) {

                    node = this.nodes[i];

                    if (i > 0) {

                        prev = this.nodes[i - 1];

                        node.vx += (prev.x - node.x) * spring;
                        node.vy += (prev.y - node.y) * spring;
                        node.vx += prev.vx * settings.dampening;
                        node.vy += prev.vy * settings.dampening;
                    }

                    node.vx *= this.friction;
                    node.vy *= this.friction;
                    node.x += node.vx;
                    node.y += node.vy;

                    spring *= settings.tension;
                }
            },

            draw: function () {

                let x = this.nodes[0].x,
                    y = this.nodes[0].y,
                    a, b;

                ctx.beginPath();
                ctx.moveTo(x, y);
                let i;
                for (i = 1; i < this.nodes.length - 2; i++) {

                    a = this.nodes[i];
                    b = this.nodes[i + 1];
                    x = (a.x + b.x) * 0.5;
                    y = (a.y + b.y) * 0.5;
                    let color = randomIntFromInterval(1, 2);

                    ctx.quadraticCurveTo(a.x, a.y, x, y);
                    ctx.strokeStyle = colorSelector(color);
                }

                a = this.nodes[i];
                b = this.nodes[i + 1];

                ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
                ctx.stroke();
                ctx.closePath();
            }
        };

    })();

    // ----------------------------------------------------------------------------------------

    function init(event) {

        document.removeEventListener('mousemove', init);
        document.removeEventListener('touchstart', init);

        document.addEventListener('mousemove', mousemove);
        document.addEventListener('touchmove', mousemove);
        document.addEventListener('touchstart', touchstart);

        mousemove(event);
        reset();
        loop();
    }

    function reset() {

        tendrils = [];

        for (let i = 0; i < settings.trails; i++) {

            tendrils.push(new Tendril({
                spring: 0.45 + 0.025 * (i / settings.trails)
            }));
        }
    }


    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function colorSelector(num) {
        switch (num) {
            case 1:
                return '#dc2626';
            case 2:
                return '#991b1b';
            // case 3:
            //     return '#0284c7';
            // case 4:
            //     return 'blue';
            // case 5:
            //     return 'green';
            // case 6:
            //     return 'orange';
            // case 7:
            //     return 'purple';
            // case 8:
            //     return 'pink';
            // case 9:
            //     return 'brown';
            // case 10:
            //     return 'grey';
            default:
                return '#38bdf8';
        }
    }

    function loop() {

        if (!ctx.running) return;
        let color = randomIntFromInterval(1, 3);
        ctx.globalCompositeOperation = 'source-over';
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, '#374151'); // from-gray-700
gradient.addColorStop(0.5, '#111827'); // via-gray-900
gradient.addColorStop(1, '#000000'); // to-black

ctx.fillStyle = gradient;

        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = 'hard-light';
        ctx.strokeStyle = colorSelector(color);
        ctx.lineWidth = 1;

        for (let i = 0, tendril; i < settings.trails; i++) {
            tendril = tendrils[i];
            tendril.update();
            tendril.draw();
        }

        ctx.frame++;
        requestAnimFrame(loop);
    }

    function resize() {
        ctx.canvas.width = window.innerWidth - 20;
        ctx.canvas.height = window.innerHeight -20;
    }

    function start() {
        if (!ctx.running) {
            ctx.running = true;
            loop();
        }
    }

    function stop() {
        ctx.running = false;
    }

    function mousemove(event) {
        if (event.touches) {
            target.x = event.touches[0].pageX;
            target.y = event.touches[0].pageY;
        } else {
            target.x = event.clientX
            target.y = event.clientY;
        }
        event.preventDefault();
    }

    function touchstart(event) {
        if (event.touches.length == 1) {
            target.x = event.touches[0].pageX;
            target.y = event.touches[0].pageY;
        }
    }

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
            window.setTimeout(fn, 1000 / 60)
        };
    })();


    ctx = document.getElementById('canvas').getContext('2d');

    ctx.running = true;
    ctx.frame = 1;


    document.addEventListener('mousemove', init);
    document.addEventListener('touchstart', init);
    document.body.addEventListener('orientationchange', resize);
    window.addEventListener('resize', resize);
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop);

    resize();


}

window.onload = function () {
initOciliator()
}
