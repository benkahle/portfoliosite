fs = require('fs');

exports.index = function(req, res){
    fs.readFile('./views/index.html', function (err, html) {
        if (err) {
        throw err; 
    }
	    res.writeHead( 200, { 'content-type': 'text/html' } );
	    res.write( html );
	    res.end();
	 });
};
