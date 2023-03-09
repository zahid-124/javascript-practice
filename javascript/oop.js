class Person{
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const person = new Person("Zahid");
Person.prototype.fullName = function(lastName){
    return `${this.name} ${lastName}`;
}
console.log(person.getName()); // output: Zahid
console.log(person.fullName("Hasan")); // output: Zahid Hasan

// inheritence
class Employee extends Person{
    constructor(name, type, salary){
        super(name);  // call parent class constructor
        this.type = type;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

let employee = new Employee('Zahid', 'programmer', 50000);
console.log(employee.getName()); // output: Zahid
console.log(employee.getSalary()); // output: 50000
console.log(employee.fullName('Hasan')); // output: Zahid Hasan

