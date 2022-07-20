
let array= [200,3000,9000,450,987,621]

function toHexa(array){
    let resultado=[]
    resultado= array.map(function(resultado) {
    return resultado.toString(16) 
    }) 
    return resultado
}

console.log(toHexa(array))


