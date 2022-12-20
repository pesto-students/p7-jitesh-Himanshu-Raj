var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

var Teacher = function (name, age) {
  Person.call(this, name, age); //work as super()
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype); // work as extends inheritance

Teacher.prototype.teach = function (subject) {
  this.subject = subject;
};

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("inheritance");

console.log(`${him.name} is now teaching ${him.subject}`);
