var roll = 18102027;
// const name: string = "Zahid";
var mobile = "01521122542";
var favouriteFoods = ['apple', "banana"];
var isRegular = true;
var student1;
student1 = [18102027, "", true];
var student2;
student2 = [18102027, "Zahid Hasan", true];
// Aray destructuring
var myArr = [100, "str", false];
var num = myArr[0];
//object destructuring
var myObj = {
    myName: "Zahid Hasan",
    roll: 18102027,
    marks: 100 // it is optional
};
var myName = myObj.myName, marks = myObj.marks;
// Enums
// Declaretion
var enumName;
(function (enumName) {
    enumName["propertyName1"] = "value1";
    enumName["propertyName2"] = "value2";
})(enumName || (enumName = {}));
var myEnum;
(function (myEnum) {
    myEnum[myEnum["notFound"] = 404] = "notFound";
    myEnum[myEnum["serverErr"] = 500] = "serverErr";
    myEnum[myEnum["success"] = 200] = "success";
})(myEnum || (myEnum = {}));
var myEmail = "jhasan576@gmail.com";
var myCar = {
    color: "red",
    type: "red",
    price: 100,
    size: "red"
};
// Typescript functions
// declare
// function functionName (params: paramsType): ReturnType{
//     body
// }
function myFunction(num1, num2, optional) {
    if (optional)
        console.log(optional);
    return num1 + num2;
}
//rest param
function withRestParam(p1, p2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return p1 + p2 + rest.reduce(function (a, b) { return a * b; }, 1);
}
var myFun = function (value, value2) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    rest.forEach(function (val) {
        // console.log(val);
    });
    return value + value2;
};
console.log(myFun(1, 2, 3, 4, 5, 6));
