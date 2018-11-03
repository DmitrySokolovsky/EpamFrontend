class Car {
    constructor(mark, engine, model) {
        this.mark = mark;
        this.model = model;
        this.engine = engine;
    }

    move () {
        console.log(`${this.mark} ${this.model} moving`);
    }

    getVolune() {
        console.log(`${this.mark} ${this.model} move through the dirt successfully`);
    }
}

class Executer {
    static execute(callback) {
        callback.bind(this);
        console.log('called from Executer');
    }
}

class Outlander extends Car {
    // if there is no constructor - parent's one is used
    constructor(mark, engine, model) {
        super(mark, engine, model);
    }

    dirtMove(){
        console.log(`${this.mark} ${this.model} move through the dirt successfully`);
    }

    move () {
        super.move();
        console.log(`И прёт как падла`);
    }

    // as an example of context usage
    func() {
        Executer.execute(this.move);
    }
}

let outlander = new Outlander('Mitsubishi', 3.0 ,'Outlander');

outlander.move();

outlander.func();



// private
// final
// 

// class Rabbit extends Animal {
//     constructor() {
//       alert(this); // ошибка, this не определён!
//       // обязаны вызвать super() до обращения к this
//       super();
//       // а вот здесь уже можно использовать this
//     }
//   }
