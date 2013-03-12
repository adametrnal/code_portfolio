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
	var $textContainer = jQuery(".bannerText");
	var $bannerBG = jQuery(".banner");
	var $header = jQuery('.header-container');


	if(!isMobile()) {

		//We only want BG parallax on desktop because mobile devices don't get the scroll event
		$textContainer.css({'position': 'fixed'});
		$bannerBG.css({'background-attachment': 'fixed',
					  'background-position':  'center 30px',
					 });

		
		//Prevent text from appearing when a refresh occurs and the page is partially scrolled
	    if(jQuery(window).scrollTop() >  
	    	($bannerBG.height() - $header.height())){
			    $textContainer.css({
			      'opacity' : 0
			    });
		}

		//Create some parallax effects
	    jQuery(window).scroll(function() {
	        var scrollPos = jQuery(this).scrollTop();

		    //Scroll and fade out the banner text
		    $textContainer.css({
		      'margin-top' : -(scrollPos/3)+"px",
		      'opacity' : 1-(scrollPos/300)
		    });

		    //Scroll the background of the banner
		    $bannerBG.css({
		      'background-position' : 'center ' + (-scrollPos/8 + 30)+"px"
		    });  
	    });
	}
	//Else if we are on a mobile device
	 // else {
	 // 	//Fix Menu icon sizing issue on mobile devices  
	 // 	jQuery('nav label').css({'font-size': '1.1em'});
	 // }
	 jQuery('nav a').click(function(event) {
		var newHref = jQuery(this).attr('href');
 		event.preventDefault();

        jQuery('html, body').stop().animate({
            scrollTop: jQuery(newHref).offset().top
        	}, 
        	600, //default easing for now
        	function(){
        		window.location.hash = newHref;
        	}
        );
	});

	//Add last-child styles to IE 6-8
	if(jQuery('html').hasClass('lt-ie9')){
		jQuery('.skillSection section:last-child ').css({
			'margin-right': 0,        
        	'padding-right': 0
		});
	}


});
