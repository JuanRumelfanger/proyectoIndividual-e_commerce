module.exports = {
    listUser:(req,res)=>{
        res.send("Listado de usuarios")
    },
    login:(req,res)=>{
        res.render('login');
    },
    seasion:(req,res)=>{
      res.send(req.body)
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
    profile:(req,res)=>{
        res.send("Perfil del usuario numero "+req.params.id)
    }
}