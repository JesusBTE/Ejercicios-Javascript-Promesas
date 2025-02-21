// Instrucción:
// Crea una función consultarClima(ciudad) que devuelva una promesa con el siguiente comportamiento:
// Si la ciudad existe en una base de datos local, la promesa se resuelve con { ciudad, temperatura, condicion }.
// Si la ciudad no existe, la promesa se rechaza con { error: "Ciudad no encontrada", codigo: 404 }.

//Se simula la base de datos a traves de un arreglo
//Es un arreglo de objetos con los atributos ciudad(nombre), temperatura y condicion
let cities = [
  {
    city: "Tepic",
    temperature: "18°C",
    condition: "Sunny",
  },
  {
    city: "Culiacán",
    temperature: "35°C",
    condition: "Sunny",
  },
  {
    city: "Monterrey",
    temperature: "28°C",
    condition: "Cloudy",
  },
  {
    city: "Guadalajara",
    temperature: "22°C",
    condition: "Stormy",
  },
];

//Se crea la función de consultar clima
function weathercheck(city) {
  //Se busca el objeto en el arreglo de las ciudades en base a su nombre
  const cityA = cities.find((t) => t.city === city);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Se crea la condicional para saber si la ciudad con ese nombre existe
      if (cityA) {
        //Se encuentra la ciudad coincidiendo con el nombre y se retorna
        resolve(cityA);
      } else {
        //Se genera un error ya que la ciudad con ese nombre no fue encontrada
        reject('{ error: "City not found", code: 404 }');
      }
    }, 2000);
  });
}

//Se llama al método de consultar clima con su respectivo parámetro(ciudad)
weathercheck("Guadalajara")
  //Se llama al mensaje de aprobacion
  .then((message) => {
    console.log(message);
  })
  //Se llama al mensaje de negacion
  .catch((error) => {
    console.log(error);
  });

weathercheck("Slp")
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.log(error);
});