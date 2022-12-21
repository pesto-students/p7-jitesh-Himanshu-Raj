let isShopOpen = true;

const makeOrder = () => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(console.log("Make your order"));
      }, 3000);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

const makingFood = () => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(console.log("Your food is being make"));
      }, 3000);
    } else {
      reject(console.log("Your order not made successfully"));
    }
  });
};

const takeYourFood = () => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(console.log("Please take away your food"));
      }, 3000);
    } else {
      reject(console.log("Food is still in progress"));
    }
  });
};

const kitchen1 = async () => {
  // Using async/await
  try {
    await makeOrder();
    await makingFood();
    await takeYourFood();

    console.log("Thank you, Come again!");
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed");
  }
};

async function* kitchen2() {
  //Using generator
  yield await makeOrder();
  yield await makingFood();
  yield await takeYourFood();
  console.log("Thank you, Come again!");
}

const it = kitchen2();
it.next();
it.next();
it.next();
it.next().finally(() => {
  console.log("Day ended, shop closed");
});

console.log("Using async/await");
kitchen1();

console.log("Using generator");
kitchen2();
