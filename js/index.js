const canvas = document.getElementById("matrix")
const context = canvas.getContext('2d')
const string = 'abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'

canvas.width = canvas.parentElement.clientWidth;
canvas.height = window.innerHeight;

const alpha = string + nums
const fontSize = 16
const cols = canvas.width / fontSize

const rainDrops = []
for (let x = 0; x < cols; x++) {
    rainDrops[x] = 1
}

const draw = () => {
    context.fillStyle = 'rgba(11, 18, 33, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // context.fillStyle = '#fcdf73';
    context.fillStyle = '#39FF14';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alpha.charAt(Math.floor(Math.random() * alpha.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}