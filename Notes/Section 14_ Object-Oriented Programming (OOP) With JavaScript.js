'use strict';

/*===============================================================================================================================================
                Section 14: Object-Oriented Programming (OOP) With JavaScript
199. Section Intro
200. Section Roadmap
201. What is Object-Oriented Programming
202. OOP in JavaScript
203. Constructor Functions and the 'new' Operator
204. Prototypes
205. Prototypal Inheritance and the Prototype Chain
206. Prototypal Inheritance on Built-In Objects
207. Coding Challenge #1
208. ES6
209. Setters and Getters
210. Static Methods
211. Object.create
212. Coding Challenge #2
213. Inheritance Between "Classes": Constructor Functions
214. Coding Challenge #3
215. Inheritance Between "Classes": ES6
216. Inheritance Between "Classes": Object.create
217. Another Class Example
218. Encapsulation: Proteted Properties and Methods
219. Encapsulation: Private Class Fields and Methods
220. Chaining Methods
221. ES6 Classes Summary
222. Coding Challenge #4
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
201. What is Object-Oriented Programming?`);
/*==============================================================*/

/* 

OOP
    # Object-oriented Programming (OOP) is a proramming paradigm* based on the concept of objects
        * Style of code, "how" we write and organize code
    # We use objects to model (describe) rea-world* or abstract** features
        * user or todo list
        ** HTML component or data structure
    # Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block
    # In OOP, objects are self-contained pieces/blocks of code
    # Objects are building blocks of applications, and interact with one another
    # Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object
    # OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code")



Classes and Instances (traditional OOP)
    # Class
        # Like a blueprint from which we can create new objects
        # User {
            // Conceptual overview

            user
            password
            email

            login(password)
                // Login logic
            sendMessage(str)
                // Sending logic
        }
    # Instance
        # new User('jonas')
            # {
                user = 'jonas'
                password = 'dk23s'
                email = 'hello@jonas.io'

                login(password)
                    // Login logic
                sendMessage(str)
                    // Sending logic
            }
        # new User('mary')
            # {
                user = 'mary'
                password = 'qwert23'
                email = 'mary@test.com'

                login(password)
                    // Login logic
                sendMessage(str)
                    // Sending logic
            }
        # new Uuser('steven')
            # {
                user = 'steven'
                password = 'sd7g5sd87g58'
                email = 'steven@test.com'

                login(password)
                    // Login logic
                sendMessage(str)
                    // Sending logic
            }



The 4 Fundamental OOP Principles
    # Abstraction
        # Ingnoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, insted of messing with details that don't really matter to our implementation.
    # Encapsulation
        # Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).
        # Prevents external code from accidentally manipulating internal properties/state.
    # Inheritance
        # Making all properties and methods of a certain class available to a child class, forming a hierarchal relationship between classes. This allows us to reuse common logic and to model real-world relationships.
    # Polymorphism
        # A child class can ovwerite a method it inherited from a parent class [it's more complex than that, but enough for our purpose].

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
202. OOP in JavaScript`);
/*==============================================================*/

/*

Constructure functions
    # Technique to create objects from a function
    # This is how built-in objects like Arrays, Maps or Sets are actually implemented

ES6 Classes
    # Modern alternative to constructure function syntax
    # "Synthetic sugar": begind the scenes, ES6 classes work exactly like constructure functions
    # ES6 classes do not behave like classes in "classical OOP"

Object.create()
    # The easiest and most straightfarward way of linking an object to a prototype object

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
203. Constructor Functions and the 'new' Operator`);
/*==============================================================*/

// 1. New {} is created
// 2. function is called, 'this' = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this, its inaficient, to many copies will be created
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // };
};
const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: "Jonas", birthYear: 1991}
console.log(jonas instanceof Person); // true

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
204. Prototypes`);
/*==============================================================*/

console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
jonas.calcAge(); // 46
console.log(jonas);
console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Setting properties on Prorotype, not Object
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species); // Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
205. Prototypal Inheritance and The Prototype Chain`);
/*==============================================================*/

/*

The 'new' operator:
    1. An empty object is created
    2. 'this' keyword in constructor function call is set to the new object
    3. The new object is linked (__proto__ property) to the constructor function's prototype property
    4. the new object is returned from the constructor function call

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
206. Prototypal Inheritance on Built-In Objects`);
/*==============================================================*/

// Objects

console.log(jonas.__proto__); // Person
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); // Object
// nothing left
console.log(jonas.__proto__.__proto__.__proto__); // null
console.dir(Person.prototype.constructor);

// Arrays

const arr = [2, 2, 9, 3, 4, 5, 7, 9]; // newArray === []
console.log(arr.__proto__); // Array
console.log(arr.__proto__.__proto__); // Object
console.log(arr.__proto__ === Array.prototype); // true

