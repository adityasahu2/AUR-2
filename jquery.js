$(document).ready(function () {
    $("#dark").click(function () {
        $("#dark,#updark").fadeOut(200);
        $("#light,#uplight").fadeIn(200);
        $(".color1").css("background-color","var(--color7)");
        $(".color2,.color3").css("background-color","var(--color9)");
        $("body").css("background-color","var(--color10)");
        $("body,a").css("color","var(--color11)");
        $(".color2").hover(function () {
            $(this).css({"background-color":"var(--color8)", "box-shadow":"0px 3px 10px var(--color12)"});
        }, function () {
            $(this).css({"background-color":"var(--color9)", "box-shadow":"none"});
        });
        $(".color3hov").hover(function () {
            $(this).css({"background-color":"var(--color9)", "box-shadow":"0px 3px 10px var(--color12)"});
        }, function () {
            $(this).css({"background-color":"#00000000", "box-shadow":"none"});
        });
    });
    $("#light").click(function () {
        $("#light,#uplight").fadeOut(200);
        $("#dark,#updark").fadeIn(200); 
        $(".color1").css("background-color","var(--color1)");
        $(".color2,.color3").css("background-color","var(--color3)");
        $("body").css("background-color","var(--color4)");
        $("body,a").css("color","var(--color5)");
        $(".color2").hover(function () {
            $(this).css({"background-color":"var(--color2)", "box-shadow":"0px 3px 10px var(--color6)"});
        }, function () {
            $(this).css({"background-color":"var(--color3)", "box-shadow":"none"});
        });
        $(".color3hov").hover(function () {
            $(this).css({"background-color":"var(--color3)", "box-shadow":"0px 3px 10px var(--color6)"});
        }, function () {
            $(this).css({"background-color":"#00000000", "box-shadow":"none"});
        });
    });
    $("#card1").click(function () {
        $(".album").fadeOut(200);
        if ($("#1").css("display") == "none") {
            $("#1").fadeIn(200);
            var elem = document.getElementById("1");
            elem.scrollIntoView({ behavior: "smooth" });
        }
    });
    $("#card2").click(function () {
        $(".album").fadeOut(200);
        if ($("#2").css("display") == "none") {
            $("#2").fadeIn(200);
            var elem = document.getElementById("2");
            elem.scrollIntoView({ behavior: "smooth" });
        }
    });
    $("#card3").click(function () {
        $(".album").fadeOut(200);
        if ($("#3").css("display") == "none") {
            $("#3").fadeIn(200);
            var elem = document.getElementById("3");
            elem.scrollIntoView({ behavior: "smooth" });
        }
    });
    $("#card4").click(function () {
        $(".album").fadeOut(200);
        if ($("#4").css("display") == "none") {
            $("#4").fadeIn(200);
            var elem = document.getElementById("4");
            elem.scrollIntoView({ behavior: "smooth" });
        }
    });
    $(".headimg").click(function () {
        var elem = document.getElementById("head");
        elem.scrollIntoView({ behavior: "smooth" });
    });
});
