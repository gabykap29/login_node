const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const conection = require('../database/db');
const {promisify} = require('util');
const { error } = require('console');

//procedimiento de registro

exports.register = async(req,res)=>{
    try {
        const firsName = req.body.firsName;
        const lastName = req.body.lastName;
        const user = req.body.user;
        const pass = req.body.pass;
        let passHash = await bcryptjs.hash(pass,8);
        // console.log(passHash);
        conection.query('INSERT INTO users SET ?',{firsName:firsName, lastName:lastName, user:user, pass:passHash}, (error,results)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/login')
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (res,req)=>{
    try {
        const user = req.body.user;
        const pass = req.body.pass;
        // console.log(user + '-'+pass);
        if(!user || !pass){
            res.render('login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y contraseña",
                alertIcon:'info',
                showConfirmButton: true,
                timer:false,
                ruta:'login'
            })
        }
    } catch (error) {
        console.log(error)
    }
}