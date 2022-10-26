"use strict";
//Basic Types
let id = 5;
let company = 'NA';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jane'],
];
//Union
let pid;
pid = 22;
//Enum
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
//Sub Classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Jill', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill', 'Sue']);
numArray.push(1);
