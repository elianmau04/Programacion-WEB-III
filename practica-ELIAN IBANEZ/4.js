function MiFuncion(numeros){
    let mayor=0,menor=numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (mayor<numeros[i]) {mayor=numeros[i];}
        if (menor>numeros[i]) {menor=numeros[i];}
    }
    return {mayor, menor}
    
}
let obj = MiFuncion([3,1,5,4,2]);
console.log(obj);
