function buscar() {
    // 1. Obtenemos el VALOR del número
    var numero = document.getElementById('numC').value;
    var resultado = document.getElementById('resu');

    if (numero === "") {
        alert("Por favor, escribe un número");
        return;
    }

    // 2. Mostramos la imagen
    resultado.innerHTML = '<img src="' + numero + '.jpg" style="width:100%; max-width:400px; margin-top:20px; border-radius:10px;">';
}
