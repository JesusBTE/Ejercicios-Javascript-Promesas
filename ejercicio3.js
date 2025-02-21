function checkStock(product, item) {
  return new Promise((resolve, reject) => {
    //Inicia la promesa
    setTimeout(() => {
      // Recorre el inventario buscando el producto que solicitamos
      for (var i in product) {
        if (product[i].name === item) {
          //Comprueba si el stock es suficiente
          if (product[i].amount > 0) {
            resolve("Stock available, proceeding with the purchase");
          } else {
            //Si el stock es insuficiente, rechaza la compra
            reject("Insufficient stock");
          }
        }
      }
    }, 2000);
  });
}
//Aqui define los productos y sus cantidades que estan en el inventario
let inventary = [
  {
    name: "laptop",
    amount: 10,
  },
  {
    name: "mouse",
    amount: 5,
  },
  {
    name: "teclado",
    amount: 0,
  },
];

//Ejemplos de como la promesa es aprobada o rechazada
checkStock(inventary, "laptop")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
checkStock(inventary, "teclado")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
