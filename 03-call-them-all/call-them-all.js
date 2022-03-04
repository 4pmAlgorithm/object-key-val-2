//#13 3/12/2020 
//1/6/2020 #10 #11
// 12/1  #7
// 11/30 #5, #6, 
// 11/26 #1,2,3,4


//#14 4/7/2020
const callThemAll = (obj, val) => {
  let invokedArr = [];
  
  for(let keys in obj){
    let value = obj[keys];
    
    if(typeof value === 'function'){
      invokedArr.push(value(val));
    }
  }
  return invokedArr
}

//#13
const callThemAll = (anObj, val) => {
  let invokedNums = []
  
  for(let keys in anObj){
    let eachObj = anObj[keys]
    console.log('eachObj', eachObj)
    if(typeof eachObj === 'function'){
      invokedNums.push(eachObj(val))     
    }
  }
  return invokedNums
}

//#12 7:49-7:52pm
const callThemAll = (obj, val)=> {
  let invoked = [];
  
  for(let key in obj){
    let eachObj = obj[key];
    
    if(typeof eachObj === 'function'){
      let num = eachObj(val)
      invoked.push(num)
    }
  }
  return invoked;
}


//#11  7:43-7:49
const callThemAll  =  ( obj, val) => {
  let invoked = [];
  
  for(let key in obj){
    let eachObj = obj[key];
    
    if(typeof eachObj === 'function'){
      let num = eachObj(val);
      invoked.push(num)
    }
  }
  return invoked;
}


//#10  7:28-7:43pm
const callThemAll  = (obj, val) => {
  let returnArr = []
  //let total  = 0; 
  
  for(let key in obj){
    let eachObj = obj[key];
    
    if(typeof eachObj === 'function'){
      let num = eachObj(val)
      returnArr.push(num);
    }
  }
  return returnArr;
  //console.log(returnArr)
}


//#9
const callThemAll = (obj, val) =>{
  let invoked = [];
  
  for(let key in obj){
    let eachObj = obj[key];
    if(typeof eachObj === 'function'){
      let num = eachObj(val)
      invoked.push(num)
    }
  }
    return invoked
}

//#8
// YOUR CODE BELOW
const callThemAll  = (obj, val) => { 
  let eachMethodInvo =[];
 
  for(let key in obj) {
   let eachObj = obj[key]
    if(typeof eachObj === 'function'){
      let num = eachObj(val)
       eachMethodInvo.push(num)
      }
      }
    return eachMethodInvo
}

//#7   12/1 1:00-1:06 
const callThemAll  = (anObj, val) => {
  let returnedInv = [];
  
  for(let key in anObj){
    let eachObj = anObj[key];
    if(typeof eachObj === 'function'){
      let num = eachObj(val)
      returnedInv.push(num)
    }
  }
  
  return returnedInv;
}

//#6 6:44-6:47 3mins
const callThemAll  = (anObj, val) => { 
  let returnedArr = []
  
  for(let key in anObj) {
    let eachObj = anObj[key]
    if(typeof eachObj === 'function'){
      let num = eachObj(val) 
      returnedArr.push(num)
    }
  }
  return returnedArr;
}

//#5 6:00-6:44pm 44mins! forgot how to solve it in two days
const callThemAll = (anObj, val) => {
  let returnedArr = [];

  for(let key in anObj){
    let eachObj = anObj[key]
    if(typeof eachObj === 'function'){
      let num = eachObj(val)
      returnedArr.push(num)
    }
  }
  return returnedArr;
}



//#4 6:50-6:53pm
const callThemAll =(anObj, value) => {
  let methodInvo = []
  
  for(let key in anObj){
    let eachKey = anObj[key];
    if(typeof eachKey=== 'function'){
      let calculate = eachKey(value);
        methodInvo.push(calculate)
    }
  }
  return methodInvo
}

//#3 6:47-6:50 3mins
const callThemAll =(anObj, value) =>{
  let array = [];
  for(let keys in anObj) {
    let eachKey = anObj[keys]
    if(typeof eachKey ===  'function'){
      let cal = eachKey(value);
      array.push(cal)
    }
  }
  return array;
}

//#2 6:40-6:47pm 7 mins
const callThemAll =(anObj, value) => {
  let methodInvocations = [];
  
  for(let keys in anObj) {
    let eachKey = anObj[keys];
    if( typeof eachKey === 'function') {
      let methodInvocation =  eachKey(value);
      methodInvocations.push(methodInvocation)
    }
  }
  
  return methodInvocations;
}



//#1 11/26/2019 9:15-9:40pm 25mins fully understood this time. 
const callThemAll = (anObj, value) => { //function that takes an Object and a value, number.
  let methodInvocations = []; // method invocation is an array, whihc we will call at the end.
  
  for(let keys in anObj) { // loop each key in an object.
    let eachKeys = anObj[keys]; // name the each key as "eachKeys" 
    
    if( typeof eachKeys === 'function' ){ // if type of eachKeys are function, not just a value or something else,
      let eachCal = eachKeys(value); //then you want to calculate putting the value number through its function
      methodInvocations.push(eachCal) //then the push the calculated number to the array.
      }
  }
  return methodInvocations; //revoke the array with pushed numbers.
}

let addsNums = {
addTen: function(num) {
  return num + 10;
  },

addTwenty: function(num) {
  return num + 20;
  },

someProperty: 'value'
};

console.log(callThemAll(addsNums, 100)); // => [110, 120]




// YOUR CODE BELOW
// YOUR CODE BELOW
// 
// 2 from each method invocation.
// 3 with all of the returned values 

// //option1
// const callThemAll = (obj, valAsAnArg) => { //Write a function callThemAll, //given an object and a value, 
//     let returnedValuesfromMethods = []; //callThemAll should return an array   
//     for(let key in obj) { //calls every method in the obj
//       let currentValueOrFunc = obj[key]; 
     
//       if(typeof currentValueOrFunc === 'function'){ //if the currentValueOrFunc is a method in the object 
//       let methodResult = currentValueOrFunc(valAsAnArg); // call the method, 1 passing in the value as the argument with each call.                
//         returnedValuesfromMethods.push(methodResult);
//       }
//     }
//     return returnedValuesfromMethods; //callThemAll should return an array 
// }
  


// //option
// function callThemAll(object, argument) {
  
//     // create an array to store the returned values from the methods
//     let methodResults = [];
  
//     // loop through all of the keys in the object
//     for (let key in object) {
//       let currentValue = object[key];
  
//       // if the currentValue is a method in the object...
//       if (typeof currentValue === 'function') {
  
//         // ...call the method, passing in the argument
//         let methodResult = currentValue(argument);
  
//         // push the value returned by the method into the methodResults array
//         methodResults.push(methodResult);
//       }
//     }
//     return methodResults;
// }
  
// //option
// const callThemAll = (obj, arg) => {
//     let rvfemi = [];
//     for (let key in obj) {
//       let cvof = obj[key];
//       if(typeof cvof === 'function') {
//         let mr = cvof(arg);
//         rvfemi.push(mr);
//       } 
//     }
//     return rvfemi;
// }
  
// //option 
// const callThemAll = (obj,arg) => {
//     let c = [];
//     for (let key in obj) {
//       let e = obj[key];
//       if(typeof e === 'function') {
//         let f = e(arg);
//         c.push(f);
//       }
//     }
//     return c;
// }