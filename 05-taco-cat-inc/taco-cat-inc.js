//3/15/2020
//3/14/2020


let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: { //category
    'cat nip': { //ingridients
      cost: 0.5, 
      quantity: 100
    },

    'treat dust': { 
      cost: 0.1, 
      quantity: 100
    }
  },

  cash: 0
};

//3/15/2020 clear variable names
// YOUR CODE BELOW
tacoCatInc.currentInventory = function(){
  let total = 0;
  
  for(let keysCategory in tacoCatInc){
    let valIngredientsOBJ = tacoCatInc[keysCategory]
    for(let keysEachIngredient in valIngredientsOBJ){
      let valCostNQuantity = valIngredientsOBJ[keysEachIngredient];
      total += valCostNQuantity.cost * valCostNQuantity.quantity
    } 
  }
  return total
}

tacoCatInc.sale = function(order){
  let price = 0
  for(let keysCategory in order){
    let eachIngredientVal = order[keysCategory];
    
  
    price += this[keysCategory][eachIngredientVal].cost
    this.cash += this[keysCategory][eachIngredientVal].cost
    this[keysCategory][eachIngredientVal].quntity--
    
  }
  return price
}

//3/14/2020
tacoCatInc.currentInventory = function(){
  let total = 0; 
  
  for(let categoryKey in this){
    let ingredientKeyObj = this[categoryKey];
    for(let itemKey in ingredientKeyObj){
      let itemObj = ingredientKeyObj[itemKey]
      total += itemObj.cost * itemObj.quantity
    }
  }
    return total
}

tacoCatInc.sale = function(order){
  let price = 0;
  
  for(let category in order){
    let item = order[category];
    
    price += this[category][item].cost
    this[category][item].quantity--
    this.cash += this[category][item].cost    
  }  
  return price
}




tacoCatInc.currentInventory = function(){
  let multiple = 1;
  let plus = 0
  for(let category in tacoCatInc){
    let ingridientObj = tacoCatInc[category]
    for(let ingridient in ingridientObj){
      let twoValuesObj = ingridientObj[ingridient]
      multiple = twoValuesObj.cost* twoValuesObj.quantity 
      plus += multiple 
    }
}
  return plus
}

tacoCatInc.sale = function(order){
  let price = 0
  for(let category in order){
  let ingridientCheck = order[category]
  price += this[category][ingridientCheck].cost
  this.cash += this[category][ingridientCheck].cost
  this[category][ingridientCheck].quantity--
 }
  return price
}
