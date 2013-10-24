

exports.index = function( req, res ){
    res.render('index', {Title: "Ben's site", message: "Hello World"});
};