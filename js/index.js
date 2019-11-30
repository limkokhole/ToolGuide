$(function() {
	$(".search-btn").click(function(){
		var url="searchResult.html?q="+$("#search-kw").val()+"&s="+$(this).attr("id");
		window.open(url);
	})
	$("#search").keydown(function(){
		if(event.keyCode==13)
		$("#baidu").trigger("click");
	})
	$("#menu").hover(function() {
		$("#list").fadeIn("speed");
	}, function() {
		$("#list").fadeOut("speed");
	})
});
