$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu .header-item__link')

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
});

$(".contacts-tab_item").not(":first").hide();
$(".contacts-tab__wrapper .contacts-tab").click(function() {
	$(".contacts-tab__wrapper .contacts-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".contacts-tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

