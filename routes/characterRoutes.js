import express  from "express";
import { addCharacter, modifyCharacter, readCharacter, deleteCharacter } from "../controller/characterController.js";

const router= express.Router();
router.post('/',addCharacter)
router.patch('/modifyCharacter/:id', modifyCharacter)
router.get('/readCharacter/:id', readCharacter)
router.delete('/delete/:id', deleteCharacter)
export default router