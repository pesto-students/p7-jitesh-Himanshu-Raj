function add(a, b = 0) {
  return a + b;
}

function memoize(fn) {
  const cache = new Map();
  return function (...param) {
    const key = param.toString();
    console.log(key);
    console.log(cache);
    if (!cache.has(key)) {
      cache.set(key, fn(...param));
    }
    return cache.get(key);
  };
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd);

function timeTaken(fun) {
  console.time();
  console.log("fn() log", fun());
  fun();
  console.timeEnd();
  console.log("---------------------------------");
}

timeTaken(() => memoizeAdd(100, 100));
timeTaken(() => memoizeAdd(100));
timeTaken(() => memoizeAdd(100, 200));
timeTaken(() => memoizeAdd(100, 100));
