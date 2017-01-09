var express = require("./node_modules/express"),
	ssi = require("./node_modules/ssi"),
	path = require("path"),
	fs = require("fs"),
	app = express(),	
	root = __dirname + "/";
	
var parser = new ssi(root, "", "");
	
// Handle server side includes for html files

app.use(function(req,res,next) {
	var filepath = root + (req.path == "/" ? "/index.html" : req.path);

	if(fs.existsSync(filepath)) {		
		var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		
		if(filename.indexOf('.shtml') > -1) {
			res.type('text/html');
			res.send(parser.parse(filepath, fs.readFileSync(filepath, {encoding: "utf8"})).contents);	
		}
		else {
			res.type(filename);
			res.sendFile(filepath);
		}
	} else {
		next();
	}
});

module.exports = app;