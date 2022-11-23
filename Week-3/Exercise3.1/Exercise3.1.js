function add(a, b) {
  if (a || b) {
    return a || b;
  }
  return a + b;
}

function memoize(fn) {
  const cache = new Map();
  return function (...param) {
    const key = param.toString();
    console.log(key);
    console.log(cache);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...param));
    return cache.get(key);
  };
}

const memoizeAdd = memoize(add);

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
