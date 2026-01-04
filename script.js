function buscar() {
    var n = document.getElementById('numCarton').value;
    var r = document.getElementById('resultado');

    if (n === "") {
        alert("Por favor, escribe el número del cartón");
        return;
    }

    // El código busca la imagen con el número que escribas
    let nombreImagen = n + ".jpg"; 

    r.innerHTML = `
        <div style="margin-top: 20px; text-align: center;">
            <p style="color: white; margin-bottom: 5px;">Mostrando Cartón N° ${n}</p>
            <img src="${nombreImagen}" alt="Cartón ${n}" 
                 style="width: 100%; max-width: 500px; border-radius: 15px; border: 4px solid #ff3366; box-shadow: 0px 10px 20px rgba(0,0,0,0.5);"
                 onerror="this.parentElement.innerHTML='<div style=\'color:white; background:rgba(255,0,0,0.5); padding:15px; border-radius:10px;\'>⚠️ El cartón ${n} no se ha subido o no es formato .jpg</div>'">
        </div>
    `;
}
