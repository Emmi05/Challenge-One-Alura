function encriptar() {
  if(!validarTexto()){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

   
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    
      // aquiii?
      // texto = textoCifrado.toLowerCase()

  
        if (texto.length != 0){
    //aqui movib agrege un segundo if 
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
  
       textoCifrado=parrafo;
      muñeco.src = "./img/Designer _Two Color.svg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
      // Swal.fire("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  }

  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    //remplazo al reves
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      //diferente a 0, osea que esta ocupado
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptar.svg";
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire("Ooops!", "Debes ingresar un texto", "warning");
      }
  }

  function validarTexto(){
    let textoEscrito =  document.getElementById("texto").value ;
    // puedo agrego el gi y ya
    let validador = textoEscrito.match(/^[a-z]/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}
  