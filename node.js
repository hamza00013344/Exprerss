const express=require('express');

const App=express();

App.use('/' , (req,res)=>{
    res.json({massege:'juice pila do'});
} )

App.listen(8003, ()=>{
    console.log('this server will run on http://localhost:8003')
})

