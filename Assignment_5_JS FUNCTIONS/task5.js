
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Student constructor
function Student(name, branch) {
    Person.call(this, name);

    this.branch = branch;
}

// Inheritance
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

// Student prototype method
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Creating object
const student1 = new Student("Yuvraj", "CSE");

student1.showName();
student1.showBranch();
