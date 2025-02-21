//Ejercicio 5: Autenticación de Usuario

//Creando la función para autenticar un usuario
function userAuthenticate(user, password) {
  return new Promise((resolve, reject) => {
    //Creando la promesa
    setTimeout(() => {
      if (user === "admin" && password === "1234") {
        //Condición para validar credenciales correctas para regresar el objeto
        object = {
          user,
          role: "Administrator",
          message: "Login succesful",
        };

        resolve(object);
      } else {
        //Al ser incorrecto nos regreserá el objeto indicando que los datos no coindicen
        object = {
          error: "Incorrect credentials",
          code: 401,
        };

        reject(object);
      }
    });
  });
}

//Llamando a la función, en donde agregamos el nombre de usuario y contraseña

userAuthenticate("admin", "1234")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

userAuthenticate("admin", "12345")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
