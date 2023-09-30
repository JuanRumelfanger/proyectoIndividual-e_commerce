module.exports = {
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
}