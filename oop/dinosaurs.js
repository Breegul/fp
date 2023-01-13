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

const dinosaur1 = new Dinosaur("Dan", 1000, "pterodactyl", "fish");
dinosaur1.speak();
dinosaur1.feed("salmon");