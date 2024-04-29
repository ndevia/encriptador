const textArea = document.querySelector(".text-area");
const respuestaTexto = document.querySelector(".respuesta-texto");
const sinTexto = document.querySelector(".sin-texto");
const respuesta = document.querySelector(".respuesta");

respuesta.style.display = "none";

const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], 
                    ["u", "ufat"]];

function botonEncriptar() {
  let textoEncriptado = encriptar(textArea.value);
  respuestaTexto.value = textoEncriptado;
  textArea.value = "";
  sinTexto.style.display = "none";
  respuesta.style.display = "flex";
}

function encriptar(stringEncriptado) {
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], 
                    ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptado;  
}

function botonDesencriptar() {
  let textoDesencriptado = desencriptar(textArea.value);
  respuestaTexto.value = textoDesencriptado;
  textArea.value = "";
  sinTexto.style.display = "none";
  respuestaTexto.style.display = "flex";
}

function desencriptar(stringDesencriptado) {
  const matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], 
                    ["ufat", "u"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptado.includes(matrizCodigo[i][0])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringDesencriptado;
}

// Copiar texto a clipboard
let botonCopiar = document.getElementById("boton-copiar")

botonCopiar.addEventListener("click", () => {
  let texto = respuestaTexto
  navigator.clipboard.writeText(texto.value)
})


// document.getElementById("boton-copiar").onclick = function() {
//   navigator.clipboard.writeText(respuestaTexto)
//   .then(function() {
//     console.log("Text has been copied")
//   })
// }

// function copy() {
//   var copyText = document.getElementsByClassName("respuesta-texto");

//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//   navigator.clipboard.writeText(copyText.value);
  
//   alert("Copied the text: " + copyText.value);
// }
