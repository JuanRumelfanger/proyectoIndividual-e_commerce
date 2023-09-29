module.exports = {
    login:(req,res)=>{
        res.send("Seccion del login");
    },
    seasion:(req,res)=>{
        console.log(req.body)
    },

    register:(req,res)=>{
        res.send("Seccion de registro");
    },
    addUser:(req,res)=>{
        console.log(req.body);
    },
    trolley:(req,res)=>{
        res.send("Seccion del carrito");
    },
    wishList:(req,res)=>{
        res.send("Seccion del deseados");
    },
}