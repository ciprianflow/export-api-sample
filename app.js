var express = require('express');

var app = express();
app.use(express.json())


app.post('/', function (req, res) {

	console.log(req.body);
	res.setHeader('Content-Type', 'application/json');

	res.end(
    JSON.stringify({
		"challenge": req.body.challenge
	}));
 })

var server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

console.log('Navigate to http://localhost:4000/.');