

exports.index = function( req, res ){
    res.render('index', {Title: "Ben Kahle | Profile", message: "Hello World"});
};