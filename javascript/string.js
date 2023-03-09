let myStr = "Keep smiling, it looks good on you. Life is short, enjoy it.";
console.log(myStr.slice(-24, -1)); // output: Life is short, enjoy it

// substring is simillar to slice but it deal negative number as 0
console.log(myStr.substring(-20, 12)) // output: Keep smiling

// trim method remove the spaces from start and end of the string
console.log("   hello world     ".trim()); // output: hello world
// also use trimStart(), trimEnd()

// padStart() and padEnd() methods use as push any string n times to start or end of the string
console.log("hello".padStart(5, "x")); // output: hello; why it is not working as expected ????????

//split method covert the string to an array with a separator
console.log(myStr.split(' ')); // output: ['Keep',  'smiling,', 'it',    'looks', 'good',  'on', 'you.',  'Life', 'is',    'short,', 'enjoy', 'it.']

// charAt(pos) return the character at position pos

console.log(myStr.charAt(0)); // output: K

// variable substitutions
let name = "Zahid Hasan";
let email = "zahid@gmail.com";
console.log(`my name is: ${name} and email is: ${email}`); // output: my name is: Zahid Hasan and email is: zahid@gmail.com

