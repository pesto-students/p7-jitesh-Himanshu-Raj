const fib = (n) => ({
  [Symbol.iterator]: () => {
    let i = 0;
    let oldValue = 0;
    let newValue = 0;
    return {
      next: () => {
        if (i++ <= n) {
          [oldValue, newValue] = [newValue, oldValue + newValue || 1];
          //   console.log(([old, new1] = [new1, old + new1 || 1]));
          //   console.log("old:", old);
          //   console.log("new1:", new1);
          return {
            value: oldValue,
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
});

for (let num of fib(6)) {
  console.log(num);
}
