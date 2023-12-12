import mongoose from 'mongoose'

const animeSchema= mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim: true 
    },
    genre:{
        type:String,
        require: true,
        trim: true
    },
    director:{
        type:String,
        require: true,
        trim: true
    },
    photo:{
        type:String,
        require:false,
        trim: true
    },
    studio:{
        type:String,
        require: true,
        trim: true
    },
    
})

const Anime= mongoose.model("Anime", animeSchema)

export default Anime;
