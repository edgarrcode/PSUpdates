$(function(){$(".accordion").accordion({collapsible:!0,heightStyle:"content"}),$(".fadeIn").animate({opacity:1},500,function(){$(".btnAnimate").animate({top:"0",opacity:1},250)}),$(".slideInBT").animate({top:0,opacity:1},250),$(".mobileNavToggle").click(function(){$(".navigationBar").slideToggle("fast",function(){$(".sideBar").toggleClass("mobileNo")})}),$(".searchTabletToggle").click(function(){$(".googleSearchWrapper").slideToggle("fast")}),$(".sidebearMobileToggle").click(function(){$(".sideBar").toggleClass("sbExpanded")}),$(".verticalTabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),$(".horizontalTabs").tabs(),$(".morelessToggle1").click(function(){$(".showhideText1").toggleClass("showText")}),$(".morelessToggle2").click(function(){$(".showhideText2").toggleClass("showText")}),$(".morelessToggle3").click(function(){$(".showhideText3").toggleClass("showText")})}),function(e){e.fn.visible=function(o,t,i){var l=e(this).eq(0),a=l.get(0),s=e(window),n=s.scrollTop(),c=n+s.height(),g=s.scrollLeft(),h=g+s.width(),r=l.offset().top,f=r+l.height(),d=l.offset().left,T=d+l.width(),b=o===!0?f:r,u=o===!0?r:f,p=o===!0?T:d,w=o===!0?d:T,v=t===!0?a.offsetWidth*a.offsetHeight:!0,i=i?i:"both";return"both"===i?!!v&&c>=u&&b>=n&&h>=w&&p>=g:"vertical"===i?!!v&&c>=u&&b>=n:"horizontal"===i?!!v&&h>=w&&p>=g:void 0}}(jQuery),$(window).scroll(function(e){$(".anWV").each(function(e,o){var o=$(o);o.visible(!0)&&o.animate({opacity:1,top:0})})}),$("tr:nth-child(2n)").addClass("even");