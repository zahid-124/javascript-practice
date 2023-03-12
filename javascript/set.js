const numSet = new Set([1, 2, 2, 3]);
console.log(numSet); // output: 1, 2, 3

numSet.add(10);
numSet.add(10);
numSet.add(10);
console.log(numSet) // output: 1, 2, 3, 10 // 10 added once

console.log(numSet.has(2)) // output: true
console.log(numSet.has(6)) // output: false

numSet.delete(2);
console.log(numSet.has(2)) // false

numSet.clear(); // remove all items
console.log(numSet.size); // output: 0

numSet.add(1);
numSet.add(2);
numSet.add(3);
numSet.add(4);
numSet.add(5);

// iteration set
numSet.forEach((value) => {
    console.log(value);
});

// with for-of
for (const value of numSet) {
    console.log(value);
}
