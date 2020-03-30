const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req,res)=>{
    const response =await fetch('http://localhost:3000/api/projects/');
    const projects = await response.json();
    console.log(projects);
    res.send(projects);
})

module.exports = router;