/*
	define bio object
*/
var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
			"mobile": "650-555-555",
			"email": "john@example..com",
			"github": "johndoe",
			"twitter": "@johndoe",
			"location": "San Francisco"
		},
	"welcomeMessage": "lorem ipsum dolor sit amet etc ect etc.",
	"skills": [
		"awesomeness",
		"delivering things",
		"cryogenic sleep",
		"saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

/*
	define display function for bio object
*/
bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var fromattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(fromattedTwitter);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(fromattedTwitter);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMSG = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMSG);

	if(bio.skills.length > 0) {
		var formattedSkill;
		$("#header").append(HTMLskillsStart);
		
		for(skill in bio.skills) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

/*
	define work object
*/
var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Brooklyn, NY",
			"dates": "January 3000 - Future",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut erat nec felis faucibus vehicula. Quisque bibendum metus augue, vel tempus est pellentesque sed. Maecenas sit amet neque ut tortor accumsan posuere. Pellentesque velit ex, eleifend luctus viverra ac, condimentum quis risus. Cras ac bibendum elit. Mauris vel justo augue."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Manhattan, NY",
			"dates": "1998 - December 31, 1999 - Future",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam et urna non tristique. Donec ac erat et ante posuere hendrerit. Donec nec mollis ligula."
		}
	]
}

/*
	define display function for work object
*/
work.display = function() {

	if(work.jobs.length > 0) {
		var formattedEmployer;
		var formattedTitle;
		var formattedEmployerTitle;
		var formattedDate;
		var formattedDescripton;
		var formattedLocation;

		for(var job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
			formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
			formattedEmployerTitle = formattedEmployer + formattedTitle;
			formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDate);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

/*
	define projects object
*/
var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis ante quis suscipit feugiat. In vitae vulputate felis, sed lacinia odio. Fusce condimentum dolor lacus, ut sagittis arcu ultrices id.",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}
	]
}

/*
	define display function for projects object
*/
projects.display = function () {
	if(projects.projects.length > 0) {
		var formattedProjectTtile;
		var formattedProjectDates;
		var formattedProjectDescription;
		var formattedProjectImage;
		
		for(var project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			formattedProjectTtile = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTtile);

			formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);

			formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if(projects.projects[project].images.length > 0){
				for(var image in projects.projects[project].images) {
					formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}


		}
	}
}

/*
	define education object
*/
var education = {
	"schools": [
		{
			"name": "Nova Southeastern University",
			"location": "Fort Lauderdale, FL",
			"degree": "Masters",
			"majors": [
					"CS"
			],
			"dates": "2013",
			"url": "http://example.com"
		},
		{
			"name": "Eckard College",
			"location": "Saint Petersburg, FL",
			"degree": "BA",
			"majors": [
					"CS"
			],
			"dates": 2003,
			"url": "http://example.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

/*
	define display function for education object
*/
education.display = function() {
	if(education.schools.length > 0) {
		var formattedSchoolName;
		var formattedSchoolDegree;
		var formattedSchoolDates;
		var formattedSchoolLocation;

		$("#education").append(HTMLschoolStart);

		for(var school in education.schools){
			formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);

			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);

			formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry").append(formattedSchoolDates);

			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry").append(formattedSchoolLocation);

			if(education.schools[school].majors.length > 0) {
				var formattedSchoolMajor;

				for(var major in education.schools[school].majors){
					formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
					$(".education-entry").append(formattedSchoolMajor);
				}
			}
		}

		if(education.onlineCourses.length > 0) {
			var formattedOnlineTitle;
			var formattedOnlineSchool;
			var formattedOnlineDates;
			var formattedOnlineURL;

			$(".education-entry").append(HTMLonlineClasses);
			for(var onlineClass in education.onlineCourses){
				formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title);
				
				formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);
				$(".education-entry").append(formattedOnlineTitle + formattedOnlineSchool);

				formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].dates);
				$(".education-entry").append(formattedOnlineDates);

				formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url);
				$(".education-entry").append(formattedOnlineURL);
			}
		}
	}
}

/*
	add map to resume
*/
function displayMap() {
	$("#mapDiv").append(googleMap);
}

/*
	render resume
*/
bio.display();
work.display();
projects.display();
education.display();
displayMap();