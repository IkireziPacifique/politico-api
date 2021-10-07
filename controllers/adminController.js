import Admin from '../models/admin.model.js'
import Party from '../models/party.model.js'
import Politician from '../models/politician.model.js'
import Position from '../models/position.model.js'
import Requests from '../models/request.model.js'
import Users from '../models/user.model.js'

// admin login
export async function loginAdmin(req, res) {
  try {
  } catch (err) {}
}

// View all users
export async function viewUsers(req, res) {
  try {
    let allusers = await Users.findAll()
    if (allusers) {
      res.json({
        success: true,
        message: 'Users records retrieved successfully',
        data: allusers
      })
    } else {
      res.json({
        success: true,
        message: 'No Users found records found.'
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

// View all candidates
export async function viewCandidates(req, res) {
  try {
    let allcandidates = await Politician.findAll()
    if (allcandidates) {
      res.json({
        success: true,
        message: 'Candidates records retrieved successfully',
        data: allcandidates
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

// View candidate requests
export async function viewRequests(req, res) {
  try {
    let allrequests = await Requests.findAll()
    if (allrequests) {
      res.json({
        success: true,
        message: 'Request records retrieved successfully',
        data: allrequests
      })
    } else {
      res.json({
        success: true,
        message: 'No Request found records found.'
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

// Approve request
export async function acceptRequest(req, res) {
  console.log(req.body)
  try {
    let request = await Requests.create(req.body)
    if (request) {
      res.status(200).json({
        success: true,
        message: 'Requests approved successfully',
        data: request
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Requests could not be approved at this time'
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

// Remove request
export async function deleteRequests(req, res) {
  try {
    let request = await Requests.delete({
      where: { request_id: req.params.id }
    })
    if (request) {
      res.json({
        success: true,
        message: 'Request was successfully removed',
        data: request
      })
    } else {
      res.json({
        success: true,
        message: 'Request not found.'
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

// Create political Parties
export async function addParty(req, res) {
  console.log(req.body)
  try {
    let party = await Party.create(req.body)
    if (party) {
      res.status(200).json({
        success: true,
        message: 'Party created successfully',
        data: party
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Party could not be created at this time'
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

// Edit a political party
export async function updateParty(req, res) {
  try {
    let updateparty = await Party.update(req.body, {
      where: { party_id: req.params.id }
    })
    if (updateparty) {
      res.status(200).json({
        success: true,
        message: 'Party records updated successfully',
        data: updateparty
      })
    } else {
      res.json({
        success: true,
        message: 'Party not found.'
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

// Delete a political party
export async function deleteParty(req, res) {
  try {
    let party = await Party.delete({
      where: { party_id: req.params.id }
    })
    if (party) {
      res.json({
        success: true,
        message: 'Party was successfully deleted',
        data: office
      })
    } else {
      res.json({
        success: true,
        message: 'Party not found.'
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

// View all parties
export async function viewParties(req, res) {
  try {
    let allparties = await Party.findAll()
    if (allparties) {
      res.json({
        success: true,
        message: 'Party records retrieved successfully',
        data: allmembers
      })
    } else {
      res.json({
        success: true,
        message: 'No Party found records found.'
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

// Create government office
export async function addOffice(req, res) {
  console.log(req.body)
  try {
    let office = await Position.create(req.body)
    if (office) {
      res.status(200).json({
        success: true,
        message: 'Office created successfully',
        data: office
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Office could not be created at this time'
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

// Edit government office
export async function updateOffice(req, res) {
  try {
    let updateoffice = await Member.update(req.body, {
      where: { position_id: req.params.id }
    })
    if (updateoffice) {
      res.status(200).json({
        success: true,
        message: 'Office records updated successfully',
        data: updateoffice
      })
    } else {
      res.json({
        success: true,
        message: 'Office not found.'
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

// Remove government office
export async function deleteOffice(req, res) {
  try {
    let office = await Position.delete({
      where: { position_id: req.params.id }
    })
    if (office) {
      res.json({
        success: true,
        message: 'Office was successfully deleted',
        data: office
      })
    } else {
      res.json({
        success: true,
        message: 'Office not found.'
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

// View all government office
export async function viewOffices(req, res) {
  try {
    let alloffice = await Position.findAll()
    if (alloffice) {
      res.json({
        success: true,
        message: 'Office records retrieved successfully',
        data: allmembers
      })
    } else {
      res.json({
        success: true,
        message: 'No Office found records found.'
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
