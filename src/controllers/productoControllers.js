module.exports = {
    list:(req,res)=>{
        res.send("Listado de productos");
    },
    detailProduct:(req,res)=>{
        res.send("Seccion detalle del producto "+req.params.id);
    },
    searchResults:(req,res)=>{
        res.send("Seccion de busqueda y filtros");
    },
    createPorduct:(req,res)=>{
        res.send("Seccion de creacion de producto")
    },
    addProduct:(req,res)=>{
        console.log(req.body);
    },
    editProduct:(req, res)=>{
        res.send("Seccion de edicion de producto "+req.params.id);
    },
    pushEdit:(req,res)=>{
        console.log(req.body);
    },
    deleteProduct:(req,res)=>{
        
    }
}

