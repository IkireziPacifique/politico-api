import Admin from '../models/admin.model.js'

// admin login
export async function loginAdmin(req, res) {
  res.send(req.body)
}

// View all users
export async function viewUsers(req, res) {
  res.send(req.body)
}

// View all candidates
export function viewCandidates(req, res) {
  res.send(req.body)
}

// View candidate requests
export function viewRequests(req, res) {
  res.send(req.body)
}

// Approve request
export function acceptRequest(req, res) {
  res.send(req.body)
}

// Remove request
export function deleteRequests(req, res) {
  res.send(req.body)
}

// Create political Parties
export function addParty(req, res) {
  res.send(req.body)
}

// Edit a political party
export function updateParty(req, res) {
  res.send(req.body)
}

// Delete a political party
export function deleteParty(req, res) {
  res.send(req.body)
}

// View all parties
export function viewParties(req, res) {
  res.send(req.body)
}

// Create government office
export function addOffice(req, res) {
  res.send(req.body)
}

// Edit government office
export function updateOffice(req, res) {
  res.send(req.body)
}

// Remove government office
export function deleteOffice(req, res) {
  res.send(req.body)
}

// View all government office
export function viewOffices(req, res) {
  res.send(req.body)
}
