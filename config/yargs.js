const argv = require('yargs')
(process.argv.slice(2))
.option('b', {
    alias: 'base',
     demandOption: true,
    // default: '/etc/passwd',
     describe: 'Es la base de la tabla de multiplicar',
    type: 'number'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    // demandOption: true,
     default: false,
     describe: 'Muestra la tabla en consola',
}).option('h', {
  alias: 'hasta',
  type: 'number',
   default: 10,
  // default: false,
   describe: 'Muestra la tabla hasta un limite especifico',
}).check((argv, options) => {
 // console.log('yargs',argv)
  if (isNaN(argv.b)) {
    throw 'La base tiene que ser un numero'
  }
   
    return true // tell Yargs that the arguments passed the check

})
.argv


module.exports = argv;