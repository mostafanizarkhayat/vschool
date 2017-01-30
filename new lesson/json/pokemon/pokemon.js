document.getElementById("get").addEventListener("click",function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState  == 4 && xhr.status == 200) {
            var strData = xhr.responseText;
            var data = JSON.parse(strData);
            var input = document.getElementById("getnumber").value;
            document.getElementById("pokemonName").innerHTML=data["objects"][0]["pokemon"][input]["name"];
        }
    };
    xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
    xhr.send();
})