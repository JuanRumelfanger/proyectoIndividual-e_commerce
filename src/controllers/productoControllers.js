module.exports = {
    list:(req,res)=>{
        res.send("Listado de productos");
    },
    detailProduct:(req,res)=>{
        res.send("Seccion detalle del producto");
    },
    searchResults:(req,res)=>{
        res.send("Seccion de busqueda y filtros");
    }
}

