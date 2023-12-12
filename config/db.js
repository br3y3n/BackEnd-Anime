import mongoose from "mongoose";

const connectionDB= async()=>{
    try {
      await mongoose.connect('mongodb://127.0.0.1/proyectAnime')
        console.log("connection established")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectionDB;