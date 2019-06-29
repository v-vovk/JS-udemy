//Вычислить сумму чисел до данного
//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log( sumTo(3) );

// function sumTo(n) {
//     if ( n == 1) {
//         return 1;
//     }
//     return n + sumTo( n - 1 );
// }
// console.log( sumTo(3) );

function sumTo(n) {
    return n * (n + 1) / 2;
}
console.log(sumTo(3));

//Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

//Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log( fib(77) );

//Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
let firstNum = +prompt('input first number', '');
let secondNum = +prompt('input second number', '');
let sum = firstNum + secondNum;
console.log(sum);

//Сложение цен
var price1 = 0.1, price2 = 0.2;
alert( +(price1 + price2).toFixed(2) );