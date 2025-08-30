var num = "12345";
console.log(num.split("").reverse().join(""));

// Output: 54321
// Explanation: The code takes a string representation of a number, splits it into an array of characters, reverses the array, and then joins it back into a string, effectively reversing the original string.

var num = 12345;
console.log(num.toString().split("").reverse().join("")); 
// Output: 54321
// Explanation: Similar to the previous example, but starts with a number. It converts the number to a string first before performing the split, reverse, and join operations.

var str = "Hello, World!";
console.log(str.split("").reverse().join("")); 
// Output: !dlroW ,olleH
// Explanation: The code takes a string, splits it into an array of characters, reverses the array, and then joins it back into a string, effectively reversing the original string.

var str = "JavaScript";
console.log(str.split("")); // Output: [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
// Explanation: The code splits the string "JavaScript" into an array of its individual characters.