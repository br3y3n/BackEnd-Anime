import mongoose from 'mongoose'

const characterSchema= mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim: true 
    },
    description:{
        type:String,
        require: true,
        trim: true
    },
    role_history:{
        type:String,
        require: true,
        trim: true
    },
    photo:{
        type:String,
        require:false,
        trim: true
    },
     
})

const Character= mongoose.model("Character", characterSchema)

export default Character;