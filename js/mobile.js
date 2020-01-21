$(function() {
	$("#search").wrap("<form></form>");
	$("form").attr('action', 'https://www.baidu.com/s');
	
	$("#baidu").click(function() {
		$("form").attr('action', 'https://www.baidu.com/s');
		$("#search-kw").attr('name', 'wd');
		$("form").submit();
	});
	$("#bing").click(function() {
		$("form").attr('action', 'https://cn.bing.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#google").click(function() {
		$("form").attr('action', 'https://www.google.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#sougou").click(function() {
		var fo = $('form');
		fo.attr('action', 'https://www.sogou.com/web');
		$("#search-kw").attr('name', 'query');
		fo.submit();
	});
	$("#360").click(function() {
		$("form").attr('action', 'https://www.so.com/s');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#zhihu").click(function() {
		$("form").attr('action', 'https://www.zhihu.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#weibo").click(function() {
		$("form").attr('action', 'https://s.weibo.com/weibo');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#douban").click(function() {
		$("form").attr('action', 'https://www.douban.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	
	$("#list_logo").click(function(e){
		$("#list").fadeIn("speed");
		e.stopPropagation();
	})
	
	$(document).click(function(){
		$("#list").fadeOut("speed");
	})
});
