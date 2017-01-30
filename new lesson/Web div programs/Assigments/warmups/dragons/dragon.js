// Store the enemies in an array
var enemies = [];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function chooseEnemy() {
    var enemyChoices = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var random = getRandomInt(0, 2);
    var selectedEnemy = enemyChoices[random];
    return selectedEnemy;
};
function chooseHitPoints(enemyType) {
    if (enemyType === "Ancient Dragon") {
        return getRandomInt(80, 100);
    }
    else if (enemyType === "Prowler") {
        return getRandomInt(50, 79);
    }
    else {
        return getRandomInt(20, 49);
    }
}
// Create an generator for enemies
function Enemy() {
    // type to randomly select between:
    this.type = chooseEnemy();
    // hitpoints randomly selected
    this.hitPoints = chooseHitPoints(this.type);
    // defense is hitpoints * 3
    this.defense = this.hitPoints * 3;
}
// Actually generate 100 enemies
for (var i = 0; i < 100; i++) {
    // loop 100 times and create an enemy
    // each time and push to the enemies array.
    var newEnemy = new Enemy();
    newEnemy.enemyNumber = i + 1;
    enemies.push(newEnemy);
}
// console.log the enemies array
console.log(enemies);