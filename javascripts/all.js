(function(){$(function(){return $(".header .nav a").each(function(){var e;return e=$(this),e.parent().removeClass("selected"),e.attr("href")===window.location.pathname.toLowerCase()?e.parent().addClass("selected"):void 0})})}).call(this);