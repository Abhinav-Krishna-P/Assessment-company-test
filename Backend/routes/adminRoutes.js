const express=require('express')
const {registerAdmin , authAdmin}=require('../controllers/adminControllers')
const router= express.Router();
router.route('/').post(registerAdmin)
router.post('/login',authAdmin)

module.exports=router