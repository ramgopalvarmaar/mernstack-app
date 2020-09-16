var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notesSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    noteTitle: { type: String},
    noteDesc: { type: String},
    isShared: { type: Boolean, default:false},
    sharedWith: { type: Array }
});

//Create a model
var notesModel = mongoose.model('notes', notesSchema);
var note1 = new notesModel({ noteTitle: 'MyNotes', noteDesc: 'Test description of the notes'});

//Using inbuilt save function from model
note1.save(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("Notes Saved successfully");
    }
});

notesModel.find(function(err, data){
    console.log(data);
});

module.exports = mongoose.model('Note', notesSchema);