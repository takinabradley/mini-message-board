var express = require('express');
var router = express.Router();
const messages = require('../models/messages')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new')
});

router.post('/', (req, res) => {
  const userName = req.body.userName
  const message = req.body.messageContent

  messages.push({text: message, user: userName, added: new Date()})
  res.redirect('/')
})

module.exports = router;
