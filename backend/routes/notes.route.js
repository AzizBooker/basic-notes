const router = require("express").Router();
const Note=require('../models/notes.model')
const mongoose=require('mongoose')
router
.route('/')
.get(async function(req,res){
    if(req.query.id!==undefined){
        let note=await Note.find({_id:req.query.id})
        res.json(note)
        
    }else{
   let allNotes=await Note.find({})
    res.json(allNotes)

   
}
res.end()
    
})
.post((req,res)=>{
    console.log(req.body)
    const title=req.body.title
    const text=req.body.text


    const newNote=new Note(
       { title,text }
    )
        newNote.save()
        .then((res)=>res.json)
           .catch((err) => res.status(400).json({ err }));
res.end()
})
.put((req,res)=>{
    console.log(req.body)
    Note.findByIdAndUpdate(
        req.query.id.toString().trim(),
        req.body,
        {new:true}
        )
        .then(res=>{
            console.log(res)
        })
        res.end()
})
.delete((req,res)=>{
    Note.findByIdAndRemove(req.query.id.toString().trim(),(res)=>{
        console.log(res)
    })
    .then((res)=>{
        console.log(res)
    })
    res.end()
})

module.exports=router