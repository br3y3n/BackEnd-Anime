import express from "express";
import cors from"cors";
import connectionDB from "./config/db.js";
import animeRoutes from "./routes/animeRoutes.js";

const app= express();
app.use(express.json())
connectionDB();
const allowedDomains=["http://localhost:5173"]
const corsOptions={
    origin: function(origin, callback){
        if(allowedDomains.indexOf(origin) !== 1){
            callback(null, true)
        }else{
            callback(new Error("No permitido por cors"))
        }
    }
}
app.use(cors(corsOptions))
app.use('/api/Anime', animeRoutes)

const PORT=4000

app.listen(PORT, ()=>{
    console.log("server working properly")
})