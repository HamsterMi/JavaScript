// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

// простоe число - делится только на еденицу и на само себя
//поэтому начинаем проверку c двоек
var i = 2;
isPrimeNumber:
    while (i < 100) {
        var j = 2;
        //смотрим, больше ли делимое делителя
        while (i > j) {
            //делится ли число на любой другое больше двух без остатка
            //если делится - увеличивем i и снова заходим в внешний цикл while
            if (i % j == 0) {
                i++;
                continue isPrimeNumber;
            }
            //не делится -увеличивем делитель
            else j++;
        }
        console.log(i)
        i++;
    }




//2.Товары в корзине хранятся в массиве. Задачи:
//  a.Организовать такой массив для хранения товаров в корзине;
//  b.Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var product1 = {
    price: 50
};

var product2 = {
    price: 60
};

var product3 = {
    price: 70
};

var basket = [product1, product2, product3];
var summ = 0;

function countBasketPrice(basket) {
    for (var i = 0; i < basket.length; i++) {
        summ += basket[i].price
    }
    return summ
}

console.log(countBasketPrice(basket));

// 3.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:for(…){// здесь пусто}

for (var i = 0; i < 11; console.log(i++)) {}

// 4.Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

var starElemet = "x";
var starArray = [];
for (var i = 0; i < 20; i++) {
    starArray.push(starElemet);
    console.log(starArray.join(" "));
}