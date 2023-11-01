// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

//defines a SpaceShip class
class SpaceShip {
    Name;
    topSpeed;

    constructor(Name, topSpeed){
        this.name = Name; 
        this.topSpeed = topSpeed;
    }

    //will log a message when called which will include ship name and speed
    accelerate(){
        console.log(`${this.name} moving to ${this.topSpeed}`);
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

//for the two SpaceShips
const ship1 = new SpaceShip("Death Star", "160 MGLT");
const ship2 = new SpaceShip("Imperial Shuttle", "200 MGLT");

ship1.accelerate(); //logs the deathstar and its speed
ship2.accelerate(); // logs the shuttle and its speed