$(".box").hover(function(){
    $(this).css("background-color","yellow");
});
$(".box").on("dblclick",function(){
    $(this).css("background-color","green");
});
$(window).on("mouseout",function(){
    $(".box").css("background-color","black");
});
$(window).click(function(){
    $(".box").css("background-color","blue");
});