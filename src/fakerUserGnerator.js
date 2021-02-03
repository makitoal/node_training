const faker= require('faker');
const fs= require('fs');

// FUNCION PARA GENERAR USUARIOS
function generateUsers(){

    let users = [];
    for(let i=1; i<=100; i++)
    {
        const firstName=faker.name.firstName();
        const lastName=faker.name.lastName();
        const email=faker.internet.email();
        const phone= faker.phone.phoneNumber();
        
        // CREO UN ARREGLO users
        users.push(
            {
                id:i,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone
            }
        );
    }
    // RETORNO LA DATA
    return { data : users}
}

const generatedData = generateUsers();
fs.writeFileSync('data.json', JSON.stringify(generatedData, null, "\t"));

