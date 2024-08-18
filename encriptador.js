let input =document.getElementById('input');
let tituloMensaje= document.getElementById('tituloMensaje');
let parrafoIngrese= document.getElementById('parrafoIngrese');



function encriptar(texto){
    const llaves = [["e","enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < llaves.length; i++){
        if (texto.includes(llaves[i][0])){
            texto = texto.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return texto;
}

function botonEnc(){
    mensaje.style.display = "block";
    let textoEncriptado = encriptar(input.value);
    mensaje.value = textoEncriptado;
    input.value = "";
    parrafoIngrese.textContent = "";
    tituloMensaje.textContent = "Mensaje encriptado exitosamente";
    document.getElementById("lupa").style.display ="none";
}

function descifrar(texto){
    const llavesDesencriptar = [["enter", "e"],["imes" , "i"],["ai" , "a"],["ober" , "o"],["ufat" , "u"]];

    for (let i = 0; i < llavesDesencriptar.length; i++){
        if (texto.includes(llavesDesencriptar[i][0])){
            texto = texto.replaceAll(llavesDesencriptar[i][0], llavesDesencriptar[i][1])
        }
    }
    return texto
}

function botonDes(){
    mensaje.style.display = "block";
    let textoEncriptado = descifrar(input.value);
    mensaje.value = textoEncriptado;
    input.value = "";
    document.getElementById("lupa").style.display ="none";
    parrafoIngrese.textContent = "";
    tituloMensaje.textContent = "Mensaje desencriptado exitosamente";
}
