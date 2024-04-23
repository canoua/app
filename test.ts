let a: number = 4;
let b: string = 'string';

let d: string[] =  ['a', 'b', 'c'];

let e: any = 3;
e = 'string e';

// фунцкия test принимает значение в виде строки и возвращает строку
function test(a: string): string {
  return '';
}

// для разных возвращаемых значений
function test2(a: string): number | string {
  return '';
}

// если функция ничего не возвращает
const test3 = (a: number): void => {
  return ;
}

// пример с массивом
d = d.map((x: string) => x.toUpperCase());
console.log(d);

// long?:number замена записи long: number | undefined
function countCoord(coord: {lat: number, long?: number}) {

}

// проверка типов
function printIt(id: number | string ) {
  if(typeof id === 'number') {
    console.log(id.toString());
  } else if(typeof id === 'string') {
    console.log(id.toUpperCase());
  }
}

// проверка на массив
function getSum(a: number | number[]) {
  // проверяем, что a - массив
  if(Array.isArray(a)) {
  }
}

const x: undefined = undefined;
const z: null = null;

//3.5 - interfaces and types
function print(coord: {x: number, y: number}) {
}

//предыдущую функцию можно переписать след образом
type Point = {
  x: number, 
  y: number
}

function print(coord: Point) {}

// 3.6 Представьте, что с какого-то api, с которым вы интегрируетесь, на ваш бэкенд приходит data.json
// Наша задача описать его так, чтобы мы после этого могли типизировано оперировать с данными, которые пришли из json
// То есть нам надо описать один или несколько интерфейсов, которые описывают эти данные

interface Data {
  userId: number,
  id: number,
  title: string,
  info: Info,
  tags: Tags[]
}

interface Info {
  desc: string,
  isActive: boolean
}

interface Tags {
  name: string,
  value: number
}