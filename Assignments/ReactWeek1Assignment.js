class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
       }
    }
      
class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
}
       
registerStudent(newStudent) {
  let st_search = this.students.forEach(value => value.email === newStudent.email);
        if (!this.students.includes(newStudent)) {
            this.students.push(newStudent);
            console.log(`New student ${newStudent.name} with email: ${newStudent.email} is now registered to the bootcamp class.`)
    } else {
            console.log(`This student is already registered: ${newStudent.name}, ${newStudent.email}.`) 
    }
    return this.students;
       
    }
} 

const student1= new Student("Trudy", "ts@email.com", "Virtual");
const student2= new Student("Trudy", "ts@email.com", "Virtual");
const student3= new Student("Mike", "ms@email.com", "Virtual");
const student4= new Student("chantal", "cm@email.com", "Virtual");
const student5= new Student("nina", "nj@email.com", "Virtual");
const virtualBootcamp= new Bootcamp ("Web Dev", "Fundamentals");

virtualBootcamp.registerStudent(student1);
virtualBootcamp.registerStudent(student1);
virtualBootcamp.registerStudent(student3);
virtualBootcamp.registerStudent(student4);
virtualBootcamp.registerStudent(student5);
virtualBootcamp.registerStudent(student5);
