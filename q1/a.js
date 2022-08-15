/*
 * Print common elements in array1 and array2 with minimum time complexity
 *
 * Cannot use any external library
 * You can use for loop , map , if statement , array length
 *
 * Expected output in terminal:
 * 12
 * 65
 */

function Answer() {
  const array1 = [1, 4, 6, 12, 54, 65, 80];
  var set1 = new Set(array1);

  const array2 = [5, 12, 31, 65];
  var set2 = new Set(array2);

  const _intersection = new Set();
  for (const elem of set1) {
    if (set2.has(elem)) {
      _intersection.add(elem);
    }
  }

  for (const item of _intersection) {
    console.log(item);
  }
}

Answer();


/* References:
https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
https://bretcameron.medium.com/how-to-make-your-code-faster-using-javascript-sets-b432457a4a77#:~:text=What%20is%20the%20time%20complexity,size%20of%20the%20data%20increases.
*/
