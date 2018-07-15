// Give the Array [1,[11,42,[8, 1], 4, [22,21]]]
// sum the values of all the elements

const array = [1,[11,42,[8, 1], 4, [22,21]]];

// first lets solve the problem of summing just one array;
let result = 0

// Single Iterative approach
// function sumArray(arr){
//     for(let i = 0; i < arr.length; i ++){
//         result += arr[i]
//     }
//     return result
// }
// Recursive option for Nested Arrays
function sumArray(arr){

    for(let i = 0; i < arr.length; i ++){
        if(Array.isArray(arr[i]))
            result += sum(arr[i])
        } else {
            result += a[i];
        } 
    return result;
}