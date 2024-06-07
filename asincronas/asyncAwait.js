function sumar (acumulado, valor, ){
    let suma 

    return new Promise(function(resolve,reject){


        setTimeout( () => {

            if(valor == 2)return reject({msg:"no me gusta el numero 2"})
            suma = acumulado + valor
            resolve(suma)

        }, 300);
       
    })

}

console.log('al inicio del programa ');

let acumulado = 0
async function main( ) {

    try{

    acumulado = await sumar (acumulado, 4)
    acumulado = await sumar (acumulado, 4)
    acumulado = await sumar (acumulado, 2)


    console.log(acumulado);
    }catch(err){
        console.log(err.msg);
    }

}
main ()