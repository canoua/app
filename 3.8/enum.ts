enum Direction {
  up = 1,
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

// пример
enum Dice {
  One = 1,
  Two, 
  Tree
}

function ruDice(dice: Dice) {
  switch(dice) {
    case Dice.One:
      return 'один'
    case Dice.Two:
      return 'два'
    case Dice.Tree:
      return 'три'
    default:
      const a: never = dice;
  }
}

console.log(ruDice(Dice.One));
