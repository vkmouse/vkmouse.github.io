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

function wait(second, callback, arg) {
  const ms = second * 1000
  setTimeout(callback, ms, arg)
}

function orderFood(callback) { // 買雞排
  wait(2, callback, new Food()) // 非同步等待 2 秒，並呼叫後續函式
}

function orderDrink(callback) { // 買珍奶
  wait(2, callback, new Drink()) // 非同步等待 2 秒，並呼叫後續函式
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
  orderFood(setFoodAndCallme)
  orderDrink(setDrinkAndCallme)
}

main()
