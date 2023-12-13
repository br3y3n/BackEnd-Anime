import express  from "express";
import { addCharacter, modifyCharacter, readCharacter, delateCharacter } from "../controller/characterController.js";

const router= express.Router();
router.post('/',addCharacter)
router.patch('/modifyCharacter/:id', modifyCharacter)
router.get('/readCharacter', readCharacter)
router.delete('/delate/:id', delateCharacter)
export default router