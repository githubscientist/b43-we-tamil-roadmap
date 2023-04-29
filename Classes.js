// classes

/*
    class - template or blueprint


*/

// function prototypes
// class syntax

class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isEligible() {
        if (this.age >= 18) {
            return true;
        } else {
            return false;
        }
    }

    printDetails() {
        console.log('Student Details: ');
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log('Eligibility:', this.isEligible()?'Eligible' : 'Not Eligible');
        console.log('');
    }
}

// create a new student
let student101 = new Student('krish', 25);
let student102 = new Student('sathish', 15);

student101.printDetails();
student102.printDetails();

/*
    student101 
        - name: 'krish'
        - age: 25
    
    student102
        - name: 'sathish'
        - age: 30

    
*/