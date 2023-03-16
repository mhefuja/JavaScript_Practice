"use strict";
class Employee {
    //in other languages we can have parameterized as well as default constructor but in typescript we can't have both at same time.
    constructor(id, name, address) {
        this.address = address;
        this.id = id;
        this.name = name;
    }
    getNameWithAddress() {
        // return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}.`;
    }
}
let empImran = new Employee(1, "Imran hashmi", "block no. 1");
// empImran.id = 1;
// empImran.address = "block no. 1";
// empImran.name = "Imran Hashmi";
console.log("Object -> ", empImran);
console.log("calling method -> ", empImran.getNameWithAddress());
