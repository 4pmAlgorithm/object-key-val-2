// YOUR CODE BELOW


//#5 3/4/2022 5:12pm
//#4 1/5/2020
//#3 12/11 1min
//11/22/2019
//#2
//#1


//#5 3/4/2022 5:12pm
me = {
  name: "Kat",
  getGreeting: function (){
    console.log(`Hi, my name is ${me.name}.`)
    return `Hi, my name is ${me.name}.`
  }
}

// function getGreeting(name){
//   return `Hi, my name is ${name}`
// }

//console.log(me.name); // 'Kat'
me.getGreeting(); // => 'Hi, my name is Kat.'


//#4
// const me = {
//   name : 'Kat',
//   getGreeting: function(){
//     return `Hi, my name is ${this.name}.`
//   }
// }



// //#3
// const me = {
//   name: 'Kat',
//   getGreeting: function(){
//     return  `Hi, my name is ${this.name}.`
//   }
// }



// //#2
// const me = {
//   name: 'Kat',
//   getGreeting:  function(){
//     return `Hi, my name is ${me.name}.`
//   }
// }


// //#1
// const me = {
//   name: 'Kat',
//   getGreeting:  function(){
//     return `Hi, my name is ${me.name}.`
//   }
// }

// let me = {
//     name: 'Karen',
//     getGreeting: function() {
//       return 'Hi, my name is ' + this.name + '.';
//     }
// }
  
// // alternative solution using ES6 string interpolation
// let altMe = {
//     name: 'Gabe',
//     getGreeting: function() {
//       return `Hi, my name is ${this.name}.`;
//     }
// }