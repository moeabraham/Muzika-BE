var express = require('express');
var router = express.Router();
var musicsCtrl = require('../controllers/musics')
//Require a track model

/* GET home page. */
router.get('/', musicsCtrl.index );


router.post('/', musicsCtrl.create )

router.put('/:id', musicsCtrl.update)
router.delete('/:id', musicsCtrl.delete);


// function isAuthenticated(req, res, next){
//     if (!req.query.uid) return res.status(401).json({error: 'user must be Logged in '})
//     next();
// }



module.exports = router;
