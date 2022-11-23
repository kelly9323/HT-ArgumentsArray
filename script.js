//1) Знайти середнє арифметичне значення усіх переданих аргументів,
//якщо аргументів не має - повертати null

function findAverage() {
  let average;
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    average = sum / arguments.length;
  }
  return average;
}
console.log(findAverage(2, 6, 6, 2));

//2) Замінити усі максимальні значення в масиві на значення 0

let array = [3, 3, 34, 34, 5, 3];
function getMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
function changeMinElem(array, value) {
  let max = getMax(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) {
      array[i] = value;
    }
  }
}

changeMinElem(array, 0);
