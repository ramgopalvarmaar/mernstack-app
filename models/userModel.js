
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('User', userSchema);