// Adding new method on Arrays, bad practice
Array.prototype.unique = function () {
    return [...new Set(this)];
};
console.log(arr.unique()); // [2, 9, 3, 4, 5, 7]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
208. ES6 Classes`);
/*==============================================================*/

// Class Expression
const PersonCl1 = class {};

// Class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); // PersonCl {firstName: "Jessica", birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};
jessica.greet(); // Hey Jessica

// 1. Classes are NOT hoisted, they canot be used before declaration
// 2. Classes are first-class citizens, they can be passed to and from functions
// 3. Classes are executed in strict mode

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
209. Setters and Getters`);
/*==============================================================*/

// Used for validation

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    },
};
console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // (5) [200, 530, 120, 300, 50]

class PersonCl209 {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
}
const jessica209 = new PersonCl209('Jessica Davis', 1991);
console.log(jessica209.age); // 46
console.log(jessica209.fullName); // Jessica Davis

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
210. Static Methods`);
/*==============================================================*/

Person.hey = function () {
    console.log('Hey there');
    console.log(this);
};
Person.hey();

class PersonCl210 {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Instance Method
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // Static Method
    static hey() {
        console.log('Hey there');
        console.log(this);
    }
}
PersonCl210.hey();

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
211. Object.create`);
/*==============================================================*/

// Prototypal Inheretence - set manually without any '.prototype' or 'constructure function'

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    // similar to 'constructure function', but its NOT, because no 'new' keyward required when creating new object
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};
const steven = Object.create(PersonProto);
console.log(steven); // {}
steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven); // {name: "Steven", birthYear: 2002}
steven.calcAge(); // 35
console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah); // {firstName: "Sarah", birthYear: 1979}
sarah.calcAge(); // 58

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
213. Inheritance Between "Classes": Constructor Functions`);
/*==============================================================*/

const Person213 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person213.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
const Student213 = function (firstName, birthYear, course) {
    // .call required to set 'this' onto this new object, and 1st argument needs to be 'this' followed by the rest of arguments
    Person213.call(this, firstName, birthYear);
    this.course = course;
};

// Liniking Prototypes, so Student213 can use Person213 methods, like 'calcAge'
Student213.prototype = Object.create(Person213.prototype);

Student213.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student213('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); // 17

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student213); // true
console.log(mike instanceof Person213); // true
console.log(mike instanceof Object); // true

Student213.prototype.constructor = Student213;
console.dir(Student213.prototype.constructor);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
215. Inheritance Between "Classes": ES6 Classes`);
/*==============================================================*/

class PersonCl215 {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance Methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a ful name!`);
    }
    get fullName() {
        return this._fullName;
    }

    // Static Methods
    static hey() {
        console.log('Hey there');
    }
}

// In case you dont need any new parameters
class StudentClass extends PersonCl215 {}
const student215 = new StudentClass('Martha Jonas', 2012);
console.log(student215); // StudentClass {_fullName: "Martha Jonas", birthYear: 2012}

// With new parameters
class StudentCl215 extends PersonCl215 {
    constructor(fullName, birthYear, course) {
        // Always needs to be 1st
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this._fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(
            `I'm ${2037 - this.birthYear} years old, but as a student I fell more like ${
                2037 - this.birthYear + 10
            }`
        );
    }
}
const martha = new StudentCl215('Martha Jonas', 2012, 'Computer Science');
console.log(martha); // StudentCl215 {_fullName: "Martha Jonas", birthYear: 2012, console: "Computer Science"}
martha.introduce(); // My name is Martha Jonas and I study Computer Science
martha.calcAge(); // I'm 25 years old, but as a student I fell more like 35

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
216. Inheritance Between "Classes": Object.create`);
/*==============================================================*/

const PersonProto216 = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};
const steven216 = Object.create(PersonProto216);

const StudentProto216 = Object.create(PersonProto216);
StudentProto216.init = function (firstName, birthYear, course) {
    PersonProto216.init.call(this, firstName, birthYear);
    this.course = course;
};
StudentProto216.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto216);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay); // {firstName: "Jay", birthYear: 2010, course: "Computer Science"}
jay.introduce(); // My name is Jay and I study Computer Science
jay.calcAge(); // 27

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
217. Another Class Example`);
/*==============================================================*/

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Internal Method
    approveLoad(val) {
        return true;
    }

    // API - Public Interface to the Object
    deposit(val) {
        this.movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    requestLoad(val) {
        if (this.approveLoad(val)) {
            this.deposit(val);
            console.log(`Load approved`);
        }
    }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// Thanks for opening an account, Jonas
// Account {owner: "Jonas", currency: "EUR", pin: 1111, movements: Array(0), locale: "en-GB"}

/*
Bad Practice to interact with properties directly
    acc1.movements.push(250);
    acc1.movements.push(-140);
    console.log(acc1.movements); // (2) [250, -140]
*/
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoad(1000);
console.log(acc1.movements);
// (2) [250, -140, 1000]

// These methods should not ne accessable from outside
acc1.approveLoad(1000);
console.log(acc1.pin); // 1111

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
218. Encapsulation: Protected Properties and Methods`);
/*==============================================================*/

