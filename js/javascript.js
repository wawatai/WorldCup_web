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

$(function(){
    var gh = $(".mainArea .gameBox");
    var bh = $(".mainArea .bettingBox");
    var wh = window.innerHeight;

    gh.css("height", (String(wh - 273) + "px"));
    bh.css("height", (String(wh - 469) + "px"));

    var bhRe = bh.height();
    var oh = $(".mainArea .outerBox");

    oh.css("height", (String(bhRe - 58) + "px"));

    $(window).resize(function () {
        var gh = $(".mainArea .gameBox");
        var bh = $(".mainArea .bettingBox");
        var wh = window.innerHeight;

        gh.css("height", (String(wh - 273) + "px"));
        bh.css("height", (String(wh - 469) + "px"));

        var bhRe = bh.height();
        var oh = $(".mainArea .outerBox");

        oh.css("height", (String(bhRe - 58) + "px"));
    });
});

$(function(){
    var cw = $("header .center");
    var ww = window.innerWidth;

    if(ww > 1450)
    {
        cw.css("width", (String(839) + "px"));
    }
    else if(ww <= 1450 && ww > 1300)
    {
        cw.css("width", (String(ww - 610) + "px"));
    }
    else
    {
        cw.css("width", (String(691) + "px"));
    }

    $(window).resize(function () {
        var cw = $("header .center");
        var ww = window.innerWidth;
        if(ww > 1450)
        {
            cw.css("width", (String(839) + "px"));
        }
        else if(ww <= 1450 && ww > 1300)
        {
            cw.css("width", (String(ww - 610) + "px"));
        }
        else
        {
            cw.css("width", (String(691) + "px"));
        }
    });
})