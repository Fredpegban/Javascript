let EmpDetials = function(name, age){

    this.name = name;
    this.age = age;


};

EmpDetials.prototype.getName = function(){

    return this.name;
};

EmpDetials.prototype.getAge = function(){

    return this.age;

};

let emp1 = new EmpDetials('Fred', 30);
let emp2 = new EmpDetials('Lanza', 32)

console.log(emp1.getName());
console.log(emp1.getAge());

console.log(emp2.getName());
console.log(emp2.getAge());
