//1
function numObj(){
var num = prompt ('Введите число от 0 до 999')
var array = num.split('');
var objNum = {};
objNum['сотни'] = +array[0];
objNum['десятки'] = +array[1];
objNum['единицы'] = +array[2];

        if (array.length == 3){
            return objNum;
        }else if (array.length > 3) {
            delete hundred;
            delete decade;
            delete units;
            console.log ('Ошибка!Вы ввели недопустимое количество символов');
            return objNum;
        }else(array.length < 3) 
               array.unshift(0);
            return objNum;
           
console.log(objNum);
}
numObj();