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
sumar (acumulado, 4)
.then(function(resultado){
    
    return sumar(resultado, 4)

})
.then( (resultado) =>{
    return sumar (resultado, 2)
})


.then( (resultado) =>{
    console.log(resultado);
    return sumar (resultado, 10)
})


.then( (resultado) =>{
    console.log(resultado);
})
.catch((err)=>{
    console.log(err.msg);
})

