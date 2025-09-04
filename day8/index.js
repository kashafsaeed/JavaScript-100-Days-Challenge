var num = 12345;
console.log(num.toString().split("").reverse().join("")); 
// Output: 54321
// Explanation: Similar to the previous example, but starts with a number. It converts the number to a string first before performing the split, reverse, and join operations.


var str = "Hello, World!";
console.log(str.split("").reverse()); // Output: [ '!', 'd', 'l', 'r', 'o', 'W', ' ', ',', 'o', 'l', 'l', 'e', 'H' ]
// Explanation: The code takes a string, splits it into an array of characters, and then reverses the array.

console.log(num.toString(16)); // Output: 3039
// Explanation: The code converts the number 12345 to its hexadecimal string representation. The toString(16) method is used to convert the number to base 16 (hexadecimal).