function goombasCoins() {
//    var goombas = Number(document.getElementById("Goombas1").value);
//    
//    var gResult = goombas * 5;
//   
//    
//      document.getElementById("Goombas1result").value=gResult;
//    
  
    
 
    
    $("#Goombas1result").val(Number($("#Goombas1").val())*5);

  total();
}



function cheepCoins() {
//    var goombas = Number(document.getElementById("Cheeps1").value);
//    var gResult = goombas * 11;
   $("#Cheeps1result").val(Number($("#Cheeps1").val())*11);
    total();

    
      //document.getElementById("Cheeps1result").value=gResult;
    
    total();
}




function bobombsCoins() {
//    var goombas = Number(document.getElementById("Bobombs1").value);
//    var gResult = goombas * 7;
   $("#Bobombs1result").val(Number($("#Bobombs1").val())*7);
    total();
    
      //document.getElementById("Bobombs1result").value=gResult;
    
    total();
}

function total()
{
    
   // var nb1=document.getElementById("Goombas1result").value;
    var nb1= $( "#Goombas1result" ).val();
    console.log( $( "#Goombas1result" ).val());
    //var nb2=document.getElementById("Cheeps1result").value;
    var nb2=$("#Cheeps1result").val();
   // var nb3=document.getElementById("Bobombs1result").value;
    var nb3=$("#Bobombs1result").val();
//    var totally= Number($("#Cheeps1result").val()); +Number($( "#Goombas1result" ).val()); + Number($("#Bobombs1result").val());
    
  //  document.getElementById("totalTotal").value= totally;
    $("#totalTotal").val( Number($("#Cheeps1result").val()) + Number($( "#Goombas1result" ).val()) + Number($("#Bobombs1result").val()));
    
    
}