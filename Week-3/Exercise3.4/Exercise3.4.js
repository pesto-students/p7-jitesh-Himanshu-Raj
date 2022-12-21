const createStack = () => {
  let items = [];
  return function () {
    return {
      push(item) {
        items.push(item);
      },
      pop(item) {
        return items.pop(item);
      },
      getItems() {
        console.log(items);
      },
    };
  };
};

const getStack = createStack();
const stack = getStack();
console.log(getStack);
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); //undefined
stack.getItems();
