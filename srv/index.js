require('dotenv').config()
// load up the express framework and body-parser helper
const express = require('express');
var path = require('path');
var cors = require("cors");

// create an instance of express to serve our end points
const app = express();
// app.use('/', express.static(path.join(__dirname + './../')))


app.use(cors());
// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + './../public_html/index.html'));
// });


// healthcheck
app.use('/api/healthcheck', require('express-healthcheck')());

// const expressip = require('express-ip');
// app.use(expressip().getIpInfoMiddleware);


// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app);

// finally, launch our server on port 3001.

const port = process.env.PORT || 3000;
app.set('port', port);

// Listen on the specified port
app.listen(port, function() {
  console.log(process.env.NODE_ENV + ' client server listening on port ' + port);
});
