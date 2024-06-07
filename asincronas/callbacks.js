function sumar (acumulado, valor, callback){
    let suma 
    setTimeout( function() {
        suma = acumulado + valor
        callback (suma)
        
    }, 300);



  
    
    //return suma
}

console.log('al inicio del programa ');

let acumulado = 0
sumar (acumulado, 4, function(resultado){
    
    sumar(resultado, 4, function(resultado){

        console.log(resultado );


    })
   


})

// acumulado = sumar(acumulado, 4)
// acumulado = sumar(acumulado, 4)
// console.log(acumulado);

console.log('al final del programa ');

