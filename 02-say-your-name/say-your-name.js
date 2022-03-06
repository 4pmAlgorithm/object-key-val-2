// YOUR CODE BELOW


//#4 3/5/22 5:51pm - 
////#3 7:27pm
you = {
  name: "Alyssa"
}
me2 = {
  name: "Tarana",
  getGreeting: function(you){
    console.log(`Hi ${you.name}, my name is ${me2.name}.`)
    return `Hi ${you.name}, my name is ${me2.name}.`
  }
}

console.log(me2.getGreeting(you))
me2.getGreeting(you)









// //#3 7:27pm
// const me2 = {
//   name: 'Tarana',
//   you: 'Alyssa',
//   getGreeting: function(friend){
//     return  `Hi ${friend.name}, my name is ${me2.name}.`
//   }
// }




// //#2
// const me2 = {
//     name: 'Tarana',
//     you: 'Alyssa',
//     getGreeting: function (friend){
//       return `Hi ${friend.name}, my name is ${this.name}.`
//     }
//   }
  


//   //#1