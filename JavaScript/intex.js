let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000);


function nextImage() {
    contador++;
    if (contador > 4) {
        contador = 1;
    }

    document.getElementById("radio" + contador).checked = true;
}