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
