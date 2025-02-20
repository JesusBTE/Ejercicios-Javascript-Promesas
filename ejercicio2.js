// Instrucción:
// Crea una función verificarEdad(edad) que devuelva una promesa.
// Si la edad es 18 o más, la promesa se resuelve con "Compra permitida".
// Si la edad es menor de 18, la promesa se rechaza con "Debes ser mayor de edad para comprar este producto".

// Se crea la funcion para verificar edad con el parametro de edad
function verifyage(edad){
    // Se crea la promesa
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //Se crea la condicional para saber si la edad es 18 o mas
            if (edad>=18) {
                //Se permite la compra ya que la edad es mayor o igual a 18
                resolve("Compra Permitida.");
            } else{
                //Se deniega la compra ya que la edad es menor a 18
                reject("Debes ser mayor de edad para comprar este producto.");
            }
        },2000);
    });
}

// Se llama al metodo para verificar la edad, con el parametro (edad) incluido
verifyage(17)
    //Se llama al mensaje de aprobacion
    .then((message) => {console.log(message);})
    //Se llama al mensaje de negacion
    .catch((error) => {console.log(error);});