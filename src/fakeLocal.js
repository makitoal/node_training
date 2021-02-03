const faker = require('faker/locale/es');

// Generando datos de usuario
const firstName= faker.name.firstName();
const lastName= faker.name.lastName();

console.log("EMPLEADO");
console.log(`${firstName} ${lastName}`);
