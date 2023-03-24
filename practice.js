function findRemainder(num1, num2) {
  return num1 % num2;
}

function startGPS(currentLoc, newLoc) {
  if (currentLoc === newLoc) {
    return `You are already at the ${currentLoc}!  Would you like to go somewhere else?`
  } else {
    return `Taking you from ${currentLoc} to ${newLoc}!  Getting directions now!`
  }
}

function createUser(firstName, lastName, birthDate) {
  var user = {
    firstName,
    lastName,
    birthDate,
    onlineStatus: false
  }
  return user;
}

function makePizza(pizzaInfo, topping) {
  pizzaInfo.cooked = true;
  if (pizzaInfo.toppings.length < 5) {
    pizzaInfo.toppings.push(topping);
  } 
};

module.exports = {
  findRemainder,
  startGPS,
  createUser,
  makePizza
}