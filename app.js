// //const  fs = require ('node:fs/promises');   //arr  
// const { error } = require('console');
// const fs = require('fs'); // otra forma de importar file system //arr

//    console.clear();
//    console.log('===============')
//    console.log('TABLA DEL 5 Y 7')
//    console.log('===============')


//        // ciclo for de la tabla del 5 impreso de esta forma
// // const numero=5
// //      for(let i=1;i<=10;i++){    
// //        console.log(numero,'X',i,'=',numero*i)
// //       }

  
//       // Ciclo for de la tabla del 7 impreso  

//     const base = 5
//   // arreglo al ciclo for para uso de file systen = //arr
//       let salida = ''; //arr

//       for(let i=1; i<=10; i++) {
//         // console.log(`${base} x ${i} = ${base*i} `)
//         salida += `${base} x ${i} = ${base*i}\n `; //arr
//       }
//    console.log(salida);
//       //arr 
//   fs.writeFile(`tabla -${base}.txt`, salida,  (err)=> {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado `);
//   })



               //  app.js usan fs.wrifilesync

            
//const { error } = require('console');



const yargs = require('yargs');
const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

   console.clear();
   console.log(argv);
   
   //console.log('base: yargs',argv.base);

  

        //argv sin el uso del paquete 'yargs'
   //  console.log(process.argv);     
  // const [ , , arg3 = 'base= 5'] = process.argv;
  // const [, base ] = arg3.split('=');
  
  
    // const base = 5;

    crearArchivo(argv.base, argv.l, argv.h)
   .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado') )
   .catch(err => console.log (err));
     
  
