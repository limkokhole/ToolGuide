var url = location.search;
var Request = new Object();
if (url.indexOf("?") != -1) { 	//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置,没有则返回-1
	var str = url.substr(1) 	//去掉?号 substr(start,length)抽取从 start 下标开始的length个字符。
	strs = str.split("&"); 		//split()从指定位置把字符串分割成字符串数组
	for (var i = 0; i < strs.length; i++) {
		Request[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
	}
}

$(function() {
	$(".search-btn").click(function() {
		$("title").text("搜索-" + $("#search-kw").val());
	})
	$("#baidu").click(function() {
		$("iframe").css("display","block");
		$("#yitiaozhuan").css("display","none");
		$("form").attr('action', 'https://www.baidu.com/s');
		$("#search-kw").attr('name', 'wd');
		$("form").submit();
	});
	$("#bing").click(function() {
		$("iframe").css("display","block");
		$("#yitiaozhuan").css("display","none");
		$("form").attr('action', 'https://cn.bing.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#google").click(function() {
		$("iframe").css("display","none");
		$("#yitiaozhuan").css("display","block");
		$("form").attr('action', 'https://www.google.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").attr("target", "_blank");
		$("form").submit();
		$("form").attr("target", "kuangjia");
	});
	$("#sougou").click(function() {
		$("iframe").css("display","block");
		$("#yitiaozhuan").css("display","none");
		var fo = $('form');
		fo.attr('action', 'https://www.sogou.com/web');
		$("#search-kw").attr('name', 'query');
		fo.submit();
	});
	$("#360").click(function() {
		$("iframe").css("display","block");
		$("#yitiaozhuan").css("display","none");
		$("form").attr('action', 'https://www.so.com/s');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#zhihu").click(function() {
		$("iframe").css("display","none");
		$("#yitiaozhuan").css("display","block");
		$("form").attr('action', 'https://www.zhihu.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").attr("target", "_blank");
		$("form").submit();
		$("form").attr("target", "kuangjia");
	});
	$("#weibo").click(function() {
		$("iframe").css("display","block");
		$("#yitiaozhuan").css("display","none");
		$("form").attr('action', 'https://s.weibo.com/weibo');
		$("#search-kw").attr('name', 'q');
		$("form").submit();
	});
	$("#douban").click(function() {
		$("iframe").css("display","none");
		$("#yitiaozhuan").css("display","block");
		$("form").attr('action', 'https://www.douban.com/search');
		$("#search-kw").attr('name', 'q');
		$("form").attr("target", "_blank");
		$("form").submit();
		$("form").attr("target", "kuangjia");
	});
	$("#header").keydown(function() {
		if (event.keyCode == 13)
			$("title").text("搜索-" + $("#search-kw").val());
	})

	$("#search-kw").attr("value", Request["q"]);
	$("#" + Request["s"]).trigger("click");
})
