// OnLoad
$(function() {
	$( ".accordion" ).accordion({
		collapsible: true
	});
	$( ".fadeIn" ).animate( {
		opacity: 1,
		},500,function () {
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
			$(".sideBar").toggleClass("mobileNo");
		});
	});
	$(".searchTabletToggle").click(function () {
		$(".googleSearchWrapper").slideToggle("fast");
	});
	$(".sidebearMobileToggle").click(function () {
		$(".sideBar").toggleClass("sbExpanded");
	});
	// VerticalTabs
	$( ".verticalTabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	// Horizontal Tabs
	$( ".horizontalTabs" ).tabs();
	$(".morelessToggle1").click(function () {
		$(".showhideText1").toggleClass("showText");
	});
	$(".morelessToggle2").click(function () {
		$(".showhideText2").toggleClass("showText");
	});
	$(".morelessToggle3").click(function () {
		$(".showhideText3").toggleClass("showText");
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


// dynatable
$('#HOPTable').dynatable({
    features: {
        pushState: false,
        search: false
    },
    inputs: {
        perPagePlacement: 'after'
    }
})
.bind('dynatable:afterProcess', function() {
    $('tr:nth-child(2n)').addClass('even');
});
$('tr:nth-child(2n)').addClass('even');
