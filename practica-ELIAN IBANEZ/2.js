function MiFuncion(texto){
    Cvacia='';
    for (let i = texto.length-1; i >= 0; i--) {
        Cvacia+=texto[i];    
    }
    return(Cvacia);
}
let cad = MiFuncion('elian')
console.log(cad);
