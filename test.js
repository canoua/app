"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import '3.7/';
const literal_1 = require("./3.7/literal");
let a = 4;
let b = 'string';
let d = ['a', 'b', 'c'];
let e = 3;
e = 'string e';
// фунцкия test принимает значение в виде строки и возвращает строку
function test(a) {
    return '';
}
// для разных возвращаемых значений
function test2(a) {
    return '';
}
// если функция ничего не возвращает
const test3 = (a) => {
    return;
};
// пример с массивом
d = d.map((x) => x.toUpperCase());
console.log(d);
// long?:number замена записи long: number | undefined
function countCoord(coord) {
}
// проверка типов
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
// проверка на массив
function getSum(a) {
    // проверяем, что a - массив
    if (Array.isArray(a)) {
    }
}
const x = undefined;
const z = null;
//3.5 - interfaces and types
function print(coord) {
}
(0, literal_1.literal)();
