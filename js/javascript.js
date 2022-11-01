$(function(){
    $("header ul li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".bg")
        .removeClass("style_1 style_2 style_3 style_4 style_5")
        .addClass("style_"+ (n + 1) +"");
    })
})