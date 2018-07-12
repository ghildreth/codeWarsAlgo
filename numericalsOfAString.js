// My solution:
function numericals(s){
    // we are given a string which we concert to an array
    let splitStr = s.split('');
    // we initialize a new string to record the number of occurances
    let newStr = '';
    
    // we leverage the power of reduce to create an object for us
      let hashMap = splitStr.reduce(function(obj, item){
        if(!obj[item]){
          obj[item] = 0
        }
        // the object keeps track of the number of occurrances
        // and we record that in our string as well
        obj[item] ++;
        newStr += obj[item]
        return obj
      }, {})
    return newStr
  }
    


// This is the number one answer on code wars:

// const numericals = s => {
//     const occ = {}
//     return s.split('').reduce((res, ch) => {
//       occ[ch] = (occ[ch] || 0) + 1
//       return `${res}${occ[ch]}`
//     }, '')
//   }

