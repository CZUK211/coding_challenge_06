class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return this.name + " works in the " + this.department + " department.";
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return this.name + " is a manager in the " + this.department + 
        " department and manages " + this.teamSize + " people.";
    }
}

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        for (let i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i].describe());
        }
    }
}

let employee1 = new Employee("Chris", "IT");
let employee2 = new Employee("Sarah", "Marketing");

let manager1 = new Manager("David", "Finance", 4);
let manager2 = new Manager("Emily", "HR", 2);

let company = new Company();

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);
company.addEmployee(manager2);

company.listEmployees();