$(document).ready(function(){
	$("#button1").on("click", function(){
		$("#box").animate(
			{
				height: "+=50",
				width: "+=50"
			}, 1000,function(){
			
			});
	});

	$("#button2").on("click", function(){
		$("#box").css({"background-color": "blue"});
	});

	$("#button3").on("click", function(){
		$("#box").animate(
			{
				opacity: "-=1"
			},
		 1000, function(){
		
		});
	});

	$("#button4").on("click", function(){
		$("#box").css({
			"height": "150px",
			"width": "150px",
			"background-color": "orange",
			"margin": "25px",
			"opacity": "1"
		});
	})
});