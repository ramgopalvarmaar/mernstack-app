const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


app.get(require('../routes/route1.js'));

app.set('port',process.env.PORT || 4000);
// listen for requests
 app.listen(app.get('port'), function() {
    console.log('listening');
});