class Account218 {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.locale = navigator.language;
        // Protected Property, its just a convension
        this._pin = pin;
        this._movements = [];

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Protected Method
    _approveLoad(val) {
        return true;
    }

    // API - Public Interface to the Object
    getMovements() {
        return this._movements;
    }
    deposit(val) {
        this._movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    requestLoad(val) {
        if (this._approveLoad(val)) {
            this.deposit(val);
            console.log(`Load approved`);
        }
    }
}
const acc218 = new Account218('Jonas', 'EUR', 1111);
console.log(acc218);

acc218.deposit(250);
acc218.withdraw(140);
console.log(acc218.getMovements()); // (2) [250, -140]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
219. Encapsulation: Private Class Fields and Methods`);
/*==============================================================*/

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// Static vesions

class Account219 {
    // 1. Public fields, they are on instances not prototype
    locale = navigator.language;

    // 2. Private fields, they are on instances not prototype
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // this.locale = navigator.language;
        // this._movements = [];

        // Private field
        this.#pin = pin;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public methods
    // or...
    // API - Public Interface to the Object
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    requestLoad(val) {
        // if (this.#approveLoad(val)) {
        if (this._approveLoad(val)) {
            this.deposit(val);
            console.log(`Load approved`);
        }
    }

    // 4. Private methods
    // #approveLoad(val) {
    _approveLoad(val) {
        return true;
    }
    static helper() {
        console.log(`'static' Helper method`);
    }
}
const acc219 = new Account219('Jonas', 'Eur', 2222);
acc219.deposit(250);
acc219.withdraw(140);
console.log(acc219);
// console.log(acc.#movements); // SyntaxError
console.log(acc219.getMovements()); // (2) [250, -140]
// console.log(acc219.#pin); // SyntaxError
// console.log(acc219.#approveLoad(100)); // SyntaxError
Account219.helper(); // 'static' Helper method

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
220. Chaining Methods`);
/*==============================================================*/

// For successful chaining need to add 'return this;' on methods so they would return objects

class Account220 {
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
    }

    // Public methods
    // or...
    // API - Public Interface to the Object
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withdraw(val) {
        this.deposit(-val);
        return this;
    }
    requestLoad(val) {
        // if (this.#approveLoad(val)) {
        if (this._approveLoad(val)) {
            this.deposit(val);
            console.log(`Load approved`);
            return this;
        }
    }

    // 4. Private methods
    // #approveLoad(val) {
    _approveLoad(val) {
        return true;
    }
}
const acc220 = new Account220('Jonas', 'Eur', 2222);

// Chaining
acc220.deposit(300).deposit(500).withdraw(35).requestLoad(25000).withdraw(4000);
console.log(acc220.getMovements()); // (5) [300, 500, -35, 25000, -4000]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
221. ES6 Classes Summary`);
/*==============================================================*/

class Student extends PersonCl210 {
    // Public Field, similar to property, available on created object
    university = 'Univeristy of Lisbon';
    // Private Field
    #studyHours = 0;
    #course;
    // Static Public Field, available only on class
    static numSubjects = 10;

    // Constructor Method, called by 'new' operator. Mandatory in regular class, might be omitted in a child class
    constructor(fullName, birthYear, startYear, course) {
        // Call to parent (super) class (necessary with 'extend'). Needs to happen before accessing 'this' keyword
        super(fullName, birthYear);
        // Instance property (available on created objects)
        this.startYear = startYear;
        // Redefining private field
        this.#course = course;
    }

    // Public method
    introduce() {
        console.log(`I study ${this.#course} at ${this.university}`);
    }
    study(h) {
        this.#makeCoffe();
        this.#studyHours += h;
    }
    // Private method (Might not yet work in the browser. "Fake" alternative: _ instead of #)
    #makeCoffe() {
        return 'Here is a coffe for you';
    }

    // Getter method
    get testScore() {
        return this._testScore;
    }

    // Setter method (use _ to set property with same name as method, and also add getter method)
    set testScore(score) {
        this._testScore = score <= 20 ? score : 0;
    }

    // Static method (available only on class. Can not access instance property nor method, only static ones)
    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}
// Creating new object 'new' operator
const student = new Student('Jonas', 2020, 2037, 'Mecidine');

// Classes are just "syntactic sugar" over constructor functions
// Classes are NOT hoisted, meaning cannot be used beore declaration
// Classes are "first-class" citizens
// Class body is always executed in STRICT MODE
