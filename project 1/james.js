let mySymbol = Symbol('description');

console.log(mySymbol);

let email = Symbol();
let employee = {};
employee.name = 'james';
employee.age = 53;
employee[email] = 'james@gmail.com';
console.log(Object.keys(employee));

for (const key in employee) {
    console.log(key);
}

console.log(employee[email]);
console.log(employee);