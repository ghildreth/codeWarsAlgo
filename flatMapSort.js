// Sorter function can be used in both answers;
// This first example uses a double for loop to create a new array and the sorts
const sorterFn = function(a, b){
    return a - b;
  }

let finalSortFlat = [];

  for(let i = 0; i < array.length; i ++){
    for(let j = 0; j < array.length; j ++){
      console.log(array[i][j])
      if(array[i][j])
      finalSortFlat.push(array[i][j])
      
    }
  }
  return finalSortFlat.sort(sorterFn)

// Where as this second example uses .concat & .apply

    let sortedFlat = [].concat.apply([], array).sort(sorterFn)
  
  return sortedFlat;