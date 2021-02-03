const faker = require('faker');

// Generando datos de usuario
const firstName= faker.name.firstName();
const lastName= faker.name.lastName();
const jobTitle=faker.name.jobTitle();
const jobArea=faker.name.jobArea();
const prefix=faker.name.prefix();
const suffix=faker.name.suffix();
const phone=faker.phone.phoneNumber();

console.log("EMPLEADO");
console.log(`${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job Title: ${jobTitle}`);
console.log(`Job Area: ${jobArea}`);
console.log(`Job Area: ${phone}`);

