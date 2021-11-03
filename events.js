//Events

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (num1, num2) => {
  console.log(`the answer is ${num1 + num2} `);
});

eventEmitter.emit("greet", 2, 6);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class Car extends EventEmitter {
  constructor(model,year) {
    super();
    this.model = model
    this.year = year;
  }
}

let Benz = new Car("AMG",2022)

Benz.on('info', ()=>{
    console.log(`Info: ${Benz.year}, ${Benz.model}`)
})

Benz.emit('info')

