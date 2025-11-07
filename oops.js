class Person{
    constructor(name,age){
        this.name=name;  // refers to current instance of person
        this.age=age;
    }

    get name(){
        return this._name;
    }

    set name(newName) {
        if(newName.length <3){
            console.log('Name must be at least 3 characters long');
        }

        else{
            this._name =newName; //private property '_name'
        }
    }

    displayPerson(){
        console.log(`Name ${this.name} , Age:${this.age}`);
    }
}


class Employee extends Person{
    constructor(name ,age , position , salary){
        super(name ,age);
            this.position=position;
            this.salary=salary;
    }

        get salary(){
            return this._salary;
        }
        set salary(newSalary){
            if(newSalary < 0){
                console.log(`Salary must be a positive number`);
            }
            else{
                this._salary =newSalary ;
            }
        }

        displayEmployee(){
            console.log(`Name: ${this.name} ,Age:${this.age} ,
         Position: ${this.position} , Salary:${this.salary}`);

        }
    }

const person1 =new Person('Alice' ,30);

person1.displayPerson();

const employee1 =new Employee('Bob' ,25,'Developer' ,50000);

employee1.displayEmployee();

employee1.name ='Robert';

employee1.salary =55000;


employee1.displayEmployee();
