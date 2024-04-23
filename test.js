"use strict";
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
function print(coord) { }
// 3.6 Представьте, что с какого-то api, с которым вы интегрируетесь, на ваш бэкенд приходит data.json
// Наша задача описать его так, чтобы мы после этого могли типизировано оперировать с данными, которые пришли из json
// То есть нам надо описать один или несколько интерфейсов, которые описывают эти данные
let requestURL = "https://my-json-server.typicode.com/canoua/data-json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
    let superHeroes = request.response;
    // populateHeader(superHeroes);
    // showHeroes(superHeroes);
    console.log(superHeroes);
};
