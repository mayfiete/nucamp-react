/* 
The Student class should include:
a constructor;
the constructor parameters: "name", "email", and "community";
the constructor should assign the parameters' values to class properties of the same name using the this keyword.
*/

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
};

/* 
The Bootcamp class should include:
a constructor;
the constructor parameters: "name", "level", and a third parameter "students" which is an array initialized 
as empty (using default function parameters syntax);
the constructor should assign the parameters values to class properties of the same name using the this keyword.
*/

/* 
Write the code for the Bootcamp class so that if it the "students" parameter is not passed in, 
it is by default initialized to be an empty array from within the constructor parameter list itself.
*/

/* 
Should have a single parameter, which takes an object created from the Student class as its argument
(so a name like student or studentToRegister would be a sensible name to use as the parameter)
Checks if any student with the same email address already exists in the Bootcamp's students array. 
Use an Array method to verify if the student's email address is already registered. There are multiple ways 
to make this verification, including a method you have learned this week. Research and find one way. 
*/

/* 
Adds the passed-in students object to the end of the Bootcamp's students array only if not already registered. There should be no 
duplicate emails in the students array.
Using console.log, writes the outcome of the registration (e.g. "Registering neo@matrix.com to the bootcamp Web Dev Fundamentals.")
At the end of the method, returns the current Bootcamp students array. 
*/

class Bootcamp {
    constructor(name, level, students = []) { //constructor
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        //if (this.students.includes(student.email)) {
        if (this.students.filter(enrolledStudent => student.email === enrolledStudent.email).length > 0) {
            console.log(`${student.name} is already registered`);
        } else {
            this.students.push(student);
            console.log(`${student.name} was registered for ${this.name} bootcamp`);
        }
        return this.students; //returns the current Bootcamp students array
    }
}

/*
webDev = new Bootcamp("Web Development", "Intermediate");

console.log(webDev);

student1 = new Student("John", "john@test.com", "Web Development");
student2 = new Student("Jane", "jane@test.com", "Web Development");
student3 = new Student("Joe", "john@test.com", "Web Development");
student4 = new Student("Mike", "Mike@test4.com", "Web Development");

webDev.registerStudent(student1);
webDev.registerStudent(student2);
webDev.registerStudent(student3);
webDev.registerStudent(student4);

console.log(webDev);
*/









