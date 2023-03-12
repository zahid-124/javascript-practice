const map = new Map([
    ['init', 'this value is assinged when initialize the map'],
]);

const obj = {};
map.set('name', "Zahid Hasan");
map.set('age', "Zahid Hasan");
map.set(5, "five");
map.set(obj, "this is a empty object");
map.set(true, "this is a true of boolean");

console.log(map.get(true)); // output: this is a true of boolean
console.log(map.get(obj)); // output: this is an empty object
console.log(map.get(5)); // output: five
console.log(map.get('name')); // output: Zahid Hasan

console.log(map.has(obj)); // output: true
console.log(map.has('roll')); // output: false

console.log(map.size); // output: 6

map.delete('init');
console.log(map.has('init')); // output: false
console.log(map.keys()); // output: [Map Iterator] { 'name', 'age', 5, {}, true }
console.log(map.values()); /** output: [Map Iterator] {
    'Zahid Hasan',
    'Zahid Hasan',
    'five',
    'this is a empty object',
    'this is a true of boolean'
  } */
console.log(map.entries()); /** // output: [Map Entries] {
    [ 'name', 'Zahid Hasan' ],
    [ 'age', 'Zahid Hasan' ],
    [ 5, 'five' ],
    [ {}, 'this is a empty object' ],
    [ true, 'this is a true of boolean' ]
  } */

  // iterate map with forEach method
  map.forEach((value, key) => {
    console.log(`key = ${key}, value = ${value}`);
  });

  //iterate map with for of loop
  for([key, value] of map){
    console.log(`key = ${key}, value = ${value}`);
  }

  console.log(...map);

