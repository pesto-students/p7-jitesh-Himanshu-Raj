//Example 1 : function type
function sum(a, b) {
  //here this = obj when use bind
  //   console.log(global === this);
  return this.a + this.b;
}

var result = sum.bind({ a: 1, b: 2 });
console.log(result());

// console.log(result() === sum());

console.log("=================================");

//Example 2 : object type
var student = {
  sName: "himanshu",
  age: 23,
  result: function () {
    return `${this.sName} is ${this.age} year old.`;
  },
};

// console.log(student.result());
var res = student.result.bind(student);
console.log(res());
