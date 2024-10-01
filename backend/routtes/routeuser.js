const express=require('express')

const router=express.Router()
const usercontroller=require("../controller/controlleruser")
const { registerCheck,validator,loginCheck } = require('../midelwears/validatore')
const isAuth = require('../midelwears/IsAuth')
const IsAdmin=require('../midelwears/Isadmin')
const Admincontroller=require('../controller/controleadmin')

router.post('/register',registerCheck(),validator,usercontroller.register)
router.post('/login',loginCheck(),validator,usercontroller.login)

// get current user =>
router.get('/',isAuth(),usercontroller.current)

router.patch('/:id',isAuth(),usercontroller.updateuser)
router.patch('/newpassword/:id',isAuth(),usercontroller.updatepassword)

//admin Route =>
router.delete('/admin/:id',isAuth(),IsAdmin,Admincontroller.deleteuser)

module.exports=router