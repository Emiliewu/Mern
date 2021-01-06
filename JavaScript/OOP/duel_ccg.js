class Card {
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res) {
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target) {
    if(target instanceof Unit) {
      target.res -= this.power;
      this.power = 0;
      console.log(`${this.name} attacked ${target.name}`);
      console.log(`player ${this.name} power ${this.power} resilliance ${this.res}`);
      console.log(`player ${target.name} power ${target.power} resilliance ${target.res}`);
  
    }else {
      throw new Error( "Target must be a unit!" );
    }
    return this;
  }

  show() {
    console.log(`player ${this.name} power ${this.power} resilliance ${this.res}`);
    return this;
  }
}

class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play( target ) {
    if( target instanceof Unit ) {
        if(this.stat === "resillience") {
          target.res += this.magnitude;
          target.cost -= this.cost;
          console.log(this.text);
          console.log(`player ${target.name} power ${target.power} resilliance ${target.res} cost left ${target.cost}`);


        } else if (this.stat === "power") {
          target.power += this.magnitude;
          target.cost -= this.cost;
          console.log(this.text);
          console.log(`player ${target.name} power ${target.power} resilliance ${target.res} cost left ${target.cost}`);
        }
    } else {
        throw new Error( "Target must be a unit!" );
    }
    return this;
  }
}
console.log("--------------game start ----------------");
console.log("create red belt Ninja");
const redBeltNinja = new Unit("red belt Ninja", 3, 3, 4);
redBeltNinja.show();
const hardalgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resillience", 3);

console.log("apply hard algorithm on red belt Ninja");
hardalgorithm.play(redBeltNinja);

console.log("create black belt Ninja");
const blackBeltNinja = new Unit("black belt Ninja", 4, 5, 4);
blackBeltNinja.show();

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2","resillience", -2);
unhandledPromiseRejection.play(redBeltNinja);

const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2","power", 2);
pairProgramming.play(blackBeltNinja);

redBeltNinja.attack(blackBeltNinja);
