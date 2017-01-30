var laptop = {
    type:"hp",
    color:"black",
    print=function(){
    console.log("laptop of type"+this.type)
}
};
var personalComputer = {
    type:"hp",
    color:"black",
    print=function()
    console.log("personalComputer color is "+this.color)
    }
};
var chaire = {
    type:"hp",
    color:"blue",
    print=function()
    console.log("chaire type is "+this.type + "and its color is "+ this.color)
    }
};
var table = {
    type:"plastic",
    color:"purple",
    print=function()
    console.log("table type is "+this.type + "and its color is "+ this.color)
    }
};
var lights = {
    type:"LED",
    color:"white",
    print=function(){
    console.log("lights type is "+this.type + "and its color is "+ this.color)
    }
};
var ClassRoom = function (heigth,width,longer){
    this.heigth=heigth;
    this.width=width;
    this.longer=longer;
    print=function(){
    console.log("heigth is "+this.heigth)
    }
}
var Mouse = function (type,color,momodeldel){
    this.type=type;
    this.color=color;
    this.model=model;
    print=function(){
    console.log("lights type is "+this.type + "and its color is "+ this.color)
    }
}
var Cooler = function (type,color,heigth){
    this.type=type;
    this.color=color;
    this.heigth=heigth;
    print=function(){
    console.log("lights type is "+this.type + "and its color is "+ this.color)
    }
}
var WhiteBoard = function (heigth,width,color){
    this.heigth=heigth;
    this.width=width;
    this.color=color;
    print=function(){
    console.log("lights type is "+this.type + "and its color is "+ this.color)
    }
}
var students = function (names,age,dob){
    this.names=names;
    this.age=age;
    this.dob=dob;
    print=function(){
    console.log("lights type is "+this.type + "and its color is "+ this.color)
    }
}

  