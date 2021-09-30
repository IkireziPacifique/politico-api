import express from 'express'
import adminRouter from './adminRoute.js'
import userRouter from './userRoute.js'

const router = express.Router()

router.use('', adminRouter)
router.use('', userRouter)

export default router
