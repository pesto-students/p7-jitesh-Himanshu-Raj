const studentObject = {
  sName: this.sName,
  age: this.age,
  result: function (city, food) {
    return `${this.sName} is ${this.age} year old. he is from ${city}, likes ${food}`;
  },
};

const student1 = {
  sName: "himanshu",
  age: 23,
};

console.log(studentObject.result.call(student1, "Gorakhpur", "Ice-cream"));
