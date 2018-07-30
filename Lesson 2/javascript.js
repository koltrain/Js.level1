//1 
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 префиксное увеличение на 1
d = b++; alert(d); // 1 постфиксное увеличение на 1
c = (2+ ++a); alert(c); // 5 далее т.к, наше значение a стало равно 2,следующее префиксное значение будет 3, а 2 + 3 = 5
d = (2+ b++); alert(d); // 4 здесь то же самое только с постфиксом,
alert(a); // 3 итог a
alert(b); // 3 итог b 
 // мы 2 раза увеличили занчение a и b на 1, только разными путями, с a - префикс, с b - постфикс
//2
var a = 2;
var x = 1 + (a *= 2);
 //ответ: 5, a в степени 2?
//3
var a = 2;
var b = 5;
if (a > 0 && b> 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log (a * b);
}
else if (a > 0 && b < 0) {
    console.log (a + b);
}
//4
var number = 0;
switch(number) {
    case  0:
    alert (0)
    case  1:
    alert (1)
    case  2:
    alert (2)
    case  3:
    alert (3)
    case  4:
    alert (4)
    case  5:
    alert (5)
    case  6:
    alert (6);
    case  7:
    alert (7);
    case  8:
    alert (8);
    case  9:
    alert (9);
    case  10:
    alert (10);
    case  11:
    alert (11);
    case  12:
    alert (12);
    case  13:
    alert (13);
    case  14:
    alert (14);
    case  15:
    alert (15);
    break;
}                   // не знаю, верно ли понял задачу? при изменении a программа,начинает отсчет с этого значения до 15,надеюсь правильно.
//5
function sum(a,b) {
    var total = a + b;
    return total;
}
console.log (sum(4,8));             // сложение

function difference(a,b) {
    var dif = a - b;
    return dif;
}
console.log (difference(4,8));     //вычетание

function multy(a,b) {
    var gener = a * b;
    return gener;
}
console.log (multy(4,8));          //умножение

function degree(a,b) {
    var segment = a / b;
    return segment;
}
console.log (degree(4,8));          // деление

function mathOperation(arg1, arg2, operation) {
    switch (operation){
        case '-':
        case 'minus':
        case 'вычетание':
        case 'минус':
        console.log (arg1 - arg2);
     break;
        case '+':
        case 'plus':
        case 'сложение':
        case 'плюс':
        console.log (arg1 + arg2);
     break;
        case '/':
        case 'деление':
        case 'delenie':
        console.log (arg1 / arg2); 
     break;
        case '*':
        case 'multiply':
        case 'умножение':
        console.log (arg1 * arg2);
     break;
    }
    return operation;
 }
console.log (mathOperation(4, 6, 'minus'));
