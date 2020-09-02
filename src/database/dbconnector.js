//Import the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Set up mongo connection with mongo db which is running in the cloud
//Db name is - pentagram-mongodb
//Collections would be users and notes 
var mongoDB = 'mongodb+srv://admin:admin@cluster0.tymh2.mongodb.net/pentagram-mongodb?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* ----------------------------------Code for User collection and schema starts here--------------------------- */

var userSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    //userid: { type: String, required: true, trim: true, index: true, unique: true},
    userid: { type: String, required: true, trim: true},
    notes: { type: Array }
});

//Create a model
var userModel = mongoose.model('user', userSchema);
var user1 = new userModel({ userid: 'ram'});

//Using inbuilt save function from model
user1.save(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("User Saved successfully");
    }
});

userModel.find(function(err, data){
    console.log(data);
});

/* ----------------------------------Code for Notes collection and schema starts here--------------------------- */

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