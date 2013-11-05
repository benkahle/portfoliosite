

exports.profile = function( req, res ){
    res.render('profile', {title: "Ben Kahle | Profile"});
};

exports.resume = function( req, res ){
    res.render('resume', {
    		title: "Ben Kahle | Resume",
    		experiences: [
    					{
			    			location: "LearnBIG – Seattle, WA",
			    			title: "Lead Software Engineer",
			    			date: "June 2013 – Present",
			    			text: [
			    				"Maintained and developed features for an education based website (www.learnbig.com) using Agile development methodology including building server infrastructure and backend tools on Windows and Linux servers",
			    				"Mentored a new engineer in software development and data management techniques",
			    				"Website development in C#, JavaScript, MySQL, using an MVC framework as well as experience with Node.js",
			    				"Backend development in Python and C++"
			    				]
		    			},
		    			{
		    				location: "ProperSee, Inc. – Boston, MA",
		    				title: "Software Engineering Intern",
		    				date: "March 2013 – June 2013",
		    				text: [
		    					"Developed and implemented new features for the mobile application Iggy using the Ruby-on-Rails framework"
		    				]	
		    			},
		    			{
		    				location: "Olin College – Needham, MA",
		    				title: "Sailbot: Autonomous Robotic Sailboat – Club Project",
		    				date: "September 2012 – March 2013",
		    				text: [
		    					"Researched and utilized composite fabrication techniques to construct boat hull",
		    					"Worked towards long term goal of building a robot capable of crossing the Atlantic autonomously"
		    				]
		    			},
		    			{
		    				location: "Self Employed – Seattle, WA",
		    				title: "Architectural Rendering",
		    				date: "January – August 2012",
		    				text: [
		    					"Modeled, textured, and rendered visualizations of Pike Station, a Seattle apartment development by Diluvian LLC",
		    					"Used software Blender and GIMP to translate floor plans into 3D models and rendered scenes"
		    				]
		    			},
		    			{
		    				location: "Fred Hutchinson Cancer Research Center – Seattle, WA",
		    				title: "Intern in Clinical Research Data Systems Department",
		    				date: "March – June 2012",
		    				text: [
		    					"Developed automated active census of cancer patients in Seattle Cancer Care Alliance network",
		    					"Designed census criteria and utilized Microsoft Access and Excel with SQL and Visual Basic to manipulate data and produce final reports"
		    				]
		    			},
		    			{
		    				location: "Temple Beth Am – Seattle, WA",
		    				title: "Assistant Director, Teachers' Aide Program",
		    				date: "Septermber 2010 – June 2012",
		    				text: [
		    					"Worked with a team of school administration and student leaders to manage over a hundred 13-18 year old teachers’ aides in a school of over 600 students",
								"Developed and conducted training programs and special events; recruited, interviewed, and placed new employees; served as liaison between school administration and teachers, teachers’ aides, and students"
		    				]	
		    			}
		    		],
    		educations: {

    			}
    		});
};

exports.projects = function( req, res ){
    res.render('projects', {title: "Ben Kahle | Projects"});
};

exports.contact = function( req, res ){
    res.render('contact', {title: "Ben Kahle | Contact"});
};

