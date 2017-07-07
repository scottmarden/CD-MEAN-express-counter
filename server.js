let express = require("express");

let session = require('express-session');

let app = express();

app.use(session({secret: 'codingdojorocks'}));

let path = require("path");

let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

require("./server/config/routes.js")(app);

app.listen(3316, ()=> {
	console.log("App listening on port 3316")
})
