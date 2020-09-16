const User  = require('../models/userModel');
const Note = require('../models/notesModel');

// const user = [
//     {userid:1, _id:1, notes:[
//         {noteTitle:'FirstNote',
//         noteDesc:'This is a sample note.'}
//       ]
//     },
//     {userid:2, _id:2, notes:[
//         {noteTitle:'SecondNote',
//         noteDesc:'This is a second sample note.'}
//       ]
//     },
//     {userid:3, _id:3, notes:[
//         {noteTitle:'ThirdNote',
//         noteDesc:'This is a third sample note.'}
//       ]
//     }
// ]

// const note = [
//     {_id:1,
//     noteTitle:'FirstNote',
//     noteDesc:'This is a sample note.'
//     },
//     {_id:2,
//     noteTitle:'SecondNote',
//     noteDesc:'This is a second sample note.'  
//     },
//     {_id:3,
//     noteTitle:'ThirdNote',
//     noteDesc:'This is a third sample note.'
//     }
// ]


// Create and Save a new Note
exports.create = (req, res) => {
 // Validate request
 if(!req.body.userid) {
    return res.status(400).send({
        message: "Userid cannot be empty"
    });
}

//Create a User
const user = new User({
    userid : req.body.userid,
    _id : req.body.id,
    notes : req.body.notes
});

//Create a Note
const note = new Note({
     _id : req.body.id,
     noteTitle: req.body.notes[0].title,
     noteDesc: req.body.notes[1].noteDesc
});


// Save User in the database
user.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
    });
});

note.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
    });
});


exports.findAll = (req, res) => {
  note.find()
  .then(notes => {
      res.send(notes);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });
};


exports.findOne = (req, res) => {
  note.findById(req.params.id)
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Note not found with id " + req.params.id
          });            
      }
      res.send(note);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Note not found with id " + req.params.id
          });                
      }
      return res.status(500).send({
          message: "Error retrieving note with id " + req.params.id
      });
  });
};


// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  
  note.findByIdAndRemove(req.params.id)
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Note not found with id " + req.params.id
          });
      }
      res.send({message: "Note deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Note not found with id " + req.params.id
          });                
      }
      return res.status(500).send({
          message: "Could not delete note with id " + req.params.id
      });
  });
};

// const user1 = {
//     userid:req.body.userid, 
//     _id:req.body.id,
//      notes:req.body.notes
//  };

//  const note1 = {
//     _id : req.body.id,
//     noteTitle: req.body.notes[0].title,
//     noteDesc: req.body.notes[1].noteDesc
//  };
//  user.push(user1);
//  note.push(note1);
//  res.send(user1, note1);


};
