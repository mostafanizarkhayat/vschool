var trashTalsk = ["onfo5 belaban", "ou3a yef2a3", "bass ba2a" , "ah ya ma5ratje"];
var scores=[];
$("#done").click(function () {
        if ($("#Name").val() == "") {
            alert("Type in MAN!");
        } 
        else {
            if ($("#trashTalk:checked").length > 0) {
                scores.push({
                    name:$("#Name").val(),
                    game: $("#Game").val(),
                    score: $("#Score").val(),
                    date: $("#Date").val(),
                    trashTalk: trashTalsk[getRandomInt(0,3)]
                });
            }
            else {
                scores.push({
                    name: $("#Name").val(),
                    game : $("#Game").val() ,
                    score : $("#Score").val() ,
                    date : $("#Date").val(),
                    trashTalk:""
                });
            }
            render();
        }
});
var render = function() {
  $("#output").html("");
  scores.sort(function(a, b) {
    return b.score - a.score;
  });
  for(var i = 0; i < scores.length; i++) {
        $("#output").append("<tr> <td>" + scores[i].name + "</td><td>" + scores[i].game + "</td><td> " + scores[i].score + "</td><td>" + scores[i].date + "</td><td>" + scores[i].trashTalk + "</td> </tr>");
   };
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}