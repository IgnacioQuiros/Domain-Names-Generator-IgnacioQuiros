/* eslint-disable */
import "bootstrap";
import "./style.css";

//La única variable que necesito definir fuera de la funcion
let finalArray = [];

// Función que genera los dominios
function domainGenerator() {
  // Defino las variables que voy a necesitar al inicio del documento, la matriz inicial con todos los datos y la final que mandaré al html
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  // Importante vaciarlo para que se pueda renovar el domain y que no se añadan a si mismo una y otra vez
  finalArray = [];

  //Aquí es donde juntamos todas las posiblidades gracias a la reiteracion de distintos "for" para concatenar pronoun, adj y noun
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        finalArray.push(pronoun[i] + adj[j] + noun[k]);
      }
    }
  }
  return finalArray;
}

//Funcion para que al clicar un botón llame a la funcion traiga el array de strings concatenados y previamente haya vaciado el contenedor en el html
function onButtonClick(extension) {
  // Llamo a la función que generará el domain
  const finalArray = domainGenerator();

  // Obtener el div/contenedor en el HTML
  const contenedor = document.getElementById("domainNames");

  // Vaciar el contenido
  contenedor.innerHTML = "";

  // Añado el .es y tambien una nueva linea con el br para que no salga todo junto
  finalArray.forEach(element => {
    contenedor.innerHTML += "<h2>" + element + extension + "<br> </h2>";
  });
}

// Ejecutar la función al cargar la página donde primero imprimo lo que pide el ejercicio en la consola en caso de que al revisarlo el profesor solo ejecute el archivo ".js"
// Asigno la única funcion a los 3 botones gracias a la funcion flecha que me permite mandar a la funcion la "extension"
window.onload = function() {
  domainGenerator();
  console.log(finalArray);

  document.getElementById("button1").addEventListener("click", () => {
    onButtonClick(".com");
  });
  document.getElementById("button2").addEventListener("click", () => {
    onButtonClick(".net");
  });
  document.getElementById("button3").addEventListener("click", () => {
    onButtonClick(".es");
  });
};
