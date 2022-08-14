inputStr1 = "name:Sarah,age:24,city:Colombo";
inputStr2 = "x:100,y:200,z:300,color:red";
inputStr3 = "product_name:Mobile phone,price:100000LKR,product_id:10001";

/**
 * Converting strings into Objects
 * 
 * The {inputStr1}, {inputStr2} & {inputStr3} holds 3 strings. The string contains substrings separated by , (comma). Each of these substrings act like key-value pairs.
 * 
 * For example, 'name:Sarah' can be a key-value pair of an object let a = { name: 'Sarah' }
 * 
 * Using javascript built in functions map, forEach, split, join, convert above strings into 3 Objects.
 * 
 * Expected Output for inputStr1
 * 
 * > let obj1 = Convert(inputStr1);
 * > console.log(obj1)
 * > {
 * >    name: 'Sarah',
 * >    age: 24,
 * >    city: 'Colombo',
 * > }
 * 
 */

// MODIFY THIS FUNCTION TO IMPLEMENT THE ANSWER
function Convert(input) {

}

const obj1 = Convert(inputStr1);
const obj2 = Convert(inputStr2);
const obj3 = Convert(inputStr3);

console.log(obj1, obj2, obj3);
