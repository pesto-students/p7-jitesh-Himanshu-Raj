let num = [1, 2, 3, 4];

console.log(Math.max.apply(null, num));

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

console.log(studentObject.result.apply(student1, ["Gorakhpur", "Ice-cream"]));
