let express = require("express")
let authRouter = express.Router()
authRouter.get('/club', (req, res) => {
    res.render('club')
  })
  module.exports = authRouter