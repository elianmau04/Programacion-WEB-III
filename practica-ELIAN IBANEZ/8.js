function MiFuncion(callback){
    console.log("hola espera 2 segundos");
    
    setTimeout(() => {
        callback();
    },2000);
}
function Micallback(){
    console.log('gracias por esperar');
}
MiFuncion(Micallback);
