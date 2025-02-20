//Ejercicio 1: Simulación de Descarga de Archivo

//Creamos la función que nos permitirá comprobar el tamaño del archivo
function downloadFile(size) {
  return new Promise((resolve, reject) => {
    //Creano la promesa
    setTimeout(() => {
      if (size <= 50) {
        //Condición para sabes si el archivo tiene un tamaño menor o igual a 50 MB
        resolve("Download completed");
      } else {
        reject("The file is too large"); //Al ser mayor nos indicará que el archivo es pesado
      }
    }, 2000);
  });
}

//Mandamos a llamar la función esperando mensaje, en donde escribimos el tamaño del archivo

downloadFile(50)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

downloadFile(100)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
