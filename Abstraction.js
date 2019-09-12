
 //Note: this is a construction function, you can create a constructor without necessarily creating a class
    function Employee(name, age, salary){

        this.name = name;
        this.age = age;
        this.salary = salary;
        let bonus = 2000;

        let calculateFinalSalary = function(){

            let finalSalary = salary + bonus;

            console.log('Final salary is :'+finalSalary);



        }

        this.getEmpDetials = function () {
            console.log('Name : '+this.name+' | Age :'+this.age);

            calculateFinalSalary();


        }
            
        }

    

let emp1 = new Employee('Fred', 32, 5000);
emp1.getEmpDetials();

