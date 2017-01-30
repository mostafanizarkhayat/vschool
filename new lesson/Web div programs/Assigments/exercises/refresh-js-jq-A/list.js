function addItem() {
     var inputBox = document.getElementById("inputList").value;
     var val = document.getElementById("printHere");
     var intoli = document.createElement ("li");
    var node=document.createTextNode(inputBox);
    //li contain  the text
    intoli.appendChild(node);
   val.appendChild(intoli);
        
    
    document.getElementById("inputList").value="";
    
    
}