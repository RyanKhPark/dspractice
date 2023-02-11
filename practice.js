// Rest parameter, Rest operator: add three dots in the parameter
// Instead of pulling elements out of an array, take all arguments and merges thme into an array, builds an array inside of the function

// different from spread operator (copy array or object)

// with function created with the function keyword, special variable available: arguments, which gives and array like object, but not an array. USING the REST PARAMETER is recommended

///////////////// CREATING FUNCTIONS INSIDE OF FUNCTIONS

// vast majority of things is U want to make global functions. Learn fn in fn later.
// fn are just objects which we store in a variable, which objects can store other objects as elements.

// Callback Functions!

// create a fn in a built in function.

//callback fn: the fn is called for u by smt else, u can't control when its exactly called.
// Pass a fn as a value for a n arguement to another function for the browser to do its job.

// For example: sumUP(showResult), no parameters for fn: showResult because I don't want to execute right here but the sumUp fn to execute the showResult fn.

// const arr = ['a', 2, 3, 'abc'];

// let arrMap = arr.map(el => el >= 2 ? 4 : 0);
// console.log(arrMap);
// console.log(arr);


// const emptyArr = []
// arr.forEach(el => {
//     if (el >= 2) {
//         emptyArr.push(4)
//     } else {
//         emptyArr.push(0)
//     }
// })

// console.log(emptyArr);

// forEach is a For loop




/////////// OBJECTS!!!!!!!!!!!!!!//////


/* ***************************************************************

Obects

What's an Object?

Core Data Structure in JS
    - Typically reflect "real-world" entities
    ex) const newMember = {
        name: "Ryan",
        age: 33,
        gender: "male"
    }
    - Apply real-world logic to coding

Mage up of properties & methods
    -Store data in properties and actions in methods
    -allow you to group related data together and spit your code in to logical pieces

Objects are a course made up of primitive values.

Primitive Values: Nubmers Strings Booleans null undefined Symbol
Reference Values (= objects): everything else!!, {...}, arrays, DOM nodes, ..other built in objects


Setting to undefined: it is technically still there but it does not matter anymore.

null: I want to reset it.

To acces a value in an object (two ways):
1. objectName.name =
2. objectName['name'] =

or for CSS style

1. movieList.style.backgroundColor
2. movieList.style['background-color']

also square brackets allow variables!!

objects keeps the key-value in order in how we added the properties.

const object = {
    [keyname]: '....',
    [keyname2]: '2222'
}

keynames can be held in squeare brackets


Chaining: call multiple functions using the same object

Object Spread Operator

Object destructuring

const { keyname, ...otherProps } = movie (name of object)
otherprops refers to keynames other than keyname;

THIS!!!!!!!!!!!!!!!!!!!!!!!!!11

this keyword, refers to whatever calls that function, whatever executes that function

If outside of function, it is the object of the window browser

if it is in a method, property of an object, this invokes it

*/

//CLASSES & OBJECT-ORIENTED PROGRAMMING  OOPPPPPPPPPPPPPPPPPPPPPPP

/*

What is OOP?

It's an approach, a way of writing and structuring your programming
Work with real-life entities in your code.

Embrace the logic we work with only objects.


Classes & Instances

classes: to build objects in a easier way,!! blue prints for objects !!

class define how objects look like, which properties and methods they have

Classes make creation of multiple similar objects much easier

class in the end is a function


Static Properties, Fields & Methods


When to use Classes
Are object literals {} obsolete? No. Great for general data grouping, objects which you only create once

Bet also consider classes!
GReat when you re-create the same type of obect over and over again. More overhead initially but easy " object duplication" thereafter

Getters Setters




Properties, Fields & Methods



Inheritance
 

What are prototypes?

Super super important in JS
Js is prototype based language

JS uses prototypical inheritance
=> the class syntax is basically just "syntactic sugar"
 
Why does every object have a prototype

prototype object == "Fallback objects"



*/



// class Person {

//     name = 'Max';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log(
//             'Hi, Ia am ' + this.name + ' and I am ' + this.age
//         );
//     }
// }

// const person = new Person();

// console.log(person)

// person.age = 14;

// console.log(person.age)


// Imitate DS stack using classes

// So its like
// class House {
//     const this = {name, age}
//     this.name = name
//     this.age = age
//     return this
// }

// class House {
//     constructor(color, size) {
//         this.color = color
//         this.size = size
//     }

//     getFurniture() {
//         console.log("New furniture")
//     }


//     demolish() {
//         console.log(this['color'])
//     }
// }

// const house1 = new House('red', 5)

// console.log(house1)
// console.log(house1.demolish())
hello = 'hello'
class Stack {
  constructor() {
    this.arr = [];
    this.emptyMessage = 'The stack is empty';
  }

  push(el) {
    this.arr[this.arr.length] = el
  }

  pop() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }

    const tmpArr = [];

    for (let i = 0; i <= this.arr.length - 2; i++) {
      tmpArr[i] = this.arr[i];
    }
    this.arr = tmpArr;
    return this.arr[this.arr.length - 1]
  }

  isEmpty() {
    console.log('~~~', this.hello)
    return !this.arr.length;

    // if (this.arr.length === 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  peek() {
    return this.isEmpty() ? this.emptyMessage : this.arr[this.arr.length - 1];

    // if (this.isEmpty()) {
    //   return 'The stack is empty';
    // } else {
    //   const lastElement = this.arr[this.arr.length - 1]
    //   return lastElement;
    // }

  }
}

const stack1 = new Stack()

stack1.push(3)
// console.log(stack1.isEmpty())
console.log(stack1.peek())

// const el1 = new Stack(1);
// const el2 = new Stack(20);

// console.log(el1)

// console.log(el2)

/**
 * Implement the Stack data structure using javascript.
 * 
 * Basic requirements:
 * - push method
 * - pop method
 *      >> Doesn't have to be O(1) time complexity.
 * - isEmpty method
 * - peek method
 * 
 * You can use whatever built-in methods in javascript.
 * 
 * 
 * 
 * 
 */
