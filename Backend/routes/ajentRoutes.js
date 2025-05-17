const express=require('express')
const {registerAjent,authAjent}=require('../controllers/ajentControllers')
const router= express.Router();
router.route('/').post(registerAjent)
router.post('/login',authAjent)

module.exports=router