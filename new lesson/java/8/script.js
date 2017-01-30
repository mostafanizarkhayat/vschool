var cars =[];
function Car(color,model,miles){
  this.color = color;
  this.model = model;
  this.miles = miles;
  this.printCarForm = function (){
    console.log("this car have a color " + this.color + " and its model is " + this.model + this.miles );
  };
 };
cars.push (new Car( "red" , "bmw", "150"));
cars.push (new Car( "blue" , "mercedes" , "120" ));
cars.push (new Car("green" , "kia" , "100" ));
for(var i=0;i<cars.length;i++)
  {
    cars[i].printCarForm();
  }

