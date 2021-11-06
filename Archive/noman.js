class Student{
    constructor(name,email,community){
        this.name = name;
        this.email = email;
        this.commmunity = community;
    }
}
class Bootcamp{
    constructor(name,level,students=[]){
        this.name = name;
        this.level = level;
        this.students= students;
    }
    studentRegister(student){
        if(this.students.filter(students => student.email === students.email).length >0){
            console.log(`${student.name} is already registered`);
        }else{
            this.students.push(student);
            console.log(`${student.name} was registered for ${this.name} bootcamp`);
        }
        return this.students;
    }
}

webDev =  new Bootcamp('Backend','intermidiate');
console.log(webDev);
student1 =  new Student("jame","123@gmail.com","Backend");
student2 =  new Student("kayle","123@gmail.com","Backend");
student3 =  new Student("ana","789@gmail.com","Backend");
webDev.studentRegister(student1);
webDev.studentRegister(student2);
webDev.studentRegister(student3);

console.log(webDev);
