import Party from '../models/party.model.js'
import Politician from '../models/politician.model.js'
import Position from '../models/position.model.js'
import Requests from '../models/request.model.js'
import Users from '../models/user.model.js'

// Login
export async function loginUser(req, res) {
  res.send(req.body)
}

// SignUp
export async function signupUser(req, res) {
  res.send(req.body)
}

// Vote
export async function userVote(req, res) {
  console.log(req.body)
  try {
    let vote = await Position.create(req.body)
    if (vote) {
      res.status(200).json({
        success: true,
        message: 'Vote sent successfully',
        data: vote
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Vote could not be sent at this time'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Oopss! Something is wrong...'
    })
  }
}

// View candidates
export async function UserViewcandidates(req, res) {
  try {
    let votedcandidates = await Politician.findAll()
    if (votedcandidates) {
      res.json({
        success: true,
        message: 'Candidates records retrieved successfully',
        data: allmembers
      })
    } else {
      res.json({
        success: true,
        message: 'No Candidate found records found.'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Oopss! Something is wrong...'
    })
  }
}

// View past votes
export async function viewVotes(req, res) {
  try {
    let pastvotes = await Position.findAll()
    if (pastvotes) {
      res.json({
        success: true,
        message: 'Candidates records retrieved successfully',
        data: allmembers
      })
    } else {
      res.json({
        success: true,
        message: 'No Candidate found records found.'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Oopss! Something is wrong...'
    })
  }
}
