// let arrayOfPrimes = [2, 3, 7, 13, 17, 19, 31, 37, 71, 73, 79, 97];
//   console.log(n)
//   let decompArray = [];

//   arrayOfPrimes.forEach((num)=> {
//     if(num < n){
//       decompArray.push(num);
//     }
//   })
//   console.log(decompArray)

// let fac = function(num){
//   if(num < 0){
//     return -1
//   }else if (num === 0){
//     return 1
//   } else {
//     return (num * fac(num - 1))
//   }
// }

// console.log(fac(n))
// let fact = fac(n)
// let reducer = decompArray.reduce(function (obj, item, ci){
//   let index = item;
//   for(let x in obj){
//   obj[item] = {count: 0, value: item}
//   while(index % x === 0){
//     index /= x
//     obj[x].count++
//   }
//   if(index > 1)  obj[index] = 1;
//   }
//   return obj
// }, {});

// console.log(reducer)
// console.log()


// let mal = fac(n)
// console.log(mal)
// console.log('hi', mal % 2)
// let counter = 0;
// //   let mal = fac
//   while (mal > 2){
// //   console.log(mal)
//     mal /= 2
//     counter ++
//   }
//   console.log(counter)
//   return decompArray.map((num) => {
//   let fac = Math.pow(n, n)
//   let power = fac % num
//   if(fac % num){
//     return `${num}^${power}`
//   }
//   });

let obj = {}, answer = [];

  for(let i = 2; i <= n; i ++){
    let index = i;
    for(let x in obj)
      while(index % x === 0){
        index /= x;
        obj[x]++
      }
      if(index > 1)  obj[index] = 1;
  }
  
  for(let x in obj){
    (obj[x] === 1) ? answer.push(x) : answer.push(`${x}^${obj[x]}`);
  }

return answer.join(" * ");