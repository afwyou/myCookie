var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res) {
  req.session.username = req.body.username
  req.session.email = req.body.email
  res.redirect('/')

})
module.exports = router;
