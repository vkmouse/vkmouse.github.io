class Food {
  name = '雞排'
}

class Drink {
  name = '珍奶'
}

function eat(food, drink) { // 開動
  console.log(food.name, drink.name)
}

let food = undefined  
let drink = undefined

function wait(second, arg) {
  const ms = second * 1000
  return new Promise((resolve, reject) => setTimeout(() => resolve(arg), ms));
}

function orderFood() { // 買雞排
  return wait(2, new Food()) // 非同步等待 2 秒，並且在完成後回傳物件
}

function orderDrink() { // 買珍奶
  return wait(2, new Drink()) // 非同步等待 2 秒，並且在完成後回傳物件
}

function setFoodAndCallme(newFood) {
  food = newFood
  callme()
}

function setDrinkAndCallme(newDrink) {
  drink = newDrink
  callme()
}

function callme() {
  if (food !== undefined && drink !== undefined) {
    eat(food, drink)
  }
}

function main() {
  orderFood().then(arg => setFoodAndCallme(arg))
  orderDrink().then(arg => setDrinkAndCallme(arg))
}

main()
