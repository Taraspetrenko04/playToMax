// 'use strict'


//CELL OBJECT
function Cell(suit) {
    this.suit = suit;
    this.suitAround = 0;
    this.isDelete = false;
}

//GAME LOGIC
const game = {
    height: 7,
    width: 7,
    field: [],
    suits: ['hearts', 'spade', 'diamonds', 'crosses'],
    rndSuit: (suits) => {
        return suits[parseInt(Math.random() * suits.length)];
    },
    fillField: function () {
        this.field = [];
        for (let i = 0; i < this.height; i++) {
            let td = [];
            for (let j = 0; j < this.width; j++) {
                td.push(new Cell(this.rndSuit(this.suits)));
            }
            this.field.push(td);
        }
    },


    start: function () {
        game.fillField();
    },

}


//create table
let page = {
    init: function () {
        this.userInterface.init();
    },


    userInterface: {
        suit: null,
        table: null,
        init: function () {
            game.start();
            this.root = document.querySelector('.table');
            page.drawTable();
            this.root.addEventListener('click', function (event) {
                if (event.target.matches('td')) {
                    page.open(event);
                }
            })
        }
    },


    drawTable: function () {
        let table = document.createElement('table');
        this.table = table;
        for (let i = 0; i < game.height; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < game.width; j++) {
                let td = document.createElement('td');
                td.classList.add(game.field[i][j].suit)
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        this.userInterface.root.appendChild(table)
    },


    open: function (event) {
        let x = event.target.cellIndex;
        let y = event.target.parentNode.rowIndex;
        this.suit = game.field[y][x].suit;
        this.recurs_open(y, x);
    },


    //Если цвет совпаадает то рекурсивно проходим, если нет то идем дальше
    recurs_open: function (y, x) {
        let td = this.table.rows[y].children[x];

        
        if (game.field[y][x].isDelete) return;


        if (game.field[y][x].suit == this.suit) {
            game.field[y][x].isDelete = true;


            let yStart = y > 0 ? y - 1 : y;
            let xStart = x > 0 ? x - 1 : x;


            for (let i = yStart; i <= y + 1 && i <= game.height - 1; i++) {
                for (let j = xStart; j <= x + 1 && j <= game.width - 1; j++) {
                    this.recurs_open(i, j);
                }
            }
            td.classList.add('hide');
        }


    }

}


window.onload = () => {


    page.init()


}



