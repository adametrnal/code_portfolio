//Test if we are on a mobile device
function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/))
    );
}

jQuery(document).ready(function(){
	var textContainer = jQuery(".bannerText");
	var bannerBG = jQuery(".banner");

	//Prevent text from appearing when a refresh occurs and the page is partially scrolled
    // textContainer.css({
    //   'opacity' : 0
    // });

	if(!isMobile()) {

		textContainer.css({'position': 'fixed'});
		bannerBG.css({'background-attachment': 'fixed',
					  'background-position':  'center 30px',
					 });

	    jQuery(window).scroll(function() {
	        var scrollPos = jQuery(this).scrollTop();

		    //Scroll and fade out the banner text
		    textContainer.css({
		      'margin-top' : -(scrollPos/3)+"px",
		      'opacity' : 1-(scrollPos/300)
		    });

		    //Scroll the background of the banner
		    bannerBG.css({
		      'background-position' : 'center ' + (-scrollPos/8 + 30)+"px"
		    });  
	    });
	}
	//Else if we are on a mobile device
	 // else {
	 // 	//Fix Menu icon sizing issue on mobile devices  
	 // 	jQuery('nav label').css({'font-size': '1.1em'});
	 // }
});
