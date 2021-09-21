var express = require('express');
var router = express.Router();
//Require a track model

/* GET home page. */
router.get('/', function(req, res, next) {
  // skill.find{}, function(err, skills)
  res.status(200).json([
    {name:"eminem", album:"kamikaze"},
    {name:"black pumas", album:"black pumas"},
    {name:"k.dot", album:"damn"},
  ]);
});

module.exports = router;
