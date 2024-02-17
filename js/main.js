//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
/*
array = [5, 4, 3, 2, 1]

sum = 0 

for(let i = 0; i < array.length; i++) {
    sum += array[i]
}
console.log(sum)
*/

let nums = [2, 333, 9, 811, 9]
let sum = nums.reduce((acc,c)=>acc+c,0)
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
var numbers = [1,2,3,4,5,6,7,8];
numbers.forEach(function(element, index, array){
    array[index] = element* element;
});
console.log(numbers);

//Create a function that takes string
//Print the reverse of that string to the console

let str = ('Caitlin')
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];//forward character 
        let y = str[j - i];//backward character
        if (x != y) {
            // return false if string not match
            return false;
        }
    }
    /// return true if string is palindrome
    return true;
 
}
 
//function that print output if string is palindrome
function is_palindrome(str) {
    // variable that is true if string is palindrome
    let ans = check_palindrome(str);
    //condition checking ans is true or not 
    if (ans == true) {
        alert("true");
    }
    else {
        alert("false");
    }
}
// test variable
let test = "mom";
is_palindrome(test);

