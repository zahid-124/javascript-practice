const roll: number = 18102027;
// const name: string = "Zahid";
let mobile: string | number = "01521122542";
let favouriteFoods: string[] =['apple', "banana"];
const isRegular: boolean = true;

let student1: [number, string, boolean];
student1=[18102027, "", true];
let student2:readonly  [number, string, boolean];
student2= [18102027, "Zahid Hasan", true];

// student2.push(18102027); //error

interface myObjInterface {
    myName: string,
    roll: number,
    marks?: number

}

// Aray destructuring

let myArr: [number, string, boolean] = [100, "str", false];

const [num,,] = myArr;

//object destructuring

const myObj: myObjInterface ={
    myName: "Zahid Hasan",
    roll: 18102027,
    marks: 100  // it is optional
}

const {myName, marks} = myObj;

// Enums
// Declaretion
enum enumName {
    propertyName1 = "value1", // default value 0
    propertyName2 = "value2", // default value prevVal+1
}

enum myEnum {
    notFound = 404,
    serverErr = 500,
    success = 200
}

// Aliases (Uponam) and interfces
//aliases
type emailType = string;
const myEmail: emailType = "jhasan576@gmail.com";
//interfaces
interface vehicle{
    type: string,
    size: string
}

interface car extends vehicle{
    color: string,
    price: number,
}

let myCar: car ={
    color : "red",
    type : "red",
    price : 100,
    size : "red",
};

// Typescript functions
// declare

// function functionName (params: paramsType): ReturnType{
//     body
// }

function myFunction ( num1: number, num2: number, optional?: string): number {
    if(optional) console.log(optional);
    return num1+num2;
}

//rest param
function withRestParam(p1: number, p2: number, ...rest: any[]): Number{
    return p1 + p2 + rest.reduce((a, b) => a*b, 1);
}

// when we use arrow function
type myFunctionType = (value1: number, value2: number, ...rest: number[]) => number;

const myFun:myFunctionType = (value, value2, ...rest) => {
    
    rest.forEach((val) =>{
        // console.log(val);
    })
    return value + value2;
}


console.log(myFun(1,2,3,4,5,6)); // output: 3