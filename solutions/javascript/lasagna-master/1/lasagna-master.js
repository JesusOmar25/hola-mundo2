/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeLeft){

  switch (timeLeft) {
    case 0: 
    return 'Lasagna is done.';
    
    case undefined: 
    return 'You forgot to set the timer.';
    
    default:
    return 'Not done, please wait.';
    
  };
  
}




export function preparationTime(layers, timePerLayer = 2){
    return layers.length * timePerLayer;
  
}

export function quantities(layers) {
  const totals = {
    noodles: 0,
    sauce: 0
  };

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') {
      totals.noodles += 50;
    } else if (layers[i] === 'sauce') {
      totals.sauce += 0.2;
    }
  }

  return totals;
}

export function addSecretIngredient(friendList, myList){
  const secret = friendList[friendList.length - 1];

  myList.push(secret);
}

export function scaleRecipe(recipe, portions){
  const newRecipe = {};
  for (let amount in recipe){
          newRecipe[amount] = recipe[amount] / 2 * portions;
  }

  return newRecipe;
}
