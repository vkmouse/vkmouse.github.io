class Food {
  name = '雞排'
}

class Drink {
  name = '珍奶'
}

function eat(food, drink) { // 開動
  console.log(food.name, drink.name)
}

function wait(second) {
  const ms = second * 1000
  const start = new Date()
  while (true) {
    if (new Date() - start > ms) {
      break
    }
  }
}

function orderFood() { // 買雞排
  wait(2) // 同步等待 2 秒
  return new Food()
}

function orderDrink() { // 買珍奶
  wait(2) // 同步等待 2 秒
  return new Drink()
}

function main() {
  const food = orderFood()
  const drink = orderDrink()
  eat(food, drink) 
}

main()