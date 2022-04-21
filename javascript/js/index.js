'use strict';

const peopleArray = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]
//console.log(peopleArray);

//convert from array of objects to array of strings
const peopleNameArray = peopleArray.map(function(person){
    return person.name;
});
console.log(peopleNameArray);

const tallPeople = peopleArray.filter(function(person){
    const shouldKeepBoolean = person.height >= 70;
    return shouldKeepBoolean;
})
console.log(tallPeople);


const tallPeopleNames = peopleArray
    .filter(function(person){
        const shouldKeepBoolean = person.height >= 70;
        return shouldKeepBoolean;
    })
    .map(function(person){
        return person.name;
    });
console.log(tallPeopleNames);

const totalHeight = peopleArray.reduce(function(acc, curr) {
    const newAccumulation = acc + curr.height;
    return newAccumulation; //remember to return!
}, 0)
console.log(totalHeight);

const tallestPerson = peopleArray.reduce(function(acc, curr){
    if(curr.height > acc.height){ //if new person is taller
        return curr; //new person is now the "accumulation", return
    }
    else {
        return acc; //return the old "accumulation" (winner)
    }
}, {height:0}); //start with first person
console.log(tallestPerson);








// for(const person of peopleArray){
//     console.log(person.name);
// }

// // const printName = function(person){
// //     console.log(person.name);
// // }

// peopleArray.forEach(function(person){
//     console.log(person.name);
// });




// function sortByHeightFunction(personA, personB) {
//     if(personA.height < personB.height) {
//       return -1; //person A is shorter, so they come first
//     } else if(personB.height < personA.height) {
//       return 1; //person B is shorter, so they come first 
//     } else {
//       return 0;
//     }
//   }
  
// peopleArray.sort(sortByHeightFunction); //sorts in place!
// console.log(peopleArray);







//hoisted
// function sayHello(person){
//     console.log("Hello, "+person);
// }

// const sayHello = function(person) {
//     console.log("Hello, "+person.toUpperCase());
// }

// sayHello("bob", "alice", "rabbit");

// const sayGoodbye = function(person){
//     console.log("Goodbye, "+person);
// }

// // //calling the function
// // sayHello("world");

// function doWorldNTimes(aFunction, numTimes) {
//     for(let i=0; i<numTimes; i++){
//         aFunction("world"); //call the function
//     }
// }

// doWorldNTimes(sayHello, 3); //call the `sayHello` function with `"world"` argument

// doWorldNTimes(function(person){
//     console.log("Goodbye, "+person);
// }, 3);

//         //define the function
// doWorldNTimes(function(person){
//     console.log("wave at "+person)
// });


//foo([1,2,3])


//sayGoodbye("world");

// function sayHello() { //version with no args
//     return "Hello";
// }

// //print out the function
// console.log( sayHello ); // logs "[Function: sayHello]" 
//                          // the function

// console.log( sayHello );



// //takes in TWO callback functions!
// function doTogether(firstCallback, secondCallback){
//     firstCallback();  //execute the first function
//     secondCallback();  //execute the second function
//     console.log('at the "same time"!');
// }

// function patHead() {
//     console.log('pat your head');
// }

// function rubBelly() {
//     console.log('rub your belly');
//     return "belly";
// }

// //pass in the callbacks to do them together
// const result = rubBelly();
// doTogether(rubBelly, patHead);












































