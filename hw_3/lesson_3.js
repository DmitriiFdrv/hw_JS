//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// тыкните в того, кто сказал, что математика в программировании не важна..//
// это с разбора дз только сделал
{
    let prime = 0;
    while (prime <= 100) {
        let f = true;
        for (let i = 2; i < prime; i++) {
            if (prime % i === 0) {
                f = false;
                break;
            }
        }
        if (f) console.log(prime);
        prime++;
    }
}

//2. С этого урока начинаем работать с функционалом интернет-магазина. 
//Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
{
    let basket = [
        {
            product: "apple",
            price: 100
        },
        {
            product: "carrot",
            price: 50
        },
        {
            product: "potato",
            price: 10
        },
        {
            product: "cat",
            price: 9999999999
        }
    ];
    let basketPrice = 0;
    for (let product of basket) {
        basketPrice += product.price;
        console.log("Товар " + product.product + " стоит: " + product.price);
    }

    console.log("Стоимость товаров: " + basketPrice + " йеннифер.");

}

//3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

{

    function countBasketPrice(basket) {
        let baskPrice = 0;
        for (let product of basket) {
            baskPrice += product.price;
        }
        return baskPrice;
    }

    console.log("Стоимость товаров: " + countBasketPrice(basket) + " йеннифер.");


}



//4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

{
    for (let i = 0; i < 10; console.log(i++)) { }
}

//5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//x
//xx
//xxx
//xxxx
//xxxxx

{
    let row = 'x';
    for (let i = 0; i < 20; i++) {
        console.log(row);
        row += 'x';
    }
}