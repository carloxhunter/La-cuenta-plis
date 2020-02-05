# node-mongo-registration-login-api
# Appswebs
repo para proyecto de appswebs y moviles


NodeJS + MongoDB API for User Management, Authentication and Registration

For documentation and instructions check out http://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management

A continuacion se detalla las modificaciones y agregaciones en releases mas importantes

Update #1: Se agregan los Locals y Products, en donde un local puede tener varios productos y varios users, ahora falta crear los get-post-etc de locals y products y modificar el crud de usuario tambien.

Update #2: Se re-ordenan todas las carpetas en controllers, models y services, en models se pueden encontrar los modelos locals, products y usuarios, alli se encuentran sus estructuras y se agregan metodos virtuales, los cuales ejecutan alguna funcion con un objeto cuando se instancia y se llama al metodo virtual, nota: solo se puede ejecutar un metodo virtual de uns instancia a la vez, es decir para ejecutar la de un conjunto hay que recorrer con un for.
Se agrega CRUD para usuarios y Locales, teniendo funciones importantes las cuales consideran al eliminar un local, eliminar todos sus productos y trabajadores, y la opcion de poder registrar usuarios sin y con locales y etc.
En services, se encuentran las funciones que hacen los crud en si mismo y en controllers es como responde el server a determinada URL, redirijiendo los datos de post get put o delete a las funciones de services.
