var mensajeoriginal = ["e", "i", "a", "o", "u"];
var mensajefinal = ["enter", "imes", "ai", "ober", "ufat"];

function entradadem() {
    var mentrada = document.querySelector(".input-padron").value;
    var msalida = document.querySelector('.mensajeresultado'); //selecciona en HTML clase mensajeresultado

    if (mentrada == "") {
        document.querySelector(".cajaresultado").style.display = "block"; //aparece imagen munieco
        msalida.textContent =  mentrada; //borra el mensaje anterior 
        document.querySelector(".copiar").hidden = true; 
        return //detiene funcion entradadem
    }
    for (var i = 0 ; i<5 ; i++) {
        mentrada = mentrada.replaceAll (mensajeoriginal [i],mensajefinal[i]);
    }
    document.querySelector(".cajaresultado").style.display = "none"; //oculta caja resultado
    msalida.textContent = mentrada; //imprime en HTML el mensaje guardado en mentrada en la posucion de ,mensajeresultado 
    document.querySelector(".copiar").hidden = false; 
    return mentrada
}

function desencriptarm() {
    var mentrada = document.querySelector(".input-padron").value;
    var msalida = document.querySelector("p[class = 'mensajeresultado']"); 
    if (mentrada == "") {
        document.querySelector(".cajaresultado").style.display = "block"; 
        msalida.textContent =  mentrada; 
        document.querySelector(".copiar").hidden = true; 
        return 
    }
    for (var i = 0 ; i<5 ; i++) {
        mentrada = mentrada.replaceAll (mensajefinal [i], mensajeoriginal[i]);
    }
    document.querySelector(".cajaresultado").style.display = "none"; //oculta caja resultado
    msalida.textContent =  mentrada; //imprime en HTML el mensaje guardado en mentrada en la posucion de ,mensajeresultado 
    document.querySelector(".copiar").hidden = false; 
    return mentrada
}

function copiar () {
const copia = document.querySelector(".mensajeresultado").textContent;
navigator.clipboard.writeText(copia)
.then(() => {
    console.log('Text copied to clipboard');
})
.catch(err => {
    console.error('Error in copying text: ', err);
})
}

var input = document.querySelector("input[class='copiar']");
input.onclick = copiar;

document.querySelector(".copiar").hidden = true; 

var input = document.querySelector("input[class='encriptar']");
input.onclick = entradadem;

var input = document.querySelector("input[class='desencriptar']")
input.onclick = desencriptarm;
