//1 Написать функцию, преобразующую число в объект.
//Передавая на вход число от 0 до 999, надо получить на выходе объект, 
//в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
//Например, для числа 245 надо получить следующий объект: 
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, 
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var numbers;
let test = { единицы: 0, десятки: 1, сотни: 2 };
numbers = prompt("введите число от 0 до 999");
if (numbers > 999) {
    test = {};
    console.log("число больше 999", test)
}
else if (numbers >= 0 && numbers.length > 0);
switch (numbers.length) {
    case 3:
        test.сотни = parseInt(numbers[numbers.length - 3]);
    case 2:
        test.десятки = parseInt(numbers[numbers.length - 2]);
    case 1:
        test.единицы = parseInt(numbers[numbers.length - 1]);
        break

    default:
        test.сотни = parseInt(numbers[2]);
        test.десятки = parseInt(numbers[1]);
        test.единицы = parseInt(numbers[0]);
}
console.log("Объект", test);

//2 Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// функцию с this?
//Реализуйте такие объекты.
function wares(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
}

let basket = []

basket.push(
    new wares("apple", 100, 12)
);
basket.push(
    new wares("carrot", 50, 11)
);
basket.push(
    new wares("potato", 10, 45)
);
basket.push(
    new wares("cat", 9999999, 1)
);

console.log(basket)

//Перенести функционал подсчета корзины на объектно-ориентированную базу. 
//не уверен, но может так\\


function finalprice(basket) {
    return basket.reduce(function (acc, basket) {
        return acc + (basket.price * basket.quantity)
    }, 0)
};
console.log(('Конечная стоимость заказа: ' + finalprice(basket)));


//3* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, 
//но и для каталога. Стремиться нужно к тому, 
//чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
//но в разных местах давал возможность вызывать разные методы.
