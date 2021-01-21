'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('#testjs').click(function(e) {
		$(".jumbotron p").toggleClass("active");
		$(".jumbotron p").fadeOut();
		$("#testjs").text("Please wait...");
		$("#testjs").fadeOut();
		$(".jumbotron p").fadeIn();
		$('.jumbotron h1').text("Javascript is connected");
    });
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    // prevent the page from reloading     
    e.preventDefault();
    // In an event handler, $(this) refers to     
    // the object that triggered the event     
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}