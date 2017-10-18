function Car (mark, model, volume){
    this.mark = mark;
    this.model = model;
    this.volume = volume;
}

Car.prototype.move = function(){
    console.log(`Car ${this.mark} ${this.model} is moving`);
}

Car.prototype.getVolume = function(){
    console.log(`The volume of this car's engine (${this.mark} ${this.model}) is ${this.volume}`);
}

function Outlander(mark, model, volume){
    Car.prototype.constructor(mark, model, volume);
    this.dirtMove = function(){
        console.log(`${this.mark} ${this.model} move through the dirt successfully`);
    }
}

Outlander.prototype = Object.create(Car.prototype);

function Universal(mark, model, volume){
    Car.prototype.constructor(mark, model, volume);
    this.carryPotatos = function(){
        console.log(`${this.mark} ${this.model} deliver potatos from the country`);
    }
}

Universal.prototype = Object.create(Car.prototype);

function Sedan(mark, model, volume){
    Car.prototype.constructor(mark, model, volume);
    this.cityMove = function(){
        console.log(`${this.mark} ${this.model} move through city`);
    }
}

Sedan.prototype = Object.create(Car.prototype);


var mitsOutland = new Outlander("Mitsubishi", "Outlander", "2.0");
mitsOutland.getVolume();
mitsOutland.dirtMove();
mitsOutland.move();


//Object inheritance
var tuning = {
    upgradeEngine: () =>{
        console.log ("The new engine was installed");
    },
    addTurbo: () => {
        console.log ("Turbo is added");
    }
}

Object.setPrototypeOf(mitsOutland, tuning);
mitsOutland.upgradeEngine();