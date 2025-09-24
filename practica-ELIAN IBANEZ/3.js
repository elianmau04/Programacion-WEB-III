function MiFuncion(areglo){
    let pares=[],impares=[];

    for (let i = 0; i < areglo.length; i++) {
        if (areglo[i]%2==0) {
            pares.push(areglo[i]);
        } else {
            impares.push(areglo[i]);
        }
    }
    return{pares,impares}
}
let obj = MiFuncion([1,2,3,4,5]);
console.log(`pares: [${obj.pares}], impares: [${obj.impares}]`);
                 