function buscar() {
    // Obtenemos el VALOR que el usuario escribió
    var n = document.getElementById('numC').value;
    var r = document.getElementById('resu');

    if (n === "") {
        alert("Por favor, escribe el número");
        return;
    }

    // Creamos el nombre de la imagen usando el número
    let nombreImagen = n + ".jpg";

    r.innerHTML = `
        <div style="margin-top: 20px; text-align: center;">
            <p style="color: white; margin-bottom: 10px;">Mostrando imagen: ${n}</p>
            <img src="${nombreImagen}" alt="Imagen ${n}" 
                 style="width: 100%; max-width: 400px; border-radius: 10px; border: 2px solid #28a745;"
                 onerror="this.parentElement.innerHTML='<p style=color:red;>No se encontró la imagen ${n}.jpg</p>'">
        </div>
    `;
}
