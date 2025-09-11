  function greet(name) {
       console.log("Hello, " + name + "!");
   }
    greet("Smit"); // Hello, Smit!


    greet("John"); // Hello, John!
    greet("Alice"); // Hello, Alice!
    greet("Bob"); // Hello, Bob!
    greet("Eve"); // Hello, Eve!


    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3)); // 8
    console.log(add(10, 20)); // 30
    console.log(add(-5, 5)); // 0
    console.log(add(0, 0)); // 0
    console.log(add(2.5, 3.5)); // 6


    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(4, 5)); // 20
    console.log(multiply(7, 6)); // 42
    console.log(multiply(-3, 3)); // -9
    console.log(multiply(0, 10)); // 0
    console.log(multiply(2.5, 4)); // 10


    function square(num) {
        return num * num;
    }
    console.log(square(4)); // 16

    let text = "Hello World";
console.log(text.length); // 11
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
console.log(text.indexOf("World")); // 6
console.log(text.slice(0, 5)); // "Hello"
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"
console.log(text.split(" ")); // ["Hello", "World"]
console.log(text.charAt(0)); // "H"
console.log(text.includes("Hello")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World")); // true

// Array Methods
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length); // 5
console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
console.log(numbers[numbers.length - 1]); // 50
numbers.push(60); // Add 60 to the end
console.log(numbers); // [10, 20, 30, 40, 50, 60]
numbers.pop(); // Remove last element
console.log(numbers); // [10, 20, 30, 40, 50]
numbers.shift(); // Remove first element
console.log(numbers); // [20, 30, 40, 50]
numbers.unshift(10); // Add 10 to the beginning
console.log(numbers); // [10, 20, 30, 40, 50]
console.log(numbers.indexOf(30)); // 2
console.log(numbers.slice(1, 4)); // [20, 30, 40]
console.log(numbers.includes(40)); // true

let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(fruits); // ["APPLE", "BANANA", "CHERRY"]
fruits.filter(function(fruit) {
    return fruit.startsWith("B");
});
console.log(fruits); // ["Banana"]
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Cherry"]
fruits.reverse();
console.log(fruits); // ["Cherry", "Banana", "Apple"]

