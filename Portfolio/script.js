document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".myself").classList.add("show");
});


const text = "Heyyy... I'm Tejal Deshmukh, a Full Stack Developer!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("intro-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

