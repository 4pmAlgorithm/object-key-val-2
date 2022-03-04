// YOUR CODE BELOW

//#4 1/5/2020
//#3 12/11 1min
//11/22/2019
//#2
//#1



//#4
const me = {
  name : 'Kat',
  getGreeting: function(){
    return `Hi, my name is ${this.name}.`
  }
}



//#3
const me = {
  name: 'Kat',
  getGreeting: function(){
    return  `Hi, my name is ${this.name}.`
  }
}



//#2
const me = {
  name: 'Kat',
  getGreeting:  function(){
    return `Hi, my name is ${me.name}.`
  }
}


//#1
const me = {
  name: 'Kat',
  getGreeting:  function(){
    return `Hi, my name is ${me.name}.`
  }
}

let me = {
    name: 'Karen',
    getGreeting: function() {
      return 'Hi, my name is ' + this.name + '.';
    }
}
  
// alternative solution using ES6 string interpolation
let altMe = {
    name: 'Gabe',
    getGreeting: function() {
      return `Hi, my name is ${this.name}.`;
    }
}