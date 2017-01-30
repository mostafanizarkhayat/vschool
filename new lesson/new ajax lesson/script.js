$("#add").click(function () {

    var text = $("#toDo").val();

    $("#output").append("<li id=" + text + "><button id=" + text + " onclick='deleteItem(" + text + ")'>X</button>" + text + "</li>");
    $("#toDo").val("");
});

function deleteItem(id) {
    $(id).remove();
}