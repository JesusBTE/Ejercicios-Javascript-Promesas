<<<<<<< HEAD
function verificarSaldo(account, amount) {
  return new Promise((resolve, reject) => {
    //Inicia la promesa
    setTimeout(() => {
      if (account.balance >= amount) {
        //Comprueba si el saldo es suficiente
        resolve(
          "{Remaining balance: " +
            (account.balance - amount) +
            ", Transaction approved}"
        );
      } else {
        //Si el saldo es insuficiente, rechaza la transaccion
        reject(
          "{Insufficient funds" +
            ", Available balance: " +
            account.balance +
            ", Transaction rejected}"
        );
      }
    }, 2000); // Espera 2 segundos
  });
}
//Ejemplos de como la promesa es aprobada o rechazada, donde se le pasa el saldo disponible que hay en la cuenta y el monto se desea retirar
verificarSaldo({ balance: 2300 }, 500)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

verificarSaldo({ balance: 1000 }, 1500)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
=======
function verificarSaldo(cuenta, monto) {
    return new Promise((resolve, reject) => {
        //Inicia la promesa 
        setTimeout(() => {
            if (cuenta.saldo >= monto) {  
                //Comprueba si el saldo es suficiente  
                resolve("Saldo restante: "+(cuenta.saldo-monto)+", Transaccion aprobada");
            } else {
                //Si el saldo es insuficiente, rechaza la transaccion
                reject("Fondos insuficientes"+", Saldo disponible: "+cuenta.saldo+", Transaccion rechazada");
            }
        }, 2000);// Espera 2 segundos
    });
}   
//Ejemplos de como la promesa es aprobada o rechazada, donde se le pasa el saldo disponible que hay en la cuenta y el monto se desea retirar
verificarSaldo({saldo: 2300}, 500)
    .then((message) => console.log(message))    
    .catch((error) => console.log(error));

verificarSaldo({saldo: 1000}, 1500)
    .then((message) => console.log(message))        
    .catch((error) => console.log(error));
>>>>>>> 223960ff9312ff914f833418025527f2957f55d6
