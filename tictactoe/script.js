// кто ходит
// 0 - ноль
// 1 - крестик

var phase = 1;

// храним результаты в массиве
var result = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

function generateField() {
    var fieldDiv = document.querySelector('.tictactoe');
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            var cell = document.createElement('div');
            cell.classList.add('tictactoe__item');
            cell.dataset.row = i;
            cell.dataset.cell = j;

            cell.addEventListener('click', gameClickLisner);
            fieldDiv.appendChild(cell);
        }
    }
}

function gameClickLisner(event) {
    // console.log('click');
    var cell = event.target;
    var rowIndex = cell.dataset.row;
    var cellIndex = cell.dataset.cell;

    // проверка значения ячейки
    if(result[rowIndex][cellIndex] == -1) {
        // обновляем значение
        result[rowIndex][cellIndex] = phase;

        var cellContent, nextPhase;
        if(phase == 1) {
            cellContent = 'X';
            nextPhase = 'O';
            phase = 0;
        } else {
            cellContent = 'O';
            nextPhase = 'X';
            phase = 1;
        }
        // помещаем символ
        cell.innerText = cellContent;

        // меняем текущего игрока
        var tictactoePhase = document.querySelector('.phase-name');
        tictactoePhase.innerText = nextPhase;
    } else {
        // если в ячейке уже есть значение от игрока
        alert('Выберите другую ячейку!');
    }
    var winCondition = checkWinCondition();
    switch(winCondition) {
        case -1:
            // игра продолжается
            break;
        case 0:
            alert('победили нолики!');
            location.reload;
            break;
        case 1:
            alert('победили крестики!');
            location.reload;
            break;
    }
}

function checkWinCondition() {
    // в ряду, в стобце или по диагонали будут одинкавые числа
    // -1 – игра продолжается
    // 1 - побеждают крестики
    // 0 - побеждают нолики
    var win;

    for(var i = 0; i < 2; i++) {
        if(
            // по горизонтали
            (result[0][0] == i && result[1][0] == i && result[2][0] == i) ||
            (result[0][1] == i && result[1][1] == i && result[2][1] == i) ||
            (result[0][2] == i && result[1][2] == i && result[2][2] == i) ||
            // по вертикали
            (result[0][0] == i && result[0][1] == i && result[0][2] == i) ||
            (result[1][0] == i && result[1][1] == i && result[1][2] == i) ||
            (result[2][0] == i && result[2][1] == i && result[2][2] == i) ||
            // по диагонали
            (result[0][0] == i && result[1][1] == i && result[2][2] == i) ||
            (result[2][0] == i && result[1][1] == i && result[0][2] == i)
        ) {
            win = i;
        }
    }
    if(win === undefined) {
        win = -1;
    }
    return win;
    
}


window.onload = generateField;