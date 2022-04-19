'use strict';

// tenString = '10';
// dog = "Fido"
// dogString = "Fido"
// const dogsArray = ["Fido", "Rover", "Spot"];

// const agesObj = {sarah:42, amit:35, zhang:13}
// console.log("object:", agesObj);
// console.log("keys", Object.keys(agesObj));


// const ages = {alice:40, bob:35, charles:13};

// ages['alice'] = 42;
// ages['fred'] = 19;

// //access ("look up") values
// console.log( ages ); //=> 40

// const personObj = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     age: 40,
//     favorites: {
//       music: 'jazz',
//       food: 'pizza',
//       numbers: [12, 42]
//     }
//   };

// const inputtedValue = "music"
// const favFood = personObj.favorites[inputtedValue]; //undefined!!

// console.log(personObj);
// console.log(favFood);


const peopleArray = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]

//javascript loop
for(const thePerson of peopleArray) {
    console.log(thePerson.name);
}


//java
// for(String item : myArray) {}
//javascript
// for(const item of myArray) {}



function greet(greeting, name){
    return greeting  + ", " + name;
}







































