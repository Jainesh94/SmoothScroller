$(document).ready(function(){ //wait for everything to load before running functions
   
    $('.link').click(function(e) { // First part is selector: $('.blah') Second part is a jquery method/function: .click()
    	var clicked_link="."+$(this).text().toLowerCase().replace(/ /g,''); // Creates a variable  which is equal to a string with a period and concatenate the text 
    	//from the link that was clicked. Taking all text and turning into lower case using .toLowerCase(). 
    	//Using replace function to remove white space
    	$('html,body').animate({ scrollTop: $(clicked_link).offset().top}, 1000); //Selects html/body element(s)
    	//We use the jquery animate function. ScrollTop is determined by the distance between the top of the page and the top of the current view
    	//selects the variable clicked_link
    	//offset gives coordinates of the first element matched i.e 1000px down and 500px to the left
    	//.top produces the number created by offset
    	//1000 = time in milliseconds for the animation
        e.preventDefault(); //prevents default behaviour e.g a link going to another page

    });

});

// .addClass() .removeClass()