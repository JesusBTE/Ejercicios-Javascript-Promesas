function checkStock(product, item) {
    return new Promise((resolve, reject) => {
      //Inicia la promesa
      setTimeout(() => {
        // Recorre el inventario buscando el producto que solicitamos
        for (var i in product) {
          if (product[i].nombre === item) {
            //Comprueba si el stock es suficiente
            if (product[i].cantidad > 0) {
              resolve("Stock disponible, procediendo con la compra");
            } else {
              //Si el stock es insuficiente, rechaza la compra  
              reject("Stock insuficiente");
            }
          }
        }
      }, 2000);
    });
  
  }
  //Aqui define los productos y sus cantidades que estan en el inventario
  let inventario = [{
    nombre: 'laptop',
    cantidad: 10
  },
  {
    nombre: 'mouse',
    cantidad: 5,
  },
  {	
    nombre: 'teclado',
    cantidad: 0,
  },
];

//Ejemplos de como la promesa es aprobada o rechazada
checkStock(inventario, 'laptop')
  .then((message) => console.log(message))  
  .catch((error) => console.log(error));
checkStock(inventario, 'teclado')
  .then((message) => console.log(message))  
  .catch((error) => console.log(error));