import express from 'express'
import {
  loginAdmin,
  viewUsers,
  viewCandidates,
  viewRequests,
  acceptRequest,
  deleteRequests,
  addParty,
  updateParty,
  deleteParty,
  viewParties,
  addOffice,
  updateOffice,
  deleteOffice,
  viewOffices
} from '../controllers/adminController.js'

const adminRouter = express.Router()

// Login admin/:id
adminRouter.get('user/', loginAdmin)

/// View all users	user/
adminRouter.get('user/', viewUsers)

// View all candidates	politicians/
adminRouter.get('politicians/', viewCandidates)

// View candidate requests	requests/
adminRouter.get('requests/', viewRequests)

// Approve request	politicians/
adminRouter.post('politicians/', acceptRequest)

// Remove request	request/:id
adminRouter.delete('request/:id', deleteRequests)

// Create political Parties	parties/
adminRouter.post('parties/', addParty)

// Edit a political party	parties/:id
adminRouter.put('parties/:id', updateParty)

// Delete a political party	parties/:id
adminRouter.delete('parties/:id', deleteParty)

// View all parties	parties/
adminRouter.get('parties/', viewParties)

// Create government office	positions/
adminRouter.post('positions/', addOffice)

// Edit government office	positions/:id
adminRouter.put('positions/:id', updateOffice)

// Remove government office	positions/:id
adminRouter.delete('positions/:id', deleteOffice)

// View all government office	positions/
adminRouter.get('positions/', viewOffices)

export default adminRouter
