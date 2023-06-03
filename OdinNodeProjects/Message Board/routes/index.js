var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
   {
    text: "Hello Bella!",
    user: "Isabella",
    added: new Date()
  }
];
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board',messages:messages });
});
router.get("/new", function (req, res,next){
  res.render('form')
})
router.post("/new", function(req, res, next){
  let authorText = req.body.author;
  let messageText = req.body.messageText;
  messages.push({text: messageText, user: authorText, added: new Date()})
  res.redirect("/")

})
module.exports = router;
