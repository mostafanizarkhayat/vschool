var x=0,a=0,m=0;
$("#mushroom").on("input",function() {
 x= $("#mushroom").val();
 $("#mushroomSum").val(x*5);
  total();
});
$("#ghost").on("input",function() {
 a= $("#ghost").val();
 $("#ghostSum").val(a*7);
     total();
});
$("#dragon").on("input",function() {
 m= $("#dragon").val();
$("#dragonSum").val(m*11);
 total();
}); 
function total() {
    var sum=parseInt($("#dragonSum").val())
    +parseInt($("#ghostSum").val())
    +parseInt($("#mushroomSum").val());
 $("#mario").html(sum);
        $("#mario").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}