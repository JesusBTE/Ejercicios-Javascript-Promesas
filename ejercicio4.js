// Instrucción:
// Crea una función procesarPago(monto) que devuelva una promesa.
// Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
// Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".

//Se crea la función de procesar pago con el parámetro de monto
function payprocess(cash) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Se crea la condicional para saber si el monto es superior a un valor de 0.
      if (cash > 0) {
        //Se realiza el pago con exito, ya que el monto es mayor a 0
        resolve("Successful payment of $" + cash);
      } else {
        //Se deniega el pago ya que el monto es igual o menor a 0
        reject("Error: Invalid amount.");
      }
    }, 2000);
  });
}

//Se llama al método procesar pago con su respectivo parámetro (monto)
payprocess(0)
  //Se llama al mensaje de aprobacion
  .then((message) => {
    console.log(message);
  })
  //Se llama al mensaje de negacion
  .catch((error) => {
    console.log(error);
  });

payprocess(10)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
