// encriptador.js
const botonEncriptar = document.querySelector('.botonEncriptar');
const textoIngresado = document.querySelector('#texto');
const rectanguloTexto = document.querySelector('.rectangulo h2');
const parrafoRec = document.querySelector('.parrafoRec');
const botonCopiar = document.querySelector('.botonCopiar');

function reglasParaEncriptacion(texto) {
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return texto.replace(/[eioua]/g, letra => reglas[letra]);
}

function reglasParaDesencriptar(texto){
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return texto.replace(/enter|imes|ai|ober|ufat/g, encriptado => {
        return reglas[encriptado];
    });
}
function encriptarTexto(){
    const texto=textoIngresado.value;
    const textoEncriptado=reglasParaEncriptacion(texto);
    document.getElementById("REC").style.display="none";
    parrafoRec.textContent=textoEncriptado;
}

function desencriptarTexto(){
    const texto=textoIngresado.value;
    const textoDesencriptado=reglasParaDesencriptar(texto);
    document.getElementById("REC").style.display="none";
    parrafoRec.textContent=textoDesencriptado;
}

function copiarTexto() {
    const textoACopiar = parrafoRec.textContent;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

botonCopiar.addEventListener('click', copiarTexto);

