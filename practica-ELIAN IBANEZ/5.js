function MiFuncion(cadena){
    let cVacia = '';
    for (let i = cadena.length-1; i >=0; i--) {
        cVacia+=cadena[i];
    }
    if (cadena==cVacia) 
        {return true;
    }
    else{ 
        return false;
    } 
}
let band = MiFuncion('oruro');
console.log(band);
let band1 = MiFuncion('holas');
console.log(band1);