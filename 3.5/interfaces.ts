//3.5 - interfaces and types
function print(coord: {x: number, y: number}) {
}

//предыдущую функцию можно переписать след образом
type Point = {
  x: number, 
  y: number
}

function print(coord: Point) {}

