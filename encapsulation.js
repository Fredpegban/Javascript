class Employee{


setEmployeeDetails(name, ID, number){

    this.name = name;
    this.ID = ID;
    this.number = number;


}
getEmpNam(){

    return this.name;
}
getEmpID(){

    return this.ID;
}

getEmpNum(){

    return this.number;
}

}

let emp1 = new Employee;

emp1.setEmployeeDetails('Fred', 200, 0736464646)

console.log(emp1.getEmpNam())

console.log(emp1.getEmpID())

console.log(emp1.getEmpNum())