var express = require('express'),
	app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('Server listening to PORT: ' + PORT);
});