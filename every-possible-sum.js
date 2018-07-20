// Number 1 answer on code wars
  function digits(num){
      let result = [];
      String(num).split('').forEach((d, i, arr) => {
          for(let j=i+1;j<arr.length;j++)
            res.push(Number(d)+ Number(arr[j]))
      });
      return res;
  }


  // using tail recursion

  function digitsRecurse(nums, agg = []){
    if(nums.length < 2) return agg;
    const [head, ...tail] = nums;
    return digitsRecurse(tail, [...agg, ...tail.map(num => num + head)])
  }
  return digitsRecurse([...num.toString()].map(num => Number(num)));


  // brute force

  for(let i = 0; i < x.length-1; i ++){
    for(let j = i + 1; j < x.length; j++){
      console.log(`${x[i]}`, `+ ${x[j]} =`, x[i] + x[j])
      console.log('check array', x)
      answer.push(x[i] + x[j])
    }
  }
  console.log(answer)
//   answer.shift();
  return answer;
