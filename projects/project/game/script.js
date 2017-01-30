var ask = require('readline-sync');  
var start=ask.question('Hi you are going to play dont be afraid just enter start to began quit to quit and go back ?');
     if (start==="start"){
       var pName=ask.question('What is your name ?');   
     }
     else if (start== 'quit')  // How can I stop working of function here?
         {
         return;
         }

function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
var player={
     name:pName,
    inv:[],
    hp:1000,
    attack:getRandom(100,70),
    };

var Enemies =function(type)
{
    var type =type;
    this.EnemiesType="";
    this.attack=100;
    this.health=100;
   // this.defense=0;
//    this.randomEnemy=function(){
//        
//    }
    this.generate=function(){
        var index = getRandom(0,type.length-1);
        this.EnemiesType=type[index];
        if(type[index] =="Ancient Dragon")
        {

this.attack=getRandom(80,100);
           // this.defense=this.hitPoints*3;
            

        }else if (type[index]=="Prowler")
        {
            this.attack=getRandom(50,79);
          //  this.defense=this.hitPoints*3;
           
        }else if (type[index]=="Mighty Grunt")
        {
            this.attack=getRandom(20,49);
           // this.defense=this.hitPoints*3;
            
        }
}
}
var type=["Ancient Dragon","Prowler","Mighty Grunt"];
var inv=["sword","chocolate","phone","laptop"];
var RandomAward=function(inv){
    inv=inv;
    this.YourAward="";
    this.generateAward=function(){
        var index=getRandom(0,inv.length-1);
        this.YourAward=inv[index];
    }
}
var rew=new RandomAward(inv);
while(type.length > 0) {
   // player = new Player();
   var action=ask.question( "what do you like to do ?");
   if(action=="view"){
       console.log("your name is "+ player.name +"\n number of attacks = "+player.attack+"\n your health is ="+player.hp+"\n you inventory rewards"+player.inv+"rewaRDS "+rew);
   }
if(action == "w") {
        var chance = getRandom(0,100);
        if(chance > 50) {
            var enemy = new Enemies(type);
            enemy.generate();
            console.log("You have met an enemy " + enemy.EnemiesType);
            
                console.log("Attack or run")
                var action2=ask.question( " do you want to Attack or run?");
                if(action2 == "r") {
                    chance
} else if(action2 == "a") {//attack
                    chance = getRandom(0,100);
                    if(chance > 50) {
                        var damage = enemy.attack;
                        console.log("You hit the enimy for " + damage);
enemy.health -= damage;
                    rew.generateAward();
                          player.inv.push(rew.YourAward);
                        if(enemy.health <= 0) {
                            console.log("You killed the enemy here is your reward");
                           rew.generateAward();
                            player.inv.push(rew.YourAward);
                        }
} else {
                        console.log("YOu missed")
                    }
                    
                } else {
                    console.log(pName +" thats not an option");
                }
                console.log("Its now the enemies turn");
                chance = getRandom(0,100);
                if(chance > 50) {
                    var damage = enemy.attack;;
                    console.log("enimey hit you for " + damage);
player.hp -= damage;
                } else {
                    console.log("Enemy missed");
                }
                
            }
            if(player.hp <= 0) {
                console.log("You died fool");
                break;
            }
 
        }
    }
if(player.hp <= 0) {
    console.log("You lost");
} else {
    console.log("You won heres all the gear you got");
    console.log(player.inv);
}