const getNumber = () =>
  new Promise((resolve, reject) => {
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
