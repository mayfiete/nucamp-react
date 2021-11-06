

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}


class Bootcamp {
    constructor(name, level, students = [], emails = []) { // constructor function
        this.name = name;
        this.level = level;
        this.students = students;
        this.emails = emails; // add email property to Bootcamp
    }
    registerStudent(student) {

        if (this.emails.indexOf(student.email) === -1) { // check if email is already in emails array
            this.students.push(student.name); // add student name to students array
            console.log(`Registering ${student.name} to the bootcamp Web Dev Fundamentals`); // log message
            this.emails.push(student.email); // add email to emails array
        } else {
            console.log(`${student.name} is already registered.`); // log message

        }

        console.log(this.students); // log students array
    }
}


const student1 = new Student('John', 'test@email.com', 'javascript');

console.log(student1);

const student2 = new Student('Tim', 'test@email.com', 'javascript');

console.log(student2);

const student3 = new Student('Bob', 'check@email.com', 'javascript');

console.log(student3);

const bootcamp = new Bootcamp('Code 301', 'intermediate'); //should output student array as well

bootcamp.registerStudent(student1);

bootcamp.registerStudent(student2);

bootcamp.registerStudent(student3); 

bootcamp.students; 
