function multi() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var results = number1*number2;
    document.getElementById("result").value = results;
}
function div() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var results = number1/number2;
    document.getElementById("result").value = results;
}
function addd() {
    var number1 = document.getElementById("num1").value;
    console.log (num1);
    var number2 = document.getElementById("num2").value;
    console.log (num2);
    var results = Number(number1) + Number(number2);
    console.log (results);
    document.getElementById("result").value = results;
}
function subs() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var results = number1-number2;
    document.getElementById("result").value = results;
}
document.getElementById("multiple").addEventListener("click", multi);
document.getElementById("devision").addEventListener("click", div);
document.getElementById("addition").addEventListener("click", addd);
document.getElementById("substraction").addEventListener("click", subs);



