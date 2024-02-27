var express = require('express');
var router = express.Router();
const handleErrors = (err) => {
     console.error(err.message)
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/signup', (req, res) => {
  res.render('signup')
})
router.post('/signup', (req, res) => {
  const {fullname, username, password} = req.body
  console.log(fullname, username, password);
  
})
router.get('/club', (req, res) => {
  res.render('club')
})
router.get('/codeinput', (req, res) => {
  res.render('codeinput')
})
module.exports = router;
