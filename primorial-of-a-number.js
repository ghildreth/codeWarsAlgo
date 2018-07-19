
// my solution using reduce


function numPrimorial(number){
    const isPrime = function(num){
      for(let i = 2; i < num; i ++){
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
  const display = function(n){
      let primeArr = [2];
      for(let i = 3; i < n; i += 2){
        if( isPrime(i) ){
        }
      }
     return primeArr;
  }

  const reducer = function(acc, cv){
      return acc * cv;
  }
    let primArray = display(100);

    return primArray.slice(0, number).reduce(reducer);
  }

  // Number one answer

//   function isPrime(num) {
//     for(var i = 2; i < num; i++){
//       if(num % i === 0){
//         return false
//       }
//     }
//     return true
//   }
  
//   function numPrimorial(n){
//     let arr = []
//     let i = 2
//     while(arr.length < n){
//       if(isPrime(i)){
//         arr.push(i)
//       }
//      i++
//     }
//     return arr.reduce((a,b) => a * b)
//   }