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
  const array2 = [5, 12, 31, 65];
  const newArray = array1.concat(array2);

  newArray.filter((n, i) => {
    if(){
        
    }
  });
  console.log(newArray);
}

Answer();

/* References:
https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg
https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168
https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
*/
