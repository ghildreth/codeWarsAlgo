
// URL: https://www.codewars.com/kata/help-the-fruit-guy/train/javascript



function removeRotten(bagOfFruits){
    let newArr = []
    if(bagOfFruits == null){
      return [];
    }
    bagOfFruits.forEach((fruit)=> {
      if(fruit.includes('rotten')){
        newArr.push(fruit.replace(fruit, fruit.slice(6, fruit.length).toLowerCase()))
        } else {
          newArr.push(fruit)
        }
      })
      return newArr;
  }

// Top two answers on CodeWars: 
/*

function removeRotten(bagOfFruits){
  if(!bagOfFruits || !bagOfFruits.length) {return [];} 
  else {return bagOfFruits.map(e => e.replace(/^rotten/g, '').toLowerCase())};
}
*/

function removeRotten(bagOfFruits){
    if(!bagOfFruits) { return []; }
    
    return bagOfFruits.map(function(fruit) {
      return fruit.replace("rotten", "").toLowerCase();
    });
  }