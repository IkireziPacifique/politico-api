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
  res.send(req.body)
}

// View candidates
export async function UserViewcandidates(req, res) {
  res.send(req.body)
}

// View past votes
export async function viewVotes(req, res) {
  res.send(req.body)
}
