$(document).ready(function () {
    $("#dark").click(function () {
        $("#dark,#updark").fadeOut(200);
        $("#light,#uplight").fadeIn(200);
        $("header,footer").css("background-color", "#2f3229");
        $("#link li,.card,#about,.album").css("background-color", "#3e4136");
        $("body").css("background-color", "#4d4739");
        $("body,a").css("color", "#dfdfdf");
        $("#link li,.card").mouseenter(function () {
            $(this).css("background-color", "#575c4a");
        });
        $("#link li,.card").mouseleave(function () {
            $(this).css("background-color", "#3e4136");
        });
    });
    $("#light").click(function () {
        $("#light,#uplight").fadeOut(200);
        $("#dark,#updark").fadeIn(200);
        $("header,footer").css("background-color", "#C4DFDF");
        $("#link li:hover,.card:hover").css("background-color", "#D2E9E9");
        $("#link li,.card,#about,.album").css("background-color", "#E3F4F4");
        $("body").css("background-color", "#F8F6F4");
        $("body,a").css("color", "black");
        $("#link li,.card").mouseenter(function () {
            $(this).css("background-color", "#D2E9E9");
        });
        $("#link li,.card").mouseleave(function () {
            $(this).css("background-color", "#E3F4F4");
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
