// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//

let user = [12, true, -23, 'Olga', 23, 345, 456, 'Oleg', 23, 123]
console.log(user)


// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let descriptionBook = {
    title: 'Book',
    pageCount: 123,
    genre: 'Comedy'
}
console.log(descriptionBook)
//
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book ={
    title: 'Come',
    pageCount: 12,
    genre : 'Comedy',
    authors:[
        {name: 'Bob',
        age: 23
        },
        {
            name:'Max',
            age: 34
        }

    ]
}
console.log(book)

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = [
    {
        name:'Sony',
        username:'sony',
        password: 23333
    }, {
        name:'Cristi',
        username:'cristi',
        password: 233111
    }, {
        name:'Mila',
        username:'milf',
        password: 455533
    }, {
        name:'Mile',
        username:'mile',
        password: 111111
    }, {
        name:'Sony',
        username:'sony',
        password: 2222222
    }, {
        name:'Sony',
        username:'sony',
        password: 33333333
    }, {
        name:'Sony',
        username:'sony',
        password: 4443333
    }, {
        name:'Sony',
        username:'sony',
        password: 555523333
    }, {
        name:'Sony',
        username:'sony',
        password: 666623333
    }, {
        name:'Sony',
        username:'sony',
        password: 777723333
    }, {
        name:'Sony',
        username:'sony',
        password: 888823333
    },
]
let data = arr.length;
console.log(data)
console.log(data.password)

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
let weatherData = [

        {day1:{
            morning:11,
             afternoon:23,
             evening: 15
            }}
    ,
    {day2:{
            morning:11,
            afternoon:23,
            evening: 15
        }},
    {day3:{
            morning:11,
            afternoon:23,
            evening: 15
        }},
    {day4:{
            morning:11,
            afternoon:23,
            evening: 15
        }},
    {day5:{
            morning:11,
            afternoon:23,
            evening: 15
        }},
    {day6:{
            morning:11,
            afternoon:23,
            evening: 15
        }}, {day7:{
            morning:11,
            afternoon:23,
            evening: 15
        }}

]
console.log(weatherData[0].day1.afternoon)



// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

let x = 45
if(x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}


// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 48;
if (time >= 0 && time <=15){
    console.log('1 чверть');
} else if (time >=16 && time <=30){
    console.log('2 чверть')
} else if(time >=31 && time <= 45){
    console.log('3 чверть')
}else if(time >=46 && time < 60){
    console.log('4 чверть')
}


// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 31
if (day >= 1 && day <= 10){
    console.log('1 декада')
}else if (day >= 11 && day <= 20){
    console.log('2 декада')
}else if (day >=21 && day <=31){
    console.log('3 декада')
}else{
    console.log('none')
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let dayWeek = +prompt('enter day of week')
// switch (dayWeek){
//     case (1):
//         console.log('Sunday')
//         break
//     case (2):
//         document.write('Monday')
//         break
//     case (3):
//         document.write('Tuesday')
//         break
//     case (4):
//         document.write('Wednesday')
//         break
//     case (5):
//         document.write('Thursday')
//         break
//     case (6):
//         document.write('Friday')
//         break
//     case (7):
//         document.write('Saturday')
//         break
//     default:
//         console.log('Not found')
//
// }


//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let y = 34
let a = 25
if (y > a){
    console.log(y)
} else if (y < a){
    console.log(a)
}else if (y === a){
    console.log(a, y)
} else {
    console.log('undefined')
}


//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//






//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Super')
}