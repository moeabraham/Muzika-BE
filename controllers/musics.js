var Music = require('../models/music')





module.exports = {
    index,
    create,
    update,
    delete: deleteTrack
}


function index(req,res){
    Music.find({}, function(err, musics){
        res.status(200).json(musics)
    })
    
}



function create(req, res){
    Music.create(req.body, function(err, music){
        res.status(201).json(music)
    })
}

function update(req, res) {
    Music.findByIdAndUpdate(req.params.id, req.body, function (){
        index(req, res)
    })
}


function deleteTrack(req, res) {
    Music.findByIdAndDelete(req.params.id, function (){
        index(req, res)
    })
}