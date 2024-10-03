// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function user (object){
    for (const user of users) {
        console.log(user)
    }
}
user(users);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function text (text){
    return text
}
document.write(text(`<p>Lorem</p>`));
document.write(text(`<h1>Title</h1>`))

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list (text){
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list('This is list')


// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function list1 (text, number){
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list1('This is list', 10)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function usersArray(arrayItems){
    document.write(`<ul>`)
    for (const arrayItem of arrayItems) {
        document.write(`<li>${arrayItem}</li>`)
    }document.write(`</ul>`)

}
usersArray([1, 34, true, 'Anna'])

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function foobar (users){
    for (const user of users) {
        document.write(`<div> id: ${user.id}, name: ${user.name}, age: ${user.age}</div>`)
    }return user
}
foobar( [{id:1, name:'Anna', age: 23}])
foobar( [{id:2, name:'Oleg', age: 26}])
foobar( [{id:3, name:'Olga', age: 45}])
foobar( [{id:4, name:'Ivan', age: 56}])


//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrNumber = [12, 5, 23, 12, 1]
function minNumber(){
    let min = arrNumber[0]
    for (const item of arrNumber) {
        if(min > item){
            min = item
        }

    }return min
}
console.log(minNumber());

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum (arr){
    let result = 0
    for (const item of arr) {
        result = result + item

        }return result
}
console.log(sum([11, 30, 22]));


// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

function swap (arr, index1, index2){
let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp;
return arr
    }

console.log((swap([11, 22, 33, 44], 0, 3)));

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency){
            chosenCurrency = item;
        }
    }
    let result = sumUAH / chosenCurrency.value
    return result
}

console.log(exchange(41000, [{currency: 'USD', value: 41}, {currency: 'EUR', value: 42}], 'USD'));