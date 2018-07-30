var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300; // интервал в мс между перемещениями звейки
var snake = []; // змейка
var direction = "x-" // змейка движется вверх
var gameIsRunnig = false; // игра не запущена
var snake_timer;
var food_timer;
var score = 0;

function init() {
    prepareGameField();
    document.querySelector('#snake-start').addEventListener('click', startGame);
    document.querySelector('#snake-renew').addEventListener('click', refreshGame);
    addEventListener('keydown', changeDirection);
}

// создание игрового поля
function prepareGameField() {
    var game_table = document.createElement('table');
    game_table.classList.add('game-table');

    // в цикле генерируем ячейки игровой таблицы
    for(var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
        row.classList.add('game-table-row');
        row.dataset.row = i;

        for(var j = 0; j < FIELD_SIZE_Y; j++) {
            var cell = document.createElement('td');
            cell.classList.add('game-table-cell');
            cell.dataset.cell = i + '-' + j;

            row.appendChild(cell);
        }
        game_table.appendChild(row);
    }
    document.querySelector('#snake-field').appendChild(game_table);
}

// запуск игры
function startGame() {
    gameIsRunnig = true;
    respawn();

    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 500);
}

// распологаем змейку на игровом поле
function respawn() {
    // змейка - это массив элементов td.game-table-cell
    // стартовая длина змейки - 2

    // начинаем из центра
    var start_coord_x = Math.floor(FIELD_SIZE_X/2);
    var start_coord_y = Math.floor(FIELD_SIZE_Y/2);

    var snake_head = document.querySelector("[data-cell='" + start_coord_x + '-' + start_coord_y + "']");
    var snake_tail = document.querySelector("[data-cell='"+ (start_coord_x - 1) + "-" + start_coord_y +"']");
    snake_head.classList.add('snake-unit');
    snake_tail.classList.add('snake-unit');

    snake.push(snake_head, snake_tail);
}

// движение змейки
function move() {
    var snake_head = snake[snake.length - 1];

    // сдвигаем голову змейки на 1 клетку
    var new_unit;
    var snake__choords = snake_head.dataset.cell.split('-');
    var choord_x = parseInt(snake__choords[0]);
    var choord_y = parseInt(snake__choords[1]);

    // определяем новую точку
    if(direction == "x-") {
        new_unit = document.querySelector("[data-cell='" + (choord_x - 1) + '-' +  choord_y + "']");
    } else if (direction == "x+") {
        new_unit = document.querySelector("[data-cell='" + (choord_x + 1) + '-' +  choord_y + "']");
    } else if (direction == "y+") {
        new_unit = document.querySelector("[data-cell='" + choord_x + '-' +  (choord_y + 1) + "']");
    } else if (direction == "y-" ) {
        new_unit = document.querySelector("[data-cell='" + choord_x + '-' +  (choord_y - 1) + "']");
    }

    // проверяем, что new_unit – это не часть змейки
    // так же проверим, что змейка не дошла до границы
    if(!isSnakeUnit(new_unit) && new_unit !== null) {
        new_unit.classList.add('snake-unit');
        snake.push(new_unit);

        // проверка на еду
        if(!haveFood(new_unit)) {
            // находим удаляемый элемент
            var removed = snake.splice(0, 1)[0];

            removed.classList.remove('snake-unit', 'food-unit');
        }
    } else {
        // если новая клетка - часть змейки или стена, то заканчиваем игру
        finishTheGame();
    }
}

// проверяем элемент на принадлежность змейке
function isSnakeUnit(unit) {
    var check = false;

    if(snake.includes(unit)) {
        check = true;
    }

    return check;
}

// проверяем встречу с едой
function haveFood(unit) {
    var check = false;
    var isSnakeEating = unit.classList.contains('food-unit');

    // змейка нашла еду
    if(isSnakeEating) {
        check = true;

        // создаем новую еду
        createFood();

        // увеличиваем счет
        score++;
    }
    return check;

}

// создаем еду
function createFood() {
    var foodCreated = false;

    while(!foodCreated) {
        // выбираем случайную клетку
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var food_cell = document.querySelector("[data-cell='" + food_x + '-' + food_y + "']");

        var isSnake = food_cell.classList.contains('snake-unit');

        // если тут нет змейки
        if(!isSnake) {
            // ставим сюда еду
            food_cell.classList.add('food-unit');
            foodCreated = true;
            console.log(foodCreated);

        }
    }

}

// меняем движение змейки
function changeDirection(e) {// event
    switch(e.keyCode) {
        case 37: // если нажата клавиша влево
            if(direction != "y+") {
                direction = "y-"
            }
            break;
        case 38: // если нажата клавиша вверх
            if(direction != "x+") {
                direction = "x-"
            }
            break;
        case 39: // если нажата клавиша вправо
            if(direction != "y-") {
                direction = "y+"
            }
            break;
        case 40: // если нажата клавиша вниз
            if(direction != "x-") {
                direction = "x+"
            }
            break;
    }

}

// дейстия для завершения игры
function finishTheGame() {
    gameIsRunnig = false;
    clearInterval(snake_timer);
    alert('Game over! Your score is ' + score);

}

// новая игра
function refreshGame() {
    location.reload();
}

window.onload = init;