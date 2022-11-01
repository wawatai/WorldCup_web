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

    if(wh < 833)
    {
        gh.css("height", (String(560) + "px"));
        bh.css("height", (String(364) + "px"));
    }
    else
    {
        gh.css("height", (String(wh - 243) + "px"));
        bh.css("height", (String(wh - 439) + "px"));
    }

    var bhRe = bh.height();
    var oh = $(".mainArea .outerBox");

    oh.css("height", (String(bhRe - 58) + "px"));

    $(window).resize(function () {
        var gh = $(".mainArea .gameBox");
        var bh = $(".mainArea .bettingBox");
        var wh = window.innerHeight;

        if(wh < 863)
        {
            gh.css("height", (String(590) + "px"));
            bh.css("height", (String(394) + "px"));
        }
        else
        {
            gh.css("height", (String(wh - 243) + "px"));
            bh.css("height", (String(wh - 439) + "px"));
        }

        var bhRe = bh.height();
        var oh = $(".mainArea .outerBox");

        oh.css("height", (String(bhRe - 58) + "px"));
    });
});

$(function(){
    var cw = $("header .center");
    var fw = $("footer .center");
    var ww = window.innerWidth;

    if(ww > 1450)
    {
        cw.css("width", (String(839) + "px"));
        fw.css("width", (String(478) + "px"));
    }
    else if(ww <= 1450 && ww > 1300)
    {
        cw.css("width", (String(ww - 610) + "px"));
        fw.css("width", (String(ww - 972) + "px"));
    }
    else
    {
        cw.css("width", (String(691) + "px"));
        fw.css("width", (String(330) + "px"));
    }

    $(window).resize(function () {
        var cw = $("header .center");
        var ww = window.innerWidth;
        if(ww > 1450)
        {
            cw.css("width", (String(839) + "px"));
            fw.css("width", (String(478) + "px"));
        }
        else if(ww <= 1450 && ww > 1300)
        {
            cw.css("width", (String(ww - 610) + "px"));
            fw.css("width", (String(ww - 972) + "px"));
        }
        else
        {
            cw.css("width", (String(691) + "px"));
            fw.css("width", (String(330) + "px"));
        }
    });
})