/* 
This is from: https://www.hackerrank.com/challenges/apple-and-orange/problem

*/


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let finalCount = [];
    let counterApple = 0;
    let counterOrange = 0;
    // I decided to try my hand some modular code because I felt like it was a waste to write the same function twice

    function coolChecker(arr, location, container, counter){
        for(let i = 0; i < arr.length; i ++){
            if(arr[i] + location >= s && arr[i] + location <= t){
                counter++
            }
        }
        container.push(counter)

    }
    coolChecker(apples, a, finalCount, counterApple)
    coolChecker(oranges, b, finalCount, counterOrange)
    console.log(`${finalCount[0]}\n${finalCount[1]}`)


}