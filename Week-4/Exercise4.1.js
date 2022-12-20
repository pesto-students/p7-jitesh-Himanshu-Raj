const State = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

function CustomPromise(executor) {
  let state = State.PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  const resolve = (result) => {
    if (state !== State.PENDING) return;
    state = State.FULFILLED;
    value = result;
    handlers.forEach((h) => h(value));
  };

  const reject = (error) => {
    if (state !== State.PENDING) return;
    state = State.REJECTED;
    value = error;
    catchers.forEach((c) => c(value));
  };

  this.then = (successCallback) => {
    if (state === State.FULFILLED) {
      successCallback(value);
    } else {
      handlers.push(successCallback);
    }
    return this;
  };

  this.catch = (failureCallback) => {
    if (state === State.REJECTED) {
      failureCallback(value);
    } else {
      catchers.push(value);
    }
  };

  executor(resolve, reject);
}

const getNumber = () =>
  new CustomPromise((resolve, reject) => {
    const random = parseInt(Math.random() * 100, 10);
    console.log(random);
    if (random % 5 === 0) {
      reject(`Promis rejected num ${random}`);
    }
    resolve(`Promis resolved num ${random}`);
  });

getNumber()
  .then((val) => console.log(val))
  .catch((val) => console.log(val));
