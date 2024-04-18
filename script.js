//complete this code
class Animal {
	constructor(species){
		this._species =species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		this._species "makes asound";
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
}
const myCat = new Cat("siamese");
myCat.makeSound();
myCat.purr();

const myDog = new Dog("golden retriever");
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
