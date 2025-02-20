// Instrucción:
// Crea una función consultarClima(ciudad) que devuelva una promesa con el siguiente comportamiento:
// Si la ciudad existe en una base de datos local, la promesa se resuelve con { ciudad, temperatura, condicion }.
// Si la ciudad no existe, la promesa se rechaza con { error: "Ciudad no encontrada", codigo: 404 }.

//Se simula la base de datos a traves de un arreglo
//Es un arreglo de objetos con los atributos ciudad(nombre), temperatura y condicion
let cities = [
    {
        city: 'Tepic',
        temperature: '18°C',
        condition: 'Soleado'
    },
    {
        city: 'Culiacan',
        temperature: '35°C',
        condition: 'Soleado'
    },
    {
        city: 'Monterrey',
        temperature: '28°C',
        condition: 'Nublado'
    },
    {
        city: 'Guadalajara',
        temperature: '22°C',
        condition: 'Tormentoso'
    }
]

//Se crea la funcion de consultar clima
function weathercheck(city){
    //Se busca el objeto en el arreglo de las ciudades en base a su nombre
    const cityA = cities.find(t => t.city === city);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //Se crea la condicional para saber si la ciudad con ese nombre existe
            if (cityA) {
                //Se encuentra la ciudad coincidiendo con el nombre y se retorna
                resolve(cityA);
            } else{
                //Se genera un error ya que la ciudad con ese nombre no fue encontrada
                reject('{ error: "Ciudad no encontrada", codigo: 404 }');
            }
        },2000);
    });
}

//Se llama al metodo de consultar clima con su respectivo parametro(ciudad)
weathercheck('slp')
    //Se llama al mensaje de aprobacion
    .then((message) => {console.log(message);})
    //Se llama al mensaje de negacion
    .catch((error) => {console.log(error);});