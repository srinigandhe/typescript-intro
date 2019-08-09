abstract class Person {
    name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    displayName(): void {
        console.log(`Name is ${this.name}`);
    }

    abstract find(): Person;
}

class Employee extends Person {

    constructor(name: string, public empCode: number) {
        super(name);
    }

    getEmpCode(): void {
        console.log(`this.empCode ${this.empCode}`);
    }

    find(): Person {
        return new Employee('Srini', 1);
    }
}

const employee: Employee = new Employee('Snehal', 2);

console.log(employee.find());
