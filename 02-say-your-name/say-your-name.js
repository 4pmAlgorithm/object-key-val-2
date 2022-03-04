// YOUR CODE BELOW


//#3 7:27pm
const me2 = {
  name: 'Tarana',
  you: 'Alyssa',
  getGreeting: function(friend){
    return  `Hi ${friend.name}, my name is ${me2.name}.`
  }
}




//#2
const me2 = {
    name: 'Tarana',
    you: 'Alyssa',
    getGreeting: function (friend){
      return `Hi ${friend.name}, my name is ${this.name}.`
    }
  }
  


  //#1