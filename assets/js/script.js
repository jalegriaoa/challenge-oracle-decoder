let area_Encriptada = document.getElementById("area_Encriptada");

const boton_Encriptar = document.querySelector(".boton_Encriptar");
const boton_Desencriptar = document.querySelector(".boton_Desencriptar");

const elements = document.querySelectorAll(".elements");

const boton_Copiar = document.querySelector(".boton_Aside");
const texto_Copiado = document.querySelector(".texto_Copiado");

let texto__Encriptadox = document.querySelector(".texto_Encriptadox");

// ocultamos los elementos no deseados del aside
const ocultarElementos = () => {
  elements.forEach((elemento) => elemento.classList.add("ocultar"));
  boton_Copiar.classList.remove("ocultar");
  texto__Encriptadox.classList.remove("ocultar");
};

// código para encriptar
const encriptar = () => {
  let texto = area_Encriptada.value;
  texto = texto
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/u/gi, "ufat");
  texto__Encriptadox.value = texto;
  area_Encriptada.value = "";
};

// código para desencriptar
const desencriptarX = () => {
  let texto = area_Encriptada.value;
  texto = texto
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ufat/gi, "u");
  texto__Encriptadox.value = texto;
  area_Encriptada.value = "";
};

//comprobamos los campos vacíos, de ser true recargamos la pagina automáticamente
const comprobarVacios = () => {
  if (area_Encriptada.value.trim() == "") {
    alert("ingresa una palabra");
    location.reload();
  }
};

// detectamos si tiene activado el Bloq Mayus para las letras mayúsculas
area_Encriptada.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    alert("Solo se puede escribir en minúscula");
    location.reload();
  }
});

// encriptamos el texto
boton_Encriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  encriptar();
});

// desencriptamos el texto
boton_Desencriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  desencriptarX();
});

// boton de copiar
boton_Copiar.addEventListener("click", () => {
  // accedemos a los valores
  texto__Encriptadox.select();
  texto__Encriptadox.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(texto__Encriptadox.value);

  //agregamos y quitamos el anuncio de copiado
  texto_Copiado.classList.remove("ocultar");
  setTimeout(() => {
    texto_Copiado.classList.add("ocultar");
  }, 1000);
});
