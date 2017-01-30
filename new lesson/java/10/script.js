function getRandom (min, max) {
    return Math.floor(Math.random() *(max-min+1)) +min;
}
var Enemy = function (nametype) {
    this.typeEnemy = function(){
      this.type=nametype[getRandom(0,2)];
    };
  
    this.totalHitPoint=0;
    this.hitPoints = function(){
      if(this.type==="Dragon"){
         this.totalHitPoint=getRandom(80,100);
      }else if(this.type==="Prowler"){
         this.totalHitPoint=getRandom(50,79);
      }else
        {
        this.totalHitPoint=getRandom(20,49);
        }
    };
    this.defense =function(){
     this.defenseNb= this.totalHitPoint*3;
    }
  
    }
    var enemies = ["Dragon", "Prowler" ,"Grunt"];
    for (var i= 0 ; i <100 ; i++){
        var newEnemy= new Enemy(enemies);
      newEnemy.typeEnemy();
      newEnemy.hitPoints();
       newEnemy.defense();
      console.log("Type:"+newEnemy.type+" hit point: "+newEnemy.totalHitPoint+" defense: "+newEnemy.defenseNb);
    }
