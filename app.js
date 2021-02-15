const inquirer = require('inquirer');
require('colors');
const { 
    inquirerMenu, 
    pausa, 
    leerInput } = require('./helpers/inquirer');
const Tareas = require('./helpers/models/tereas');

const main = async() => {
    let opt = ''

    const tareas = new Tareas();
    do{
        // Imprmir el menú
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // Crear Opcion
                const desc = await leerInput('Descripción: ');
                tareas.crarTarea( desc );
            break;

            case '2':
                console.log( tareas.listadoArr );
            break;
            
            
        }

        await pausa();

    } while(opt !== '0' );
}
main();
