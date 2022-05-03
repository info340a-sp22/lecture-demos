'use strict';

import { peopleArray } from './other.js';
import * as otherModule from './other.js';
import greet from './other.js';

console.log("index");
console.log("index", peopleArray);
//helloOther();
greet();

// console.log(otherModule.helloOther());



const foo = (params) => 'foo ' + params;

// console.log(foo("hello"));


const myObject = { a: 1, b: 2, c: 3, d: 4 };

// const {a, z} = myObject; //myObject.a to a, etc.
// // const a = myObject.a
// // const b = myObject.b
// // const c = myObject.c
// console.log('a', a); //=> 1
// console.log('z', z); //z const = myObject.z
// // console.log('b', b); //=> 2;
// //console.log('c', c); //=> 3;

// const a, b, c = [1,2,3];


// const person = { name: 'Ada', height: 64 }

//a function that expects a person object
// function getBMI({ height, weight }) {

//   console.log(height);
//   console.log(weight);

//   return 703 * weight / (height * height);
// }

// const person = {name: 'Ada', height: 64, weight: 135}

// console.log( {a: 1, a: 2} )

// const personWithHat = {hat: 'bowler', height: 80, ...person};
// //const olderAda = {...person, age: person.age+1}
// console.log(person); //has name, height, weight
// console.log(personWithHat); //has name, height, weight, hat


// //const greet = ({name}) => "hello"+name;










































