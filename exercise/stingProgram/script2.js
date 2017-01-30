console.log ("   *   \n  ***  \n ***** \n*******\n");
var ask = require('readline-sync');  
var start=ask.question('Do you want to play fun game ? just enter start to began quit to quit and go back ?');
var name23=ask.question( "Please enter your name :");
    if (start==="start"){
       var pName=ask.question('What is your name ?');   
     }
     else if (start== 'quit') 
     {
        return;
     }
function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
var player={
    name:pName,
    inv:[],
    hp:100,
    attack:getRandom(100,80),
    };
var Enemies =function(type)
{
    var type =type;
    this.EnemiesType="";
    this.attack=100;
    this.health=100;
    this.generate=function() {
    var index = getRandom(0,type.length-1);
    this.EnemiesType=type[index];
    if(type[index] =="Ancient Dragon")
    {
this.attack=getRandom(80,100);
        }
        else if (type[index]=="Prowler")
        {
            this.attack=getRandom(50,79);    
        }
        else if (type[index]=="Mighty Grunt")
        {
            this.attack=getRandom(20,49);      
        }
    }
}
var type=["Ancient Dragon","Prowler","Mighty Grunt"];
var inv=["sword","gun","B7","knife"];
var RandomAward=function(inv){
    this.inv=inv;
    this.YourAward="";
    this.generateAward=function(){
    var index=getRandom(0,inv.length-1);
    this.YourAward=inv[index];
    }
}
var rew=new RandomAward(inv);
while(type.length > 0) 
    {   
    var action=ask.question( "what do you like to do ?");
    if(action=="view"){
    console.log("your name is "+ player.name +"\n number of attacks = "+player.attack+"\n your health is ="+player.hp+"\n you inventory rewards"+player.inv+"rewaRDS "+rew);
    }
if(action == "w") {
        var chance = getRandom(0,100);
        if(chance > 50) {
        var enemy = new Enemies(type);
        enemy.generate();
        console.log("You are facing  " + enemy.EnemiesType);
            
        console.log("Attack or run")
        var action2=ask.question( " do you want to Attack or run?");
        if(action2 == "r") {
        chance
        } else if(action2 == "a") {
            chance = getRandom(0,80);
            if(chance > 80)
            {
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
        } else 
        {
            console.log("You have been missed")
        }
                    
            } else {
            console.log(pName +" thats not an option");
            }
            console.log("Its now the enemies turn");
            chance = getRandom(0,100);
            if(chance > 60) {
            var damage = enemy.attack;;
            console.log("enimey hit you for " + damage);
        player.hp -= damage;
                } else {
                    console.log("Enemy missed");
                }
                
            }
        if(player.hp <= 0) {
            console.log("You died :/");
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