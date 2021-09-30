import express from 'express'
import {
  loginUser,
  signupUser,
  userVote,
  UserViewcandidates,
  viewVotes
} from '../controllers/userController.js'

const userRouter = express.Router()

// Login	POST	user/:id
userRouter.post('user/:id', loginUser)

// SignUp	POST	user/
userRouter.post('user/:id', signupUser)

// Vote	POST	politicians/:id
userRouter.post('user/:id', userVote)

// View candidates 	GET	politicians/
userRouter.post('user/:id', UserViewcandidates)

// View past votes	GET	user/:id
userRouter.post('user/:id', viewVotes)

export default userRouter
