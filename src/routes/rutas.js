const { Router } = require('express');
const router = Router();

const asesores = require('./data.json');
console.log(asesores);

router.get('/',(req,res) => {
    res.json(asesores);
});

router.get('/:id',(req,res) => {
   const {id}= req.params;
asesores.forEach(asesor => {
    if(asesor.id == id){
        res.json(asesor);
        console.log(asesor.nombre);
    }
});


   console.log(id);
});

router.post('/', (req,res) =>{
    const{nombre,materia} = req.body;
    console.log(nombre);
if(nombre && materia){
const id = asesores.length+1;
const nuevoasesor = {...req.body, id};
asesores.push(nuevoasesor);
//console.log(nuevoasesor);


    res.status(200).json(asesores);
}else{
    res.status(500).json({error:'no data'})
    res.send("Error404");
}
    
});

module.exports = router;