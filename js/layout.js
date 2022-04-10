$(function(){

    $("#header .gnb_btn").on('click' , function(){
        $("#header .gnb").stop().fadeToggle(300);
        $('body').toggleClass('gnb--open');
    });

});