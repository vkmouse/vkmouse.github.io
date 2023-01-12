class Food {
  name = '雞排'
}

class Drink {
  name = '珍奶'
}

function eat(food, drink) { // 開動
  console.log(food.name, drink.name)
}

function wait(second, arg) {
  const ms = second * 1000
  return new Promise((resolve, reject) => setTimeout(() => resolve(arg), ms));
}

function orderFood() { // 買雞排
  return wait(2, new Food())
}

function orderDrink() { // 買珍奶
  return wait(2, new Drink())
}

async function main() {
  const [food, drink] = await Promise.all([orderFood(), orderDrink()])
  eat(food, drink)
}

main()
