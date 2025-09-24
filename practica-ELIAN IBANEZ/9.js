const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('esperaste 3 segundos');
    },3000);
});

promesa
    .then(res => console.log(res))
    .catch(err => console.error(err));