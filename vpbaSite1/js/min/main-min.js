$(function(){$(".accordion").accordion({collapsible:!0,heightStyle:"content"}),$(".fadeIn").animate({opacity:1},500,function(){$(".btnAnimate").animate({top:"0",opacity:1},250)}),$(".slideInBT").animate({top:0,opacity:1},250),$(".mobileNavToggle").click(function(){$(".navigationBar").slideToggle("fast",function(){$(".sideBar").toggleClass("mobileNo")})}),$(".searchTabletToggle").click(function(){$(".googleSearchWrapper").slideToggle("fast")}),$(".sidebearMobileToggle").click(function(){$(".sideBar").toggleClass("sbExpanded")}),$(".verticalTabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),$(".horizontalTabs").tabs(),$(".morelessToggle1").click(function(){$(".showhideText1").toggleClass("showText")}),$(".morelessToggle2").click(function(){$(".showhideText2").toggleClass("showText")}),$(".morelessToggle3").click(function(){$(".showhideText3").toggleClass("showText")})}),$(window).scroll(function(e){$(".anWV").each(function(e,a){var a=$(a);a.visible(!0)&&a.animate({opacity:1,top:0})})}),$("#HOPTable").dynatable({features:{pushState:!1,search:!1},inputs:{perPagePlacement:"after"}}).bind("dynatable:afterProcess",function(){$("tr:nth-child(2n)").addClass("even")}),$("tr:nth-child(2n)").addClass("even");