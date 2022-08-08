const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req,res)=>{

    try {
        let result = await db.all();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

router.get('/:id',async(req,res)=>{
    
    try {
        let result = await db.one(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.get('/:id',async(req,res)=>{
    
    try {
        let result = await db.add(req.params.username,req.params.username);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
module.exports = router;