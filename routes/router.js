const express = require('express');
const router = express.Router();


const conection = require('../database/db');
const res = require('express/lib/response');

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})
router.get('/cargar',(req,res)=>{
    res.render('cargar')
})

module.exports = router;