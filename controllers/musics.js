var Music = require('../models/music')







function index(req,res){
    Music.find({uid: req.query.uid}, function(err, musics){
        res.status(200).json(musics)
    })
    
}



function create(req, res){
    Music.create(req.body, function(err, music){
        // console.log(req.body)
        res.status(201).json(music)
    })
}

function update(req, res) {
    Music.findByIdAndUpdate(req.params.id, req.body, function (err, track){
        req.query.uid = track.uid;
        index(req, res);
    })
}


function deleteTrack(req, res) {
    Music.findByIdAndDelete(req.params.id, function (err, track){
        req.query.uid = track.uid
        index(req, res)
    })
}


module.exports = {
    index,
    create,
    update,
    delete: deleteTrack
}
