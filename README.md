# Ejercicios-Javascript-Promesas

Ejercicio 1: Simulación de Descarga de Archivo.

Para esté ejercicio utilizamos una promesa, para simular la descarga de un archivo en donde se utilizo una estructura de condición en donde si el tamaño del archivo era menor o igual a 50 la carga del archivo se completaba, caso contrario indica que el archivo es demasiado grande.

Ejercicio 2: Verificación de Edad Necesaria para una Compra.

En este ejercicio se realizó una promesa para comprobar si un usuario tenia la edad suficiente (18) para 
realizar una compra y permitirsela, en caso contrario negarle el acceso. Si la edad era mayor o igual a 18 se
llama al mensaje de aprobacion, si no al de negacion.

Ejercicio 4: Procesamiento de pagos.

Primeramente se crea una promesa para procesar un pago, esta debe comprobar que el pago realizado tenga un monto mayor a 0. Si el monto del pago es mayor a 0 la compra se permite dando un mensaje de pago exitoso, si no se genera un error, esto a traves de un if condicional.

Ejercicio 5: Autenticación de Usuario.

Para auntenticar el usuario, primero utilizamos una promesa dentro de ella se utilizó una estructura condicional que verificaba las credenciales, al ser correctas regresa un objecto que contiene: usuario, rol y un mensaje. Si las crendenciales eran incorrectas regresa un objeto el cuál contiene un mensaje y código de error.

Ejercicio 7: Consulta del clima.

En este ejercicio primeramente se nos pide consultar en una base de datos local, es por ello que creamos un arreglo de objetos para simularlo, cada objeto con sus respectivos atributos (ciudad, temperatura y condicion), una vez realizado procedemos con la promesa, la cual tiene un parametro con el nombre de la ciudad, busca la ciudad entre el arreglo de objetos en base a su nombre, y ahi entra la estructura condicional (if-else), en caso de que la ciudad exista se muestran los datos guardados de la ciudad, en caso contrario se genera un mensaje de error.