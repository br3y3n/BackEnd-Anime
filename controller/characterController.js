import character from "../models/Character.js";

const addCharacter= async(req, res)=>{
    const {name}=req.body;
    const existCharacter= await character.findOne({name})
    if(existCharacter){
        const error= new Error("character already exists")
        return res.status(400).json({msg: error.message})
    }
    try {
        const Character = character(req.body);
        const characterSave= await Character.save()
        res.json(characterSave)
    } catch (error) {
        console.log(error.message)
    }
}

const modifyCharacter=async( req, res)=>{
    const {id}= req.params;
    const {name, description, role_history, photo}=req.body
    const Character= await character.findById(id)
    if(!Character){
        const error = new Error("The anime is not found")
        return res.status(400).json({msg: error})
    }

    try {
        Character.name= name;
        Character.description= description;
        Character.role_history= role_history;
        Character.photo= photo;
       
        await Character.save()
        res.json({msg: "campos modificados correctamente"})
    } catch (error) {
        console.log(error)
    }
}
const readCharacter= async(req, res)=>{
    const {id}= req.params
    try {
    const Character= await character.findById(id)
    res.json({Character}) 
} catch (error) {
    res.status(500).json('Error al obtener los personajes')

    console.log(error)
}
}

const deleteCharacter=async (req, res)=>{
    const {id}= req.params

    try {
        const deletedCharacter = await character.findByIdAndDelete(id);
        if (!deletedCharacter) {
            return res.status(404).json({ msg: "character not found" });
        }
        res.json({ msg: "chatacter deleted successfully" });
    } catch (error) {
        console.log(error)
    }
}

export{
    addCharacter,
    modifyCharacter,
    readCharacter,
    deleteCharacter
}