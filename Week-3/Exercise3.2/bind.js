//Example 1 : function type
function sum(a, b) {
  //here this = obj when use bind
  //   console.log(global === this);
  return this.a + this.b;
}

const result = sum.bind({ a: 1, b: 2 });
console.log(result());

// console.log(result() === sum());

console.log("=================================");

//Example 2 : object type
const studentObject = {
  sName: this.sName,
  age: this.age,
  result: function (city, food) {
    return `${this.sName} is ${this.age} year old. he is from ${city}, likes ${food}`;
  },
};

const student = {
  sName: "himanshu",
  age: 23,
  result: function () {
    return `${this.sName} is ${this.age} year old.`;
  },
};

//  console.log(student.result());
const res = studentObject.result.bind(student, "Gorakhpur", "Ice-cream");
console.log(res());
