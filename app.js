const inquirer = require('inquirer');
const { guardarDB } = require('./db/guardarArchivo');
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
                tareas.crearTarea( desc );
            break;

            case '2':
                console.log( tareas.listadoArr );
            break;
        }
        guardarDB( tareas.listadoArr );
        
        await pausa();

    } while(opt !== '0' );
}
main();
