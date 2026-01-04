function buscar() {
    // 1. Obtenemos el número que escribiste
    var numero = document.getElementById('numC').value;
    
    // 2. Buscamos el lugar donde se verá la foto
    var resultado = document.getElementById('resu');

    // 3. Si no escribiste nada, avisamos
    if (numero === "") {
        alert("Por favor, escribe un número");
        return;
    }

    // 4. Ponemos la imagen en la pantalla
    // Usamos el número que escribiste + .jpg
    resultado.innerHTML = '<img src="' + numero + '.jpg" style="width:100%; max-width:500px; margin-top:20px;">';
}
