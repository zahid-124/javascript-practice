const obj ={
    name: {
        firstName: "Zahid",
        middleName: "    ",
        lastName: "Hasan",
    },
    age: 25,
    favourite: {
        person: null,
        fruite: "Mango",
        session: "rainy",
        movie:{
            bangla: "Monpora",
            english: null,
            korian: "Train to Busan",
            iran: "The children of heaven",
        },
        book: {
            rabindranath: null,
            nazrul: "shiuly mala",
        }
    },
    education: {
        ssc: "Raksha high school",
        hsc: "Ishwardi govt college",
        honors: "JKKNIU",
        primary: null,
    },
    height: false,
}

const reserveObj ={
    name: {
        firstName: 1,
        lastName: 0,
    },
    age: 1,
    favourite: {
        person: 1,
        fruite: 1,
        movie: {
            bangla: 1,
        },
    },
    education: 1,
    height: 0,
};
// console.log(reserveObj.hasOwnProperty('bangla'));
// delete obj.name;
// console.log(obj);
// console.log(isObject(5));
// removeNull(obj);
// console.log(obj);
// removeNull(obj);
removeExtra(obj, reserveObj);
console.log(obj);

function removeExtra(myObj, reserveObj){
    Object.keys(myObj).forEach(key => {
        if(reserveObj.hasOwnProperty(key) && reserveObj[key]){
            if(isObject(reserveObj[key])){
                removeExtra(myObj[key], reserveObj[key]);
            }
        }
        else{
            delete myObj[key];
        }  
    });
}

function removeNull(obj){
    Object.keys(obj).forEach(key => {
        if(isObject(obj[key])){
            removeNull(obj[key]);
        }
        if(!obj[key] || (typeof obj[key] === 'string' && !obj[key].trim()))  delete obj[key];
    });
}

function isObject(val){
    if(typeof val === 'object' &&
    !Array.isArray(val) &&
    val !== null){
        return true;
    }
    return false;
}