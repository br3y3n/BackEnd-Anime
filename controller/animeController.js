import anime from "../models/Anime.js";

const addAnime= async(req, res)=>{
    const {name}=req.body;
    const existAnime= await anime.findOne({name})
    if(existAnime){
        const error= new Error("anime already exists")
        return res.status(400).json({msg: error.message})
    }
    try {
        const Anime = anime(req.body);
        const animeSave= await Anime.save()
        res.json(animeSave)
    } catch (error) {
        console.log(error)
    }
}

const modifyAnime=async( req, res)=>{
    const {id}= req.params;
    const {name, genre, director, photo, studio}=req.body
    const Anime= await anime.findById(id)
    if(!Anime){
        const error = new Error("The anime is not found")
        return res.status(400).json({msg: error})
    }

    try {
        Anime.name= name;
        Anime.genre= genre;
        Anime.director= director;
        Anime.photo= photo;
        Anime.studio= studio
        await Anime.save()
        res.json({msg: "campos modificados correctamente"})
    } catch (error) {
        console.log(error)
    }
}
const readAnime= async(req, res)=>{
    try {
    const Anime= await anime.find({})
    res.send({Anime}) 
} catch (error) {
    res.status(500).send('Error al obtener los Animes')

    console.log(error)
}
}

const delateAnime=async (req, res)=>{
    const {id}= req.params

    try {
        const deletedAnime = await anime.findByIdAndDelete(id);
        if (!deletedAnime) {
            return res.status(404).json({ msg: "Anime not found" });
        }
        res.json({ msg: "Anime deleted successfully" });
    } catch (error) {
        console.log(error)
    }
}

export{
    addAnime,
    modifyAnime,
    readAnime,
    delateAnime
}