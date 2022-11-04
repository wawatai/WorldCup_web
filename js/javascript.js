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
    $(".jumpWindow .close,.jumpWindow .check").on("click",function(){
        $(".filter")
        .removeClass("display");
    })

    $("footer ul li").on("click",function(){
        var n = $(this).index();

        if(n == 0)
        {
            $(".filter,.jumpWindow.rule")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 1)
        {
            $(".filter,.jumpWindow.record")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if(n == 2)
        {
            $(".filter,.jumpWindow.acting")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })

    $(".gameBox .tableBox button").on("click",function(){
        $(".filter,.jumpWindow.betting")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

$(function(){
    $(".jumpWindow .topList li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".jumpWindow .pageBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    $(".rowBox").on("click",function(){
        if($(this).hasClass("left"))
        {
            $(this)
            .removeClass("left")
            .addClass("right");
        }
        else{
            $(this)
            .removeClass("right")
            .addClass("left");
        }
    })
})

// $(function(){
//     var cw = $("header .center");
//     var fw = $("footer .center");
//     var ww = window.innerWidth;

//     if(ww > 1450)
//     {
//         cw.css("width", (String(839) + "px"));
//     }
//     else if(ww <= 1450 && ww > 1300)
//     {
//         cw.css("width", (String(ww - 610) + "px"));
//     }
//     else
//     {
//         cw.css("width", (String(691) + "px"));
//     }

//     if(ww > 1560)
//     {
//         fw.css("width", (String(478) + "px"));
//     }
//     else if(ww <= 1560 && ww > 1410)
//     {
//         fw.css("width", (String(ww - 1082) + "px"));
//     }
//     else
//     {
//         fw.css("width", (String(330) + "px"));
//     }

//     $(window).resize(function () {
//         var cw = $("header .center");
//         var ww = window.innerWidth;
//         if(ww > 1450)
//         {
//             cw.css("width", (String(839) + "px"));
//         }
//         else if(ww <= 1450 && ww > 1300)
//         {
//             cw.css("width", (String(ww - 610) + "px"));
//         }
//         else
//         {
//             cw.css("width", (String(691) + "px"));
//         }

//         if(ww > 1560)
//         {
//             fw.css("width", (String(478) + "px"));
//         }
//         else if(ww <= 1560 && ww > 1410)
//         {
//             fw.css("width", (String(ww - 1082) + "px"));
//         }
//         else
//         {
//             fw.css("width", (String(330) + "px"));
//         }
//     });
// })