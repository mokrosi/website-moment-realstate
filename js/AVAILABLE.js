$(Document).ready(function(){

    $("#main-titel ,#sub-titel").fadeIn(1000);


    $("#ads104").hide();
    $("#ads105").hide();
    $("#btnShowLess").hide();

    $("#btnLodeMore").click(function(){
        $(this).hide();
        $("#ads104").fadeIn(800);
        $("#ads105").fadeIn(850);
        $("#btnShowLess").fadeIn(900);
    });

    $("#btnShowLess").click(function(){
        $(this).hide();
        $("#ads104").fadeOut(300);
        $("#ads105").fadeOut(350);
        $("#btnLodeMore").fadeIn(400);
    });

});