

exports.profile = function( req, res ){
    res.render('profile', {Title: "Ben Kahle | Profile"});
};

exports.resume = function( req, res ){
    res.render('resume', {Title: "Ben Kahle | Resume"});
};

exports.projects = function( req, res ){
    res.render('projects', {Title: "Ben Kahle | Projects"});
};

exports.contact = function( req, res ){
    res.render('contact', {Title: "Ben Kahle | Contact"});
};

