$(function () {

    $("#gnb>ul#mainmenu>li").mouseover(function () {
        $(this).children("ul").stop().slideDown();
       // $(this).children("ul").stop().fadeIn(900);
    });
    $("#gnb>ul#mainmenu>li").mouseout(function () {
        $(this).children("ul").stop().slideUp(600);
       // $(this).children("ul").stop().fadeOut(600);

    });
});
