var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function parsePokemon() {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
     
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "http://mean.codingcamp.us:6543/pokemon.json", true);  
xhr.send();