$(document).ready(function () {
    $("#dark").click(function () {
        $("#dark,#updark").fadeOut(200);
        $("#light,#uplight").fadeIn(200);
        $("html").css({
            "--color1":"#2f3229",
            "--color2":"#575c4a",
            "--color3":"#3e4136",
            "--color4":"#4d4739",
            "--color5":"#dfdfdf"
        })
        $("#link li,.card").mouseenter(function () {
            $(this).css("background-color", "var(--color2)");
        });
        $("#link li,.card").mouseleave(function () {
            $(this).css("background-color", "var(--color3)");
        });
    });
    $("#light").click(function () {
        $("#light,#uplight").fadeOut(200);
        $("#dark,#updark").fadeIn(200);
        $("html").css({
            "--color1":"#C4DFDF",
            "--color2":"#D2E9E9",
            "--color3":"#E3F4F4",
            "--color4":"#F8F6F4",
            "--color5":"#000000"
        })
        $("#link li,.card").mouseenter(function () {
            $(this).css("background-color", "var(--color2)");
        });
        $("#link li,.card").mouseleave(function () {
            $(this).css("background-color", "var(--color3)");
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
