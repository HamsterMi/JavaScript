//1. Почему код дает именно такие результаты?
var a = 1,b = 1,c, d;

c = ++a; alert(c); // 2, сначала применен префиксный инкремент к а(a=2), потом результат передан в с 
d = b++; alert(d); // 1, сначала возвращается результат равный b в переменную d, потом постфиксный инкремент увеличивает b(b=2)
c = (2 + ++a); alert(c); // 5, сначала применен преф. инкремент к а (а=3), затем выполнено сложение (2+a => 2+3) и результат передан в с
d = (2 + b++); alert(d); // 4, сначала - сложение (2+b => 2+2), затем этот результат передается в d, после постфиксный инкремент увеличивает b (b=3)
alert(a); // 3, т.к. переменная хранит перезаписанное в результате математических операций значений
alert(b); // 3, аналогично,  т.к. переменная хранит перезаписанное в результате математических операций значений


//2. Чему будет равен x?
var a = 2; // в переменную а передаем значение 2
var x = 1 + (a *= 2); // сначала выподняется действие в скобках (a*=2 => a=a*2 => a=4)
                     //затем выполняется сложение (1+4),  итоговое значение записывается в x => x=5
console.log(x);                   



/*  3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:  
    o если a и b положительные, вывести их разность;
    o если а и b отрицательные, вывести их произведение;
    o если а и b разных знаков, вывести их сумму;
    Ноль можно считать положительным числом. */
var a = 5;
var b = 8;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else console.log(a + b);

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a = 7;
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
}

//5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function quotient(a, b) {
    return b == 0 ? "на ноль делить нельзя" : a / b;
}

console.log(sum(3, 5));
console.log(difference(2, 4));
console.log(product(3, 1));
console.log(quotient(2, 4));

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

/* Я так понимаю, что нужно показать суть понимания переиспользования функций. 
Поэтому прошу считать функции sum, difference уже определенными выше.  */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
            break;
        case difference:
            return difference(arg1, arg2);
            break;
        case product:
            return product(arg1, arg2);
            break;
        case quotient:
            return quotient(arg1, arg2);
            break;
    }
}

console.log(mathOperation(2, 1, sum));
console.log(mathOperation(-5, 3, difference));
console.log(mathOperation(-2, 2, product));
console.log(mathOperation(4, 0, quotient));

// 7.Сравнить null и 0. Объяснить результат.
null == 0;  // false, 
null !=0;   //true
null === 0; // false,
null < 0;   // false,
null > 0;   // false,
null >= 0;  // true,
null <= 0;  // true,

/* Проверка на нестрогое и строгое равенство (неравенство): null равен только undefined.
Проверка на <,>,<=,>= происходит с приведением типов. Null преобразовывется в 0.
*/

/* 8. С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень. */
function power(val, pow) {
    if (pow > 1) {
      return val * power(val, pow - 1);
    } else {
      return val;
    }
  }
  
console.log(power(2, 4));


