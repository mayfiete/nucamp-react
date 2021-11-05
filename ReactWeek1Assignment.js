

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}


class Bootcamp {
    constructor(name, level, students = [], emails = []) {
        this.name = name;
        this.level = level;
        this.students = students;
        this.emails = emails; // add email property to Bootcamp
    }
    registerStudent(student) {
        //if (this.students.indexOf(student) === -1) {
        //this.emails.push(student.email);
        //console.log("!!!!", this.emails);
        if (this.emails.indexOf(student.email) === -1) {
            this.students.push(student.name);
            console.log(`Registering ${student.name} to the bootcamp Web Dev Fundamentals`);
            this.emails.push(student.email);
        } else {
            console.log(`${student.name} is already registered.`);

        }

        console.log(this.students);
    }
}


const student1 = new Student('John', 'test@email.com', 'javascript');

console.log(student1);

const student2 = new Student('Tim', 'test@email.com', 'javascript');

console.log(student2);

const student3 = new Student('Bob', 'check@email.com', 'javascript');

console.log(student3);

const bootcamp = new Bootcamp('Code 301', 'intermediate');

bootcamp.registerStudent(student1);

bootcamp.registerStudent(student2);

bootcamp.registerStudent(student3);
