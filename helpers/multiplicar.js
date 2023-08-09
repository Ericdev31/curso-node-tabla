//IMPORTAR ARCHIVO DE PROYECTO APP
const fs = require('fs'); 
const colors = require('colors');

const crearArchivo = async(base = 5,listar= false, hasta = 10) => {
    try {

     let salida = ''; //arr
     let consola = '';
    
            for(let i=1; i <= hasta; i++) {
                // console.log(`${base} x ${i} = ${base*i} `)
               salida += `${base} x ${i} = ${base*i}\n `; //arr
               consola += `${base} ${'x'.rainbow} ${i} ${'='.green} ${base*i}\n `; //arr
            }
            
            if (listar){
                console.log('==============='.green);
                console.log(' Tabla del:'.rainbow,colors.blue(base));
                console.log('==============='.green);


                console.log(consola);
            }
            //arr 
        fs.writeFileSync(`./salida/tabla -${base}.txt`, salida,)
            
      return `tabla-${base}.txt  `;
        
    } catch (err) {
        throw err;
    }

}

module.exports = {
crearArchivo
}

   

