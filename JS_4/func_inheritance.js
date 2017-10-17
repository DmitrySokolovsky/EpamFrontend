function Car (mark, model, volume){
    this.mark = mark;
    this.model = model;
    this.volume = volume;
    this.move = function(){
        console.log(`Car ${this.mark} ${this.model} is moving`);
    }
    this.getVolume = function(){
        console.log(`The volume of this car's engine (${this.mark} ${this.model}) is ${this.volume}`);
    }
}

function Outlander(mark, model, volume){
    Car.call(this, mark, model, volume);
    this.dirtMove = function(){
        console.log(`${this.mark} ${this.model} move through the dirt successfully`);
    }
}

function Universal(mark, model, volume){
    Car.call(this, mark, model, volume);
    this.carryPotatos = function(){
        console.log(`${this.mark} ${this.model} deliver potatos from the country`);
    }
}

function Sedan(mark, model, volume){
    Car.call(this, mark, model, volume);
    this.cityMove = function(){
        console.log(`${this.mark} ${this.model} move through city`);
    }
}

/* var fordFocus3 = new Universal("Ford", "Focus 3", 1.6);
fordFocus3.carryPotatos();
fordFocus3.getVolume();

var mitsOutland = new Outlander("Mitsubishi", "Outlander", "2.0");
mitsOutland.getVolume();
mitsOutland.dirtMove();
mitsOutland.move(); */