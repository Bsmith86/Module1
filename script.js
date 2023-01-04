//Space Battle Game
//Create Our ship with all of our propertie
//Ship Properties
// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed

// firepower is the amount of damage done to the hull of the target with a successful hit

// accuracy is the chance between 0 and 1 that the ship will hit its target

// Your spaceship, the USS HelloWorld should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// You could be battling six alien ships each with unique values.

class SpaceShip {
  constructor(name, hull, firePower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }
  attack(ship) {
    //   accuracy check
    if (Math.random() < this.accuracy) {
      ship.hull -= this.firePower;

      console.log(
        `${ship.name} was hit by ${this.name} the hull is now ${ship.hull}`
      );

      // get the right hull element let hullElement = document.querySelector()
      // set the hullElement.innerText = new hull value
    }
    // if (ship.id == 0){
    //   player2Hull -= 10;
    // }
  }
}

let me = new SpaceShip("USS HelloWorld", 20, 5, 0.7);

console.log(me);

class AlienShips {
  constructor() {
    this.ships = [];
  }

  addShip(name, id) {
    let hull = Math.floor(Math.random() * 4) + 3;
    let firePower = Math.floor(Math.random() * 3) + 2;
    let accurracy = Math.random() * 0.2 + 0.6;

    let newShip = new SpaceShip(name, hull, firePower, accurracy, id);

    this.ships.push(newShip);
  }
}

// DOM initilization
//  const player1 = document.getElementById('myShip')
// const p1Hull = document.querySelector('#hull')
// const player2 = document.getElementById("alien1");
// const player2Hull = document.getElementsByClassName("ship1Hull");

let myAlienShips = new AlienShips();



myAlienShips.addShip("Death Star", 0);
myAlienShips.addShip("Antedeans", 1);
myAlienShips.addShip("Annari", 2);
myAlienShips.addShip("Arquillians", 3);
myAlienShips.addShip("Atevi", 4);
myAlienShips.addShip("Asgard", 5);

console.log(myAlienShips);

// console.log(ships[1]);

//Loop

//Initialize Dom
// let myShip = document.getElementById('my-ship');
// let alien1 = document.getElementById('alien1');
// let ship1Hull = document.getElementById('ship1Hull');
const showHull = () => {
  let life = document.querySelector(".hull");
  life.append(me.hull)
  
};

// const aHp = () => {
//   let health = document.querySelector(".aHull");
//   health.replaceWith(ship.aHull);
// };
const saveEarth = () => {
   showHull();
  //  aHp();
  let ships = myAlienShips.ships;

  for (let i = 0; i < ships.length; i++) {
    // break if hull = 0
    if (me.hull < 1) {
      console.log(me.hull, "Game Over");
      showHull();
      break;
    }

    let keepLooping = true;
    while (keepLooping) {
      // attack
      me.attack(ships[i]);
      // aHp();
      console.log(ships[i]);
      // check if enemy hull = 0
      if (ships[i].hull <= 0) {
        // ships.shift();
        break;
      }
      // defend
      ships[i].attack(me);
      console.log(me.hull);
      showHull()
      // check if I'm alive
      if (me.hull < 1) {
        console.log(`${me.name} was destroyed. GAME OVER!`);
        break;
      }
    }
  }
  showHull();
};

saveEarth();

console.log(me);
console.log(myAlienShips);

if (me.hull > 0) {
  console.log("Winner!");
}
// showHull();