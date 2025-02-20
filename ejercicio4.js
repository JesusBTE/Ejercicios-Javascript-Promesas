// Instrucción:
// Crea una función procesarPago(monto) que devuelva una promesa.
// Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
// Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".

//Se crea la funcion de procesar pago con el parametro de monto
function payprocess(cash){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //Se crea la condicional para saber si el monto es superior a un valor de 0.
            if (cash>0) {
                //Se realiza el pago con exito, ya que el monto es mayor a 0
                resolve("Pago exitoso de $"+cash);
            } else{
                //Se deniega el pago ya que el monto es igual o menor a 0
                reject("Error: Monto inválido.");
            }
        },2000);
    });
}

//Se llama al metodo procesar pago con su respectivo parametro (monto)
payprocess(0)
    //Se llama al mensaje de aprobacion
    .then((message) => {console.log(message);})
    //Se llama al mensaje de negacion
    .catch((error) => {console.log(error);});