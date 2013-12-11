$(document).ready(function(){
var topNavOffset = $("#navContainer").offset().top;
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if (y >= topNavOffset){
		$("#navContainer").addClass("fixed");
		$("#pizza").animate({"opacity":1}, 1000);
	};
});	
$("#readme1").on("click", function(){
	$("#topPost").animate({height:"900"}, 1000);
	$("#topPostContainer").animate({height:"900"}, 1000);
	$("#readme1").hide();
});
})