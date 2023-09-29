module.exports = {
    login:(req,res)=>{
        res.send("Seccion del login");
    },
    register:(req,res)=>{
        res.send("Seccion de registro");
    },
    trolley:(req,res)=>{
        res.send("Seccion del carrito");
    },
    wishList:(req,res)=>{
        res.send("Seccion del deseados");
    },
}