class Dinosaur {

    constructor(name, age, species, diet) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.diet = diet;
    }

    speak() {
        console.log(`The ${this.species} roars.`);
    }

    feed(food) {
        console.log(`The ${this.species} feasts on a helpless ${food}!`);
    }
}

class Pterodactyl extends Dinosaur {
    
    static scientificName = "Cearadactylus";

    static updateScientificName(newName) {
        this.scientificName = newName;
    }
    
    constructor(name, age) {
        super(name, age, "pterodactyl", "fish");
    }

    displayScientificName() {
        console.log(scientificName);
    }

    speak() {
        console.log(`The ${this.species} screeches.`);
    }

    feed(food) {
        console.log(`The ${this.species} devours ${food}`);
    }

    fly() {
        console.log(`The ${this.species} soars above the lesser animals.`);
    }
}

class Askeptosaurus extends Dinosaur {

    constructor(name, age) {
        super(name, age, "askeptosaurus", "fish");
    }

    speak() {
        console.log(`The ${this.species} whines pathetically.`);
    }

    feed(food) {
        console.log(`The ${this.species} nibbles on ${food}`);
    }

    trudge() {
        console.log(`The ${this.species} continues squirming pointlessly in the mud.`);
    }
}

const dinosaur1 = new Pterodactyl("Dan", 1000);
const dinosaur2 = new Pterodactyl("Josh", 2);
const dinosaur3 = new Pterodactyl("Bilbo", 111);
const dinosaur4 = new Askeptosaurus("Emile", 12);

dinosaur3.speak();
dinosaur4.speak();

dinosaur3.feed("salmon");
dinosaur4.feed("sea cucumbers");

dinosaur3.fly();
dinosaur4.trudge();

console.log(Pterodactyl.scientificName);