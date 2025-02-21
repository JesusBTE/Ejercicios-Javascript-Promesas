// Instrucción:
// Crea una función verificarEdad(edad) que devuelva una promesa.
// Si la edad es 18 o más, la promesa se resuelve con "Compra permitida".
// Si la edad es menor de 18, la promesa se rechaza con "Debes ser mayor de edad para comprar este producto".

// Se crea la función para verificar edad con el parámetro de edad
function verifyage(age) {
  // Se crea la promesa
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Se crea la condicional para saber si la edad es 18 o más
      if (age >= 18) {
        //Se permite la compra ya que la edad es mayor o igual a 18
        resolve("Purchase allowed.");
      } else {
        //Se deniega la compra ya que la edad es menor a 18
        reject("You must be of legal age to purchase this product.");
      }
    }, 2000);
  });
}

// Se llama al método para verificar la edad, con el parámetro (edad) incluido
verifyage(18)
  //Se llama al mensaje de aprobación
  .then((message) => {
    console.log(message);
  })
  //Se llama al mensaje de negación
  .catch((error) => {
    console.log(error);
  });
