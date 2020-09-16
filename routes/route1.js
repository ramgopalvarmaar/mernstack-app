module.exports = (app) => {
    const notes = require('../controllers/note.controllers.js');

// Create a new Note
app.post('/team-collaborator/usernotes', notes.create);

app.get('/notes', notes.findAll);

 // Retrieve a single Note with noteId
app.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
app.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
app.delete('/notes/:noteId', notes.delete);


}