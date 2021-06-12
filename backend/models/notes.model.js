const mongoose=require("mongoose")

const Schema=mongoose.Schema

const noteSchema=new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    text:{
        type: String,
        required: true,
        trim: true,
    },

},
{
    timestamps: true,
})

const Note=mongoose.model('Note',noteSchema)

module.exports=Note;