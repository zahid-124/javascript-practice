// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function isLeapYear(year){
    if((year % 400) == 0 || (year % 100) != 0 && (year % 4) == 0) return true;
    return false;
  }
console.log(isLeapYear(200)); // output: false

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
function getRandBetn(min =0 , max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function guessingGame(geussNumber){
    let ranNum = getRandBetn(1, 10);
    if(geussNumber == ranNum){
        console.log("Good Work");
    } else{
        console.log("Not matched");
    }
    
}
guessingGame(5);

// distribution analysis of rand function
const freq = [];
for(let i = 1; i<1000000; i++){
    let num  = getRandBetn(1, 10);
    freq[num] ? freq[num]++ : freq[num] = 1; 
}

for(let i=1; i<=10; i++){
    console.log(freq[i] / 10000);
}

// 11.  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

function celsiusToFehrenheit(celcius){
    return (celcius / 5) * 9 + 32;
}
function fahrenhietToCelcius(fahrenheit){
    return ((fahrenheit - 32) / 9) * 5;
}
console.log(celsiusToFehrenheit(0));
console.log(fahrenhietToCelcius(celsiusToFehrenheit(100)));

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
function absDiff(num){
    return num <= 19 ? 19 - num : (num - 19) * 3;
}
console.log(absDiff(10));

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function check(num1, num2){
    if(num1 == 50 || num2 == 50 || (num1 + num2) == 50) return true;
    return false;
}
console.log(check(50, 50));

// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
function checkPosNeg(num1, num2){
    return (num1 < 0 && num2 > 0) || (num2 < 0 && num1 > 0); // zero is not a positive or negative number.
}
console.log(checkPosNeg(-5, 0));

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Date methods
let date = new Date();
const timeNow = formatDate(date);
console.log("Today is : " + timeNow['day'] + '.');
console.log("Current time is : " + timeNow['time']);

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute ='' + d.getMinutes(),
        second ='' + d.getSeconds(),
        mid = 'AM';

    if(hour > 12){
        hour -= 12;
        mid = 'PM';
    }
    hour = '' + hour;
    if(month.length < 2) month = '0' + month;
    if(day.length < 2) day = '0' + day;
    if(hour.length < 2) hour = '0' + hour;
    if(minute.length < 2) minute = '0' + minute;
    if(second.length < 2) second = '0' + second;

    const time = [];
    time['day'] = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"][d.getDay()];
    time['date'] = [day, month, year].join('-');
    time['time'] = [hour + ' ' + mid, minute, second].join(' : ');
    return  time;
}

// 14. Write a JavaScript exercise to get the extension of a filename.
let filename = "my file name.js";
console.log(filename.split('.').pop()); // output: js
console.log(filename.split('.').at(-1)); // output: js

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
console.log(addPy('thon')); // output: Python
console.log(addPy('Python2')); // output: Python2
function addPy(str){
    if(str.length >=2 && str[0] == 'P' && str[1] == 'y') return str;
    return 'Py'+str;
}

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
console.log(removeCharAt('hello world', 5)); // output: helloworld
function removeCharAt(str, pos){
    return str.slice(0, pos) + str.slice(pos+1);
}

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
console.log(changePos("dello worlh")); // output: hello wrold
function changePos(str){
    let l = str.length;
    return str.charAt(l-1) + str.slice(1, l-1) + str.charAt(0);
}