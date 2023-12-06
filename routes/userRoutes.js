import express from 'express'
const router=express.Router()
import { registerController,loginController,userDetailsController } from '../controller/userController.js'
import { requireSignIn } from '../middleware/authMiddleware.js'

router.post('/register',registerController)
router.post('/login',loginController)
router.get('/user-details/:userId', userDetailsController);

export default router;