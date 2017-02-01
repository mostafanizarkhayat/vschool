var table = {
  color : "white",
  height : 50,
  width : 30,
  type : "plastic"
}



var rima = {
  name:"rima",
  age : 33,
  hairColor:"brown",
}



var Person = function(name,age,status){
  this.name= name;
  this.age=age;
  this.status= status;
  this.dance =function(){
    console.log (this.name +"goes dancing")
  }
}
var omar = new Person  ("omar",32,"single");
var mostafouuuu = new Person  ("mostafouuuu",24,"single");



var chair = function(color,type,height){
  this.color= color;
  this.type=type;
  this.height= height;
  this.broken =function(){
    console.log (this.name +"goes broken")
  }
}
var chairR = new chair  ("red","plastic",50);