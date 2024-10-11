function pedirComida (){
    return new Promise((resolve, reject) =>{
        let exito= true;
            if(exito){
                resolve("Su pedido ha sido un exito")
            } else {
                reject("Ha ocurrido un error en el proceso")
            }
    })
}

pedirComida()
.then((pedido)=> {
    console.log(pedido)
})
.catch((error)=>{
    console.log(error)
})