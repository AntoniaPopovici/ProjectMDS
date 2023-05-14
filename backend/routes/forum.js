import express from "express";
import {newpost, newanswer, viewforum, viewforumanswers} from "../controllers/forum.js"

const router = express.Router()

router.post('/newpost', newpost)
router.post('/newanswer', newanswer)
router.get('/viewforum', viewforum)
router.get('/viewforumanswers', viewforumanswers)

export default router;