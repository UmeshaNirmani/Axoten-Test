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
  const array1 = input.split(",");
  const array2 = [];

  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].split(":"));
  }
  return Object.fromEntries(array2);
}

const obj1 = Convert(inputStr1);
const obj2 = Convert(inputStr2);
const obj3 = Convert(inputStr3);

console.log(obj1, obj2, obj3);

/* references:
https://bobbyhadz.com/blog/javascript-convert-array-to-object#:~:text=To%20convert%20an%20array%20to%20an%20object%2C%20use%20the%20reduce,object%20and%20return%20the%20result.&text=index.js-,Copied!,%5D%3B%20const%20obj4%20%3D%20arr.
*/
