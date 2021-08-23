//1.
{
    var a = 1, b = 1, c, d;
    c = ++a; alert(c);            // 2 \    ++a означает что мы к переменной а прибавляем единицу
    d = b++; alert(d);            // 1 \    ++ после переменной означает, что мы прибавляем единицу, но выводим предыдущее значение переменной
    c = (2 + ++a); alert(c);      // 5 \    в первом примере мы прибавили единицу в переменную "а" ее значение стало = 2. 
    //   \    к "а" прибавляем еще единицу и "а" = 3, 2 + 3 = 5.
    d = (2 + b++); alert(d);      // 4 \    во втором примере мы прибавили единицу в переменную "b" ее значение стало = 2. 
    //   \    к "b" прибавляем 1, но выводим предыдущее значение т.е. 2. 2 + 2 = 4.
    alert(a);                     // 3 \    в третьем примере "а" стало 3, выводим 3.
    alert(b);                     // 3 \    в четвертом примере "b" стало 3, выводим 3.
}

//2.
{
    var a = 2;
    var x = 1 + (a *= 2); // *= это сокращение a = a * 2. в итоге х = 5.
    alert(x);
}
//3.
// если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 

{
    var a = -1;
    var b = 3;
    if (a > 0 && b > 0) {
        x = a - b;
        alert(x);
    }
    else if (a < 0 && b < 0) {
        x = a * b;
        alert(x);
    }
    else if (a > 0 && b < 0 || a < 0 && b > 0) {
        x = a + b;
        alert(x);
    }
}



//### 4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от a до 15. 

{
    a = +prompt('Введите число от 1 до 15');

    switch (a) {
        case 1:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 2:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 3:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 4:
            alert('Ваше число 4');
            break;
        case 5:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 6:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 7:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 8:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 9:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 10:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 11:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 12:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 13:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 14:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
        case 15:
            for (let i = a; i <= 15; i++) {
                alert('Ваше число: ' + i);
            }
            break;
    }
}

//### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.

{
    var a = 2;
    var b = 3;

    function addition(a, b) {
        return a + b;
    }

    function deduction(a, b) {
        return a - b;
    }

    function division(a, b) {
        return a / b;
    }

    function multiplication(a, b) {
        return a * b;
    }
}
//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3)
//и вернуть полученное значение(использовать switch).

--

    //### 7. * Сравнить null и 0. Попробуйте объяснить результат.

    null > 0; // false
null == 0; // false
null >= 0; // true
// как говорит хабр: Если null < 0 принимает значение false, то null >= 0 принимает значение true
//                   В результате мы и получаем: null >= 0; // true
//                   И, на самом деле, в этом есть смысл. С точки зрения математики, если у нас есть два числа, x и y,
//                   и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему.


//### 8. * С помощью рекурсии организовать функцию возведения числа в степень.
//Формат: function power(val, pow), где val – заданное число, pow – степень.
{
    function power(val, pow) {
        if (pow != 1) {
            return val * power(val, pow - 1);
        } else {
            return val;
        }
    }

    alert(power(5, 6));
}