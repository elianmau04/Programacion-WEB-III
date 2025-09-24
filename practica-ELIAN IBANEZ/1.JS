function MiFuncion(texto){
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    for (let j = 0; j < texto.length; j++) {
        if (texto[j]=='a') { a++;}
        if (texto[j]=='e') { e++;}
        if (texto[j]=='i') { i++;}
        if (texto[j]=='o') { o++;}
        if (texto[j]=='u') { u++;}
    }
    
    return {a, e, i, o, u};
}
let obj = MiFuncion('euforia');
console.log(obj);

