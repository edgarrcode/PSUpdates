// OnLoad
$(function() {
	$( ".accordion" ).accordion({
		collapsible: true
	});
	$( ".fadeIn" ).animate({
		opacity: 1,
		},250,function () {
			$(".btnAnimate").animate({
				top: "0",
				opacity:1
			},250);
	});
	$(".slideInBT").animate({
		top: 0,
		opacity: 1
	},250);
	$(".PSLiveDateCountdown").TimeCircles({
		circle_bg_color: "#e5e5e5",
		fg_width: 0.025,
		bg_width: 1,
		time: {
			Days: { color: "#ff6600" },
			Hours: { color: "#ff6600" },
			Minutes: { color: "#ff6600" },
			Seconds: { color: "#ff6600" }
		}
	});
	$( ".mobileNavToggle" ).click(function() {
	  $(".navigationBar").slideToggle("fast", function () {
	  	$(".sideBar").toggleClass("mobileNo")
	  });
	});
	$(".searchTabletToggle").click(function () {
		$(".googleSearchWrapper").slideToggle("fast");
	});
	$(".sidebearMobileToggle").click(function () {
		$(".sideBar").toggleClass("sbExpanded")
	});
});

// Animate if visible
$(window).scroll(function(event) {
  
  $(".anWV").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.animate({
      	opacity:1,
      	top: 0
      }); 
    } 
  });

});