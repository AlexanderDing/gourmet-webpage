window.onload = function () {//页面加载完成 执行的函数
	$('.phone-list').hide();//隐藏这些class元素
	$('.phone-list').eq(0).show();//显示当前下标class元素
	$('.phone-nav>li').hover(function () {//鼠标滑过事件，触发function 函数
		console.log($(this).index())//控台打印
		$('.phone-nav>lii').removeClass('active');//$是jquery的默认代号，移除这个元素的  active   class
		$(this).addClass('active')
		
		$('.phone-list').hide();
		$('.phone-list').eq($(this).index()).show();
		// $('.phone-nav>li').eq($(this).index()).addClass('active');//当前下标class元素添加 active   class     代表鼠标滑过的这个元素$(this)  .index()获取这个的下标值
		
	})
	
	// $(img).attr('src','./images/banner1.jpg');
}