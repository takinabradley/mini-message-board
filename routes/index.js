var express = require('express');
var router = express.Router();
const messages = require('../models/messages')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages });
});

module.exports = router;
