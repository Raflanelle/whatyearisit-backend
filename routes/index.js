var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET /year renvoie l'année
router.get('/year', (req, res) => {
  const Year = new Date().getUTCFullYear();
  res.json({year: Year});
})

module.exports = router;
