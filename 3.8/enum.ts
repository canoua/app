enum Direction {
  up = 1,
  // down = 2
  down
}

enum DirectionString {
  up = 'up',
  down = 'down',
  right = 'right',
  left = 'left'
}

enum Decision {
  yes = 1,
  no = calcEnum()
}

// может возвращать только число
function calcEnum() {
  return 2;
}

enum Test {
  A
}

let testVar = Test.A;
let nameA = Test[testVar];

// выведет 0
console.log(testVar);

// выведет А // получили строковое представление
console.log(nameA);


const enum ConstEnum {
  A,
  B
}

let D = ConstEnum.A; // d=0

