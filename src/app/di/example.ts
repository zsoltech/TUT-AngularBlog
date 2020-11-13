namespace withoutdepinj {
    class Engine {
        constructor(/*hp: number*/) { }
    }

    class Tire {
        constructor() { }
    }

    class Car {
        engine: Engine;
        tire: Tire;

        constructor() {
            this.engine = new Engine();
            this.tire = new Tire();
        }
    }

    let car = new Car();
}

namespace withdepinj {
    class Engine {
        constructor(hp: number) { }
    }

    class Engine2 extends Engine  {
        constructor() {
            super(10);
         }
    }

    class Tire {
        constructor(width: number) { }
    }

    class Car {
        engine: Engine;
        tire: Tire;

        constructor(engine: Engine, tire: Tire) {
            this.engine = engine;
            this.tire = tire;
        }
    }

    let engine = new Engine(1000);
    let tire = new Tire(10);
    let engine2 = new Engine2();
    
    let car = new Car(engine2, tire);
}