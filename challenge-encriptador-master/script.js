
/* Encriptar: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
*/

/* Desencriptar: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
*/


function encriptarTexto(texto){

    arrayTexto = [];
    var largoTexto = texto.length;
    
    //Guardamos el texto dentro del array
    for(var indiceTexto = 0; indiceTexto < largoTexto; indiceTexto++){
        arrayTexto.push(texto.charAt(indiceTexto));
    }
    
    var largoArray = arrayTexto.length;

    //Recorrer el array para intercambiar el texto segun corresponda
    for(var indiceArray = 0; indiceArray < largoArray; indiceArray++){
        if(arrayTexto[indiceArray] == 'e'){
            arrayTexto.splice(indiceArray, 1, 'enter');
        }else if(arrayTexto[indiceArray] == 'i'){
            arrayTexto.splice(indiceArray, 1, 'imes');
        }else if(arrayTexto[indiceArray] == 'a'){
            arrayTexto.splice(indiceArray, 1, 'ai');
        }else if(arrayTexto[indiceArray] == 'o'){
            arrayTexto.splice(indiceArray, 1, 'ober');
        }else if(arrayTexto[indiceArray] == 'u'){
            arrayTexto.splice(indiceArray, 1, 'ufat');
        }
    }

    //Pasamos los indices del array a un string
    var textoEncriptado = "".concat(...arrayTexto);
    
    
    console.log(textoEncriptado);
    var textoSalida = document.querySelector("#msg");
    textoSalida.value = textoEncriptado;
            }


    function desencriptarTexto(texto){
    
    var textoDesencriptado = texto.replace(/ai/g,'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');

    
    console.log(textoDesencriptado);
    var textoSalida = document.querySelector("#msg");
    textoSalida.value = textoDesencriptado;
    }


    var botonEncriptar = document.querySelector("#btn-encriptar");
    botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
    });

    var botonDesencriptar = document.querySelector("#btn-desencriptar");
    botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    desencriptarTexto(textoEntrada);
    });



    function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
        }  
    document.querySelector("#btn-copy").addEventListener("click", copy);


    function limpiar(input){
    input.value= "";
    }

        var botonLimpiarEntrada = document.querySelector("#btn-limpiarEntrada");
    botonLimpiarEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto");
    limpiar(textoEntrada);
    });

    var botonLimpiarSalida = document.querySelector("#btn-limpiarSalida");
    botonLimpiarSalida.addEventListener("click",function(event){
    event.preventDefault();
    var textoSalida = document.querySelector("#msg");
    limpiar(textoSalida);
    });
