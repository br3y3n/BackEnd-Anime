import express  from "express";
import { addAnime, modifyAnime, readAnime, delateAnime } from "../controller/animeController.js";

const router= express.Router();
router.post('/',addAnime)
router.patch('/modifyAnime/:id', modifyAnime)
router.get('/readAnime', readAnime)
router.delete('/delate/:id', delateAnime )
export default router