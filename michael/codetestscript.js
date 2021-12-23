$(document).ready(function(){
   


$( ".circle:hover" ).col().css( "opacity", "0.50" );

$(".circle").prev().css({"opacity": "0.50", });



 $('.circle').siblings().next('.').css('opacity', '0.5');
 $('.circle').siblings().prev('.target').css('opacity', '0.5');


});