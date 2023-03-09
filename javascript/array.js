// declare 50 lenth array
const arr50 = new Array(50);
console.log(arr50.length) // output: 50

const arr1 = new Array(50, 40);
console.log(arr1.length); //output: 2

arr1[10] = 10;
console.log(arr1.length); //output: 11, it makes undefine holes in the array

// check a variable is array or not
let arr2 = 50;
console.log(Array.isArray(arr1)); // output: true
console.log(arr2 instanceof Array) // output: false

let arr = [50, 40]
// join the array elements with separator
console.log(arr.join('-')); //output: 50-40

// array pop and push
arr.push(60);
console.log(arr) // output: [50, 40, 60]
arr.pop();
console.log(arr) // output: [50, 40]

// shift method remove item from the begining of the array and return that item
let item = arr.shift();
console.log(arr) // output: [40]

// unshift method add item to the begining of the array and return the new lenght
let length = arr.unshift(500);
console.log(arr) // output: [500, 40]

// concate arrays
const newArr = [1,2,3].concat([4,5], [6, 7], [8]);
console.log(newArr); // output: [1,2,3,4,5,6,7,8]

// splice method
/**
 * first param: define where to add new elements
 * second param: how many item remove from first param
 * rest of the param define the items which will be inserted
 */
const deletedItems = newArr.splice(5, 2, 7,8,9);
console.log(newArr); // output: [1,2,3,4,5,7,8,9,8]

// slice method use for take the part of array from idx1 to befor idx2
console.log(newArr.slice(5, 8)); // output: [7, 8, 9]

// random shuffle array
ranShuffleArr(newArr);
console.log(newArr); // output: [randomly distributed number]
function ranShuffleArr(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// sort the array
newArr.sort(myCmp);
console.log(newArr); // output: [1, 2, 3, 4, 5, 7, 8, 8, 9]
function myCmp(item1, item2){
    return item1 - item2; // for ascending order
}

// forEach method to iterate items in the array
let sum = 0;
newArr.forEach((item, idx, arr) =>{
    sum += item;
});
console.log(sum); // output: 47

// map
const modifiedArr = newArr.map((item) => (item * (-1)));
console.log(modifiedArr); // output: [-1, -2, -3, -4, -5,-7, -8, -8, -9]

// filter
const filteredArr = newArr.filter((item) => item & 1); // only odd numbers remains
console.log(filteredArr); // output: [1,3,5,7,9]

// find
let arrItem = newArr.find((item) => !(item & 1)); // first even item
console.log(arrItem); // output: 2

// reduce array
let sum1 = newArr.reduce((total, item, idx, arr) => total + item, 53);
console.log(sum1); // output: 47+53 =100


