

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
    registerStudent(student) {
        this.students.push(student);
        //const studentAlreadyAdded = student.filter(student => student.email === this.email);
    }
}


class Bootcamp {
    constructor(name, level, students = [], preStudents = []) {
        this.name = name;
        this.level = level;
        this.students = students;
        this.preStudents = preStudents;
    }
    // work on this later
    addStudent(student) {
        this.students.push(preStudents);
        let preStudents = preStudent.filter(student => student.email === this.email);
    }
}


const student1 = new Student('John', 'test@email.com', 'javascript');

console.log(student1);

const student2 = new Student('John', 'test@email.com', 'javascript');

console.log(student2);